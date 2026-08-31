import {
  IconArrowNarrowDownDashed,
  IconArrowNarrowUpDashed,
} from '@tabler/icons-react';
import { m } from 'framer-motion';
import { useRef, useState } from 'react';
import experienceData from '../../data/experience_data.js';
import DesktopView from '../../lib/DesktopView';
import { PopButton } from '../pop-button';
import ExperienceBox from './ExperienceBox';

const Experience = () => {
  const desktopView = DesktopView();
  const [showAll, setShowAll] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const displayedExperiences = showAll
    ? experienceData
    : experienceData.slice(0, 3);

  const handleToggle = () => {
    if (showAll) {
      setShowAll(false);
      setTimeout(() => {
        buttonRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 100);
      return;
    }

    setShowAll(true);
  };

  return (
    <section
      className='relative flex w-full flex-col md:w-[90vw] xl:w-272'
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

      <div className='relative mt-16 w-full rounded-3xl md:mt-20 md:w-fit'>
        <div
          className='pointer-events-none absolute top-0 left-0 z-0! h-full w-full'
          style={{
            boxShadow: 'inset 0px 0px 40px 50px var(--color-inset-shadow)',
          }}
        />
        <div className='relative z-40! flex h-auto w-full flex-col items-center justify-center rounded-lg transition-[color,background-color,box-shadow,opacity,transform] duration-200'>
          <div className='flex h-full w-full flex-col overflow-hidden rounded-3xl border border-customgray bg-customblack shadow-lg'>
            {displayedExperiences.map((experience, index) => (
              <ExperienceBox
                key={`${experience.title}-${experience.org}-${experience.date}`}
                title={experience.title}
                org={experience.org}
                url={experience.url}
                logo={experience.logo}
                logoRounded={experience.logoRounded}
                date={experience.date}
                desc={experience.desc}
                previousTitles={experience.previousTitles}
                previousDates={experience.previousDates}
                alignCenter={experience.alignCenter}
                showDivider={index < displayedExperiences.length - 1}
              />
            ))}

            {experienceData.length > 3 && (
              <m.div
                className='flex w-full items-center justify-center pt-4 pb-8'
                ref={buttonRef}
              >
                <PopButton
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
