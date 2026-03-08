import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandSpotify,
  IconCheck,
  IconCopy,
  IconMail,
  IconPointer,
  IconSend,
} from '@tabler/icons-react';
import { useState } from 'react';
import Hello from '../../assets/creds/hello.webp';
import Pin from '../../assets/creds/pin.webp';
import BlurFade from '../../blocks/Animations/BlurFade';
import SplitText from '../../blocks/TextAnimations/SplitText';
import DesktopView from '../../lib/DesktopView';
import TabletView from '../../lib/TabletView';
import { useTheme } from '../../lib/ThemeContext';
import { Signature } from '../signature';

const Contact = () => {
  const desktopView = DesktopView();
  const tabletView = TabletView();
  const [copied, setCopied] = useState(false);
  const { isDark } = useTheme();

  const handleCopy = () => {
    const textToCopy = 'daffa@abhipraya.dev';
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <BlurFade
      className='relative z-20 flex w-[90vw] flex-col rounded-3xl border-contact-outer-border xl:h-112 xl:w-272 xl:max-w-4000 xl:flex-row'
      delay={0.3}
      inView
      offset={20}
    >
      {/* bg-linear-to-b from-[rgba(54,67,252,0.01)] from-20% to-[rgba(54,67,252,0.2)] */}
      {/* <TopBorder /> */}
      <div className='flex w-auto flex-col items-center justify-center space-y-4 p-8 md:p-12'>
        <p className='w-full text-start font-instrument text-5xl md:-translate-x-8 md:text-center md:text-6xl xl:translate-x-0 xl:text-start'>
          Always up for...
        </p>
        <div className='flex w-full flex-col space-y-2 font-semibold text-4xl md:w-auto md:space-y-3 md:text-5xl'>
          <div className='flex items-center space-x-3 pl-0'>
            <IconPointer
              size={tabletView ? 20 : 16}
              stroke={2}
              className={
                isDark ? 'fill-black text-white' : 'fill-white text-black'
              }
            />
            <SplitText animateBy='letters' text='AI solutions' />
          </div>
          <div className='flex items-center space-x-3 pl-6 md:pl-12'>
            <IconPointer
              size={tabletView ? 20 : 16}
              stroke={2}
              className={
                isDark ? 'fill-black text-white' : 'fill-white text-black'
              }
            />
            <SplitText animateBy='letters' text='competitions' />
          </div>
          <div className='flex items-center space-x-3 pl-12 md:pl-24'>
            <IconPointer
              size={tabletView ? 20 : 16}
              stroke={2}
              className={
                isDark ? 'fill-black text-white' : 'fill-white text-black'
              }
            />
            <SplitText animateBy='letters' text='opportunities' />
          </div>
        </div>
      </div>
      <BlurFade
        className='flex w-full flex-col items-center justify-center space-y-2 p-6 xl:w-1/2'
        delay={desktopView ? 0.8 : 0.3}
        inView
        offset={30}
      >
        <div className='relative flex h-fit w-full max-w-120 -rotate-3 flex-col justify-center space-y-4 rounded-3xl bg-customblack p-6 pt-2! pb-8 shadow-xl md:rotate-[-4deg] md:p-8'>
          <div className='absolute top-0 left-0 z-[-1]! h-full w-full rounded-3xl border border-customgray' />
          <img
            src={Pin}
            alt='Pin'
            className='absolute -top-12 -right-10 w-16 scale-[85%] drop-shadow-md md:scale-90'
            draggable='false'
          />
          <img
            src={Hello}
            alt='Hello'
            className='absolute -bottom-4 -left-6 w-12 drop-shadow-md'
            draggable='false'
          />
          <p className='md:text-lg'>
            Feel free to reach out for collab purposes or just a friendly hello
            :D
          </p>
          <div className='flex h-auto w-fit flex-row items-center justify-center space-x-2 rounded-2xl md:h-10'>
            <div className='relative flex h-full items-center space-x-2 rounded-lg border border-customwhite px-3 py-2 transition-all duration-100 md:py-0'>
              <IconMail size={desktopView ? 20 : 16} stroke={2} />
              <p className='break-all font-jetbrainsmono font-semibold text-sm tracking-wider'>
                daffa@abhipraya.dev
              </p>
            </div>
            {tabletView && (
              <a
                className='flex h-full w-10 items-center justify-center rounded-lg bg-btn-bg p-2 transition-all duration-100 hover:bg-blurple hover:bg-opacity-30 hover:text-blurple'
                href='mailto:daffa@abhipraya.dev'
                target='_blank'
                rel='noreferrer'
                aria-label='Send me an email!'
                title='Send me an email!'
              >
                <IconSend size={tabletView ? 20 : 16} stroke={2} />
              </a>
            )}
            {tabletView && (
              <button
                type='button'
                className='clickable flex h-full w-10 items-center justify-center rounded-lg bg-btn-bg p-2 transition-all duration-100 hover:cursor-pointer hover:bg-blurple hover:bg-opacity-30 hover:text-blurple'
                onClick={() => handleCopy()}
                title='Copy my email address!'
              >
                {copied ? (
                  <IconCheck size={tabletView ? 20 : 16} stroke={2} />
                ) : (
                  <IconCopy size={tabletView ? 20 : 16} stroke={2} />
                )}
              </button>
            )}
          </div>
          <a
            href='https://www.linkedin.com/in/daffaabhipraya/'
            target='_blank'
            rel='noreferrer'
            aria-label='Reach out on LinkedIn'
            title='Reach out on LinkedIn'
          >
            <div className='flex h-auto w-fit flex-row items-center justify-center space-x-2 rounded-lg bg-customwhite px-3 py-2 text-customblack transition-all duration-100 hover:bg-blurple hover:text-customwhite md:h-10 md:px-3 md:py-0'>
              <p className='font-semibold text-sm'>
                or hit me up on <span className='font-extrabold'>LinkedIn</span>
              </p>
              <IconBrandLinkedin size={20} stroke={2} />
            </div>
          </a>
          <div className='mt-6! h-0.5 w-full bg-customgray' />
          <p className=''>Find me on other platforms!</p>
          <div className='flex w-full flex-col space-y-2 font-jetbrainsmono text-[0.850rem] md:flex-row md:justify-between md:space-y-0'>
            <a
              href='https://github.com/absolutepraya'
              target='_blank'
              rel='noreferrer'
              aria-label='absolutepraya on GitHub'
              title='absolutepraya on GitHub'
            >
              <div className='flex flex-row items-center space-x-1 transition-all duration-100 hover:text-blurple'>
                <IconBrandGithub size={21} stroke={2} />
                <p className='underline underline-offset-4'>absolutepraya</p>
              </div>
            </a>
            <a
              href='https://www.instagram.com/___abhipraya/'
              target='_blank'
              rel='noreferrer'
              aria-label='___abhipraya on Instagram'
              title='___abhipraya on Instagram'
            >
              <div className='flex flex-row items-center space-x-1 transition-all duration-100 hover:text-blurple'>
                <IconBrandInstagram size={21} stroke={2} />
                <p className='underline underline-offset-4'>___abhipraya</p>
              </div>
            </a>
            <a
              href='https://open.spotify.com/user/daffaabhiprayaputra'
              target='_blank'
              rel='noreferrer'
              aria-label='Daffa Abhipraya on Spotify'
              title='Daffa Abhipraya on Spotify'
            >
              <div className='flex flex-row items-center space-x-1 transition-all duration-100 hover:text-blurple'>
                <IconBrandSpotify size={21} stroke={2} />
                <p className='underline underline-offset-4'>Daffa Abhipraya</p>
              </div>
            </a>
          </div>
          <Signature
            text='Abhipraya'
            fontSize={36}
            color='var(--color-text-primary)'
            duration={1.5}
            className='mt-2 h-10 self-end'
            inView
          />
        </div>
      </BlurFade>
    </BlurFade>
  );
};

export default Contact;
