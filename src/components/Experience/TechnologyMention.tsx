import type { ReactNode } from 'react';

interface TechnologyMentionProps {
  children: ReactNode;
  href?: string;
  label?: string;
  logo?: string;
}

const TechnologyMention = ({
  children,
  href,
  label,
  logo,
}: TechnologyMentionProps) => {
  const content = (
    <>
      <span>{children}</span>
      {logo && (
        <img
          src={logo}
          alt=''
          aria-hidden='true'
          className='inline-block h-[0.95em] w-[0.95em] shrink-0 object-contain'
          draggable='false'
        />
      )}
    </>
  );

  const className = 'inline-flex items-center gap-1 align-baseline';

  if (!href) {
    return <span className={className}>{content}</span>;
  }

  return (
    <a
      className={`${className} technology-link no-underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-blurple focus-visible:outline-offset-3`}
      href={href}
      target='_blank'
      rel='noreferrer'
      aria-label={label ? `Open ${label} homepage` : undefined}
    >
      {content}
    </a>
  );
};

export default TechnologyMention;
