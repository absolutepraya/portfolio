export interface BlogPost {
  title: string;
  url: string;
  date: string;
  description: string;
  image: string;
}

function isBlogUrl(value: unknown): value is string {
  if (typeof value !== 'string') return false;
  try {
    const url = new URL(value);
    return url.origin === 'https://blog.abhipraya.dev';
  } catch {
    return false;
  }
}

function isImageUrl(value: unknown): value is string {
  if (typeof value !== 'string') return false;
  try {
    return new URL(value).protocol === 'https:';
  } catch {
    return false;
  }
}

export function readBlogFeed(data: unknown): BlogPost[] {
  if (!data || typeof data !== 'object' || !('posts' in data)) {
    throw new Error('Invalid blog feed');
  }
  if (!Array.isArray(data.posts)) throw new Error('Invalid blog posts');

  const posts = data.posts.filter((post): post is BlogPost => {
    return (
      post &&
      typeof post === 'object' &&
      typeof post.title === 'string' &&
      post.title.trim().length > 0 &&
      typeof post.description === 'string' &&
      typeof post.date === 'string' &&
      Number.isFinite(Date.parse(post.date)) &&
      Date.parse(post.date) <= Date.now() &&
      isBlogUrl(post.url) &&
      new URL(post.url).pathname.startsWith('/posts/') &&
      isImageUrl(post.image)
    );
  });

  return posts
    .filter(
      (post, index) => posts.findIndex((p) => p.url === post.url) === index,
    )
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    .slice(0, 3);
}
