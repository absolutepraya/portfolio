import { IconBrandGithub, IconClock, IconCopyright } from '@tabler/icons-react';
import moment from 'moment-timezone';
import { useEffect, useState } from 'react';
import DesktopView from '../../lib/DesktopView';

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
        className='flex h-auto w-full flex-col items-center space-y-2 border-customgray border-t py-4 font-jetbrainsmono text-xs md:h-16 md:flex-row md:justify-around md:space-y-0 md:py-0 md:text-xs'
        style={{ backgroundColor: 'var(--color-nav-bg)' }}
      >
        <div className='flex flex-row items-center justify-center space-x-2'>
          <IconCopyright size={desktopView ? 16 : 14} />
          <p>2024-2026 — All Rights Reserved.</p>
        </div>
        <div className='flex flex-row items-center justify-center space-x-2'>
          <p>Jakarta, ID</p>
          <IconClock size={desktopView ? 16 : 14} />
          <p>{currentTime}</p>
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
    </footer>
  );
};

export default Copyright;
