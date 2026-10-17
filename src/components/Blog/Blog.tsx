import { IconArrowUpRight } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { PopButton } from '../pop-button';
import { type BlogPost, readBlogFeed } from './feed';

type FeedState =
  | { status: 'loading' }
  | { status: 'ready'; posts: BlogPost[] }
  | { status: 'error' };

const dateFormat = new Intl.DateTimeFormat('en', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'Asia/Jakarta',
});

function BlogCard({ post }: { post: BlogPost }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className='h-full min-w-0'>
      <a
        className='group flex h-full flex-col overflow-hidden rounded-2xl border border-customwhite/10 bg-customwhite/3 transition-colors hover:border-customwhite/30 focus-visible:outline-2 focus-visible:outline-blurple focus-visible:outline-offset-4'
        href={post.url}
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className='aspect-1200/630 w-full overflow-hidden border-customwhite/10 border-b bg-customwhite/5'>
          {imageFailed ? (
            <div className='flex h-full items-center justify-center font-instrument text-3xl text-text-secondary'>
              ~/abhipraya
            </div>
          ) : (
            <img
              className='h-full w-full object-contain'
              src={post.image}
              alt=''
              width={1200}
              height={630}
              loading='lazy'
              decoding='async'
              onError={() => setImageFailed(true)}
            />
          )}
        </div>
        <div className='flex grow flex-col gap-4 p-6'>
          <time
            dateTime={post.date}
            className='font-jetbrainsmono text-text-secondary text-xs'
          >
            {dateFormat.format(new Date(post.date))}
          </time>
          <h3 className='break-words font-instrument text-3xl leading-tight transition-colors group-hover:text-blurple'>
            {post.title}
          </h3>
          <p className='line-clamp-3 break-words text-sm text-text-secondary leading-relaxed md:text-base'>
            {post.description}
          </p>
          <span className='mt-auto flex items-center gap-1 pt-2 font-jetbrainsmono text-sm'>
            Read article <IconArrowUpRight size={18} aria-hidden='true' />
          </span>
        </div>
      </a>
    </article>
  );
}

export default function Blog() {
  const [feed, setFeed] = useState<FeedState>({ status: 'loading' });

  useEffect(() => {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 12000);
    let active = true;

    async function load() {
      try {
        const response = await fetch(
          import.meta.env.VITE_BLOG_FEED_URL ||
            'https://blog.abhipraya.dev/feed.json',
          {
            signal: controller.signal,
            credentials: 'omit',
          },
        );
        if (!response.ok) throw new Error('Blog unavailable');
        const posts = readBlogFeed(await response.json());
        if (active) setFeed({ status: 'ready', posts });
      } catch {
        if (active) setFeed({ status: 'error' });
      } finally {
        window.clearTimeout(timeout);
      }
    }

    void load();
    return () => {
      active = false;
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  return (
    <section
      id='blogsec'
      aria-labelledby='blog-heading'
      className='relative z-10 w-[90vw] space-y-10 xl:w-272'
    >
      <div id='blog' className='absolute -top-36' />
      <div className='flex flex-col items-center lg:flex-row lg:gap-8'>
        <h2
          id='blog-heading'
          className='bg-linear-to-br from-customwhite to-text-secondary bg-clip-text font-instrument text-6xl text-transparent md:text-7xl'
        >
          Blog
        </h2>
        <div className='mt-1 h-0.5 w-full bg-linear-to-r from-customwhite to-text-secondary opacity-60 md:mt-2 lg:mt-3 lg:w-auto lg:grow lg:bg-customwhite lg:opacity-20' />
      </div>
      <div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
        <p className='text-sm text-text-secondary md:text-base'>
          Thoughts on software, systems, and stuff.
        </p>
        <PopButton asChild size='sm' className='gap-1 font-jetbrainsmono'>
          <a
            href='https://blog.abhipraya.dev/'
            target='_blank'
            rel='noopener noreferrer'
          >
            All articles <IconArrowUpRight size={18} aria-hidden='true' />
          </a>
        </PopButton>
      </div>
      <div aria-live='polite' aria-busy={feed.status === 'loading'}>
        {feed.status === 'loading' && (
          <p className='py-12 text-center text-text-secondary'>
            Loading the latest articles…
          </p>
        )}
        {feed.status === 'error' && (
          <p className='py-12 text-center text-text-secondary'>
            The latest articles couldn’t load. You can still read them on the
            blog.
          </p>
        )}
        {feed.status === 'ready' &&
          (feed.posts.length ? (
            <div className='grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {feed.posts.map((post) => (
                <BlogCard key={post.url} post={post} />
              ))}
            </div>
          ) : (
            <p className='py-12 text-center text-text-secondary'>
              New articles are on their way.
            </p>
          ))}
      </div>
    </section>
  );
}
