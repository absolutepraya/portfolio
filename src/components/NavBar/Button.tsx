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
        className={`relative flex h-14 w-14 flex-col items-center justify-center rounded-2xl border shadow-md transition-all duration-75 hover:scale-103 active:scale-97 ${isActive ? 'text-white active:opacity-70' : 'text-text-secondary hover:text-customwhite active:opacity-50'}`}
        style={
          isActive
            ? {
                backgroundColor: 'var(--color-text-primary)',
                borderColor: 'var(--color-text-primary)',
              }
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
            style={{ backgroundColor: 'var(--color-text-primary)' }}
          />
        )}
      </div>
    </a>
  );
};

export default Button;
