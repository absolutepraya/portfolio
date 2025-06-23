import ProjectBox from './ProjectBox';
import DesktopView from '../../lib/DesktopView';
import TabletView from '../../lib/TabletView';
import { motion } from 'framer-motion';
import { Tab, Tabs, TabList, tabClasses, TabPanel } from '@mui/joy';
import SepBorder from './SepBorder';
import projectsData from '../../data/projects_data.js';

const Projects = () => {
  const desktopView = DesktopView();
  const tabletView = TabletView();

  // Filter projects by type
  const getFilteredProjects = (type) => {
    if (type === 'All') {
      // Exclude Under Dev projects from All category
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

  const fullstackProjects = getFilteredProjects('Fullstack');
  const frontendProjects = getFilteredProjects('Frontend');
  const backendProjects = getFilteredProjects('Backend');
  const mobileProjects = getFilteredProjects('Mobile');
  const cliProjects = getFilteredProjects('CLI App');
  const gameProjects = getFilteredProjects('Video Game');
  const ongoingProjects = getFilteredProjects('Under Dev');

  return (
    <section
      className='relative !z-10 w-[90vw] flex-col space-y-12 xl:w-[68rem]'
      id='projectssec'
    >
      <div
        id='projects'
        className='absolute -top-24'
      />
      <div className='flex flex-col items-center lg:flex-row lg:space-x-8'>
        <motion.p
          className='bg-gradient-to-br from-customwhite to-[#5c5c5a] bg-clip-text font-instrument text-6xl text-transparent md:text-7xl'
          initial={{ opacity: 0, y: '40px' }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'circOut' } }}
          viewport={{ marginTop: desktopView ? '-100px' : '-14px', marginBottom: desktopView ? '-100px' : '-14px', once: true }}
        >
          Stuff I&apos;ve done
        </motion.p>
        <div className={`relative mt-1 w-full max-w-[35rem] rounded-full md:mt-8 lg:mt-3 lg:w-auto lg:max-w-[1000rem] lg:flex-grow ${desktopView ? 'h-0.5 bg-white opacity-20' : 'h-0.5 bg-gradient-to-r from-customwhite to-[#5c5c5a] opacity-60'}`}>
          <motion.div
            className='absolute h-1 w-full bg-[#05040E] shadow-glowcustomblacksmall lg:-top-2 lg:h-4 lg:shadow-glowcustomblack'
            whileInView={{ x: '1000px', transition: { duration: 2, ease: 'circInOut', delay: 0.3 } }}
            viewport={{ marginTop: desktopView ? '-100px' : '-14px', marginBottom: desktopView ? '-100px' : '-14px', once: true }}
          />
        </div>
      </div>

      <div className='relative flex w-full flex-col items-center py-6'>
        <div className='absolute -top-5 right-1/2 flex translate-x-1/2 flex-row items-center justify-center space-x-2 bg-[#05040E] px-4 text-customlightgray'>
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
            bgcolor: '#05040E',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <div className='w-full pb-2 lg:pb-0'>
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
                  transition: 'transform 0.075s ease, color 0.075s ease, background-color 0.075s ease, border 0.075s ease',
                },
                [`& .${tabClasses.root}[aria-selected="false"]`]: {
                  color: '#ffffff',
                  border: '1px solid transparent',
                  borderRadius: 'full',
                  fontFamily: 'Maple Mono',
                  transition: 'transform 0.075s ease, color 0.075s ease, background-color 0.075s ease',
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
                '& .MuiTab-root:last-child[aria-selected="false"]': {
                  bgcolor: 'rgba(209, 213, 219, 0.03)',
                  color: '#ffffff',
                  opacity: 0.8,
                  border: '1px solid #3e3e3e',
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
              <Tab disableIndicator>Under Dev</Tab>
            </TabList>
          </div>

          <SepBorder />

          <TabPanel
            value={0}
            sx={{ p: 0, mt: 2 }}
          >
            <div className='grid grid-cols-1 gap-8 text-customwhite lg:grid-cols-2'>
              {getFilteredProjects('All').map((project, index) => (
                <ProjectBox
                  key={index}
                  image={project.image}
                  title={project.title}
                  type={project.type}
                  date={project.date}
                  subtitle={project.subtitle}
                  stacks={project.stacks}
                  url={project.url}
                  github={project.github}
                />
              ))}
            </div>
          </TabPanel>

          <TabPanel
            value={1}
            sx={{ p: 0, mt: 2 }}
          >
            <div className='grid grid-cols-1 gap-8 text-customwhite lg:grid-cols-2'>
              {fullstackProjects.map((project, index) => (
                <ProjectBox
                  key={index}
                  image={project.image}
                  title={project.title}
                  type={project.type}
                  date={project.date}
                  subtitle={project.subtitle}
                  stacks={project.stacks}
                  url={project.url}
                  github={project.github}
                />
              ))}
            </div>
          </TabPanel>

          <TabPanel
            value={2}
            sx={{ p: 0, mt: 2 }}
          >
            <div className='grid grid-cols-1 gap-8 text-customwhite lg:grid-cols-2'>
              {frontendProjects.map((project, index) => (
                <ProjectBox
                  key={index}
                  image={project.image}
                  title={project.title}
                  type={project.type}
                  date={project.date}
                  subtitle={project.subtitle}
                  stacks={project.stacks}
                  url={project.url}
                  github={project.github}
                />
              ))}
            </div>
          </TabPanel>

          <TabPanel
            value={3}
            sx={{ p: 0, mt: 2 }}
          >
            <div className='grid grid-cols-1 gap-8 text-customwhite lg:grid-cols-2'>
              {backendProjects.map((project, index) => (
                <ProjectBox
                  key={index}
                  image={project.image}
                  title={project.title}
                  type={project.type}
                  date={project.date}
                  subtitle={project.subtitle}
                  stacks={project.stacks}
                  url={project.url}
                  github={project.github}
                />
              ))}
            </div>
          </TabPanel>

          <TabPanel
            value={4}
            sx={{ p: 0, mt: 2 }}
          >
            <div className='grid grid-cols-1 gap-8 text-customwhite lg:grid-cols-2'>
              {mobileProjects.map((project, index) => (
                <ProjectBox
                  key={index}
                  image={project.image}
                  title={project.title}
                  type={project.type}
                  date={project.date}
                  subtitle={project.subtitle}
                  stacks={project.stacks}
                  url={project.url}
                  github={project.github}
                />
              ))}
            </div>
          </TabPanel>

          <TabPanel
            value={5}
            sx={{ p: 0, mt: 2 }}
          >
            <div className='grid grid-cols-1 gap-8 text-customwhite lg:grid-cols-2'>
              {cliProjects.map((project, index) => (
                <ProjectBox
                  key={index}
                  image={project.image}
                  title={project.title}
                  type={project.type}
                  date={project.date}
                  subtitle={project.subtitle}
                  stacks={project.stacks}
                  url={project.url}
                  github={project.github}
                />
              ))}
            </div>
          </TabPanel>

          <TabPanel
            value={6}
            sx={{ p: 0, mt: 2 }}
          >
            <div className='grid grid-cols-1 gap-8 text-customwhite lg:grid-cols-2'>
              {gameProjects.map((project, index) => (
                <ProjectBox
                  key={index}
                  image={project.image}
                  title={project.title}
                  type={project.type}
                  date={project.date}
                  subtitle={project.subtitle}
                  stacks={project.stacks}
                  url={project.url}
                  github={project.github}
                />
              ))}
            </div>
          </TabPanel>

          <TabPanel
            value={7}
            sx={{ p: 0, mt: 2 }}
          >
            <div className='grid grid-cols-1 gap-8 text-customwhite lg:grid-cols-2'>
              {ongoingProjects.map((project, index) => (
                <ProjectBox
                  key={index}
                  image={project.image}
                  title={project.title}
                  type={project.type}
                  date={project.date}
                  subtitle={project.subtitle}
                  stacks={project.stacks}
                  url={project.url}
                  github={project.github}
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
