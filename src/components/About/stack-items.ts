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
import Remix from '../../assets/stacks/remix.svg';
import Supabase from '../../assets/stacks/supabase.svg';
import Tailwind from '../../assets/stacks/tailwind.svg';
import Tanstack from '../../assets/stacks/tanstack.svg';
import TypeScript from '../../assets/stacks/typescript.svg';

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
  { src: Remix, alt: 'Remix' },
  { src: Tanstack, alt: 'Tanstack' },
  { src: Elysia, alt: 'Elysia' },
  { src: Express, alt: 'Express' },
  { src: FastAPI, alt: 'FastAPI' },
  { src: Go, alt: 'Go' },
  { src: Fiber, alt: 'Fiber' },
  { src: Python, alt: 'Python' },
  { src: Django, alt: 'Django' },
  { src: PostgreSQL, alt: 'PostgreSQL' },
  { src: Supabase, alt: 'Supabase' },
  { src: Firebase, alt: 'Firebase' },
  { src: Redis, alt: 'Redis' },
  { src: RabbitMQ, alt: 'RabbitMQ' },
  { src: Bun, alt: 'Bun' },
  { src: PowerSync, alt: 'PowerSync' },
];
