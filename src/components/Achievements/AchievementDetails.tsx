import {
  IconAward,
  IconGift,
  IconLaurelWreath,
  IconMap2,
  IconNews,
} from '@tabler/icons-react';
import ReactMarkdown from 'react-markdown';
import CountUp from '../../blocks/TextAnimations/CountUp';
import type { Achievement } from '../../data/achievements_data';
import { PopButton } from '../pop-button';

interface AchievementDetailsProps {
  achievement: Achievement;
}

const AchievementDetails = ({ achievement }: AchievementDetailsProps) => (
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
            className='h-7 gap-3 rounded-md px-2.5 font-jetbrainsmono text-xs md:h-8 md:px-3 md:text-sm'
            asChild
          >
            <a href={achievement.organizerUrl} target='_blank' rel='noreferrer'>
              by {achievement.organizer}
              {achievement.organizerLogo && (
                <img
                  src={achievement.organizerLogo}
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
          className={`flex items-center space-x-2 ${achievement.awardInt === 1 ? 'text-yellow-500' : achievement.awardInt === 3 ? 'text-amber-700' : ''}`}
        >
          <IconAward size={20} stroke={1.5} />
          <p>{achievement.award}</p>
        </div>
      )}
      {achievement.prizeCurr && achievement.prizeInt !== undefined && (
        <div className='flex items-center space-x-2'>
          <IconLaurelWreath size={20} stroke={1.5} className='text-green-600' />
          <p>
            Prize: {achievement.prizeCurr}{' '}
            <CountUp to={achievement.prizeInt} from={0} separator='.' />
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
                {achievement.bonus.map((item) => (
                  <li key={`${achievement.title}-bonus-${item}`}>{item}</li>
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
          <IconMap2 size={20} stroke={1.5} />
          <p>Location: {achievement.location}</p>
        </div>
      )}
      {achievement.articles && (
        <div className='flex flex-row items-start space-x-2'>
          <IconNews size={20} stroke={1.5} />
          <div className='flex flex-col'>
            <p>Articles:</p>
            {achievement.articles.length > 0 ? (
              <ul
                className={`ml-5 list-disc ${achievement.articles.length > 3 ? 'lg:columns-2 lg:gap-16' : ''}`}
              >
                {achievement.articles.map((article) => (
                  <li key={`${achievement.title}-article-${article.url}`}>
                    <a
                      href={article.url}
                      target='_blank'
                      rel='noreferrer'
                      className='text-[#2196F3] hover:text-[#1976D2] hover:underline'
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
);

export default AchievementDetails;
