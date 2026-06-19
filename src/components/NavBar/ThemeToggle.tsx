import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from '../../lib/ThemeContext';
import { RichButton } from '../rich-button';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <RichButton
      className='aspect-square h-11 rounded-xl p-0 text-text-secondary transition-all duration-75 hover:scale-103 hover:text-customwhite hover:brightness-100 active:scale-97 active:opacity-50 md:h-14 md:rounded-2xl [&_svg]:size-4 md:[&_svg]:size-5'
      color='default'
      shadow={false}
      onClick={(e) => toggleTheme(e)}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className='grid place-items-center'>
        <IconSun
          className={`transition-all duration-200 [grid-area:1/1] ${
            isDark
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-50 opacity-0'
          }`}
        />
        <IconMoon
          className={`transition-all duration-200 [grid-area:1/1] ${
            isDark
              ? 'rotate-90 scale-50 opacity-0'
              : 'rotate-0 scale-100 opacity-100'
          }`}
        />
      </span>
    </RichButton>
  );
};

export default ThemeToggle;
