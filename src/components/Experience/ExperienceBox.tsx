import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import DesktopView from '../../lib/DesktopView';
import ExperienceMarkdown from './ExperienceMarkdown';

const COLLAPSED_HEIGHT_PX = 320; // 20rem — fixed height for all collapsed cards
const DEFAULT_LOGO_UNDERLINE =
  'linear-gradient(to right, rgb(29, 78, 216), rgb(37, 99, 235), rgb(29, 78, 216))';

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
  const [logoUnderline, setLogoUnderline] = useState(DEFAULT_LOGO_UNDERLINE);
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
      let red = 0;
      let green = 0;
      let blue = 0;
      let count = 0;
      for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] < 128) continue;
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const max = Math.max(r, g, b) / 255;
        const min = Math.min(r, g, b) / 255;
        const lightness = (max + min) / 2;
        const saturation =
          max === min ? 0 : (max - min) / (1 - Math.abs(2 * lightness - 1));

        // Ignore white and pastel logo pixels, which otherwise wash out the accent.
        if (lightness > 0.72 || saturation < 0.12) continue;

        red += r;
        green += g;
        blue += b;
        count++;
      }
      if (count > 0) {
        const r = Math.round(red / count);
        const g = Math.round(green / count);
        const b = Math.round(blue / count);
        const darker = `rgb(${Math.round(r * 0.75)}, ${Math.round(g * 0.75)}, ${Math.round(b * 0.75)})`;
        const color = `rgb(${r}, ${g}, ${b})`;
        setLogoUnderline(
          `linear-gradient(to right, ${darker}, ${color}, ${darker})`,
        );
      } else {
        setLogoUnderline(DEFAULT_LOGO_UNDERLINE);
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

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <motion.div
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
          className={`relative font-instrument text-[2rem] md:text-5xl ${isInView ? 'opacity-90' : 'opacity-70'} transition-all duration-380 ease-in-out`}
        >
          {title}
        </p>
        <div className='-mt-1 flex flex-col items-center justify-center md:mt-0 md:flex-row md:space-x-2 md:text-lg'>
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
                  background: logoUnderline,
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
                    background: logoUnderline,
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
            className={`w-45% font-semibold ${isInView ? 'opacity-75' : 'opacity-60'} font-jetbrainsmono text-sm transition-all duration-380 ease-in-out md:text-base`}
          >
            {date}
          </p>
        </div>
      </div>
      <div className='z-20 flex w-full flex-col items-center'>
        <div
          className='w-full overflow-hidden transition-[height] duration-500 ease-in-out'
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
            className={`markdown-content text-sm leading-relaxed transition-all duration-380 ease-in-out md:px-6 md:text-base ${isInView ? 'opacity-90' : 'opacity-70'} ${alignCenter ? 'text-center' : 'text-justify'}`}
          >
            <ExperienceMarkdown>{desc}</ExperienceMarkdown>
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
        <motion.div className={'flex w-full flex-col'}>
          <div
            className={`mt-2 mb-4 h-0.5 w-full rounded-full bg-customlightgray ${isInView ? 'opacity-90' : 'opacity-70'} transition-all duration-380 ease-in-out`}
          />
          <p
            className={`${isInView ? 'opacity-90' : 'opacity-70'} mb-2 text-sm transition-all duration-380 ease-in-out md:text-base`}
          >
            Previous/other roles:
          </p>
          <div className='flex w-full flex-col space-y-2'>
            {previousTitles
              .map((previousTitle, index) => ({
                key: `${previousTitle}-${previousDates[index] ?? ''}-${index}`,
                title: previousTitle,
                date: previousDates[index],
              }))
              .map((role) => (
                <div
                  className='flex w-full flex-row items-center justify-between'
                  key={role.key}
                >
                  <p
                    className={`${isInView ? 'opacity-90' : 'opacity-70'} font-instrument text-xl transition-all duration-380 ease-in-out md:text-2xl`}
                  >
                    {role.title}
                  </p>
                  <p
                    className={`font-jetbrainsmono font-semibold ${isInView ? 'opacity-75' : 'opacity-60'} font-jetbrainsmono text-sm transition-all duration-380 ease-in-out md:text-base`}
                  >
                    {role.date}
                  </p>
                </div>
              ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ExperienceBox;
