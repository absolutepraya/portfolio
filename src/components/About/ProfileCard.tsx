import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconCheck,
  IconCopy,
  IconMail,
  IconNotebook,
} from '@tabler/icons-react';
import {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import PFP from '../../assets/creds/pfp.webp';
import BlurFade from '../../blocks/Animations/BlurFade';

const Dither = lazy(() => import('../../blocks/Animations/Dither'));

const MOBILE_CARD_WIDTH_PX = 520;
const MOBILE_CARD_HEIGHT_PX = (MOBILE_CARD_WIDTH_PX * 2) / 3;
const CARD_WIDTH_PX = 580;
const CARD_HEIGHT_PX = 387;

const links = [
  {
    icon: IconMail,
    text: 'daffaabhiprayaputra@gmail.com',
    href: 'mailto:daffaabhiprayaputra@gmail.com',
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

const ProfileCard = () => {
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const cardStageRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);
  const [ready, setReady] = useState(false);
  const [cardScale, setCardScale] = useState(1);
  const [stageHeight, setStageHeight] = useState<number>();

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useLayoutEffect(() => {
    if (!cardStageRef.current) return;

    const updateScale = () => {
      const width = cardStageRef.current?.clientWidth ?? CARD_WIDTH_PX;
      const viewportWidth = window.innerWidth;
      const baseWidth =
        viewportWidth < 768 ? MOBILE_CARD_WIDTH_PX : CARD_WIDTH_PX;
      const baseHeight =
        viewportWidth < 768 ? MOBILE_CARD_HEIGHT_PX : CARD_HEIGHT_PX;
      const maximumScale =
        viewportWidth < 640 ? 0.7 : viewportWidth < 768 ? 0.8 : 1.2;
      const nextScale =
        viewportWidth < 1024 ? Math.min(width / baseWidth, maximumScale) : 1;

      setCardScale((currentScale) =>
        currentScale === nextScale ? currentScale : nextScale,
      );
      setStageHeight(viewportWidth < 1024 ? baseHeight * nextScale : undefined);
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(cardStageRef.current);
    window.addEventListener('resize', updateScale);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateScale);
    };
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('daffaabhiprayaputra@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const updatePosition = useCallback((clientX: number, clientY: number) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width;
    const y = (clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) =>
      updatePosition(e.clientX, e.clientY),
    [updatePosition],
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      e.preventDefault();
      const touch = e.touches[0];
      updatePosition(touch.clientX, touch.clientY);
    },
    [updatePosition],
  );

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0.5, y: 0.5 });
  };
  const handleTouchStart = () => setIsHovered(true);
  const handleTouchEnd = () => {
    setIsHovered(false);
    setMousePos({ x: 0.5, y: 0.5 });
  };

  const tiltX = isHovered ? (mousePos.y - 0.5) * -20 : 0;
  const tiltY = isHovered ? (mousePos.x - 0.5) * 20 : 0;
  const cardTransform = cardScale === 1 ? undefined : `scale(${cardScale})`;

  return (
    <BlurFade
      className='flex w-full flex-col items-center justify-center space-y-2 p-3 sm:p-6 lg:w-auto'
      delay={0.3}
      offset={30}
    >
      <div
        ref={cardStageRef}
        className='relative flex w-full items-start justify-center'
        style={
          {
            height: stageHeight ? `${stageHeight}px` : undefined,
          } as React.CSSProperties
        }
      >
        {/* biome-ignore lint/a11y/noStaticElementInteractions: mouse events are decorative visual effects */}
        <div
          ref={cardRef}
          className={`relative w-full min-w-130 max-w-130 origin-top cursor-default select-none rounded-2xl p-[4px] shadow-2xl transition-shadow duration-300 hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.4)] md:h-[387px] md:w-145 md:min-w-145 md:max-w-145 lg:h-auto lg:w-full lg:min-w-145 lg:max-w-145 ${ready && !isHovered && cardScale === 1 ? 'animate-[cardHint_4s_linear_infinite]' : ''}`}
          style={{
            aspectRatio: '3 / 2',
            background:
              'linear-gradient(135deg, #919191 0%, #dedede 18%, #fafafa 31%, #b3b3b3 46%, #f0f0f0 62%, #9d9d9d 82%, #cecece 100%)',
            transform: cardTransform,
            ...(!ready && {
              transition: 'transform 0.4s ease-out, box-shadow 0.3s ease',
            }),
            ...(ready &&
              isHovered && {
                transform: `${cardTransform ?? ''} perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`,
                transition: 'transform 0.1s ease-out, box-shadow 0.3s ease',
              }),
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Border reflection stays beneath the inner card, so it only catches the silver bevel. */}
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-0 z-0 rounded-2xl'
            style={{
              background: isHovered
                ? `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(255, 255, 255, 0.62) 0%, rgba(255, 255, 255, 0.24) 30%, transparent 62%)`
                : 'none',
              transition: 'opacity 0.3s ease',
            }}
          />

          {/* Inner card — clips content inside border */}
          <div
            className='absolute inset-[4px] z-5 overflow-hidden rounded-xl'
            style={{
              background:
                'linear-gradient(145deg, #666666, #a0a0a0, #747474, #959595)',
            }}
          >
            {/* Holographic shimmer overlay (inside inner card for proper clipping) */}
            <div
              className='pointer-events-none absolute inset-0 z-10 rounded-2xl mix-blend-overlay'
              style={{
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
              }}
            />

            {/* Light reflection / spotlight */}
            <div
              className='pointer-events-none absolute inset-0 z-20 rounded-2xl'
              style={{
                background: isHovered
                  ? `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(255, 255, 255, 0.3) 0%, transparent 60%)`
                  : 'none',
                transition: 'opacity 0.3s ease',
              }}
            />

            {/* Card content */}
            <div className='relative z-5 flex h-full flex-col p-7 lg:p-8'>
              {/* Top: PFP + Name/Title */}
              <div className='flex items-center space-x-4'>
                <img
                  src={PFP}
                  alt='Profile'
                  className='h-20 w-20 shrink-0 rounded-xl object-cover grayscale transition duration-200 hover:grayscale-0 md:h-24 md:w-24'
                  draggable='false'
                />
                <div>
                  <h3
                    className='inline-block font-bold font-instrument text-[3rem] text-transparent leading-[1.1] md:text-[3.75rem]'
                    style={{
                      backgroundImage:
                        'linear-gradient(135deg, #ffffff, #e8e8e8, #ffffff, #f0f0f0)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                    }}
                  >
                    Daffa Abhipraya
                  </h3>
                  <p className='mt-1.5 whitespace-nowrap font-inter text-[0.9375rem] text-white tracking-normal md:text-[1.1875rem]'>
                    AI Engineer, 6x Hackathon Winner
                  </p>
                </div>
              </div>

              {/* Metallic separator */}
              <div
                className='mt-5 h-0.5 w-full'
                style={{
                  background:
                    'linear-gradient(90deg, rgba(255,255,255,0.3), rgba(255,255,255,0.6), rgba(255,255,255,0.3))',
                }}
              />

              {/* Links: 2x2 grid */}
              <div className='mt-4 grid grid-cols-2 gap-x-4 gap-y-2'>
                {links.map((link) => (
                  <div
                    key={link.text}
                    className={`flex items-center space-x-1.5 ${link.copyable ? 'col-span-2' : ''}`}
                  >
                    {link.copyable ? (
                      <button
                        type='button'
                        className='shrink-0 text-white/70 transition-colors hover:cursor-pointer hover:text-white'
                        onClick={handleCopy}
                        title='Copy email'
                      >
                        {copied ? (
                          <IconCheck size={20} stroke={1.8} />
                        ) : (
                          <IconCopy size={20} stroke={1.8} />
                        )}
                      </button>
                    ) : (
                      <link.icon
                        size={20}
                        stroke={1.8}
                        className='shrink-0 text-white/70'
                      />
                    )}
                    <a
                      href={link.href}
                      target='_blank'
                      rel='noreferrer'
                      className={`font-jetbrainsmono text-white underline-offset-3 transition-colors hover:text-white/70 hover:underline ${link.copyable ? 'text-[0.75rem] md:text-[0.875rem]' : 'text-[1.0625rem] md:text-[1.1875rem]'}`}
                    >
                      {link.text}
                    </a>
                  </div>
                ))}
              </div>

              <div className='flex-1' />
            </div>

            {/* Bottom: dithered wave graphic, flush to edges */}
            <div
              className='absolute inset-x-0 bottom-0 h-32 overflow-hidden rounded-b-xl opacity-55 mix-blend-screen'
              style={{
                clipPath: 'inset(0 round 0 0 0.75rem 0.75rem)',
                maskImage:
                  'linear-gradient(to bottom, transparent 0%, black 100%)',
                WebkitClipPath: 'inset(0 round 0 0 0.75rem 0.75rem)',
                WebkitMaskImage:
                  'linear-gradient(to bottom, transparent 0%, black 100%)',
              }}
            >
              <Suspense fallback={null}>
                <Dither
                  colorNum={3}
                  enableMouseInteraction={false}
                  mouseRadius={0.35}
                  pixelSize={5}
                  waveAmplitude={0.25}
                  waveColor={[0.9, 0.9, 0.9]}
                  waveFrequency={2.2}
                  waveSpeed={0.025}
                />
              </Suspense>
            </div>
          </div>
          {/* end inner card */}
        </div>
      </div>
    </BlurFade>
  );
};

export default ProfileCard;
