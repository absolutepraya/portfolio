import { useState } from 'react';
import DesktopView from '../../lib/DesktopView';

const Button = ({ icon = null, text, link, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  const desktopView = DesktopView();

  return (
    <a
      href={link}
      aria-label={'Scroll to ' + text}
      title={'Scroll to ' + text}
    >
      <div
        className={`relative flex h-14 w-14 flex-col items-center justify-center rounded-2xl border-l border-t border-[#424242]/40 shadow-xl transition-all duration-75 hover:scale-105 active:scale-95 ${isActive ? 'border-l-0 border-t-0 border-blurple bg-blurple bg-opacity-85 active:bg-opacity-50' : 'border-[#424242]/40 bg-[#3f3f3f] bg-opacity-40 hover:bg-blurple hover:bg-opacity-40 active:bg-opacity-20'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {icon}
        {isHovered && desktopView && (
          <div className='w-aut absolute -bottom-10 h-auto rounded bg-customgray px-1 transition-all duration-75'>
            <p>{text}</p>
          </div>
        )}
        {isActive && <div className='absolute -bottom-2 h-[0.2rem] w-6 rounded-full bg-[#424242] transition-all duration-100 ease-in-out' />}
      </div>
    </a>
  );
};

export default Button;
