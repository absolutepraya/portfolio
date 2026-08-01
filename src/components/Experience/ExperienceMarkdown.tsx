import type { ReactNode } from 'react';
import type { Components } from 'react-markdown';
import ReactMarkdown from 'react-markdown';
import {
  getPlainTechnologyByLabel,
  getTechnologyByHref,
} from '../../data/tech_mentions';
import TechnologyMention from './TechnologyMention';

interface ExperienceMarkdownProps {
  children: string;
}

const getTextContent = (children: ReactNode) => {
  if (typeof children === 'string') return children;
  if (
    !Array.isArray(children) ||
    !children.every((child) => typeof child === 'string')
  ) {
    return undefined;
  }
  return children.join('');
};

const components: Components = {
  a: ({ children, href, node: _node, ...props }) => {
    const technology = href ? getTechnologyByHref(href) : undefined;

    if (technology) {
      return (
        <TechnologyMention
          href={href}
          label={getTextContent(children)}
          logo={technology.logo}
        >
          {children}
        </TechnologyMention>
      );
    }

    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  },
  strong: ({ children, node: _node, ...props }) => {
    const text = getTextContent(children);
    const technology = text ? getPlainTechnologyByLabel(text) : undefined;

    if (technology) {
      return (
        <TechnologyMention logo={technology.logo}>{children}</TechnologyMention>
      );
    }

    return <strong {...props}>{children}</strong>;
  },
};

const ExperienceMarkdown = ({ children }: ExperienceMarkdownProps) => (
  <ReactMarkdown components={components}>{children}</ReactMarkdown>
);

export default ExperienceMarkdown;
