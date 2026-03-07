import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import DesktopView from '../../lib/DesktopView';

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
  const divRef = useRef<HTMLDivElement>(null);
  const desktopView = DesktopView();

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
      className={`relative flex flex-col items-center space-y-3 rounded-3xl bg-btn-active-bg from-card-from to-card-to p-6 pt-4! transition-all duration-480 ease-in-out lg:w-180 ${isInView ? (desktopView ? 'border-opacity-100 bg-linear-to-br shadow-glowblurple' : 'border-opacity-100 bg-linear-to-br shadow-glowblurplesmall') : 'border-opacity-20'}`}
    >
      <div
        ref={divRef}
        className={`absolute top-0 h-full w-full rounded-3xl border-[3px] border-customgray border-r-0 border-b-0 ${isInView ? (desktopView ? 'border-opacity-100' : 'border-opacity-100') : 'border-opacity-20'}`}
      />
      <div
        className={`absolute -top-16 -z-10 font-black transition-all duration-380 ease-in-out md:-top-[6.6rem] ${isInView ? 'opacity-100' : 'opacity-40'}`}
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
              <div className='absolute bottom-[0.11rem] h-[1.8px] w-full rounded-full bg-linear-to-br from-[#d3d3ee] to-blurple' />
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
                  className={`absolute bottom-[0.040rem] h-[1.8px] w-full rounded-full bg-linear-to-br from-[#d3d3ee] to-blurple opacity-0 transition-all duration-480 ease-in ${isInView ? 'opacity-100' : ''}`}
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
      <div
        className={`markdown-content z-20 !md:mt-4 text-sm md:px-6 md:text-base ${isInView ? 'opacity-90' : 'opacity-70'} transition-all duration-380 ease-in-out ${alignCenter ? 'text-center' : 'text-justify'}`}
      >
        <ReactMarkdown>{desc}</ReactMarkdown>
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
