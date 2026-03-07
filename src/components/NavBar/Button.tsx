import { type ReactNode, useState } from 'react';
import DesktopView from '../../lib/DesktopView';

interface ButtonProps {
  icon?: ReactNode;
  text: string;
  link: string;
  isActive: boolean;
}

const Button = ({ icon = null, text, link, isActive }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const desktopView = DesktopView();

  return (
    <a href={link} aria-label={`Scroll to ${text}`} title={`Scroll to ${text}`}>
      {/** biome-ignore lint/a11y/noStaticElementInteractions: <X> */}
      <div
        className={`relative flex h-14 w-14 flex-col items-center justify-center rounded-2xl border shadow-md transition-all duration-75 hover:scale-105 active:scale-95 ${isActive ? 'border-blurple bg-blurple bg-opacity-85 text-white active:bg-opacity-50' : 'text-text-secondary hover:bg-blurple hover:bg-opacity-40 active:bg-opacity-20'}`}
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
          <div className='absolute -bottom-8 h-auto w-auto rounded-sm bg-tooltip-bg px-1 text-tooltip-text transition-all duration-75'>
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
