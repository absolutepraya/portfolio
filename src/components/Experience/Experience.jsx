import Line from './Line';
import ExperienceBox from './ExperienceBox';
import DesktopView from '../../lib/DesktopView';
import COMPFEST from '../../assets/orgs/compfest.webp';
import RISTEK from '../../assets/orgs/ristek.svg';
import Fasilkom from '../../assets/orgs/fasilkom.svg';
import DDP0 from '../../assets/orgs/ddp0.svg';
import BETIS from '../../assets/orgs/betis.svg';
import GDG from '../../assets/orgs/gdg.svg';
import CO80 from '../../assets/orgs/80co.webp';
import { motion } from 'framer-motion';
import React from 'react';
import experienceData from '../../data/experience_data.json';
// import { GlobeDemo } from '../AceternityUI/GlobeSection';

// Map logo paths to imported images
const logoMap = {
  'compfest.webp': COMPFEST,
  'ristek.svg': RISTEK,
  'fasilkom.svg': Fasilkom,
  'ddp0.svg': DDP0,
  'betis.svg': BETIS,
  'gdg.svg': GDG,
  '80co.webp': CO80,
};

const Experience = () => {
  const desktopView = DesktopView();

  // Map the logo paths to actual imported images
  const experienceWithLogos = experienceData.map((experience) => ({
    ...experience,
    logo: experience.logoPath ? logoMap[experience.logoPath] : undefined,
  }));

  return (
    <section
      className='relative flex w-[90vw] flex-col xl:w-[68rem]'
      id='experiencesec'
    >
      <div
        id='experience'
        className='absolute -top-36'
      />
      <div className='flex flex-col items-center lg:flex-row lg:space-x-8'>
        <motion.p
          className='bg-gradient-to-br from-customwhite to-[#5c5c5a] bg-clip-text font-instrument text-6xl text-transparent md:text-7xl'
          initial={{ opacity: 0, y: '40px' }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'circOut' } }}
          viewport={{ marginTop: desktopView ? '-100px' : '-14px', marginBottom: desktopView ? '-100px' : '-14px', once: true }}
        >
          The road so far
        </motion.p>
        <div className={`relative mt-1 w-full max-w-[35rem] rounded-full md:mt-8 lg:mt-3 lg:w-auto lg:max-w-[1000rem] lg:flex-grow ${desktopView ? 'h-0.5 bg-white opacity-20' : 'h-0.5 bg-gradient-to-r from-customwhite to-[#5c5c5a] opacity-60'}`}>
          <motion.div
            className='absolute h-1 w-full bg-customblack shadow-glowcustomblacksmall lg:-top-2 lg:h-4 lg:shadow-glowcustomblack'
            whileInView={{ x: '1000px', transition: { duration: 2, ease: 'circInOut', delay: 0.3 } }}
            viewport={{ marginTop: desktopView ? '-100px' : '-14px', marginBottom: desktopView ? '-100px' : '-14px', once: true }}
          />
        </div>
      </div>

      {/* Solve performance issue for now, only show the globe on mobile */}
      {/* {!desktopView && <GlobeDemo />} */}

      <div className='z-50 mt-[6rem] flex flex-col items-center space-y-4 md:px-6'>
        {/* TODO: Load only top 4 */}
        {experienceWithLogos.map((experience, index) => (
          <React.Fragment key={index}>
            <ExperienceBox
              title={experience.title}
              org={experience.org}
              url={experience.url}
              logo={experience.logo}
              date={experience.date}
              desc={experience.desc}
              previousTitles={experience.previousTitles}
              previousDates={experience.previousDates}
            />
            {index < experienceWithLogos.length - 1 && <Line />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Experience;
