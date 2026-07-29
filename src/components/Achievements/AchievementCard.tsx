import type { Achievement } from '../../data/achievements_data';
import AchievementDetails from './AchievementDetails';
import AchievementImageCarousel from './AchievementImageCarousel';
import { getAchievementImagePaths } from './achievement-images';
import BotBorder from './BotBorder';

interface AchievementCardProps {
  achievement: Achievement;
  desktopView: boolean;
}

const AchievementCard = ({
  achievement,
  desktopView,
}: AchievementCardProps) => {
  const hasImages = getAchievementImagePaths(achievement.imagesPath).length > 0;

  return (
    <div
      className={
        desktopView
          ? `relative flex h-auto w-full flex-row gap-x-8 p-8 ${hasImages ? '' : 'px-24'}`
          : 'relative flex h-auto w-full flex-col-reverse gap-y-6 p-6'
      }
    >
      <AchievementImageCarousel
        key={achievement.imagesPath ?? achievement.title}
        achievement={achievement}
        desktopView={desktopView}
      />
      <AchievementDetails achievement={achievement} />
      <BotBorder />
    </div>
  );
};

export default AchievementCard;
