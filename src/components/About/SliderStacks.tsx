import Bun from '../../assets/stacks/bun.svg';
import Django from '../../assets/stacks/django.svg';
import Elysia from '../../assets/stacks/elysiajs.svg';
import Express from '../../assets/stacks/express.svg';
import FastAPI from '../../assets/stacks/fastapi.svg';
import Fiber from '../../assets/stacks/fiber.svg';
import Firebase from '../../assets/stacks/firebase.svg';
import Go from '../../assets/stacks/go.svg';
import JavaScript from '../../assets/stacks/javascript.svg';
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
import { RichButton } from '../rich-button';

interface StackItem {
  src: string;
  alt: string;
}

export const stacksList: StackItem[] = [
  { src: JavaScript, alt: 'JavaScript' },
  { src: TypeScript, alt: 'TypeScript' },
  { src: Tailwind, alt: 'Tailwind' },
  { src: Reactjs, alt: 'React' },
  { src: Next, alt: 'Next.js' },
  { src: Tanstack, alt: 'Tanstack' },
  { src: Elysia, alt: 'Elysia' },
  { src: Express, alt: 'Express' },
  { src: FastAPI, alt: 'FastAPI' },
  { src: Go, alt: 'Go' },
  { src: Fiber, alt: 'Fiber' },
  { src: Python, alt: 'Python' },
  { src: Django, alt: 'Django' },
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
      duration={30}
      fade
      fadeAmount={15}
      direction='left'
      pauseOnHover={!!desktopView}
    >
      {stacksList.map((stack) => (
        <RichButton
          key={stack.alt}
          asChild
          shadow={false}
          color='default'
          className='group mx-2 h-18 w-18 cursor-help rounded-lg p-4 hover:brightness-100 active:brightness-100 md:mx-3 md:h-20 md:w-20'
        >
          <div className='relative flex items-center justify-center'>
            <div className='pointer-events-none absolute z-30 max-w-14 rounded-sm bg-tooltip-bg px-1 py-1 text-center text-[0.6rem] text-tooltip-text opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 md:max-w-16 md:text-xs'>
              {stack.alt}
            </div>
            <img
              src={stack.src}
              alt={stack.alt}
              className='h-full w-full select-none object-contain drop-shadow-[0_1px_2px_rgba(0,0,0,0.18)] transition-all duration-200 group-hover:blur-xs group-focus-visible:blur-xs'
              draggable='false'
            />
          </div>
        </RichButton>
      ))}
    </Marquee>
  );
};
