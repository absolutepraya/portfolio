import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { m } from 'framer-motion';
import type { RefObject } from 'react';
import ExperienceMarkdown from './ExperienceMarkdown';

interface ExperienceDetailsProps {
  desc: string;
  detailsContentRef: RefObject<HTMLDivElement | null>;
  currentContentHeight: number | 'auto';
  needsCollapse: boolean;
  isDetailsExpanded: boolean;
  onDetailsToggle: () => void;
  isInView: boolean;
  alignCenter?: boolean;
  previousTitles?: string[];
  previousDates?: string[];
}

interface ExperiencePreviousRolesProps {
  previousTitles: string[];
  previousDates: string[];
  isInView: boolean;
  variant: 'desktop' | 'mobile';
  className?: string;
}

export const ExperiencePreviousRoles = ({
  previousTitles,
  previousDates,
  isInView,
  variant,
  className = '',
}: ExperiencePreviousRolesProps) => {
  const isDesktop = variant === 'desktop';

  return (
    <m.div className={`flex w-full flex-col ${className}`}>
      <div
        className={`${isDesktop ? 'mt-4 mb-3' : 'mt-2 mb-4'} h-0.5 w-full rounded-full bg-customlightgray ${isInView ? 'opacity-90' : 'opacity-70'} transition-all duration-380 ease-in-out`}
      />
      <p
        className={`${isInView ? 'opacity-90' : 'opacity-70'} mb-2 text-sm transition-all duration-380 ease-in-out ${isDesktop ? 'md:text-sm' : 'md:text-base'}`}
      >
        Previous/other roles:
      </p>
      <div className='flex w-full flex-col space-y-2'>
        {previousTitles.map((previousTitle, index) => (
          <div
            className={`${isDesktop ? 'flex-col items-start gap-1' : 'flex-row items-center justify-between'} flex w-full`}
            key={`${previousTitle}-${previousDates[index] ?? ''}`}
          >
            <p
              className={`${isInView ? 'opacity-90' : 'opacity-70'} font-instrument transition-all duration-380 ease-in-out ${isDesktop ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'}`}
            >
              {previousTitle}
            </p>
            <p
              className={`font-jetbrainsmono font-semibold ${isInView ? 'opacity-75' : 'opacity-60'} transition-all duration-380 ease-in-out ${isDesktop ? 'text-xs md:text-sm' : 'text-sm md:text-base'}`}
            >
              {previousDates[index]}
            </p>
          </div>
        ))}
      </div>
    </m.div>
  );
};

const ExperienceDetails = ({
  desc,
  detailsContentRef,
  currentContentHeight,
  needsCollapse,
  isDetailsExpanded,
  onDetailsToggle,
  isInView,
  alignCenter,
  previousTitles,
  previousDates,
}: ExperienceDetailsProps) => (
  <div className='min-w-0'>
    <div className='z-20 flex w-full flex-col items-center'>
      <div
        className='w-full overflow-hidden'
        style={{
          height:
            currentContentHeight === 'auto'
              ? 'auto'
              : `${currentContentHeight}px`,
          maskImage:
            needsCollapse && !isDetailsExpanded
              ? 'linear-gradient(to bottom, black 65%, transparent 100%)'
              : undefined,
          WebkitMaskImage:
            needsCollapse && !isDetailsExpanded
              ? 'linear-gradient(to bottom, black 65%, transparent 100%)'
              : undefined,
        }}
      >
        <div ref={detailsContentRef} className='w-full'>
          <div
            className={`markdown-content text-sm leading-relaxed transition-all duration-380 ease-in-out md:px-6 md:text-base ${isInView ? 'opacity-90' : 'opacity-70'} ${alignCenter ? 'text-center' : 'text-justify'}`}
          >
            <ExperienceMarkdown>{desc}</ExperienceMarkdown>
          </div>
          {previousTitles && previousDates && (
            <ExperiencePreviousRoles
              previousTitles={previousTitles}
              previousDates={previousDates}
              isInView={isInView}
              variant='mobile'
              className='md:hidden'
            />
          )}
        </div>
      </div>
      {needsCollapse && (
        <button
          type='button'
          data-cuelume-toggle='toggle'
          onClick={onDetailsToggle}
          aria-expanded={isDetailsExpanded}
          className='mt-6 flex items-center space-x-1 text-sm text-text-secondary transition-colors duration-200 hover:text-customwhite'
        >
          {isDetailsExpanded ? (
            <IconChevronUp size={16} stroke={2} />
          ) : (
            <IconChevronDown size={16} stroke={2} />
          )}
          <span>{isDetailsExpanded ? 'Read less' : 'Read more'}</span>
        </button>
      )}
    </div>
  </div>
);

export default ExperienceDetails;
