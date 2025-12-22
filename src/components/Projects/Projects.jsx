/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <X> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <X> */

import { Tab, TabList, TabPanel, Tabs, tabClasses } from '@mui/joy';
import {
  IconArrowNarrowDownDashed,
  IconArrowNarrowUpDashed,
  IconServer,
  IconTool,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import projectsData from '../../data/projects_data.js';
import DesktopView from '../../lib/DesktopView';
import TabletView from '../../lib/TabletView';
import ProjectBox from './ProjectBox';
import SepBorder from './SepBorder';

const Projects = () => {
  const desktopView = DesktopView();
  const tabletView = TabletView();
  const [showAll, setShowAll] = useState(false);
  const buttonRef = useRef(null);

  // Filter projects by type
  const getFilteredProjects = (type) => {
    if (type === 'All') {
      // Exclude Under Dev and Self-Hosted projects from All category
      return projectsData.filter((project) => {
        if (Array.isArray(project.type)) {
          return (
            !project.type.includes('Under Dev') &&
            !project.type.includes('Self-Hosted')
          );
        }
        return project.type !== 'Under Dev' && project.type !== 'Self-Hosted';
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
  const displayedAllProjects = showAll ? allProjects : allProjects.slice(0, 6);

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

  const fullstackProjects = getFilteredProjects('Fullstack');
  const frontendProjects = getFilteredProjects('Frontend');
  const backendProjects = getFilteredProjects('Backend');
  const mobileProjects = getFilteredProjects('Mobile');
  const cliProjects = getFilteredProjects('CLI App');
  const gameProjects = getFilteredProjects('Video Game');
  const selfHostedProjects = getFilteredProjects('Self-Hosted');
  const ongoingProjects = getFilteredProjects('Under Dev');

  return (
    <section
      className='relative !z-10 w-[90vw] flex-col space-y-12 xl:w-[68rem]'
      id='projectssec'
    >
      <div id='projects' className='absolute -top-24' />
      <div className='flex flex-col items-center lg:flex-row lg:space-x-8'>
        <motion.p
          className='bg-gradient-to-br from-customwhite to-[#5c5c5a] bg-clip-text font-instrument text-6xl text-transparent md:text-7xl'
          initial={{ opacity: 0, y: '40px' }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'circOut' },
          }}
          viewport={{
            marginTop: desktopView ? '-100px' : '-14px',
            marginBottom: desktopView ? '-100px' : '-14px',
            once: true,
          }}
        >
          Stuff I&apos;ve built
        </motion.p>
        <div
          className={`relative mt-1 w-full max-w-[35rem] rounded-full md:mt-8 lg:mt-3 lg:w-auto lg:max-w-[1000rem] lg:flex-grow ${desktopView ? 'h-0.5 bg-white opacity-20' : 'h-0.5 bg-gradient-to-r from-customwhite to-[#5c5c5a] opacity-60'}`}
        >
          <motion.div
            className='absolute h-1 w-full bg-[#03020F] shadow-glowcustomblacksmall lg:-top-2 lg:h-4 lg:shadow-glowcustomblack'
            whileInView={{
              x: '1000px',
              transition: { duration: 2, ease: 'circInOut', delay: 0.3 },
            }}
            viewport={{
              marginTop: desktopView ? '-100px' : '-14px',
              marginBottom: desktopView ? '-100px' : '-14px',
              once: true,
            }}
          />
        </div>
      </div>

      <div className='relative flex w-full flex-col items-center py-6'>
        <div className='absolute -top-5 right-1/2 flex translate-x-1/2 flex-row items-center justify-center space-x-2 bg-[#03020F] px-4 text-customlightgray'>
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
          <p className='font-semibold text-gray-300'>Filter by type:</p>
        </div>

        <Tabs
          defaultValue={0}
          sx={{
            bgcolor: '#03020F',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <div className='w-full pb-2 lg:px-24 lg:pb-0'>
            <TabList
              disableUnderline
              sx={{
                p: 0.5,
                pb: 0,
                mb: 0,
                gap: 1.5,
                borderRadius: 'full',
                bgcolor: 'transparent',
                width: '100%',
                minWidth: 'fit-content',
                border: '2px solid transparent',
                mx: 'auto',
                flexWrap: 'wrap',
                justifyContent: 'center',
                [`& .${tabClasses.root}[aria-selected="true"]`]: {
                  color: '#5566FF',
                  border: '1px solid #5566FF',
                  borderRadius: 'full',
                  bgcolor: 'rgba(85, 102, 255, 0.15)',
                  transform: 'scale(1)',
                  transition:
                    'transform 0.075s ease, color 0.075s ease, background-color 0.075s ease, border 0.075s ease',
                },
                [`& .${tabClasses.root}[aria-selected="false"]`]: {
                  color: '#ffffff',
                  bgcolor: 'rgba(209, 213, 219, 0.03)',
                  border: '1px solid #3e3e3e',
                  borderRadius: 'full',
                  fontFamily: 'Maple Mono',
                  opacity: 0.8,
                  transition:
                    'transform 0.075s ease, color 0.075s ease, background-color 0.075s ease',
                  '&:hover': {
                    bgcolor: 'rgba(62, 62, 62, 0.2)',
                    color: '#ffffff',
                    transform: 'scale(1.05)',
                  },
                  '&:active': {
                    transform: 'scale(0.95)',
                  },
                },
                '& .MuiTab-root': {
                  fontFamily: 'JetBrains Mono',
                  borderRadius: 'md',
                  whiteSpace: 'nowrap',
                },
              }}
            >
              <Tab disableIndicator>All</Tab>
              <Tab disableIndicator>Fullstack</Tab>
              <Tab disableIndicator>Frontend</Tab>
              <Tab disableIndicator>Backend</Tab>
              <Tab disableIndicator>Mobile</Tab>
              <Tab disableIndicator>CLI App</Tab>
              <Tab disableIndicator>Video Game</Tab>
              <Tab disableIndicator>
                <div className='flex items-center space-x-2.5'>
                  <IconServer size={16} />
                  <span>Self-Hosted</span>
                </div>
              </Tab>
              <Tab disableIndicator>
                <div className='flex items-center space-x-2.5'>
                  <IconTool size={16} />
                  <span>Under Dev</span>
                </div>
              </Tab>
            </TabList>
          </div>

          <SepBorder />

          <TabPanel value={0} sx={{ p: 0, mt: 2 }}>
            <div className='grid grid-cols-1 items-stretch gap-8 text-customwhite lg:grid-cols-2'>
              {displayedAllProjects.map((project, index) => {
                const shouldMask =
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
            {allProjects.length > 4 && (
              <div
                className={`${showAll ? 'mt-20' : '-mt-16'} flex w-full justify-center`}
              >
                <motion.button
                  ref={buttonRef}
                  onClick={handleToggle}
                  className={`relative ${showAll ? '' : ''} flex items-center space-x-2 rounded-full border-2 border-customgray bg-[#0f0f0f] py-3 pl-6 pr-4 font-jetbrainsmono font-semibold text-customwhite transition-all duration-300 hover:border-blurple hover:bg-gradient-to-br hover:from-[#1f1f1f] hover:to-[#0e0e0e] hover:shadow-glowblurplesmall`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: 'circOut' }}
                >
                  <span>{showAll ? 'Show Less' : 'Show More'}</span>
                  {showAll ? (
                    <IconArrowNarrowUpDashed size={20} stroke={2} />
                  ) : (
                    <IconArrowNarrowDownDashed size={20} stroke={2} />
                  )}
                </motion.button>
              </div>
            )}
          </TabPanel>

          <TabPanel value={1} sx={{ p: 0, mt: 2 }}>
            <div className='grid grid-cols-1 gap-8 text-customwhite lg:grid-cols-2'>
              {fullstackProjects.map((project, index) => (
                <ProjectBox
                  key={index}
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
                />
              ))}
            </div>
          </TabPanel>

          <TabPanel value={2} sx={{ p: 0, mt: 2 }}>
            <div className='grid grid-cols-1 gap-8 text-customwhite lg:grid-cols-2'>
              {frontendProjects.map((project, index) => (
                <ProjectBox
                  key={index}
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
                />
              ))}
            </div>
          </TabPanel>

          <TabPanel value={3} sx={{ p: 0, mt: 2 }}>
            <div className='grid grid-cols-1 gap-8 text-customwhite lg:grid-cols-2'>
              {backendProjects.map((project, index) => (
                <ProjectBox
                  key={index}
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
                />
              ))}
            </div>
          </TabPanel>

          <TabPanel value={4} sx={{ p: 0, mt: 2 }}>
            <div className='grid grid-cols-1 gap-8 text-customwhite lg:grid-cols-2'>
              {mobileProjects.map((project, index) => (
                <ProjectBox
                  key={index}
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
                />
              ))}
            </div>
          </TabPanel>

          <TabPanel value={5} sx={{ p: 0, mt: 2 }}>
            <div className='grid grid-cols-1 gap-8 text-customwhite lg:grid-cols-2'>
              {cliProjects.map((project, index) => (
                <ProjectBox
                  key={index}
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
                />
              ))}
            </div>
          </TabPanel>

          <TabPanel value={6} sx={{ p: 0, mt: 2 }}>
            <div className='grid grid-cols-1 gap-8 text-customwhite lg:grid-cols-2'>
              {gameProjects.map((project, index) => (
                <ProjectBox
                  key={index}
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
                />
              ))}
            </div>
          </TabPanel>

          <TabPanel value={7} sx={{ p: 0, mt: 2 }}>
            <div className='grid grid-cols-1 gap-8 text-customwhite lg:grid-cols-2'>
              {selfHostedProjects.map((project, index) => (
                <ProjectBox
                  key={index}
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
                />
              ))}
            </div>
          </TabPanel>

          <TabPanel value={8} sx={{ p: 0, mt: 2 }}>
            <div className='grid grid-cols-1 gap-8 text-customwhite lg:grid-cols-2'>
              {ongoingProjects.map((project, index) => (
                <ProjectBox
                  key={index}
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
                />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
