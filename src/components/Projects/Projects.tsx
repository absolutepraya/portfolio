/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <X> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <X> */

import {
  IconArrowNarrowDownDashed,
  IconArrowNarrowUpDashed,
  IconTool,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import projectsData from '../../data/projects_data';
import DesktopView from '../../lib/DesktopView';
import { Badge } from '../badge';
import { PopButton } from '../pop-button';
import ProjectBox from './ProjectBox';
import SepBorder from './SepBorder';

const Projects = () => {
  const desktopView = DesktopView();
  const [showAll, setShowAll] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const buttonRef = useRef<HTMLButtonElement>(null);

  const filterOptions = [
    { label: 'All', icon: null },
    { label: 'Fullstack', icon: null },
    { label: 'Frontend', icon: null },
    { label: 'Backend', icon: null },
    { label: 'Mobile', icon: null },
    { label: 'CLI App', icon: null },
    { label: 'Video Game', icon: null },
    { label: 'Open Source', icon: null },
    { label: 'Under Dev', icon: IconTool },
  ];

  // Filter projects by type
  const getFilteredProjects = (type: string) => {
    if (type === 'All') {
      // Exclude projects still under development from the default category.
      return projectsData.filter((project) => {
        if (Array.isArray(project.type)) {
          return !project.type.includes('Under Dev');
        }
        return project.type !== 'Under Dev';
      });
    }

    return projectsData.filter((project) => {
      if (Array.isArray(project.type)) {
        return project.type.includes(type);
      }
      return project.type === type;
    });
  };

  const allProjects = getFilteredProjects('All');
  const displayedAllProjects = showAll
    ? allProjects
    : allProjects.slice(0, desktopView ? 6 : 5);

  const handleToggle = () => {
    if (showAll) {
      setShowAll(false);
      setTimeout(() => {
        if (buttonRef.current) {
          buttonRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      }, 100);
    } else {
      setShowAll(true);
    }
  };

  return (
    <section
      className='relative z-10! w-[90vw] flex-col space-y-12 xl:w-272'
      id='projectssec'
    >
      <div id='projects' className='absolute -top-36' />
      <div className='flex flex-col items-center lg:flex-row lg:space-x-8'>
        <motion.h2
          className='bg-linear-to-br from-customwhite to-text-secondary bg-clip-text font-instrument text-6xl text-transparent md:text-7xl'
          initial={{ opacity: 0, y: '40px' }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'circOut' },
          }}
          viewport={{
            margin: desktopView ? '-100px' : '-14px',
            once: true,
          }}
        >
          Stuff I&apos;ve built
        </motion.h2>
        <div
          className={`relative mt-1 w-full max-w-140 rounded-full md:mt-8 lg:mt-3 lg:w-auto lg:max-w-4000 lg:grow ${desktopView ? 'h-0.5 bg-customwhite opacity-20' : 'h-0.5 bg-linear-to-r from-customwhite to-text-secondary opacity-60'}`}
        >
          <motion.div
            className='absolute h-1 w-full bg-page-bg shadow-glowcustomblacksmall lg:-top-2 lg:h-4 lg:shadow-glowcustomblack'
            whileInView={{
              x: '1000px',
              transition: { duration: 1.2, ease: 'circInOut', delay: 0.3 },
            }}
            viewport={{
              margin: desktopView ? '-100px' : '-14px',
              once: true,
            }}
          />
        </div>
      </div>

      <div className='relative flex w-full flex-col items-center py-6'>
        <div className='absolute -top-5 right-1/2 flex translate-x-1/2 flex-row items-center justify-center space-x-2 bg-page-bg px-4 text-foreground/40'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='lucide lucide-list-filter-icon lucide-list-filter'
          >
            <path d='M3 6h18' />
            <path d='M7 12h10' />
            <path d='M10 18h4' />
          </svg>
          <p className='font-semibold text-customlightgray'>Filter by type:</p>
        </div>

        <div className='flex w-full flex-wrap justify-center gap-2 lg:px-24'>
          {filterOptions.map((option) => {
            const IconComp = option.icon;
            return (
              <button
                key={option.label}
                type='button'
                className='cursor-pointer transition-transform duration-75 hover:scale-105 active:scale-95'
                onClick={() => {
                  setSelectedFilter(option.label);
                  setShowAll(false);
                }}
              >
                <Badge
                  size='lg'
                  className={
                    selectedFilter === option.label
                      ? 'bg-customwhite text-customblack'
                      : 'border border-customgray bg-customblack text-customwhite opacity-80'
                  }
                >
                  {IconComp && <IconComp size={14} className='mr-1.5' />}
                  {option.label}
                </Badge>
              </button>
            );
          })}
        </div>

        <SepBorder />

        <div
          key={selectedFilter}
          className='mt-2 grid w-full grid-cols-1 items-stretch gap-8 text-customwhite lg:grid-cols-2'
        >
          {(selectedFilter === 'All'
            ? displayedAllProjects
            : getFilteredProjects(selectedFilter)
          ).map((project, index) => {
            const shouldMask =
              selectedFilter === 'All' &&
              !showAll &&
              ((desktopView && (index === 4 || index === 5)) ||
                (!desktopView && index === 4));
            const maskStyle = shouldMask
              ? {
                  WebkitMaskImage:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 80%)',
                  maskImage:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 80%)',
                }
              : undefined;
            return (
              <div key={index} style={maskStyle} className='h-full'>
                <ProjectBox
                  preview={project.preview}
                  isVideo={project.isVideo}
                  title={project.title}
                  type={project.type}
                  date={project.date}
                  subtitle={project.subtitle}
                  stacks={project.stacks}
                  url={project.url}
                  github={project.github}
                  homepage={project.homepage}
                  favicon={project.favicon}
                  disableHover={shouldMask}
                />
              </div>
            );
          })}
        </div>
        {selectedFilter === 'All' && allProjects.length > 4 && (
          <div
            className={`${showAll ? 'mt-20' : '-mt-16'} relative z-10 flex w-full justify-center`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'circOut' }}
            >
              <PopButton
                ref={buttonRef}
                onClick={handleToggle}
                className='gap-2 pr-3 font-jetbrainsmono'
              >
                <span>{showAll ? 'Show Less' : 'Show More'}</span>
                {showAll ? (
                  <IconArrowNarrowUpDashed size={20} stroke={2} />
                ) : (
                  <IconArrowNarrowDownDashed size={20} stroke={2} />
                )}
              </PopButton>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
