import Line from './Line';
import ExperienceBox from './ExperienceBox';
import DesktopView from '../../lib/DesktopView';
import { motion } from 'framer-motion';
import React, { useState, useRef } from 'react';
import experienceData from '../../data/experience_data.js';
import LineShort from './LineShort';
import { IconArrowNarrowDownDashed, IconArrowNarrowUpDashed } from '@tabler/icons-react';

const Experience = () => {
  const desktopView = DesktopView();
  const [showAll, setShowAll] = useState(false);
  const buttonRef = useRef(null);

  const displayedExperiences = showAll ? experienceData : experienceData.slice(0, 3);

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

      <div className='z-50 mt-[6rem] flex flex-col items-center space-y-4 md:px-6'>
        {displayedExperiences.map((experience, index) => (
          <React.Fragment key={index}>
            {index === 0 ? <div className='h-0 md:h-8' /> : <div className='h-6 md:h-10' />}
            <ExperienceBox
              title={experience.title}
              org={experience.org}
              orgShort={experience.orgShort}
              url={experience.url}
              logo={experience.logo}
              date={experience.date}
              desc={experience.desc}
              previousTitles={experience.previousTitles}
              previousDates={experience.previousDates}
              // alignCenter={experience.alignCenter}
            />
            {index < displayedExperiences.length - 1 && <Line />}
          </React.Fragment>
        ))}

        {experienceData.length > 3 && (
          <>
            {!showAll && <Line />}
            {showAll && <LineShort />}
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
                <IconArrowNarrowUpDashed
                  size={20}
                  stroke={2}
                />
              ) : (
                <IconArrowNarrowDownDashed
                  size={20}
                  stroke={2}
                />
              )}
            </motion.button>
          </>
        )}
      </div>
    </section>
  );
};

export default Experience;
