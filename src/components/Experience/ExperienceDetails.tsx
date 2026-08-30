import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { m } from 'framer-motion';
import type { RefObject } from 'react';
import ExperienceMarkdown from './ExperienceMarkdown';

interface ExperienceDetailsProps {
  desc: string;
  descContentRef: RefObject<HTMLDivElement | null>;
  currentDescHeight: number | 'auto';
  needsCollapse: boolean;
  isDescriptionExpanded: boolean;
  onDescriptionToggle: () => void;
  isInView: boolean;
  alignCenter?: boolean;
  previousTitles?: string[];
  previousDates?: string[];
}

const ExperienceDetails = ({
  desc,
  descContentRef,
  currentDescHeight,
  needsCollapse,
  isDescriptionExpanded,
  onDescriptionToggle,
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
            currentDescHeight === 'auto' ? 'auto' : `${currentDescHeight}px`,
          maskImage:
            needsCollapse && !isDescriptionExpanded
              ? 'linear-gradient(to bottom, black 65%, transparent 100%)'
              : undefined,
          WebkitMaskImage:
            needsCollapse && !isDescriptionExpanded
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
          onClick={onDescriptionToggle}
          aria-expanded={isDescriptionExpanded}
          aria-label={isDescriptionExpanded ? 'Show less' : 'Show more'}
          className='mt-6 flex items-center space-x-1 text-sm text-text-secondary transition-colors duration-200 hover:text-customwhite'
        >
          {isDescriptionExpanded ? (
            <IconChevronUp size={16} stroke={2} />
          ) : (
            <IconChevronDown size={16} stroke={2} />
          )}
          <span>{isDescriptionExpanded ? 'Read less' : 'Read more'}</span>
        </button>
      )}
    </div>

    {previousTitles && previousDates && (
      <m.div className='flex w-full flex-col'>
        <div
          className={`mt-2 mb-4 h-0.5 w-full rounded-full bg-customlightgray ${isInView ? 'opacity-90' : 'opacity-70'} transition-all duration-380 ease-in-out`}
        />
        <p
          className={`${isInView ? 'opacity-90' : 'opacity-70'} mb-2 text-sm transition-all duration-380 ease-in-out md:text-base`}
        >
          Previous/other roles:
        </p>
        <div className='flex w-full flex-col space-y-2'>
          {previousTitles.map((previousTitle, index) => (
            <div
              className='flex w-full flex-row items-center justify-between'
              key={`${previousTitle}-${previousDates[index] ?? ''}`}
            >
              <p
                className={`${isInView ? 'opacity-90' : 'opacity-70'} font-instrument text-xl transition-all duration-380 ease-in-out md:text-2xl`}
              >
                {previousTitle}
              </p>
              <p
                className={`font-jetbrainsmono font-semibold ${isInView ? 'opacity-75' : 'opacity-60'} text-sm transition-all duration-380 ease-in-out md:text-base`}
              >
                {previousDates[index]}
              </p>
            </div>
          ))}
        </div>
      </m.div>
    )}
  </div>
);

export default ExperienceDetails;
