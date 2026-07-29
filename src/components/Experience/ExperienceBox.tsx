import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { m } from 'framer-motion';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import ReactMarkdown from 'react-markdown';
import DesktopView from '../../lib/DesktopView';

const COLLAPSED_HEIGHT_PX = 320; // 20rem — fixed height for all collapsed cards

interface ExperienceBoxProps {
  title: string;
  org: string;
  orgShort?: string;
  logo: string;
  date: string;
  desc: string;
  url: string;
  previousTitles?: string[];
  previousDates?: string[];
  alignCenter?: boolean;
}

const ExperienceBox = ({
  title,
  org,
  orgShort,
  logo,
  date,
  desc,
  url,
  previousTitles,
  previousDates,
  alignCenter,
}: ExperienceBoxProps) => {
  const [isInView, setIsInView] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState<number | null>(null);
  const [logoColor, setLogoColor] = useState('rgb(37, 99, 235)');
  const divRef = useRef<HTMLDivElement>(null);
  const descContentRef = useRef<HTMLDivElement>(null);
  const desktopView = DesktopView();

  // Measure natural height of the description so all collapsed cards use the
  // same fixed height, and short descriptions skip the collapse entirely.
  useLayoutEffect(() => {
    if (!descContentRef.current) return;
    const measure = () => {
      if (descContentRef.current) {
        setContentHeight(descContentRef.current.scrollHeight);
      }
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(descContentRef.current);
    return () => observer.disconnect();
  }, []);

  const needsCollapse =
    contentHeight !== null && contentHeight > COLLAPSED_HEIGHT_PX;
  const currentDescHeight: number | 'auto' = !needsCollapse
    ? 'auto'
    : isExpanded
      ? (contentHeight as number)
      : COLLAPSED_HEIGHT_PX;

  const extractColor = useCallback((src: string) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      let r = 0;
      let g = 0;
      let b = 0;
      let count = 0;
      for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] < 128) continue;
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
        count++;
      }
      if (count > 0) {
        setLogoColor(
          `rgb(${Math.round(r / count)}, ${Math.round(g / count)}, ${Math.round(b / count)})`,
        );
      }
    };
    img.src = src;
  }, []);

  useEffect(() => {
    if (logo) extractColor(logo);
  }, [logo, extractColor]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      {
        root: null,
        rootMargin: '-42% 0px -42% 0px', // Adjust the viewport offset
        threshold: 0, // Trigger as soon as the element enters/exits the viewport
      },
    );

    const element = divRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <m.div
      ref={divRef}
      className={`relative flex flex-col items-center space-y-3 rounded-3xl bg-customblack p-6 pt-4! transition-all duration-480 ease-in-out lg:w-180 ${isInView ? 'shadow-2xl' : ''}`}
    >
      <div
        ref={divRef}
        className={`absolute top-0 h-full w-full rounded-3xl border border-customgray ${isInView ? 'border-opacity-100' : 'border-opacity-20'}`}
      />
      <div
        className={`absolute -top-14 -z-10 font-black transition-all duration-500 ease-in-out md:-top-[6rem] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
      >
        <p
          className='bg-linear-to-b from-0% to-67% bg-clip-text text-[3.3rem] text-transparent tracking-wide md:text-[6rem]'
          style={{
            backgroundImage:
              'linear-gradient(to bottom, var(--color-text-primary-70) 0%, var(--color-text-primary-0) 67%)',
          }}
        >
          {orgShort ? orgShort : org}
        </p>
      </div>
      <div className='z-20 flex flex-col items-center space-y-0 text-center md:space-y-0'>
        <p
          className={`relative font-instrument text-4xl md:text-5xl ${isInView ? 'opacity-90' : 'opacity-70'} transition-all duration-380 ease-in-out`}
        >
          {title}
        </p>
        <div className='flex flex-col items-center justify-center md:flex-row md:space-x-2 md:text-lg'>
          {desktopView ? (
            <a
              className={`relative w-45% font-inter font-semibold ${isInView ? 'opacity-90' : 'opacity-70'} transition-all duration-380 ease-in-out`}
              href={url}
              target='_blank'
              rel='noreferrer'
              title={`Open ${org} website`}
            >
              {org}
              <div
                className='absolute bottom-[0.11rem] h-[1.8px] w-full rounded-full'
                style={{
                  background: logoColor,
                }}
              />
            </a>
          ) : (
            <div className='flex flex-row items-center space-x-2'>
              <img
                src={logo}
                className={`h-5 w-5 ${isInView ? 'opacity-90' : 'opacity-70'} transition-all duration-380 ease-in-out`}
                alt={org}
                draggable='false'
              />
              <a
                className={`relative w-45% font-inter font-semibold ${isInView ? 'opacity-90' : 'opacity-70'} transition-all duration-380 ease-in-out`}
                href={url}
                target='_blank'
                rel='noreferrer'
                title={`Open ${org} website`}
              >
                {org}
                <div
                  className={`absolute bottom-[0.040rem] h-[1.8px] w-full rounded-full opacity-0 transition-all duration-480 ease-in ${isInView ? 'opacity-100' : ''}`}
                  style={{
                    background: logoColor,
                  }}
                />
              </a>
            </div>
          )}
          {desktopView && (
            <img
              src={logo}
              className={`h-5 w-5 ${isInView ? 'opacity-90' : 'opacity-70'} transition-all duration-380 ease-in-out`}
              alt={org}
              draggable='false'
            />
          )}
          <p
            className={`w-45% font-semibold ${isInView ? 'opacity-75' : 'opacity-60'} font-jetbrainsmono transition-all duration-380 ease-in-out`}
          >
            {date}
          </p>
        </div>
      </div>
      <div className='z-20 flex w-full flex-col items-center'>
        <div
          className='w-full overflow-hidden'
          style={{
            height:
              currentDescHeight === 'auto' ? 'auto' : `${currentDescHeight}px`,
            maskImage:
              needsCollapse && !isExpanded
                ? 'linear-gradient(to bottom, black 65%, transparent 100%)'
                : undefined,
            WebkitMaskImage:
              needsCollapse && !isExpanded
                ? 'linear-gradient(to bottom, black 65%, transparent 100%)'
                : undefined,
          }}
        >
          <div
            ref={descContentRef}
            className={`markdown-content text-sm transition-[opacity] duration-380 ease-in-out md:px-6 md:text-base ${isInView ? 'opacity-90' : 'opacity-70'} ${alignCenter ? 'text-center' : 'text-justify'}`}
          >
            <ReactMarkdown>{desc}</ReactMarkdown>
          </div>
        </div>
        {needsCollapse && (
          <button
            type='button'
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
            aria-label={isExpanded ? 'Show less' : 'Show more'}
            className='mt-6 flex items-center space-x-1 text-sm text-text-secondary transition-colors duration-200 hover:text-customwhite'
          >
            {isExpanded ? (
              <IconChevronUp size={16} stroke={2} />
            ) : (
              <IconChevronDown size={16} stroke={2} />
            )}
            <span>{isExpanded ? 'Read less' : 'Read more'}</span>
          </button>
        )}
      </div>

      {previousTitles && previousDates && (
        <m.div className={'flex w-full flex-col'}>
          <div
            className={`mt-2 mb-4 h-0.5 w-full rounded-full bg-customlightgray ${isInView ? 'opacity-90' : 'opacity-70'} transition-all duration-380 ease-in-out`}
          />
          <p
            className={`${isInView ? 'opacity-90' : 'opacity-70'} mb-2 text-sm transition-all duration-380 ease-in-out md:text-base`}
          >
            Previous/other roles:
          </p>
          <div className='flex w-full flex-col space-y-2'>
            {previousTitles.map((title, index) => {
              const date = previousDates[index];
              return (
                <div
                  className='flex w-full flex-row items-center justify-between'
                  key={`${title}-${date ?? ''}`}
                >
                  <p
                    className={`${isInView ? 'opacity-90' : 'opacity-70'} font-instrument text-xl transition-all duration-380 ease-in-out md:text-2xl`}
                  >
                    {title}
                  </p>
                  <p
                    className={`font-jetbrainsmono font-semibold ${isInView ? 'opacity-75' : 'opacity-60'} text-sm transition-all duration-380 ease-in-out md:text-base`}
                  >
                    {date}
                  </p>
                </div>
              );
            })}
          </div>
        </m.div>
      )}
    </m.div>
  );
};

export default ExperienceBox;
