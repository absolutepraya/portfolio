import { expect, test } from 'bun:test';
import { readBlogFeed } from './feed';

function post(slug: string, date = '2026-01-01T00:00:00+07:00') {
  return {
    title: slug,
    url: `https://blog.abhipraya.dev/posts/${slug}/`,
    date,
    description: 'A published article.',
    image: 'https://blog.abhipraya.dev/social/card.png',
  };
}

test('keeps the three newest unique published articles', () => {
  const newest = post('newest', '2026-03-01T00:00:00+07:00');
  expect(
    readBlogFeed({
      posts: [
        post('oldest'),
        post('second', '2026-02-01'),
        newest,
        newest,
        post('third', '2026-01-15'),
      ],
    }).map((item) => item.title),
  ).toEqual(['newest', 'second', 'third']);
});

test('rejects malformed responses and skips unsafe or unpublished entries', () => {
  expect(() => readBlogFeed('<html>Challenge</html>')).toThrow();
  expect(() => readBlogFeed({ posts: null })).toThrow();
  expect(
    readBlogFeed({
      posts: [
        null,
        post('valid'),
        { ...post('invalid-date'), date: 'yesterday' },
        post('future', '2999-01-01'),
        { ...post('external'), url: 'https://example.com/posts/fake/' },
        {
          ...post('private'),
          url: 'https://blog.abhipraya.dev/private/secret/',
        },
        { ...post('script'), image: 'javascript:alert(1)' },
      ],
    }),
  ).toEqual([post('valid')]);
  expect(readBlogFeed({ posts: [] })).toEqual([]);
});
