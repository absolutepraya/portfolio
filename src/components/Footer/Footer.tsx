import { IconBrandGithub, IconClock } from '@tabler/icons-react';
import moment from 'moment-timezone';
import { useEffect, useState } from 'react';
import { FlickeringGrid } from '../../blocks/Animations/FlickeringGrid';
import HoverBorderGradient from '../../blocks/Animations/HoverBorderGradient';
import DesktopView from '../../lib/DesktopView';
import { useTheme } from '../../lib/ThemeContext';
import { ShimmerText } from '../shimmer-text';

const Copyright = () => {
  const [currentTime, setCurrentTime] = useState('');
  const desktopView = DesktopView();
  const { isDark } = useTheme();

  useEffect(() => {
    const updateTime = () => {
      const time = moment().tz('Asia/Jakarta').format('hh:mm A');
      setCurrentTime(time);
    };
    const interval = setInterval(updateTime, 1000);
    updateTime();
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      className='relative flex w-full flex-col overflow-hidden border-customgray border-t font-jetbrainsmono text-xs'
      style={{ backgroundColor: 'var(--color-footer-bg)' }}
    >
      <div className='relative z-10 grid w-full grid-cols-1 justify-items-center gap-y-3 px-6 pt-4 pb-2 md:grid-cols-[1fr_auto_1fr] md:px-12 md:pt-5 md:pb-3'>
        <div className='order-2 flex items-center justify-center space-x-2 md:order-1 md:justify-start'>
          <p>Jakarta, ID</p>
          <IconClock size={desktopView ? 16 : 14} />
          <p>{currentTime}</p>
        </div>
        <div className='order-1 flex justify-center md:order-2'>
          <HoverBorderGradient
            containerClassName='rounded-full'
            as='button'
            className='flex cursor-pointer items-center text-xs'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ShimmerText
              className='px-3 font-semibold text-xs'
              duration={2}
              delay={2}
            >
              Let's ship AI that matters!
            </ShimmerText>
          </HoverBorderGradient>
        </div>
        <div className='order-3 flex items-center justify-center space-x-2 md:justify-end'>
          <IconBrandGithub size={desktopView ? 16 : 14} />
          <a
            href='https://github.com/absolutepraya/portfolio'
            target='_blank'
            rel='noreferrer'
            className='underline underline-offset-2'
          >
            Source code
          </a>
        </div>
      </div>
      <div
        className='relative h-32 w-full md:h-52'
        aria-hidden='true'
        style={{ backgroundColor: 'var(--color-footer-bg)' }}
      >
        <FlickeringGrid
          squareSize={7}
          gridGap={7}
          color={isDark ? 'rgba(204, 204, 204, 1)' : 'rgba(38, 38, 68, 1)'}
          maxOpacity={0.3}
          flickerChance={0.2}
          className='absolute inset-0 z-0!'
        />
        <div
          className='pointer-events-none absolute inset-0 z-10'
          style={{
            backgroundImage:
              'linear-gradient(to bottom, var(--color-footer-bg) 0%, var(--color-footer-bg) 35%, transparent 100%)',
          }}
        />
      </div>
    </footer>
  );
};

export default Copyright;
