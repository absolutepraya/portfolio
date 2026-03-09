import { type ReactNode, useState } from 'react';
import DesktopView from '../../lib/DesktopView';
import { RichButton } from '../rich-button';

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
    <RichButton
      className={`relative aspect-square h-10 rounded-xl p-0 transition-all duration-75 hover:scale-103 hover:brightness-100 active:scale-97 md:h-14 md:rounded-2xl [&_svg]:size-4 md:[&_svg]:size-5 ${isActive ? 'text-white active:opacity-70' : 'text-text-secondary hover:text-customwhite active:opacity-50'}`}
      color={isActive ? 'zinc' : 'default'}
      shadow={false}
      asChild
    >
      <a
        href={link}
        aria-label={`Scroll to ${text}`}
        title={`Scroll to ${text}`}
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
      </a>
    </RichButton>
  );
};

export default Button;
