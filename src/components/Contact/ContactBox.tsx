import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconCheck,
  IconCopy,
  IconMail,
  IconNotebook,
  IconPointer,
} from '@tabler/icons-react';
import { useState } from 'react';
import PFP from '../../assets/creds/pfp.webp';
import Pin from '../../assets/creds/pin.webp';
import BlurFade from '../../blocks/Animations/BlurFade';
import SplitText from '../../blocks/TextAnimations/SplitText';
import DesktopView from '../../lib/DesktopView';
import TabletView from '../../lib/TabletView';
import { useTheme } from '../../lib/ThemeContext';
import { Signature } from '../signature';

const ContactBox = () => {
  const desktopView = DesktopView();
  const tabletView = TabletView();
  const [copied, setCopied] = useState(false);
  const { isDark } = useTheme();

  const handleCopy = () => {
    navigator.clipboard.writeText('daffa@abhipraya.dev');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    {
      icon: IconMail,
      text: 'daffa@abhipraya.dev',
      href: 'mailto:daffa@abhipraya.dev',
      copyable: true,
    },
    {
      icon: IconBrandLinkedin,
      text: 'linkedin.com/in/daffaabhipraya',
      href: 'https://linkedin.com/in/daffaabhipraya',
    },
    {
      icon: IconBrandGithub,
      text: 'github.com/absolutepraya',
      href: 'https://github.com/absolutepraya',
    },
    {
      icon: IconNotebook,
      text: 'blog.abhipraya.dev',
      href: 'https://blog.abhipraya.dev',
    },
  ];

  return (
    <BlurFade
      className='relative z-20 flex w-[90vw] flex-col rounded-3xl border-contact-outer-border xl:h-112 xl:w-272 xl:max-w-4000 xl:flex-row'
      delay={0.3}
      inView
      offset={20}
    >
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
        <div className='relative flex w-full max-w-120 -rotate-2 flex-col space-y-5 rounded-2xl border border-[#e5e5e5] bg-[#fafaf9] p-7 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl md:-rotate-3 md:p-8'>
          {/* Pin decoration */}
          <img
            src={Pin}
            alt='Pin'
            className='absolute -top-12 -right-10 w-16 scale-[85%] drop-shadow-md md:scale-90'
            draggable='false'
          />

          {/* Header: PFP + Name + Title */}
          <div className='flex items-center space-x-4'>
            <img
              src={PFP}
              alt='Profile'
              className='h-12 w-12 shrink-0 rounded-full object-cover grayscale transition duration-200 hover:grayscale-0'
              draggable='false'
            />
            <div>
              <h3 className='font-instrument text-2xl text-[#1a1a2e]'>
                Daffa Abhipraya
              </h3>
              <p className='text-[#6b6b78] text-sm'>Fullstack Developer</p>
            </div>
          </div>

          {/* Separator */}
          <div className='h-px w-full bg-[#e5e5e5]' />

          {/* Links */}
          <div className='flex flex-col space-y-2.5'>
            {links.map((link) => (
              <div key={link.text} className='flex items-center space-x-2'>
                <link.icon
                  size={16}
                  stroke={1.8}
                  className='shrink-0 text-[#6b6b78]'
                />
                <a
                  href={link.href}
                  target='_blank'
                  rel='noreferrer'
                  className='font-jetbrainsmono text-[#1a1a2e] text-xs underline-offset-3 transition-colors hover:text-[#3643FC] hover:underline md:text-sm'
                >
                  {link.text}
                </a>
                {link.copyable && tabletView && (
                  <button
                    type='button'
                    className='ml-1 rounded-md p-1 text-[#6b6b78] transition-colors hover:cursor-pointer hover:bg-[#e5e5e5] hover:text-[#1a1a2e]'
                    onClick={handleCopy}
                    title='Copy email'
                  >
                    {copied ? (
                      <IconCheck size={14} stroke={2} />
                    ) : (
                      <IconCopy size={14} stroke={2} />
                    )}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Signature */}
          <Signature
            text='Abhipraya'
            fontSize={36}
            color='#1a1a2e'
            duration={1.5}
            className='mt-1 h-10 self-end'
            inView
          />
        </div>
      </BlurFade>
    </BlurFade>
  );
};

export default ContactBox;
