import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import IosSpinner from '../../blocks/Animations/IosSpinner';
import type { Achievement } from '../../data/achievements_data';
import {
  getAchievementImagePaths,
  loadAchievementImage,
} from './achievement-images';

interface AchievementImageCarouselProps {
  achievement: Achievement;
  desktopView: boolean;
}

const AchievementImageCarousel = ({
  achievement,
  desktopView,
}: AchievementImageCarouselProps) => {
  const imagePaths = useMemo(
    () => getAchievementImagePaths(achievement.imagesPath),
    [achievement.imagesPath],
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageUrls, setImageUrls] = useState<(string | null)[]>(() =>
    imagePaths.map(() => null),
  );
  const [loadingImageIndex, setLoadingImageIndex] = useState<number | null>(
    null,
  );
  const loadedIndexes = useRef(new Set<number>());
  const loadingIndexes = useRef(new Set<number>());

  const loadImageAtIndex = useCallback(
    async (index: number) => {
      const path = imagePaths[index];
      if (
        !path ||
        loadedIndexes.current.has(index) ||
        loadingIndexes.current.has(index)
      )
        return;
      loadingIndexes.current.add(index);
      setLoadingImageIndex(index);
      try {
        const imageUrl = await loadAchievementImage(path);
        loadedIndexes.current.add(index);
        setImageUrls((current) =>
          current.map((url, imageIndex) =>
            imageIndex === index ? imageUrl : url,
          ),
        );
      } catch (error) {
        console.error(
          `Error loading image ${index} for ${achievement.title}:`,
          error,
        );
      } finally {
        loadingIndexes.current.delete(index);
        setLoadingImageIndex((current) => (current === index ? null : current));
      }
    },
    [achievement.title, imagePaths],
  );

  useEffect(() => {
    void loadImageAtIndex(0);
  }, [loadImageAtIndex]);

  if (imagePaths.length === 0) return null;

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
    void loadImageAtIndex(index);
  };
  const currentImageUrl = imageUrls[currentImageIndex];

  return (
    <div className='flex h-fit w-full justify-center lg:w-fit'>
      <div className='relative mb-[40px] flex aspect-square w-full items-center justify-center rounded-xl bg-zinc-800 md:h-80 md:w-80 lg:h-76 lg:w-76'>
        {currentImageUrl && loadingImageIndex !== currentImageIndex ? (
          <img
            src={currentImageUrl}
            alt={achievement.title}
            className='h-full w-full rounded-xl object-cover'
          />
        ) : (
          <div className='flex h-full w-full items-center justify-center rounded-xl bg-zinc-800'>
            <IosSpinner size='3xl' className='text-white' />
          </div>
        )}
        <div className='absolute -bottom-10 flex h-fit w-full flex-row justify-around'>
          <button
            type='button'
            className='flex h-full w-fit cursor-pointer items-center justify-center rounded-lg transition-colors duration-100 hover:text-customwhite md:w-10'
            onClick={() =>
              goToImage(
                currentImageIndex === 0
                  ? imagePaths.length - 1
                  : currentImageIndex - 1,
              )
            }
            aria-label={`Show previous ${achievement.title} image`}
          >
            <IconChevronLeft
              stroke={2}
              size={desktopView ? 24 : 22}
              className='opacity-70 hover:opacity-100'
            />
          </button>
          <div className='flex flex-row items-center space-x-2'>
            {imagePaths.map((path, index) => (
              <button
                key={path}
                type='button'
                aria-label={`Show image ${index + 1} of ${achievement.title}`}
                aria-current={index === currentImageIndex ? 'true' : undefined}
                className={`cursor-pointer rounded-full transition-[width,background-color] duration-300 ${index === currentImageIndex ? 'h-2 w-5 bg-customwhite' : 'h-2 w-2 bg-customwhite/20 hover:bg-customwhite/40'}`}
                onClick={() => goToImage(index)}
              />
            ))}
          </div>
          <button
            type='button'
            className='flex h-full w-fit cursor-pointer items-center justify-center rounded-lg transition-colors duration-100 hover:text-customwhite md:w-10'
            onClick={() =>
              goToImage(
                currentImageIndex === imagePaths.length - 1
                  ? 0
                  : currentImageIndex + 1,
              )
            }
            aria-label={`Show next ${achievement.title} image`}
          >
            <IconChevronRight
              stroke={2}
              size={desktopView ? 24 : 22}
              className='opacity-70 hover:opacity-100'
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AchievementImageCarousel;
