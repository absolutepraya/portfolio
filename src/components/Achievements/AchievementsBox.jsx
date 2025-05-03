import BlurFade from '../../blocks/Animations/BlurFade/BlurFade';
import { FlickeringGrid } from '../../blocks/Animations/FlickeringGrid/FlickeringGrid';
import { IconAward, IconLaurelWreath, IconNews, IconMap2, IconChevronLeft, IconChevronRight, IconGift } from '@tabler/icons-react';
import CountUp from '../../blocks/TextAnimations/CountUp/CountUp';
import BotBorder from './BotBorder';
import DesktopView from '../../lib/DesktopView';
import TabletView from '../../lib/TabletView';

const AchievementsBox = ({ achievementData }) => {
  const desktopView = DesktopView();
  const tabletView = TabletView();

  return (
    <BlurFade
      className='relative !z-[40] flex h-auto w-full flex-col items-center justify-center rounded-lg transition-all duration-200 md:p-20'
      delay={0.3}
      inView
      inViewMargin='-1px'
      offset={20}
    >
      <div className='flex h-full w-full flex-col space-y-4 rounded-3xl border-l-[3px] border-t-[3px] border-customgray bg-customblack bg-gradient-to-br from-[#1f1f1f] to-[#0e0e0e] shadow-lg'>
        {achievementData.map((achievement, index) => (
          <BlurFade
            key={index}
            className={desktopView ? 'relative flex h-auto w-full flex-row gap-x-8 p-8' : 'relative flex h-auto w-full flex-col-reverse gap-y-6 p-6'}
            delay={0.2}
            offset={8}
            inView
            inViewMargin='-1px'
          >
            <div className='flex h-fit w-full justify-center lg:w-fit'>
              <div className='relative mb-[40px] flex aspect-square w-full items-center justify-center rounded-xl bg-zinc-800 md:h-80 md:w-80 lg:h-56 lg:w-56'>
                <p className='font-maplemono text-lg font-bold opacity-40'>(under dev lol)</p>
                <div className='absolute -bottom-10 flex h-fit w-full flex-row justify-around'>
                  <div className='flex h-full w-fit items-center justify-center rounded-lg transition-all duration-100 ease-in-out md:w-10'>
                    <IconChevronLeft
                      stroke={2}
                      size={desktopView ? 24 : 22}
                      className='opacity-40'
                    />
                  </div>
                  <div className='flex flex-row items-center space-x-2'>
                    <div className='h-2 w-2 rounded-full bg-customwhite'></div>
                    <div className='h-2 w-2 rounded-full bg-customwhite bg-opacity-40'></div>
                    <div className='h-2 w-2 rounded-full bg-customwhite bg-opacity-40'></div>
                  </div>
                  <div className='flex h-full w-fit cursor-pointer items-center justify-center rounded-lg transition-all duration-100 ease-in-out hover:text-blurple md:w-10'>
                    <IconChevronRight
                      stroke={2}
                      size={desktopView ? 24 : 22}
                      className=''
                    />
                  </div>
                </div>
              </div>
            </div>
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
              {achievement.desc && <p className='text'>{achievement.desc}</p>}
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
                        <ul className='ml-5 list-disc'>
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
          </BlurFade>
        ))}
        <BlurFade
          className='flex w-full items-center justify-center pb-8 pt-4 font-maplemono text-sm'
          delay={1.1}
          offset={8}
          inView
        >
          <p className='!opacity-40'>and more to come...</p>
        </BlurFade>
      </div>
    </BlurFade>
  );
};

export default AchievementsBox;
