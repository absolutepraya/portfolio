import { IconBrandGithub, IconClock, IconCopyright } from '@tabler/icons-react';
import moment from 'moment-timezone';
import { useEffect, useState } from 'react';
import DesktopView from '../lib/DesktopView';
import { useTheme } from '../lib/ThemeContext';

const Copyright = () => {
  const [currentTime, setCurrentTime] = useState('');
  const desktopView = DesktopView();
  const { isDark, toggleTheme } = useTheme();

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
        className='flex h-24 w-full flex-col items-center justify-between space-y-2 border-customgray border-t py-4 font-maplemono text-xs md:h-16 md:flex-row md:space-y-0 md:px-8 md:py-0 md:text-xs lg:px-32'
        style={{ backgroundColor: 'var(--color-nav-bg)' }}
      >
        <div className='flex flex-row items-center justify-start space-x-2 md:w-1/3'>
          <IconCopyright size={desktopView ? 16 : 14} />
          <p>2024-2026 — All Rights Reserved.</p>
        </div>
        <div className='flex flex-row items-center justify-center space-x-2 md:w-1/3'>
          <p>Jakarta, Indonesia</p>
          <IconClock size={desktopView ? 16 : 14} />
          <p>{currentTime}</p>
        </div>
        <div className='flex flex-row items-center justify-center space-x-2 md:w-1/3 md:justify-end'>
          <p>Built by me</p>
          <IconBrandGithub size={desktopView ? 16 : 14} />
          <a href='https://github.com/absolutepraya/portfolio'>
            <p className='underline underline-offset-2'>Source code</p>
          </a>
          <p>·</p>
          <button
            type='button'
            onClick={toggleTheme}
            className='underline underline-offset-2 transition-opacity hover:opacity-70'
          >
            {isDark ? 'ur eyes hurt? try light' : 'ur eyes hurt? try dark'}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Copyright;
