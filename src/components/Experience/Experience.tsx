import { m } from 'framer-motion';
import React, { useState } from 'react';
import experienceData from '../../data/experience_data.js';
import DesktopView from '../../lib/DesktopView';
import ExperienceBox from './ExperienceBox';
import Line from './Line';

const getExperienceKey = (title: string, org: string, date: string) =>
  `${title}-${org}-${date}`;

const Experience = () => {
  const desktopView = DesktopView();
  const [openExperienceKey, setOpenExperienceKey] = useState(() => {
    const firstExperience = experienceData[0];
    return firstExperience
      ? getExperienceKey(
          firstExperience.title,
          firstExperience.org,
          firstExperience.date,
        )
      : null;
  });
  const [expandedDescriptionKey, setExpandedDescriptionKey] = useState<
    string | null
  >(null);

  const handleExperienceToggle = (experienceKey: string) => {
    setOpenExperienceKey((currentKey) =>
      currentKey === experienceKey ? null : experienceKey,
    );
    setExpandedDescriptionKey(null);
  };

  return (
    <section
      className='relative flex w-[90vw] flex-col xl:w-272'
      id='experiencesec'
    >
      <div id='experience' className='absolute -top-36' />
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
            margin: desktopView
              ? '-100px 0px -100px 0px'
              : '-14px 0px -14px 0px',
            once: true,
          }}
        >
          The road so far
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
              margin: desktopView
                ? '-100px 0px -100px 0px'
                : '-14px 0px -14px 0px',
              once: true,
            }}
          />
        </div>
      </div>

      <div className='z-50 mt-16 flex flex-col items-center space-y-2 md:mt-20 md:px-6'>
        {experienceData.map((experience, index) => {
          const experienceKey = getExperienceKey(
            experience.title,
            experience.org,
            experience.date,
          );

          return (
            <React.Fragment key={experienceKey}>
              {index === 0 ? (
                <div className='h-0 md:h-8' />
              ) : (
                <div className='h-2 md:h-3' />
              )}
              <ExperienceBox
                title={experience.title}
                org={experience.org}
                orgShort={experience.orgShort}
                url={experience.url}
                logo={experience.logo}
                logoRounded={experience.logoRounded}
                date={experience.date}
                desc={experience.desc}
                previousTitles={experience.previousTitles}
                previousDates={experience.previousDates}
                isOpen={openExperienceKey === experienceKey}
                onToggle={() => handleExperienceToggle(experienceKey)}
                isDescriptionExpanded={expandedDescriptionKey === experienceKey}
                onDescriptionToggle={() =>
                  setExpandedDescriptionKey((currentKey) =>
                    currentKey === experienceKey ? null : experienceKey,
                  )
                }
                // alignCenter={experience.alignCenter}
              />
              {index < experienceData.length - 1 && <Line compact />}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
