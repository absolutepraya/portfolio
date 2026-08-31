import { m } from 'framer-motion';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import BotBorder from '../Achievements/BotBorder';
import ExperienceDetails from './ExperienceDetails';

const COLLAPSED_HEIGHT_PX = 320; // 20rem, fixed height for collapsed descriptions
const DEFAULT_LOGO_UNDERLINE =
  'linear-gradient(to right, rgb(29, 78, 216), rgb(37, 99, 235), rgb(29, 78, 216))';

interface ExperienceBoxProps {
  title: string;
  org: string;
  logo: string;
  date: string;
  desc: string;
  url: string;
  previousTitles?: string[];
  previousDates?: string[];
  alignCenter?: boolean;
  logoRounded?: boolean;
  showDivider?: boolean;
}

const ExperienceBox = ({
  title,
  org,
  logo,
  date,
  desc,
  url,
  previousTitles,
  previousDates,
  alignCenter,
  logoRounded = false,
  showDivider = false,
}: ExperienceBoxProps) => {
  const [isInView, setIsInView] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState<number | null>(null);
  const [logoUnderline, setLogoUnderline] = useState(DEFAULT_LOGO_UNDERLINE);
  const divRef = useRef<HTMLDivElement>(null);
  const descContentRef = useRef<HTMLDivElement>(null);

  // Measure the natural description height so long rows retain the existing
  // gradient collapse while short rows stay fully visible.
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
    : isDescriptionExpanded
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
      layout
      className='relative grid w-full grid-cols-1 gap-5 p-6 transition-[opacity,transform] duration-480 ease-in-out md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] md:gap-8 md:p-8'
    >
      <div className='flex min-w-0 flex-col items-center text-center md:items-start md:pt-1 md:text-left'>
        <p
          className={`font-instrument text-3xl leading-[0.95] transition-all duration-380 ease-in-out md:text-4xl md:leading-[1.05] ${isInView ? 'opacity-90' : 'opacity-70'}`}
        >
          {title}
        </p>
        <div className='mt-2 flex flex-row items-center justify-center space-x-2 text-base md:justify-start md:text-lg'>
          <img
            src={logo}
            className={`h-5 w-5 shrink-0 ${logoRounded ? 'rounded-lg' : ''} ${isInView ? 'opacity-90' : 'opacity-70'} transition-all duration-380 ease-in-out`}
            alt={org}
            draggable='false'
          />
          <a
            className={`relative font-inter font-semibold transition-all duration-380 ease-in-out ${isInView ? 'opacity-90' : 'opacity-70'}`}
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
        </div>
        <p
          className={`mt-2 font-jetbrainsmono font-semibold text-sm transition-all duration-380 ease-in-out md:text-base ${isInView ? 'opacity-75' : 'opacity-60'}`}
        >
          {date}
        </p>
      </div>

      <ExperienceDetails
        desc={desc}
        descContentRef={descContentRef}
        currentDescHeight={currentDescHeight}
        needsCollapse={needsCollapse}
        isDescriptionExpanded={isDescriptionExpanded}
        onDescriptionToggle={() => setIsDescriptionExpanded((prev) => !prev)}
        isInView={isInView}
        alignCenter={alignCenter}
        previousTitles={previousTitles}
        previousDates={previousDates}
      />
      {showDivider && <BotBorder />}
    </m.div>
  );
};

export default ExperienceBox;
