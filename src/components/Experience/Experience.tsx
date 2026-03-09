import {
  IconArrowNarrowDownDashed,
  IconArrowNarrowUpDashed,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import experienceData from '../../data/experience_data.js';
import DesktopView from '../../lib/DesktopView';
import { PopButton } from '../pop-button';
import ExperienceBox from './ExperienceBox';
import Line from './Line';
import LineShort from './LineShort';

const Experience = () => {
  const desktopView = DesktopView();
  const [showAll, setShowAll] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const displayedExperiences = showAll
    ? experienceData
    : experienceData.slice(0, 3);

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
      className='relative flex w-[90vw] flex-col xl:w-272'
      id='experiencesec'
    >
      <div id='experience' className='absolute -top-36' />
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
            margin: desktopView
              ? '-100px 0px -100px 0px'
              : '-14px 0px -14px 0px',
            once: true,
          }}
        >
          The road so far
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
              margin: desktopView
                ? '-100px 0px -100px 0px'
                : '-14px 0px -14px 0px',
              once: true,
            }}
          />
        </div>
      </div>

      <div className='z-50 mt-24 flex flex-col items-center space-y-4 md:px-6'>
        {displayedExperiences.map((experience, index) => (
          <React.Fragment
            key={`${experience.title}-${experience.org}-${experience.date}`}
          >
            {index === 0 ? (
              <div className='h-0 md:h-8' />
            ) : (
              <div className='h-6 md:h-10' />
            )}
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
          </>
        )}
      </div>
    </section>
  );
};

export default Experience;
