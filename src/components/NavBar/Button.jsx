import { useState } from 'react';
import DesktopView from '../../lib/DesktopView';

const Button = ({ icon = null, text, link, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  const desktopView = DesktopView();

  return (
    <a href={link} aria-label={`Scroll to ${text}`} title={`Scroll to ${text}`}>
      {/** biome-ignore lint/a11y/noStaticElementInteractions: <X> */}
      <div
        className={`relative flex h-14 w-14 flex-col items-center justify-center rounded-2xl border-t shadow-xl transition-all duration-75 hover:scale-105 active:scale-95 ${isActive ? 'border-blurple border-t-0 bg-blurple bg-opacity-85 active:bg-opacity-50' : 'hover:bg-blurple hover:bg-opacity-40 active:bg-opacity-20'}`}
        style={
          isActive
            ? undefined
            : {
                backgroundColor: 'var(--color-nav-button-bg)',
                borderColor: 'var(--color-nav-border)',
              }
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {icon}
        {isHovered && desktopView && (
          <div className='absolute -bottom-8 h-auto w-auto rounded bg-tooltip-bg px-1 text-tooltip-text transition-all duration-75'>
            <p className='text-sm'>{text}</p>
          </div>
        )}
        {isActive && (
          <div
            className='absolute -bottom-2 h-[0.2rem] w-6 rounded-full transition-all duration-100 ease-in-out'
            style={{ backgroundColor: 'var(--color-nav-active-indicator)' }}
          />
        )}
      </div>
    </a>
  );
};

export default Button;
