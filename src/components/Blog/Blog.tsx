import './Blog.css';
import { IconArrowUpRight } from '@tabler/icons-react';
import { m, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import BlogFavicon from '../../assets/blog-favicon.png';
import DesktopView from '../../lib/DesktopView';
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
    <article className='blog-card'>
      <div className='blog-preview'>
        {imageFailed ? (
          <span>~/abhipraya</span>
        ) : (
          <img
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
      <div className='blog-copy'>
        <h3>
          <a href={post.url} target='_blank' rel='noopener noreferrer'>
            {post.title}
          </a>
        </h3>
        <p>{post.description}</p>
      </div>
      <div className='blog-card-footer'>
        <time dateTime={post.date}>
          {dateFormat.format(new Date(post.date))}
        </time>
        <a
          className='blog-read-link'
          href={post.url}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={`Read article: ${post.title}`}
        >
          Read article <IconArrowUpRight size={18} aria-hidden='true' />
        </a>
      </div>
    </article>
  );
}

export default function Blog() {
  const desktopView = DesktopView();
  const reducedMotion = useReducedMotion();
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
      className='blog-gallery relative z-10 w-[90vw] xl:w-272'
    >
      <div id='blog' className='absolute -top-36' />
      <div className='blog-heading flex flex-col items-center lg:flex-row lg:space-x-8'>
        <m.h2
          id='blog-heading'
          className='bg-linear-to-br from-customwhite to-text-secondary bg-clip-text font-instrument text-6xl text-transparent md:text-7xl'
          initial={{ opacity: 0, y: reducedMotion ? 0 : '40px' }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'circOut' },
          }}
          viewport={{ margin: desktopView ? '-100px' : '-14px', once: true }}
        >
          Writings to share
        </m.h2>
        <div
          aria-hidden='true'
          className={`relative mt-1 w-full max-w-none rounded-full md:mt-2 lg:mt-3 lg:w-auto lg:max-w-4000 lg:grow ${desktopView ? 'h-0.5 bg-customwhite opacity-20' : 'h-0.5 bg-linear-to-r from-customwhite to-text-secondary opacity-60'}`}
        >
          {!reducedMotion && (
            <m.div
              className='absolute h-1 w-full bg-page-bg shadow-glowcustomblacksmall lg:-top-2 lg:h-4 lg:shadow-glowcustomblack'
              whileInView={{
                x: '1000px',
                transition: { duration: 0.9, ease: 'circInOut', delay: 0.3 },
              }}
              viewport={{
                margin: desktopView ? '-100px' : '-14px',
                once: true,
              }}
            />
          )}
        </div>
      </div>
      <div className='blog-intro'>
        <p>
          What I’m building, what I’m learning, and the things worth writing
          down.
        </p>
        <a
          href='https://blog.abhipraya.dev/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={BlogFavicon}
            alt=''
            width={20}
            height={20}
            className='blog-favicon'
          />
          All articles <IconArrowUpRight size={18} aria-hidden='true' />
        </a>
      </div>
      <div
        className='blog-frame rounded-3xl border border-customgray bg-customblack shadow-lg'
        aria-live='polite'
        aria-busy={feed.status === 'loading'}
      >
        {feed.status === 'loading' && (
          <p className='blog-message'>Loading the latest articles…</p>
        )}
        {feed.status === 'error' && (
          <p className='blog-message'>
            The articles couldn’t load.{' '}
            <a href='https://blog.abhipraya.dev/'>Read them on the blog</a>.
          </p>
        )}
        {feed.status === 'ready' &&
          (feed.posts.length ? (
            <div className='blog-cards'>
              {feed.posts.map((post) => (
                <BlogCard key={post.url} post={post} />
              ))}
            </div>
          ) : (
            <p className='blog-message'>
              New articles are on their way.{' '}
              <a href='https://blog.abhipraya.dev/'>Visit the blog</a>.
            </p>
          ))}
      </div>
    </section>
  );
}
