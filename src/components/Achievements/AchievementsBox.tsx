import {
  IconArrowNarrowDownDashed,
  IconArrowNarrowUpDashed,
} from '@tabler/icons-react';
import { m } from 'framer-motion';
import { type Dispatch, type SetStateAction, useRef } from 'react';
import BlurFade from '../../blocks/Animations/BlurFade';
import type { Achievement } from '../../data/achievements_data';
import DesktopView from '../../lib/DesktopView';
import { PopButton } from '../pop-button';
import AchievementCard from './AchievementCard';

interface AchievementsBoxProps {
  achievementData: Achievement[];
  showAll: boolean;
  setShowAll: Dispatch<SetStateAction<boolean>>;
}

const AchievementsBox = ({
  achievementData,
  showAll,
  setShowAll,
}: AchievementsBoxProps) => {
  const desktopView = DesktopView();
  const buttonRef = useRef<HTMLDivElement>(null);
  const displayedAchievements = showAll
    ? achievementData
    : achievementData.slice(0, 3);

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
    <BlurFade delay={0.3} inView inViewMargin='-1px' offset={20}>
      <div className='relative z-40! flex h-auto w-full flex-col items-center justify-center rounded-lg transition-[color,background-color,box-shadow,opacity,transform] duration-200 md:p-20'>
        <div className='flex h-full w-full flex-col space-y-4 rounded-3xl border border-customgray bg-customblack shadow-lg'>
          {displayedAchievements.map((achievement) => (
            <BlurFade
              key={achievement.title}
              delay={0.2}
              offset={8}
              inView
              inViewMargin='-1px'
            >
              <AchievementCard
                achievement={achievement}
                desktopView={!!desktopView}
              />
            </BlurFade>
          ))}
          {showAll && (
            <BlurFade offset={8} inView>
              <div className='flex w-full items-center justify-center pt-4 pb-4 font-jetbrainsmono text-sm'>
                <p className='opacity-40!'>and more to come...</p>
              </div>
            </BlurFade>
          )}
          {achievementData.length > 3 && (
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
    </BlurFade>
  );
};

export default AchievementsBox;
