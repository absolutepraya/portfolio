import DesktopView from '../../lib/DesktopView';
import { Marquee } from '../marquee';
import { RichButton } from '../rich-button';
import { stacksList } from './stack-items';

export { stacksList } from './stack-items';

export const SliderStacks = () => {
  const desktopView = DesktopView();

  return (
    <Marquee
      duration={30}
      fade
      fadeAmount={15}
      direction='left'
      pauseOnHover={!!desktopView}
    >
      {stacksList.map((stack) => (
        <RichButton
          key={stack.alt}
          asChild
          shadow={false}
          color='default'
          className='group mx-2 h-18 w-18 cursor-help rounded-lg p-4 hover:brightness-100 active:brightness-100 md:mx-3 md:h-20 md:w-20'
        >
          <div className='relative flex items-center justify-center'>
            <div className='pointer-events-none absolute z-30 max-w-14 rounded-sm bg-tooltip-bg px-1 py-1 text-center text-[0.6rem] text-tooltip-text opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 md:max-w-16 md:text-xs'>
              {stack.alt}
            </div>
            <img
              src={stack.src}
              alt={stack.alt}
              className='h-full w-full select-none object-contain drop-shadow-[0_1px_2px_rgba(0,0,0,0.18)] transition-[filter] duration-200 group-hover:blur-xs group-focus-visible:blur-xs'
              draggable='false'
            />
          </div>
        </RichButton>
      ))}
    </Marquee>
  );
};
