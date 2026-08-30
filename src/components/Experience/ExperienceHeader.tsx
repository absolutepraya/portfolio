import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

interface ExperienceHeaderProps {
  title: string;
  org: string;
  url: string;
  logo: string;
  date: string;
  logoRounded: boolean;
  desktopView: boolean;
  isInView: boolean;
  logoUnderline: string;
  isOpen: boolean;
  onToggle: () => void;
  detailsId: string;
}

const ExperienceHeader = ({
  title,
  org,
  url,
  logo,
  date,
  logoRounded,
  desktopView,
  isInView,
  logoUnderline,
  isOpen,
  onToggle,
  detailsId,
}: ExperienceHeaderProps) => {
  const dateClassName = [
    'order-3',
    'whitespace-nowrap',
    'border-0',
    'bg-transparent',
    'p-0',
    'font-semibold',
    isInView ? 'opacity-75' : 'opacity-60',
    'font-jetbrainsmono',
    'text-sm',
    'transition-all',
    'duration-380',
    'ease-in-out',
    'hover:text-customwhite',
    'md:order-1',
    'md:justify-self-start',
    'md:text-base',
  ].join(' ');
  const chevronClassName =
    'absolute right-0 order-2 flex items-center justify-center border-0 bg-transparent p-1 text-text-secondary transition-colors duration-200 hover:text-customwhite md:relative md:order-3 md:right-auto md:justify-self-end';

  return (
    <div className='relative z-20 flex w-full flex-col items-center text-center md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:gap-5'>
      <button
        type='button'
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={detailsId}
        className={dateClassName}
      >
        {date}
      </button>

      <div className='order-1 flex min-w-0 flex-col items-center md:order-2 md:justify-self-center'>
        <button
          type='button'
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={detailsId}
          className={`relative border-0 bg-transparent p-0 font-instrument text-[2rem] leading-[0.95] transition-all duration-380 ease-in-out hover:text-customwhite md:text-5xl md:leading-[1.05] ${isInView ? 'opacity-90' : 'opacity-70'}`}
        >
          {title}
        </button>
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
                  background: logoUnderline,
                }}
              />
            </a>
          ) : (
            <div className='flex flex-row items-center space-x-2'>
              <img
                src={logo}
                className={`h-5 w-5 ${logoRounded ? 'rounded-lg' : ''} ${isInView ? 'opacity-90' : 'opacity-70'} transition-all duration-380 ease-in-out`}
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
              className={`h-5 w-5 ${logoRounded ? 'rounded-lg' : ''} ${isInView ? 'opacity-90' : 'opacity-70'} transition-all duration-380 ease-in-out`}
              alt={org}
              draggable='false'
            />
          )}
        </div>
      </div>

      <button
        type='button'
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={detailsId}
        aria-label={
          isOpen ? `Collapse ${title} at ${org}` : `Expand ${title} at ${org}`
        }
        className={chevronClassName}
      >
        {isOpen ? (
          <IconChevronUp size={20} stroke={2} />
        ) : (
          <IconChevronDown size={20} stroke={2} />
        )}
      </button>
    </div>
  );
};

export default ExperienceHeader;
