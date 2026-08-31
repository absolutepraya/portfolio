/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <X> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <X> */

import {
  IconArrowNarrowDownDashed,
  IconArrowNarrowUpDashed,
} from '@tabler/icons-react';
import { m } from 'framer-motion';
import { useRef, useState } from 'react';
import projectsData, {
  type ProjectKind,
  projectKindLabels,
} from '../../data/projects_data';
import DesktopView from '../../lib/DesktopView';
import { PopButton } from '../pop-button';
import ProjectBox from './ProjectBox';
import SepBorder from './SepBorder';

const filterOptions: Array<ProjectKind | 'all'> = [
  'all',
  ...(Object.keys(projectKindLabels) as ProjectKind[]).filter((kind) =>
    projectsData.some((project) => project.kind === kind),
  ),
];

const Projects = () => {
  const desktopView = DesktopView();
  const [showAll, setShowAll] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<ProjectKind | 'all'>(
    'all',
  );
  const buttonRef = useRef<HTMLButtonElement>(null);

  const visibleProjects =
    selectedFilter === 'all'
      ? showAll
        ? projectsData
        : projectsData.slice(0, desktopView ? 6 : 5)
      : projectsData.filter((project) => project.kind === selectedFilter);

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
        <m.h2
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
          Selected works
        </m.h2>
        <div
          className={`relative mt-1 w-full max-w-none rounded-full md:mt-2 lg:mt-3 lg:w-auto lg:max-w-4000 lg:grow ${desktopView ? 'h-0.5 bg-customwhite opacity-20' : 'h-0.5 bg-linear-to-r from-customwhite to-text-secondary opacity-60'}`}
        >
          <m.div
            className='absolute h-1 w-full bg-page-bg shadow-glowcustomblacksmall lg:-top-2 lg:h-4 lg:shadow-glowcustomblack'
            whileInView={{
              x: '1000px',
              transition: { duration: 0.9, ease: 'circInOut', delay: 0.3 },
            }}
            viewport={{
              margin: desktopView ? '-100px' : '-14px',
              once: true,
            }}
          />
        </div>
      </div>

      <div className='relative flex w-full flex-col items-center py-6'>
        <div className='absolute -top-6 right-1/2 flex translate-x-1/2 flex-row items-center justify-center space-x-1.5 whitespace-nowrap bg-page-bg px-5 text-foreground/40 text-sm md:text-base'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='lucide lucide-list-filter-icon lucide-list-filter h-[1em] w-[1em] shrink-0'
          >
            <path d='M3 6h18' />
            <path d='M7 12h10' />
            <path d='M10 18h4' />
          </svg>
          <p className='text-nowrap font-semibold'>Filter by type:</p>
        </div>

        <div className='flex w-full flex-wrap justify-center gap-2 lg:px-24'>
          {filterOptions.map((option) => {
            return (
              <PopButton
                key={option}
                type='button'
                size='sm'
                color='default'
                aria-pressed={selectedFilter === option}
                className={`font-jetbrainsmono md:h-9 md:px-3 md:text-sm ${selectedFilter === option ? 'border-neutral-700 bg-customblack text-customwhite hover:bg-customblack dark:border-neutral-700 dark:bg-customblack dark:text-customwhite dark:hover:bg-customblack' : ''}`}
                onClick={() => {
                  setSelectedFilter(option);
                  setShowAll(false);
                }}
              >
                {option === 'all' ? 'All' : projectKindLabels[option]}
              </PopButton>
            );
          })}
        </div>

        <SepBorder />

        <div
          key={`${selectedFilter}-${showAll}`}
          className='mt-2 grid w-full grid-cols-1 items-stretch gap-8 text-customwhite lg:grid-cols-2'
        >
          {visibleProjects.map((project, index) => {
            const shouldMask =
              selectedFilter === 'all' &&
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
              <div key={project.title} style={maskStyle} className='h-full'>
                <ProjectBox
                  preview={project.preview}
                  isVideo={project.isVideo}
                  videoPlaybackRate={project.videoPlaybackRate}
                  title={project.title}
                  kind={project.kind}
                  tags={project.tags}
                  date={project.date}
                  subtitle={project.subtitle}
                  stacks={project.stacks}
                  url={project.url}
                  github={project.github}
                  favicon={project.favicon}
                  disableHover={shouldMask}
                />
              </div>
            );
          })}
        </div>
        {selectedFilter === 'all' && projectsData.length > 4 && (
          <div
            className={`${showAll ? 'mt-20' : '-mt-16'} relative z-10 flex w-full justify-center`}
          >
            <m.div
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
            </m.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
