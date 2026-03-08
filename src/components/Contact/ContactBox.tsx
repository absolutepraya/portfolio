import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconCheck,
  IconCopy,
  IconMail,
  IconNotebook,
  IconPointer,
} from '@tabler/icons-react';
import { useCallback, useRef, useState } from 'react';
import PFP from '../../assets/creds/pfp.webp';
import BlurFade from '../../blocks/Animations/BlurFade';
import { FlickeringGrid } from '../../blocks/Animations/FlickeringGrid';
import SplitText from '../../blocks/TextAnimations/SplitText';
import DesktopView from '../../lib/DesktopView';
import TabletView from '../../lib/TabletView';

const ContactBox = () => {
  const desktopView = DesktopView();
  const tabletView = TabletView();
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('daffa@abhipraya.dev');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  }, []);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0.5, y: 0.5 });
  };

  const tiltX = isHovered ? (mousePos.y - 0.5) * -20 : 0;
  const tiltY = isHovered ? (mousePos.x - 0.5) * 20 : 0;

  const links = [
    {
      icon: IconMail,
      text: 'daffa@abhipraya.dev',
      href: 'mailto:daffa@abhipraya.dev',
      copyable: true,
    },
    {
      icon: IconBrandLinkedin,
      text: 'daffaabhipraya',
      href: 'https://linkedin.com/in/daffaabhipraya',
    },
    {
      icon: IconBrandGithub,
      text: 'absolutepraya',
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
      className='relative z-20 flex w-[90vw] flex-col rounded-3xl border-contact-outer-border xl:h-160 xl:w-272 xl:max-w-4000 xl:flex-row'
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
              className='fill-white text-black'
            />
            <SplitText animateBy='letters' text='AI solutions' />
          </div>
          <div className='flex items-center space-x-3 pl-6 md:pl-12'>
            <IconPointer
              size={tabletView ? 20 : 16}
              stroke={2}
              className='fill-white text-black'
            />
            <SplitText animateBy='letters' text='competitions' />
          </div>
          <div className='flex items-center space-x-3 pl-12 md:pl-24'>
            <IconPointer
              size={tabletView ? 20 : 16}
              stroke={2}
              className='fill-white text-black'
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
        {/* biome-ignore lint/a11y/noStaticElementInteractions: mouse events are decorative visual effects */}
        <div
          ref={cardRef}
          className='relative w-full max-w-120 cursor-default select-none rounded-2xl p-[3px] shadow-lg transition-shadow duration-300 hover:shadow-xl md:max-w-130'
          style={{
            aspectRatio: '3 / 2',
            background:
              'linear-gradient(135deg, #b0b0b0, #e0e0e0, #909090, #d0d0d0)',
            transform: desktopView
              ? isHovered
                ? `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`
                : 'perspective(800px) rotate(-2deg)'
              : 'rotate(-2deg)',
            transition: desktopView
              ? isHovered
                ? 'transform 0.1s ease-out, box-shadow 0.3s ease'
                : 'transform 0.4s ease-out, box-shadow 0.3s ease'
              : 'none',
          }}
          onMouseMove={desktopView ? handleMouseMove : undefined}
          onMouseEnter={desktopView ? handleMouseEnter : undefined}
          onMouseLeave={desktopView ? handleMouseLeave : undefined}
        >
          {/* Inner card — clips content inside border */}
          <div className='absolute inset-[3px] z-5 overflow-hidden rounded-xl bg-[#fafaf9]'>
            {/* Holographic shimmer overlay (inside inner card for proper clipping) */}
            <div
              className={`pointer-events-none absolute inset-0 z-10 rounded-2xl mix-blend-overlay ${!desktopView ? 'animate-[shimmer_6s_ease-in-out_infinite]' : ''}`}
              style={
                desktopView
                  ? {
                      background: `linear-gradient(
                      ${110 + (mousePos.x - 0.5) * 60}deg,
                      transparent 0%,
                      rgba(255, 255, 255, 0.1) 20%,
                      rgba(200, 220, 255, 0.15) 40%,
                      rgba(255, 200, 255, 0.1) 60%,
                      rgba(200, 255, 220, 0.12) 80%,
                      transparent 100%
                    )`,
                      opacity: isHovered ? 1 : 0.3,
                      transition: 'opacity 0.3s ease',
                    }
                  : {
                      background:
                        'linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.1) 20%, rgba(200,220,255,0.15) 40%, rgba(255,200,255,0.1) 60%, rgba(200,255,220,0.12) 80%, transparent 100%)',
                      opacity: 0.4,
                    }
              }
            />

            {/* Light reflection / spotlight (desktop only) */}
            {desktopView && (
              <div
                className='pointer-events-none absolute inset-0 z-20 rounded-2xl'
                style={{
                  background: isHovered
                    ? `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(255, 255, 255, 0.3) 0%, transparent 60%)`
                    : 'none',
                  transition: 'opacity 0.3s ease',
                }}
              />
            )}

            {/* Card content */}
            <div className='relative z-5 flex h-full flex-col p-7 md:p-8'>
              {/* Top: PFP + Name/Title */}
              <div className='flex items-center space-x-4'>
                <img
                  src={PFP}
                  alt='Profile'
                  className='h-16 w-16 shrink-0 rounded-xl object-cover grayscale transition duration-200 hover:grayscale-0 md:h-20 md:w-20'
                  draggable='false'
                />
                <div>
                  <h3
                    className='font-instrument text-[2.5rem] leading-[1.1] md:text-[3.25rem]'
                    style={{
                      background:
                        'linear-gradient(135deg, #b0b0b0, #e0e0e0, #909090, #d0d0d0)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Daffa Abhipraya
                  </h3>
                  <p className='mt-1 font-inter text-[#6b6b78] text-[10px] uppercase tracking-widest md:text-xs'>
                    Software & AI Engineer
                  </p>
                </div>
              </div>

              {/* Metallic separator */}
              <div
                className='mt-5 h-px w-full'
                style={{
                  background:
                    'linear-gradient(90deg, #c0c0c0, #e8e8e8, #a0a0a0, #d4d4d4)',
                }}
              />

              {/* Links: 2x2 grid */}
              <div className='mt-4 grid grid-cols-2 gap-x-4 gap-y-2'>
                {links.map((link) => (
                  <div
                    key={link.text}
                    className='flex items-center space-x-1.5'
                  >
                    <link.icon
                      size={14}
                      stroke={1.8}
                      className='shrink-0 text-[#6b6b78]'
                    />
                    <a
                      href={link.href}
                      target='_blank'
                      rel='noreferrer'
                      className='font-jetbrainsmono text-[#1a1a2e] text-xs underline-offset-3 transition-colors hover:text-blue-600 hover:underline md:text-sm'
                    >
                      {link.text}
                    </a>
                    {link.copyable && tabletView && (
                      <button
                        type='button'
                        className='ml-0.5 rounded-md p-0.5 text-[#6b6b78] transition-colors hover:cursor-pointer hover:bg-[#e5e5e5] hover:text-[#1a1a2e]'
                        onClick={handleCopy}
                        title='Copy email'
                      >
                        {copied ? (
                          <IconCheck size={12} stroke={2} />
                        ) : (
                          <IconCopy size={12} stroke={2} />
                        )}
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className='flex-1' />
            </div>

            {/* Bottom: FlickeringGrid graphic — flush to edges */}
            <div className='absolute inset-x-0 bottom-0 h-28'>
              <div className='pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-[#fafaf9] to-transparent' />
              <FlickeringGrid
                squareSize={6}
                gridGap={5}
                flickerChance={0.3}
                color='rgb(160, 160, 160)'
                maxOpacity={0.3}
                className='h-full w-full'
              />
            </div>
          </div>
          {/* end inner card */}
        </div>
      </BlurFade>
    </BlurFade>
  );
};

export default ContactBox;
