import BlurFade from '../../blocks/Animations/BlurFade/BlurFade';
import { IconAward, IconLaurelWreath, IconNews, IconMap2, IconChevronLeft, IconChevronRight, IconGift, IconArrowNarrowDownDashed, IconArrowNarrowUpDashed } from '@tabler/icons-react';
import CountUp from '../../blocks/TextAnimations/CountUp/CountUp';
import BotBorder from './BotBorder';
import DesktopView from '../../lib/DesktopView';
import TabletView from '../../lib/TabletView';
import IosSpinner from '../../blocks/Animations/IosSpinner/IosSpinner';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const AchievementsBox = ({ achievementData, showAll, setShowAll }) => {
  const desktopView = DesktopView();
  const tabletView = TabletView();
  const buttonRef = useRef(null);
  const [currentImageIndexes, setCurrentImageIndexes] = useState({});
  const [achievementImages, setAchievementImages] = useState({});
  const [imageLoadingStates, setImageLoadingStates] = useState({});
  const [imageLoadedStates, setImageLoadedStates] = useState({});

  const displayedAchievements = showAll ? achievementData : achievementData.slice(0, 3);

  useEffect(() => {
    const initializeImageStates = async () => {
      const imagesData = {};
      const loadingStates = {};
      const loadedStates = {};

      for (const achievement of achievementData) {
        if (achievement.imagesPath) {
          try {
            const imageModules = import.meta.glob('/src/assets/achievements/**/*.{png,jpg,jpeg,webp,gif}', { eager: false });
            const imagePaths = [];

            Object.keys(imageModules).forEach((path) => {
              const normalizedAchievementPath = achievement.imagesPath.replace('src/', '/src/');
              if (path.includes(normalizedAchievementPath)) {
                imagePaths.push(path);
              }
            });

            imagePaths.sort();

            if (imagePaths.length > 0) {
              imagesData[achievement.title] = new Array(imagePaths.length).fill(null);
              loadingStates[achievement.title] = new Array(imagePaths.length).fill(false);
              loadedStates[achievement.title] = new Array(imagePaths.length).fill(false);

              loadingStates[achievement.title][0] = true;
            }
          } catch (error) {
            console.error(`Error initializing images for ${achievement.title}:`, error);
          }
        }
      }

      setAchievementImages(imagesData);
      setImageLoadingStates(loadingStates);
      setImageLoadedStates(loadedStates);

      const initialIndexes = {};
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
  }, [achievementData]);

  const loadFirstImage = async (achievementTitle) => {
    try {
      const achievement = achievementData.find((a) => a.title === achievementTitle);
      if (!achievement?.imagesPath) return;

      const imageModules = import.meta.glob('/src/assets/achievements/**/*.{png,jpg,jpeg,webp,gif}', { eager: false });
      const imagePaths = [];

      Object.keys(imageModules).forEach((path) => {
        const normalizedAchievementPath = achievement.imagesPath.replace('src/', '/src/');
        if (path.includes(normalizedAchievementPath)) {
          imagePaths.push(path);
        }
      });

      imagePaths.sort();

      if (imagePaths[0]) {
        const imageModule = await imageModules[imagePaths[0]]();

        setAchievementImages((prev) => ({
          ...prev,
          [achievementTitle]: prev[achievementTitle].map((img, idx) => (idx === 0 ? imageModule.default : img)),
        }));

        setImageLoadedStates((prev) => ({
          ...prev,
          [achievementTitle]: prev[achievementTitle].map((loaded, idx) => (idx === 0 ? true : loaded)),
        }));

        setImageLoadingStates((prev) => ({
          ...prev,
          [achievementTitle]: prev[achievementTitle].map((loading, idx) => (idx === 0 ? false : loading)),
        }));
      }
    } catch (error) {
      console.error(`Error loading first image for ${achievementTitle}:`, error);
      setImageLoadingStates((prev) => ({
        ...prev,
        [achievementTitle]: prev[achievementTitle].map((loading, idx) => (idx === 0 ? false : loading)),
      }));
    }
  };

  const loadImageAtIndex = async (achievementTitle, imageIndex) => {
    if (imageLoadedStates[achievementTitle]?.[imageIndex] || imageLoadingStates[achievementTitle]?.[imageIndex]) {
      return;
    }

    setImageLoadingStates((prev) => ({
      ...prev,
      [achievementTitle]: prev[achievementTitle].map((loading, idx) => (idx === imageIndex ? true : loading)),
    }));

    try {
      const achievement = achievementData.find((a) => a.title === achievementTitle);
      if (!achievement?.imagesPath) return;

      const imageModules = import.meta.glob('/src/assets/achievements/**/*.{png,jpg,jpeg,webp,gif}', { eager: false });
      const imagePaths = [];

      Object.keys(imageModules).forEach((path) => {
        const normalizedAchievementPath = achievement.imagesPath.replace('src/', '/src/');
        if (path.includes(normalizedAchievementPath)) {
          imagePaths.push(path);
        }
      });

      imagePaths.sort();

      if (imagePaths[imageIndex]) {
        const imageModule = await imageModules[imagePaths[imageIndex]]();

        setAchievementImages((prev) => ({
          ...prev,
          [achievementTitle]: prev[achievementTitle].map((img, idx) => (idx === imageIndex ? imageModule.default : img)),
        }));

        setImageLoadedStates((prev) => ({
          ...prev,
          [achievementTitle]: prev[achievementTitle].map((loaded, idx) => (idx === imageIndex ? true : loaded)),
        }));
      }
    } catch (error) {
      console.error(`Error loading image ${imageIndex} for ${achievementTitle}:`, error);
    } finally {
      setImageLoadingStates((prev) => ({
        ...prev,
        [achievementTitle]: prev[achievementTitle].map((loading, idx) => (idx === imageIndex ? false : loading)),
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

  const handlePrevImage = (achievementTitle) => {
    const images = achievementImages[achievementTitle];
    if (!images || images.length === 0) return;

    const newIndex = currentImageIndexes[achievementTitle] === 0 ? images.length - 1 : currentImageIndexes[achievementTitle] - 1;

    setCurrentImageIndexes((prev) => ({
      ...prev,
      [achievementTitle]: newIndex,
    }));

    if (!imageLoadedStates[achievementTitle]?.[newIndex]) {
      loadImageAtIndex(achievementTitle, newIndex);
    }
  };

  const handleNextImage = (achievementTitle) => {
    const images = achievementImages[achievementTitle];
    if (!images || images.length === 0) return;

    const newIndex = currentImageIndexes[achievementTitle] === images.length - 1 ? 0 : currentImageIndexes[achievementTitle] + 1;

    setCurrentImageIndexes((prev) => ({
      ...prev,
      [achievementTitle]: newIndex,
    }));

    if (!imageLoadedStates[achievementTitle]?.[newIndex]) {
      loadImageAtIndex(achievementTitle, newIndex);
    }
  };

  const handleDotClick = (achievementTitle, index) => {
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [achievementTitle]: index,
    }));

    if (!imageLoadedStates[achievementTitle]?.[index]) {
      loadImageAtIndex(achievementTitle, index);
    }
  };

  return (
    <BlurFade
      delay={0.3}
      inView
      inViewMargin='-1px'
      offset={20}
    >
      <div className='relative !z-[40] flex h-auto w-full flex-col items-center justify-center rounded-lg transition-all duration-200 md:p-20'>
        <div className='flex h-full w-full flex-col space-y-4 rounded-3xl border-l-[3px] border-t-[3px] border-customgray bg-customblack bg-gradient-to-br from-[#1f1f1f] to-[#0e0e0e] shadow-lg'>
          {displayedAchievements.map((achievement, index) => (
            <BlurFade
              key={index}
              delay={0.2}
              offset={8}
              inView
              inViewMargin='-1px'
            >
              <div className={desktopView ? `relative flex h-auto w-full flex-row gap-x-8 p-8 ${!achievementImages[achievement.title] || achievementImages[achievement.title].length === 0 ? 'px-24' : ''}` : 'relative flex h-auto w-full flex-col-reverse gap-y-6 p-6'}>
                {achievementImages[achievement.title] && achievementImages[achievement.title].length > 0 && (
                  <div className='flex h-fit w-full justify-center lg:w-fit'>
                    <div className='lg:h-76 lg:w-76 relative mb-[40px] flex aspect-square w-full items-center justify-center rounded-xl bg-zinc-800 md:h-80 md:w-80'>
                      {imageLoadingStates[achievement.title]?.[currentImageIndexes[achievement.title]] ? (
                        <div className='flex h-full w-full items-center justify-center rounded-xl bg-zinc-800'>
                          <IosSpinner
                            size='3xl'
                            className='text-white'
                          />
                        </div>
                      ) : achievementImages[achievement.title][currentImageIndexes[achievement.title]] ? (
                        <img
                          src={achievementImages[achievement.title][currentImageIndexes[achievement.title]]}
                          // alt='Achievement Image'
                          className='h-full w-full rounded-xl object-cover'
                        />
                      ) : (
                        <div className='flex h-full w-full items-center justify-center rounded-xl bg-zinc-800'>
                          <IosSpinner
                            size='3xl'
                            className='text-white'
                          />
                        </div>
                      )}
                      <div className='absolute -bottom-10 flex h-fit w-full flex-row justify-around'>
                        <div
                          className='flex h-full w-fit cursor-pointer items-center justify-center rounded-lg transition-all duration-100 ease-in-out hover:text-blurple md:w-10'
                          onClick={() => handlePrevImage(achievement.title)}
                        >
                          <IconChevronLeft
                            stroke={2}
                            size={desktopView ? 24 : 22}
                            className='opacity-70 hover:opacity-100'
                          />
                        </div>
                        <div className='flex flex-row items-center space-x-2'>
                          {achievementImages[achievement.title].map((_, index) => (
                            <div
                              key={index}
                              className={`h-2 w-2 cursor-pointer rounded-full transition-all duration-200 ${index === currentImageIndexes[achievement.title] ? 'bg-customwhite' : 'bg-customwhite bg-opacity-40 hover:bg-opacity-70'}`}
                              onClick={() => handleDotClick(achievement.title, index)}
                            />
                          ))}
                        </div>
                        <div
                          className='flex h-full w-fit cursor-pointer items-center justify-center rounded-lg transition-all duration-100 ease-in-out hover:text-blurple md:w-10'
                          onClick={() => handleNextImage(achievement.title)}
                        >
                          <IconChevronRight
                            stroke={2}
                            size={desktopView ? 24 : 22}
                            className='opacity-70 hover:opacity-100'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className='flex flex-col space-y-2 text-left'>
                  <div className='flex flex-col items-start space-y-2'>
                    <h2 className='font-instrument text-4xl md:text-5xl'>{achievement.title}</h2>
                    <div className='mb-[7px] flex w-fit flex-row items-center space-x-2'>
                      {achievement.organizer && achievement.organizerUrl && (
                        <div className='rounded-md border border-blurple bg-blurple bg-opacity-10 px-2 transition-all duration-200 hover:bg-blurple hover:bg-opacity-100'>
                          <a
                            className='text-sm text-blurple transition-colors duration-200 hover:text-white group-hover:text-white md:text-base'
                            href={achievement.organizerUrl}
                            target='_blank'
                            rel='noreferrer'
                          >
                            by {achievement.organizer}
                          </a>
                        </div>
                      )}
                      {achievement.organizerLogo && (
                        <img
                          src={`${achievement.organizerLogo}`}
                          alt={achievement.organizer}
                          className='h-6 w-6 object-contain'
                        />
                      )}
                    </div>
                  </div>
                  {achievement.desc && (
                    <div className='markdown-content text'>
                      <ReactMarkdown>{achievement.desc}</ReactMarkdown>
                    </div>
                  )}
                  <div className='flex flex-col space-y-1 font-maplemono'>
                    {achievement.award && (
                      <div className={`flex items-center space-x-2 ${achievement.awardInt === 1 ? 'text-yellow-500' : achievement.awardInt === 2 ? '' : achievement.awardInt === 3 ? 'text-amber-700' : ''}`}>
                        <IconAward
                          size={20}
                          stroke={1.5}
                        />
                        <p>{achievement.award}</p>
                      </div>
                    )}
                    {achievement.prizeCurr && achievement.prizeInt !== undefined && (
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
                          className='flex-shrink-0 text-purple-500'
                        />
                        <div className='flex flex-col'>
                          <p>Bonus:</p>
                          {Array.isArray(achievement.bonus) ? (
                            <ul className='ml-5 list-disc'>
                              {achievement.bonus.map((item, index) => (
                                <li key={index}>{item}</li>
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
                        <IconMap2
                          size={20}
                          stroke={1.5}
                          className=''
                        />
                        <p>Location: {achievement.location}</p>
                      </div>
                    )}
                    {achievement.articles && (
                      <div className='flex flex-row items-start space-x-2'>
                        <IconNews
                          size={20}
                          stroke={1.5}
                          className=''
                        />
                        <div className='flex flex-col'>
                          <p>Articles:</p>
                          {achievement.articles.length > 0 ? (
                            <ul className={`ml-5 list-disc ${achievement.articles.length > 3 ? 'lg:columns-2 lg:gap-16' : ''}`}>
                              {achievement.articles.map((article, index) => (
                                <li key={index}>
                                  <a
                                    href={article.url}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='text-[#3b82f6] hover:text-[#2563eb]'
                                  >
                                    {article.platform}
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
            <BlurFade
              offset={8}
              inView
            >
              <div className='flex w-full items-center justify-center pb-4 pt-4 font-maplemono text-sm'>
                <p className='!opacity-40'>and more to come...</p>
              </div>
            </BlurFade>
          )}

          {achievementData.length > 3 && (
            <motion.div
              className='flex w-full items-center justify-center pb-8 pt-4'
              ref={buttonRef}
            >
              <motion.button
                onClick={handleToggle}
                className='flex items-center space-x-2 rounded-lg border-2 border-customlightgray py-2 pl-4 pr-2 font-jetbrainsmono text-customwhite opacity-70 transition-all duration-300 hover:opacity-100'
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
            </motion.div>
          )}
        </div>
      </div>
    </BlurFade>
  );
};

export default AchievementsBox;
