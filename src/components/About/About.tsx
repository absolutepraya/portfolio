import { IconPlayHandball, IconSwords } from '@tabler/icons-react';
import BlurFade from '../../blocks/Animations/BlurFade';
import DesktopView from '../../lib/DesktopView';
import { RichButton } from '../rich-button';
import { SlideUpText } from '../slide-up-text';
import ProfileCard from './ProfileCard';
import { SliderSkills } from './SliderSkills';
import { SliderStacks, stacksList } from './SliderStacks';
import { SliderTools, toolsList } from './SliderTools';

const About = () => {
  const desktopView = DesktopView();

  return (
    <section
      className='relative mt-18! flex w-[90vw] flex-col items-center md:mt-30! lg:mt-34! xl:w-272'
      id='aboutsec'
    >
      <div id='about' className='absolute -top-40' />
      <div className='mt-12 mb-10 flex w-full flex-col items-center gap-8 md:mb-14 lg:flex-row lg:items-center lg:justify-around lg:gap-12'>
        {/* LEFT: Profile card */}
        <ProfileCard />

        {/* RIGHT: Hero text */}
        <div className='-mt-26 flex flex-col items-start justify-center md:mt-0'>
          <SlideUpText
            split='words'
            delay={0.5}
            stagger={0.06}
            className='pb-1 text-left font-instrument text-4xl leading-[2.6rem] md:text-4xl md:leading-[2.8rem] lg:text-5xl lg:leading-[3.2rem]'
            animatedClass='text-customwhite'
          >
            I build software that thinks, scales, and ships.
          </SlideUpText>
          <SlideUpText
            split='words'
            delay={1}
            stagger={0.04}
            className='mt-3 max-w-200 text-left text-sm opacity-90 md:mt-6 md:text-base'
          >
            Fullstack apps, AI agents, cloud infrastructure. I build the whole
            thing, start to finish, and I've won hackathons doing it.
          </SlideUpText>
        </div>
      </div>
      <div className='flex h-auto w-full flex-col space-y-6 lg:flex-row lg:space-x-6 lg:space-y-0'>
        <BlurFade
          delay={0.2}
          offset={40}
          duration={0.5}
          className='w-full lg:w-[40%]'
        >
          <div className='flex h-full flex-col space-y-6 rounded-3xl border border-customgray bg-customblack p-6 shadow-lg'>
            <div className='relative flex items-center justify-center overflow-visible lg:h-46'>
              {/* To fix transparent shadow gap for in Marquee for mobile */}
              {!desktopView && (
                <div className='absolute -top-2 -left-px z-10 h-[105%] w-1 bg-customblack' />
              )}
              {!desktopView && (
                <div className='absolute -top-2 -right-px z-10 h-[105%] w-1 bg-customblack' />
              )}
              <SliderSkills />
            </div>
            <div className='flex w-full flex-col items-start space-y-4'>
              <RichButton
                size='sm'
                color='default'
                className='cursor-default hover:brightness-100 active:brightness-100'
              >
                <IconPlayHandball size={16} stroke={1.5} />
                <span className='font-jetbrainsmono text-sm lg:text-md'>
                  What I do
                </span>
              </RichButton>
              <p className='text-lg lg:text-xl'>
                I ship <b className='text-customwhite'>fullstack apps</b> and{' '}
                <b className='text-customwhite'>AI products</b>, and I make sure
                they{' '}
                <i className='font-medium text-customwhite'>actually work</i>.
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade
          delay={0.2}
          offset={40}
          duration={0.5}
          className='w-full lg:w-[39.3rem]'
        >
          <div className='relative flex h-full flex-col items-center space-y-6 rounded-3xl border border-customgray bg-customblack p-6 shadow-lg'>
            <div className='relative flex w-full flex-col gap-y-5 lg:space-y-[0.24rem]'>
              {/* To fix transparent shadow gap for in Marquee for mobile */}
              {!desktopView && (
                <div className='absolute -top-2 -left-px z-10 h-[105%] w-1 bg-customblack' />
              )}
              {!desktopView && (
                <div className='absolute -top-2 -right-px z-10 h-[105%] w-1 bg-customblack' />
              )}
              <SliderStacks />
              <SliderTools />
            </div>
            <div className='flex w-full flex-col items-start space-y-4'>
              <RichButton
                size='sm'
                color='default'
                className='cursor-default hover:brightness-100 active:brightness-100'
              >
                <IconSwords size={16} stroke={1.5} />
                <span className='font-jetbrainsmono text-sm lg:text-md'>
                  What I use
                </span>
              </RichButton>
              <p className='text-lg lg:text-xl'>
                Always keeping up with the{' '}
                <b className='text-customwhite'>latest tech</b>, picking what
                fits, and{' '}
                <i className='font-medium text-customwhite'>shipping fast</i>.
              </p>
            </div>
            {/* Intentional: hidden text lists all skills for SEO indexing since the marquee images aren't text-crawlable */}
            <p className='absolute -z-10 w-[20rem] text-xs opacity-0'>
              {stacksList.map((stack) => stack.alt).join(' ')}
            </p>
            <p className='absolute -z-10 w-[20rem] text-xs opacity-0'>
              {toolsList.map((tool) => tool.alt).join(' ')}
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default About;
