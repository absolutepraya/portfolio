import DesktopView from '../../lib/DesktopView';
import { motion } from 'framer-motion';
import AchievementsBox from './AchievementsBox';
import { FlickeringGrid } from '../../blocks/Animations/FlickeringGrid/FlickeringGrid';
import TabletView from '../../lib/TabletView';
import achievementsData from '../../data/achievements_data.js';
import { useState } from 'react';

const Achievements = () => {
  const desktopView = DesktopView();
  const tabletView = TabletView();
  const [showAll, setShowAll] = useState(false);

  return (
    <section
      className='relative w-[90vw] flex-col space-y-12 xl:w-[68rem]'
      id='achievementssec'
    >
      <div
        id='achievements'
        className='absolute -top-24'
      />
      <div className='flex flex-col items-center lg:flex-row lg:space-x-8'>
        <motion.p
          className='bg-gradient-to-br from-customwhite to-[#5c5c5a] bg-clip-text font-instrument text-6xl text-transparent md:text-7xl'
          initial={{ opacity: 0, y: '40px' }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'circOut' } }}
          viewport={{ marginTop: desktopView ? '-100px' : '-14px', marginBottom: desktopView ? '-100px' : '-14px', once: true }}
        >
          Victory Laps
        </motion.p>
        <div className={`relative mt-1 w-full max-w-[35rem] rounded-full md:mt-8 lg:mt-3 lg:w-auto lg:max-w-[1000rem] lg:flex-grow ${desktopView ? 'h-0.5 bg-white opacity-20' : 'h-0.5 bg-gradient-to-r from-customwhite to-[#5c5c5a] opacity-60'}`}>
          <motion.div
            className='absolute h-1 w-full bg-customblack shadow-glowcustomblacksmall lg:-top-2 lg:h-4 lg:shadow-glowcustomblack'
            whileInView={{ x: '1000px', transition: { duration: 2, ease: 'circInOut', delay: 0.3 } }}
            viewport={{ marginTop: desktopView ? '-100px' : '-14px', marginBottom: desktopView ? '-100px' : '-14px', once: true }}
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
              squareSize={6}
              gridGap={6}
              color={'rgba(195, 195, 195, 0.9)'}
              maxOpacity={0.3}
              flickerChance={0.2}
              className={'absolute left-0 top-0 !z-[0] h-full w-full'}
            ></FlickeringGrid>
          </motion.div>
        )}
        <div className='absolute left-0 top-0 !z-[0] h-full w-[100%] shadow-[inset_0px_0px_40px_50px_rgba(5,4,14,1)]' />
        {/* Covering uncovered flickering grid area */}
        <div className='absolute -left-[4px] top-0 h-full w-[4px] bg-[#05040E]' />
        <div className='absolute -right-[4px] top-0 h-full w-[4px] bg-[#05040E]' />
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
