import ProjectBox from './ProjectBox';
import DesktopView from '../../lib/DesktopView';
import TabletView from '../../lib/TabletView';
import GrabAuto from '../../assets/projects/grabauto.webp';
import MIPAOpenHouse from '../../assets/projects/mipaopenhouse.webp';
import DM2Calc from '../../assets/projects/dm2calc.webp';
import ValentineLetter from '../../assets/projects/valentineletter.webp';
import GusDur from '../../assets/projects/gusdur.webp';
import Portfolio from '../../assets/projects/portfolio.webp';
import DesaKedisan from '../../assets/projects/desakedisan.webp';
import NuSantap from '../../assets/projects/nusantap.webp';
import Ngandung from '../../assets/projects/ngandung.webp';
import { motion } from 'framer-motion';
import { Tab, Tabs, TabList, tabClasses, TabPanel, tabPanelClasses } from '@mui/joy';
import SepBorder from './SepBorder';
import { IconBox } from '@tabler/icons-react';
import projectsData from '../../data/projects_data.json';

// Map image paths to imported images
const imageMap = {
  'grabauto.webp': GrabAuto,
  'mipaopenhouse.webp': MIPAOpenHouse,
  'dm2calc.webp': DM2Calc,
  'valentineletter.webp': ValentineLetter,
  'gusdur.webp': GusDur,
  'portfolio.webp': Portfolio,
  'desakedisan.webp': DesaKedisan,
  'nusantap.webp': NuSantap,
  'ngandung.webp': Ngandung,
};

const Projects = () => {
  const desktopView = DesktopView();
  const tabletView = TabletView();

  // Map the image paths to actual imported images
  const projectsWithImages = projectsData.map((project) => ({
    ...project,
    image: project.imagePath ? imageMap[project.imagePath] : undefined,
  }));

  return (
    <section
      className='relative w-[90vw] flex-col space-y-12 xl:w-[68rem]'
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
            className='absolute h-1 w-full bg-customblack shadow-glowcustomblacksmall lg:-top-2 lg:h-4 lg:shadow-glowcustomblack'
            whileInView={{ x: '1000px', transition: { duration: 2, ease: 'circInOut', delay: 0.3 } }}
            viewport={{ marginTop: desktopView ? '-100px' : '-14px', marginBottom: desktopView ? '-100px' : '-14px', once: true }}
          />
        </div>
      </div>

      <div className='relative flex w-full flex-col items-center py-6'>
        <div className='absolute -top-5 right-1/2 flex translate-x-1/2 flex-row items-center justify-center space-x-2 bg-customblack px-4 text-customlightgray'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            class='lucide lucide-list-filter-icon lucide-list-filter'
          >
            <path d='M3 6h18' />
            <path d='M7 12h10' />
            <path d='M10 18h4' />
          </svg>
          <p className='font-semibold'>Filter by type:</p>
        </div>

        <Tabs
          defaultValue={0}
          sx={{
            bgcolor: '#0d0d0d',
            display: 'flex',
          }}
        >
          <TabList
            disableUnderline
            sx={{
              p: 0.5,
              gap: 1.5,
              borderRadius: 'full',
              bgcolor: 'transparent',
              width: 'fit-content',
              border: '2px solid transparent',
              [`& .${tabClasses.root}[aria-selected="true"]`]: {
                color: '#3643FC',
                border: '1px solid #3643FC',
                borderRadius: 'full',
                bgcolor: 'rgba(54, 67, 252, 0.1)',
              },
              [`& .${tabClasses.root}[aria-selected="false"]`]: {
                color: '#cccccc',
                border: '1px solid transparent',
                borderRadius: 'full',
                fontFamily: 'Maple Mono',
                '&:hover': {
                  bgcolor: 'rgba(62, 62, 62, 0.2)',
                  color: '#cccccc',
                },
              },
              '& .MuiTab-root': {
                fontFamily: 'JetBrains Mono',
                borderRadius: 'md',
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
          </TabList>
        </Tabs>

        <SepBorder bot={true} />
      </div>

      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
        {projectsWithImages.map((project, index) => (
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
    </section>
  );
};

export default Projects;
