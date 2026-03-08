import { motion } from 'framer-motion';
import { useState } from 'react';
import { FlickeringGrid } from '../../blocks/Animations/FlickeringGrid';
import achievementsData from '../../data/achievements_data.js';
import DesktopView from '../../lib/DesktopView';
import TabletView from '../../lib/TabletView';
import { useTheme } from '../../lib/ThemeContext';
import AchievementsBox from './AchievementsBox';

const Achievements = () => {
  const desktopView = DesktopView();
  const tabletView = TabletView();
  const [showAll, setShowAll] = useState(false);
  const { isDark } = useTheme();

  return (
    <section
      className='relative w-[90vw] flex-col space-y-12 xl:w-272'
      id='achievementssec'
    >
      <div id='achievements' className='absolute -top-36' />
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
          Victory laps
        </motion.h2>
        <div
          className={`relative mt-1 w-full max-w-140 rounded-full md:mt-8 lg:mt-3 lg:w-auto lg:max-w-4000 lg:grow ${desktopView ? 'h-0.5 bg-customwhite opacity-20' : 'h-0.5 bg-linear-to-r from-customwhite to-text-secondary opacity-60'}`}
        >
          <motion.div
            className='absolute h-1 w-full bg-page-bg shadow-glowcustomblacksmall lg:-top-2 lg:h-4 lg:shadow-glowcustomblack'
            whileInView={{
              x: '1000px',
              transition: { duration: 2, ease: 'circInOut', delay: 0.3 },
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

      <div className='relative w-fit rounded-3xl'>
        {tabletView && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true, margin: '0px 0px 20px 0px' }}
          >
            <FlickeringGrid
              squareSize={7}
              gridGap={7}
              color={isDark ? 'rgba(204, 204, 204, 1)' : 'rgba(50, 50, 80, 1)'}
              maxOpacity={0.3}
              flickerChance={0.2}
              className={'absolute top-0 left-0 z-0! h-full w-full'}
            />
          </motion.div>
        )}
        <div
          className='absolute top-0 left-0 z-0! h-full w-full'
          style={{
            boxShadow: 'inset 0px 0px 40px 50px var(--color-inset-shadow)',
          }}
        />
        {/* Covering uncovered flickering grid area */}
        <div className='absolute top-0 -left-[4px] h-full w-[4px] bg-page-bg' />
        <div className='absolute top-0 -right-[4px] h-full w-[4px] bg-page-bg' />
        <AchievementsBox
          achievementData={achievementsData}
          showAll={showAll}
          setShowAll={setShowAll}
        />
      </div>
    </section>
  );
};

export default Achievements;
