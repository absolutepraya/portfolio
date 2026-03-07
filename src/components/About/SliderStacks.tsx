import Bun from '../../assets/stacks/bun.svg';
import Django from '../../assets/stacks/django.svg';
import Elysia from '../../assets/stacks/elysiajs.svg';
import Express from '../../assets/stacks/express.svg';
import Fiber from '../../assets/stacks/fiber.svg';
import Firebase from '../../assets/stacks/firebase.svg';
import Flask from '../../assets/stacks/flask.svg';
import Go from '../../assets/stacks/go.svg';
import JavaScript from '../../assets/stacks/javascript.svg';
import Nest from '../../assets/stacks/nestjs.svg';
import Next from '../../assets/stacks/nextjs.svg';
import PostgreSQL from '../../assets/stacks/postgresql.svg';
import PowerSync from '../../assets/stacks/powersync.svg';
import Python from '../../assets/stacks/python.svg';
import RabbitMQ from '../../assets/stacks/rabbitmq.svg';
import Reactjs from '../../assets/stacks/react.svg';
import Redis from '../../assets/stacks/redis.svg';
import Tailwind from '../../assets/stacks/tailwind.svg';
import Tanstack from '../../assets/stacks/tanstack.svg';
import TypeScript from '../../assets/stacks/typescript.svg';
import DesktopView from '../../lib/DesktopView';
import { Marquee } from '../marquee';

interface StackItem {
  src: string;
  alt: string;
}

export const stacksList: StackItem[] = [
  { src: JavaScript, alt: 'JavaScript' },
  { src: TypeScript, alt: 'TypeScript' },
  { src: Tailwind, alt: 'Tailwind CSS' },
  { src: Reactjs, alt: 'React.js' },
  { src: Next, alt: 'Next.js' },
  { src: Tanstack, alt: 'Tanstack' },
  { src: Elysia, alt: 'Elysia.js' },
  { src: Express, alt: 'Express.js' },
  { src: Nest, alt: 'Nest.js' },
  { src: Go, alt: 'Go' },
  { src: Fiber, alt: 'Go Fiber' },
  { src: Python, alt: 'Python' },
  { src: Django, alt: 'Django' },
  { src: Flask, alt: 'Flask' },
  { src: PostgreSQL, alt: 'PostgreSQL' },
  { src: Firebase, alt: 'Firebase' },
  { src: Redis, alt: 'Redis' },
  { src: RabbitMQ, alt: 'RabbitMQ' },
  { src: Bun, alt: 'Bun' },
  { src: PowerSync, alt: 'PowerSync' },
];

export const SliderStacks = () => {
  const desktopView = DesktopView();

  return (
    <Marquee
      duration={25}
      fade
      fadeAmount={15}
      direction='left'
      pauseOnHover={!!desktopView}
    >
      {stacksList.map((stack) => (
        <button
          key={stack.alt}
          type='button'
          className='group relative mx-2 flex h-18 w-18 cursor-help items-center justify-center rounded-lg bg-linear-to-br from-card-from to-card-to p-4 md:mx-3 md:h-20 md:w-20'
        >
          <div className='absolute h-18 w-18 rounded-lg border-2 border-theme-border-bevel border-r-0 border-b-0 border-l-0 md:h-20 md:w-20' />
          <div className='pointer-events-none absolute z-30 max-w-14 rounded-sm bg-tooltip-bg px-1 py-1 text-center text-[0.6rem] text-tooltip-text opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 md:max-w-16 md:text-xs'>
            {stack.alt}
          </div>
          <img
            src={stack.src}
            alt={stack.alt}
            className='h-full w-full select-none object-contain transition-all duration-200 group-hover:blur-xs group-focus-visible:blur-xs'
            draggable='false'
          />
        </button>
      ))}
    </Marquee>
  );
};
