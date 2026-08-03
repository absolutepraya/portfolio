import { expect, test } from 'bun:test';
import { renderToStaticMarkup } from 'react-dom/server';
import ExperienceMarkdown from './ExperienceMarkdown';

test('links and displays a mapped technology only at its first occurrence', () => {
  const markup = renderToStaticMarkup(
    <ExperienceMarkdown>
      {
        '[Redis](https://redis.io/) caches data, then [Redis](https://redis.io/) refreshes it.'
      }
    </ExperienceMarkdown>,
  );

  expect(markup.match(/href="https:\/\/redis\.io\//g)).toHaveLength(1);
  expect(markup).toContain('then Redis refreshes it.');
});
