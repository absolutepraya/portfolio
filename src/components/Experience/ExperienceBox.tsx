import { AnimatePresence, m } from 'framer-motion';
import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import DesktopView from '../../lib/DesktopView';
import ExperienceDetails from './ExperienceDetails';
import ExperienceHeader from './ExperienceHeader';

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
  logoRounded?: boolean;
  isOpen: boolean;
  onToggle: () => void;
  isDescriptionExpanded: boolean;
  onDescriptionToggle: () => void;
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
  logoRounded = false,
  isOpen,
  onToggle,
  isDescriptionExpanded,
  onDescriptionToggle,
}: ExperienceBoxProps) => {
  const [isInView, setIsInView] = useState(false);
  const [contentHeight, setContentHeight] = useState<number | null>(null);
  const [logoUnderline, setLogoUnderline] = useState(DEFAULT_LOGO_UNDERLINE);
  const divRef = useRef<HTMLDivElement>(null);
  const descContentRef = useRef<HTMLDivElement>(null);
  const desktopView = DesktopView();
  const detailsId = useId();

  // Measure the description only while its role details are mounted. Short
  // descriptions skip the gradient collapse entirely.
  useLayoutEffect(() => {
    if (!isOpen || !descContentRef.current) return;

    const measure = () => {
      if (descContentRef.current) {
        setContentHeight(descContentRef.current.scrollHeight);
      }
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(descContentRef.current);
    return () => observer.disconnect();
  }, [isOpen]);

  const needsCollapse =
    isOpen && contentHeight !== null && contentHeight > COLLAPSED_HEIGHT_PX;
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
      className={`relative flex flex-col items-center space-y-3 rounded-3xl bg-customblack p-6 pt-4! transition-all duration-480 ease-in-out lg:w-180 ${isInView ? 'shadow-2xl' : ''}`}
    >
      <div
        className={`pointer-events-none absolute top-0 h-full w-full rounded-3xl border border-customgray ${isInView ? 'border-opacity-100' : 'border-opacity-20'}`}
      />
      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            key='organization-label'
            initial={{ opacity: 0, y: 24 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 24,
            }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
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
          </m.div>
        )}
      </AnimatePresence>

      <ExperienceHeader
        title={title}
        org={org}
        url={url}
        logo={logo}
        date={date}
        logoRounded={logoRounded}
        desktopView={desktopView}
        isInView={isInView}
        logoUnderline={logoUnderline}
        isOpen={isOpen}
        onToggle={onToggle}
        detailsId={detailsId}
      />

      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            id={detailsId}
            key='role-details'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.38, ease: 'easeInOut' }}
            layout
            className='w-full overflow-hidden'
          >
            <ExperienceDetails
              desc={desc}
              descContentRef={descContentRef}
              currentDescHeight={currentDescHeight}
              needsCollapse={needsCollapse}
              isDescriptionExpanded={isDescriptionExpanded}
              onDescriptionToggle={onDescriptionToggle}
              isInView={isInView}
              alignCenter={alignCenter}
              previousTitles={previousTitles}
              previousDates={previousDates}
            />
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
};

export default ExperienceBox;
