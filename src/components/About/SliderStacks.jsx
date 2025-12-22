import Marquee from 'react-fast-marquee';
import Bun from '../../assets/stacks/bun.svg';
import Dart from '../../assets/stacks/dart.svg';
import Django from '../../assets/stacks/django.svg';
import Express from '../../assets/stacks/express.svg';
import FastAPI from '../../assets/stacks/fastapi.svg';
import Fiber from '../../assets/stacks/fiber.svg';
import Firebase from '../../assets/stacks/firebase.svg';
import Flask from '../../assets/stacks/flask.svg';
import Flutter from '../../assets/stacks/flutter.svg';
import Go from '../../assets/stacks/go.svg';
import Java from '../../assets/stacks/java.svg';
import JavaScript from '../../assets/stacks/javascript.svg';
import MongoDB from '../../assets/stacks/mongodb.svg';
import Nest from '../../assets/stacks/nestjs.svg';
import Next from '../../assets/stacks/nextjs.svg';
import PostgreSQL from '../../assets/stacks/postgresql.svg';
import Python from '../../assets/stacks/python.svg';
import RabbitMQ from '../../assets/stacks/rabbitmq.svg';
import Reactjs from '../../assets/stacks/react.svg';
import Redis from '../../assets/stacks/redis.svg';
import Springboot from '../../assets/stacks/springboot.svg';
import Tailwind from '../../assets/stacks/tailwind.svg';
import TypeScript from '../../assets/stacks/typescript.svg';
import DesktopView from '../../lib/DesktopView';

export const stacksList = [
  { src: JavaScript, alt: 'JavaScript' },
  { src: TypeScript, alt: 'TypeScript' },
  { src: Tailwind, alt: 'Tailwind CSS' },
  { src: Reactjs, alt: 'React.js' },
  { src: Next, alt: 'Next.js' },
  { src: Express, alt: 'Express.js' },
  { src: Nest, alt: 'Nest.js' },
  { src: Go, alt: 'Go' },
  { src: Fiber, alt: 'Go Fiber' },
  { src: Java, alt: 'Java' },
  { src: Springboot, alt: 'Spring Boot' },
  { src: Python, alt: 'Python' },
  { src: Django, alt: 'Django' },
  { src: Flask, alt: 'Flask' },
  { src: FastAPI, alt: 'FastAPI' },
  { src: Dart, alt: 'Dart' },
  { src: Flutter, alt: 'Flutter' },
  { src: PostgreSQL, alt: 'PostgreSQL' },
  { src: MongoDB, alt: 'MongoDB' },
  { src: Firebase, alt: 'Firebase' },
  { src: Redis, alt: 'Redis' },
  { src: RabbitMQ, alt: 'RabbitMQ' },
  { src: Bun, alt: 'Bun' },
];

export const SliderStacks = () => {
  const desktopView = DesktopView();

  return (
    <Marquee
      speed='40'
      gradient={true}
      gradientColor='#0d0d0d'
      gradientWidth={110}
      autoFill={true}
      direction='left'
      pauseOnClick={!desktopView}
      pauseOnHover={desktopView}
    >
      {stacksList.map((stack) => (
        <button
          key={stack.alt}
          type='button'
          className='group relative mx-2 flex h-[4.5rem] w-[4.5rem] cursor-help items-center justify-center rounded-lg bg-gradient-to-br from-[#1f1f1f] to-[#0e0e0e] p-4 shadow-xl md:mx-3 md:h-20 md:w-20'
        >
          <div className='absolute h-[4.5rem] w-[4.5rem] rounded-lg border-2 border-b-0 border-r-0 border-[#2a2a2a] md:h-20 md:w-20' />
          <div className='pointer-events-none absolute z-30 max-w-[3.5rem] rounded bg-black px-1 py-1 text-center text-[0.6rem] text-[#cccccc] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 md:max-w-[4rem] md:text-xs'>
            {stack.alt}
          </div>
          <img
            src={stack.src}
            alt={stack.alt}
            className='h-full w-full select-none object-contain transition-all duration-200 group-hover:blur-sm group-focus-visible:blur-sm'
            draggable='false'
          />
        </button>
      ))}
    </Marquee>
  );
};
