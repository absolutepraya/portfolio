import {
  IconArrowNarrowDownDashed,
  IconArrowNarrowUpDashed,
  IconAward,
  IconChevronLeft,
  IconChevronRight,
  IconGift,
  IconLaurelWreath,
  IconMap2,
  IconNews,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import {
  type Dispatch,
  type SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import ReactMarkdown from 'react-markdown';
import BlurFade from '../../blocks/Animations/BlurFade';
import IosSpinner from '../../blocks/Animations/IosSpinner';
import CountUp from '../../blocks/TextAnimations/CountUp';
import type { Achievement } from '../../data/achievements_data';
import DesktopView from '../../lib/DesktopView';
import { PopButton } from '../pop-button';
import BotBorder from './BotBorder';

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
  const [currentImageIndexes, setCurrentImageIndexes] = useState<
    Record<string, number>
  >({});
  const [achievementImages, setAchievementImages] = useState<
    Record<string, (string | null)[]>
  >({});
  const [imageLoadingStates, setImageLoadingStates] = useState<
    Record<string, boolean[]>
  >({});
  const [imageLoadedStates, setImageLoadedStates] = useState<
    Record<string, boolean[]>
  >({});

  const displayedAchievements = showAll
    ? achievementData
    : achievementData.slice(0, 3);

  const loadFirstImage = useCallback(
    async (achievementTitle: string) => {
      try {
        const achievement = achievementData.find(
          (a) => a.title === achievementTitle,
        );
        if (!achievement?.imagesPath) return;

        const imageModules = import.meta.glob(
          '/src/assets/achievements/**/*.{png,jpg,jpeg,webp,gif}',
          { eager: false },
        );
        const imagePaths: string[] = [];

        const { imagesPath } = achievement;
        Object.keys(imageModules).forEach((path) => {
          const normalizedAchievementPath = imagesPath.replace('src/', '/src/');
          if (path.includes(normalizedAchievementPath)) {
            imagePaths.push(path);
          }
        });

        imagePaths.sort();

        if (imagePaths[0]) {
          const imageModule = (await imageModules[imagePaths[0]]()) as {
            default: string;
          };

          setAchievementImages((prev) => ({
            ...prev,
            [achievementTitle]: prev[achievementTitle].map((img, idx) =>
              idx === 0 ? imageModule.default : img,
            ),
          }));

          setImageLoadedStates((prev) => ({
            ...prev,
            [achievementTitle]: prev[achievementTitle].map((loaded, idx) =>
              idx === 0 ? true : loaded,
            ),
          }));

          setImageLoadingStates((prev) => ({
            ...prev,
            [achievementTitle]: prev[achievementTitle].map((loading, idx) =>
              idx === 0 ? false : loading,
            ),
          }));
        }
      } catch (error) {
        console.error(
          `Error loading first image for ${achievementTitle}:`,
          error,
        );
        setImageLoadingStates((prev) => ({
          ...prev,
          [achievementTitle]: prev[achievementTitle].map((loading, idx) =>
            idx === 0 ? false : loading,
          ),
        }));
      }
    },
    [achievementData],
  );

  useEffect(() => {
    const initializeImageStates = async () => {
      const imagesData: Record<string, (string | null)[]> = {};
      const loadingStates: Record<string, boolean[]> = {};
      const loadedStates: Record<string, boolean[]> = {};

      for (const achievement of achievementData) {
        if (achievement.imagesPath) {
          const { imagesPath } = achievement;
          try {
            const imageModules = import.meta.glob(
              '/src/assets/achievements/**/*.{png,jpg,jpeg,webp,gif}',
              { eager: false },
            );
            const imagePaths: string[] = [];

            Object.keys(imageModules).forEach((path) => {
              const normalizedAchievementPath = imagesPath.replace(
                'src/',
                '/src/',
              );
              if (path.includes(normalizedAchievementPath)) {
                imagePaths.push(path);
              }
            });

            imagePaths.sort();

            if (imagePaths.length > 0) {
              imagesData[achievement.title] = new Array(imagePaths.length).fill(
                null,
              );
              loadingStates[achievement.title] = new Array(
                imagePaths.length,
              ).fill(false);
              loadedStates[achievement.title] = new Array(
                imagePaths.length,
              ).fill(false);

              loadingStates[achievement.title][0] = true;
            }
          } catch (error) {
            console.error(
              `Error initializing images for ${achievement.title}:`,
              error,
            );
          }
        }
      }

      setAchievementImages(imagesData);
      setImageLoadingStates(loadingStates);
      setImageLoadedStates(loadedStates);

      const initialIndexes: Record<string, number> = {};
      Object.keys(imagesData).forEach((title) => {
        initialIndexes[title] = 0;
      });
      setCurrentImageIndexes(initialIndexes);

      for (const achievement of achievementData) {
        if (achievement.imagesPath && imagesData[achievement.title]) {
          setTimeout(() => {
            loadFirstImage(achievement.title);
          }, 0);
        }
      }
    };

    initializeImageStates();
  }, [achievementData, loadFirstImage]);

  const loadImageAtIndex = async (
    achievementTitle: string,
    imageIndex: number,
  ) => {
    if (
      imageLoadedStates[achievementTitle]?.[imageIndex] ||
      imageLoadingStates[achievementTitle]?.[imageIndex]
    ) {
      return;
    }

    setImageLoadingStates((prev) => ({
      ...prev,
      [achievementTitle]: prev[achievementTitle].map((loading, idx) =>
        idx === imageIndex ? true : loading,
      ),
    }));

    try {
      const achievement = achievementData.find(
        (a) => a.title === achievementTitle,
      );
      if (!achievement?.imagesPath) return;

      const { imagesPath } = achievement;
      const imageModules = import.meta.glob(
        '/src/assets/achievements/**/*.{png,jpg,jpeg,webp,gif}',
        { eager: false },
      );
      const imagePaths: string[] = [];

      Object.keys(imageModules).forEach((path) => {
        const normalizedAchievementPath = imagesPath.replace('src/', '/src/');
        if (path.includes(normalizedAchievementPath)) {
          imagePaths.push(path);
        }
      });

      imagePaths.sort();

      if (imagePaths[imageIndex]) {
        const imageModule = (await imageModules[imagePaths[imageIndex]]()) as {
          default: string;
        };

        setAchievementImages((prev) => ({
          ...prev,
          [achievementTitle]: prev[achievementTitle].map((img, idx) =>
            idx === imageIndex ? imageModule.default : img,
          ),
        }));

        setImageLoadedStates((prev) => ({
          ...prev,
          [achievementTitle]: prev[achievementTitle].map((loaded, idx) =>
            idx === imageIndex ? true : loaded,
          ),
        }));
      }
    } catch (error) {
      console.error(
        `Error loading image ${imageIndex} for ${achievementTitle}:`,
        error,
      );
    } finally {
      setImageLoadingStates((prev) => ({
        ...prev,
        [achievementTitle]: prev[achievementTitle].map((loading, idx) =>
          idx === imageIndex ? false : loading,
        ),
      }));
    }
  };

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

  const handlePrevImage = (achievementTitle: string) => {
    const images = achievementImages[achievementTitle];
    if (!images || images.length === 0) return;

    const newIndex =
      currentImageIndexes[achievementTitle] === 0
        ? images.length - 1
        : currentImageIndexes[achievementTitle] - 1;

    setCurrentImageIndexes((prev) => ({
      ...prev,
      [achievementTitle]: newIndex,
    }));

    if (!imageLoadedStates[achievementTitle]?.[newIndex]) {
      loadImageAtIndex(achievementTitle, newIndex);
    }
  };

  const handleNextImage = (achievementTitle: string) => {
    const images = achievementImages[achievementTitle];
    if (!images || images.length === 0) return;

    const newIndex =
      currentImageIndexes[achievementTitle] === images.length - 1
        ? 0
        : currentImageIndexes[achievementTitle] + 1;

    setCurrentImageIndexes((prev) => ({
      ...prev,
      [achievementTitle]: newIndex,
    }));

    if (!imageLoadedStates[achievementTitle]?.[newIndex]) {
      loadImageAtIndex(achievementTitle, newIndex);
    }
  };

  const handleDotClick = (achievementTitle: string, index: number) => {
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [achievementTitle]: index,
    }));

    if (!imageLoadedStates[achievementTitle]?.[index]) {
      loadImageAtIndex(achievementTitle, index);
    }
  };

  return (
    <BlurFade delay={0.3} inView inViewMargin='-1px' offset={20}>
      <div className='relative z-40! flex h-auto w-full flex-col items-center justify-center rounded-lg transition-all duration-200 md:p-20'>
        <div className='flex h-full w-full flex-col space-y-4 rounded-3xl border border-customgray bg-customblack shadow-lg'>
          {displayedAchievements.map((achievement) => (
            <BlurFade
              key={achievement.title}
              delay={0.2}
              offset={8}
              inView
              inViewMargin='-1px'
            >
              <div
                className={
                  desktopView
                    ? `relative flex h-auto w-full flex-row gap-x-8 p-8 ${!achievementImages[achievement.title] || achievementImages[achievement.title].length === 0 ? 'px-24' : ''}`
                    : 'relative flex h-auto w-full flex-col-reverse gap-y-6 p-6'
                }
              >
                {achievementImages[achievement.title] &&
                  achievementImages[achievement.title].length > 0 && (
                    <div className='flex h-fit w-full justify-center lg:w-fit'>
                      <div className='relative mb-[40px] flex aspect-square w-full items-center justify-center rounded-xl bg-zinc-800 md:h-80 md:w-80 lg:h-76 lg:w-76'>
                        {imageLoadingStates[achievement.title]?.[
                          currentImageIndexes[achievement.title]
                        ] ? (
                          <div className='flex h-full w-full items-center justify-center rounded-xl bg-zinc-800'>
                            <IosSpinner size='3xl' className='text-white' />
                          </div>
                        ) : achievementImages[achievement.title][
                            currentImageIndexes[achievement.title]
                          ] ? (
                          <img
                            src={
                              achievementImages[achievement.title][
                                currentImageIndexes[achievement.title]
                              ] ?? undefined
                            }
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
                            className='flex h-full w-fit cursor-pointer items-center justify-center rounded-lg transition-all duration-100 ease-in-out hover:text-customwhite md:w-10'
                            onClick={() => handlePrevImage(achievement.title)}
                          >
                            <IconChevronLeft
                              stroke={2}
                              size={desktopView ? 24 : 22}
                              className='opacity-70 hover:opacity-100'
                            />
                          </button>
                          <div className='flex flex-row items-center space-x-2'>
                            {achievementImages[achievement.title]
                              .map((_, i) => `dot-${i}`)
                              .map((dotId, index) => (
                                <button
                                  key={dotId}
                                  type='button'
                                  className={`cursor-pointer rounded-full transition-all duration-300 ${index === currentImageIndexes[achievement.title] ? 'h-2 w-5 bg-customwhite' : 'h-2 w-2 bg-customwhite/20 hover:bg-customwhite/40'}`}
                                  onClick={() =>
                                    handleDotClick(achievement.title, index)
                                  }
                                />
                              ))}
                          </div>
                          <button
                            type='button'
                            className='flex h-full w-fit cursor-pointer items-center justify-center rounded-lg transition-all duration-100 ease-in-out hover:text-customwhite md:w-10'
                            onClick={() => handleNextImage(achievement.title)}
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
                  )}
                <div className='flex flex-col space-y-2 text-left'>
                  <div className='flex flex-col items-start space-y-2'>
                    <h2 className='font-instrument text-4xl md:text-5xl'>
                      {achievement.title}
                    </h2>
                    <div className='mb-[7px] flex w-fit flex-row items-center space-x-2'>
                      {achievement.organizer && achievement.organizerUrl && (
                        <PopButton
                          size='sm'
                          color='default'
                          className='h-7 gap-3 px-2.5 font-jetbrainsmono text-xs md:h-8 md:px-3 md:text-sm'
                          asChild
                        >
                          <a
                            href={achievement.organizerUrl}
                            target='_blank'
                            rel='noreferrer'
                          >
                            by {achievement.organizer}
                            {achievement.organizerLogo && (
                              <img
                                src={`${achievement.organizerLogo}`}
                                alt={achievement.organizer}
                                className='h-4 w-4 object-contain'
                              />
                            )}
                          </a>
                        </PopButton>
                      )}
                    </div>
                  </div>
                  {achievement.desc && (
                    <div className='markdown-content text-justify text-sm leading-relaxed md:text-base'>
                      <ReactMarkdown>{achievement.desc}</ReactMarkdown>
                    </div>
                  )}
                  <div className='flex flex-col space-y-1 font-jetbrainsmono text-sm md:text-base'>
                    {achievement.award && (
                      <div
                        className={`flex items-center space-x-2 ${achievement.awardInt === 1 ? 'text-yellow-500' : achievement.awardInt === 2 ? '' : achievement.awardInt === 3 ? 'text-amber-700' : ''}`}
                      >
                        <IconAward size={20} stroke={1.5} />
                        <p>{achievement.award}</p>
                      </div>
                    )}
                    {achievement.prizeCurr &&
                      achievement.prizeInt !== undefined && (
                        <div className='flex items-center space-x-2'>
                          <IconLaurelWreath
                            size={20}
                            stroke={1.5}
                            className='text-green-600'
                          />
                          <p>
                            Prize: {achievement.prizeCurr}{' '}
                            <CountUp
                              to={achievement.prizeInt}
                              from={0}
                              separator='.'
                            />
                          </p>
                        </div>
                      )}
                    {achievement.bonus && (
                      <div className='flex items-start space-x-2'>
                        <IconGift
                          size={20}
                          stroke={1.5}
                          className='shrink-0 text-purple-500'
                        />
                        <div className='flex flex-col'>
                          <p>Bonus:</p>
                          {Array.isArray(achievement.bonus) ? (
                            <ul className='ml-5 list-disc'>
                              {achievement.bonus
                                .map(
                                  (item, index) =>
                                    `${achievement.title}-bonus-${index}-${item}`,
                                )
                                .map((bonusKey, index) => (
                                  <li key={bonusKey}>
                                    {achievement.bonus?.[index]}
                                  </li>
                                ))}
                            </ul>
                          ) : (
                            <p>{achievement.bonus}</p>
                          )}
                        </div>
                      </div>
                    )}
                    {achievement.location && (
                      <div className='flex items-center space-x-2'>
                        <IconMap2 size={20} stroke={1.5} className='' />
                        <p>Location: {achievement.location}</p>
                      </div>
                    )}
                    {achievement.articles && (
                      <div className='flex flex-row items-start space-x-2'>
                        <IconNews size={20} stroke={1.5} className='' />
                        <div className='flex flex-col'>
                          <p>Articles:</p>
                          {achievement.articles.length > 0 ? (
                            <ul
                              className={`ml-5 list-disc ${achievement.articles.length > 3 ? 'lg:columns-2 lg:gap-16' : ''}`}
                            >
                              {achievement.articles
                                .map(
                                  (article, index) =>
                                    `${achievement.title}-article-${index}-${article.url}`,
                                )
                                .map((articleKey, index) => (
                                  <li key={articleKey}>
                                    <a
                                      href={achievement.articles?.[index].url}
                                      target='_blank'
                                      rel='noreferrer'
                                      className='text-[#2196F3] hover:text-[#1976D2] hover:underline'
                                    >
                                      {achievement.articles?.[index].platform}
                                    </a>
                                  </li>
                                ))}
                            </ul>
                          ) : (
                            <p>-</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <BotBorder />
              </div>
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
            <motion.div
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
            </motion.div>
          )}
        </div>
      </div>
    </BlurFade>
  );
};

export default AchievementsBox;
