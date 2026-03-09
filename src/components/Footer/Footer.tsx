import { IconBrandGithub, IconClock, IconCopyright } from '@tabler/icons-react';
import moment from 'moment-timezone';
import { useEffect, useState } from 'react';
import HoverBorderGradient from '../../blocks/Animations/HoverBorderGradient';
import DesktopView from '../../lib/DesktopView';
import { ShimmerText } from '../shimmer-text';

const Copyright = () => {
  const [currentTime, setCurrentTime] = useState('');
  const desktopView = DesktopView();

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
    <footer className='flex w-full flex-col'>
      <div
        className='flex h-auto w-full flex-col items-center space-y-2 border-customgray border-t py-4 font-jetbrainsmono text-xs md:space-y-0 md:py-0 md:text-xs'
        style={{ backgroundColor: 'var(--color-nav-bg)' }}
      >
        {/* Mobile only: pill as top row */}
        <div className='flex w-full items-center justify-center py-1 md:hidden'>
          <HoverBorderGradient
            containerClassName='rounded-full'
            as='button'
            className='flex items-center text-xs'
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
        <div className='relative flex h-auto w-full flex-col items-center space-y-2 border-customgray border-t pt-1 pb-1 md:h-16 md:flex-row md:justify-around md:space-y-0 md:border-t-0 md:py-0'>
          <div className='flex flex-row items-center justify-center space-x-2'>
            <IconCopyright size={desktopView ? 16 : 14} />
            <p>2024-2026 — All Rights Reserved.</p>
          </div>
          <div className='flex flex-row items-center justify-center space-x-2'>
            <p>Jakarta, ID</p>
            <IconClock size={desktopView ? 16 : 14} />
            <p>{currentTime}</p>
          </div>
          {/* Desktop only: pill centered absolutely */}
          <div className='hidden md:absolute md:left-1/2 md:flex md:-translate-x-1/2'>
            <HoverBorderGradient
              containerClassName='rounded-full'
              as='button'
              className='flex items-center text-xs'
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
          <div className='flex flex-row items-center justify-center space-x-2'>
            <IconBrandGithub size={desktopView ? 16 : 14} />
            <a href='https://github.com/absolutepraya/portfolio'>
              <p className='underline underline-offset-2'>Source code</p>
            </a>
          </div>
          <div className='flex flex-row items-center justify-center'>
            <p>Too bright? Sorry, dark is under dev</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Copyright;
