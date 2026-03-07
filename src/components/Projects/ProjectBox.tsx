import {
  IconArrowUpRight,
  IconBrandGithub,
  IconHome,
} from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import NoImage from '../../assets/projects/noimage.webp';
import Azure from '../../assets/stacks/azure.svg';
import Bun from '../../assets/stacks/bun.svg';
import Cloudflare from '../../assets/stacks/cloudflare.svg';
import Dart from '../../assets/stacks/dart.svg';
import DigitalOcean from '../../assets/stacks/digitalocean.svg';
import Django from '../../assets/stacks/django.svg';
import Docker from '../../assets/stacks/docker.svg';
import Express from '../../assets/stacks/express.svg';
import Firebase from '../../assets/stacks/firebase.svg';
import Flutter from '../../assets/stacks/flutter.svg';
import Gemini from '../../assets/stacks/gemini.svg';
import JavaScript from '../../assets/stacks/javascript.svg';
import Jest from '../../assets/stacks/jest.svg';
import Meilisearch from '../../assets/stacks/meilisearch.svg';
import Midtrans from '../../assets/stacks/midtrans.webp';
import MongoDB from '../../assets/stacks/mongodb.svg';
import Neo4j from '../../assets/stacks/neo4j.svg';
import Nest from '../../assets/stacks/nestjs.svg';
import Next from '../../assets/stacks/nextjs.svg';
import Node from '../../assets/stacks/nodejs.svg';
import NPM from '../../assets/stacks/npm.svg';
import OpenAI from '../../assets/stacks/openai.svg';
import Postgres from '../../assets/stacks/postgresql.svg';
import Prisma from '../../assets/stacks/prisma.svg';
import Python from '../../assets/stacks/python.svg';
import RabbitMQ from '../../assets/stacks/rabbitmq.svg';
import React from '../../assets/stacks/react.svg';
import Redis from '../../assets/stacks/redis.svg';
import RPGMaker from '../../assets/stacks/rpgmaker.png';
import Supabase from '../../assets/stacks/supabase.svg';
import TailwindCSS from '../../assets/stacks/tailwind.svg';
import TypeScript from '../../assets/stacks/typescript.svg';
import Vercel from '../../assets/stacks/vercel.svg';
import Vite from '../../assets/stacks/vitejs.svg';
import Vitest from '../../assets/stacks/vitest.svg';
import X from '../../assets/stacks/x.svg';
import BlurFade from '../../blocks/Animations/BlurFade/BlurFade';
import DesktopView from '../../lib/DesktopView';
import TabletView from '../../lib/TabletView';

interface StackIcon {
  src: string;
  name: string;
}

interface ProjectBoxProps {
  preview?: string | null;
  isVideo?: boolean;
  title: string;
  type: string | string[];
  date: string;
  subtitle: string;
  stacks?: string[];
  url?: string | null;
  github?: string | null;
  homepage?: string | null;
  favicon?: string | null;
  disableHover?: boolean;
}

const stackIcons: Record<string, StackIcon> = {
  docker: { src: Docker, name: 'Docker' },
  express: { src: Express, name: 'Express' },
  javascript: { src: JavaScript, name: 'JavaScript' },
  jest: { src: Jest, name: 'Jest' },
  mongodb: { src: MongoDB, name: 'MongoDB' },
  nodejs: { src: Node, name: 'Node.js' },
  npm: { src: NPM, name: 'NPM' },
  python: { src: Python, name: 'Python' },
  bun: { src: Bun, name: 'Bun' },
  reactjs: { src: React, name: 'React.js' },
  tailwindcss: { src: TailwindCSS, name: 'TailwindCSS' },
  typescript: { src: TypeScript, name: 'TypeScript' },
  vitejs: { src: Vite, name: 'Vite.js' },
  vitest: { src: Vitest, name: 'Vitest' },
  gemini: { src: Gemini, name: 'Gemini' },
  supabase: { src: Supabase, name: 'Supabase' },
  azure: { src: Azure, name: 'Azure' },
  openai: { src: OpenAI, name: 'OpenAI' },
  nextjs: { src: Next, name: 'Next.js' },
  firebase: { src: Firebase, name: 'Firebase' },
  dart: { src: Dart, name: 'Dart' },
  django: { src: Django, name: 'Django' },
  flutter: { src: Flutter, name: 'Flutter' },
  nestjs: { src: Nest, name: 'Nest.js' },
  x: { src: X, name: 'X (Twitter) Bot' },
  cloudflare: { src: Cloudflare, name: 'Cloudflare' },
  postgresql: { src: Postgres, name: 'PostgreSQL' },
  digitalocean: { src: DigitalOcean, name: 'DigitalOcean' },
  redis: { src: Redis, name: 'Redis' },
  rabbitmq: { src: RabbitMQ, name: 'RabbitMQ' },
  meilisearch: { src: Meilisearch, name: 'Meilisearch' },
  rpgmaker: { src: RPGMaker, name: 'RPG Maker' },
  neo4j: { src: Neo4j, name: 'Neo4j' },
  vercelaisdk: { src: Vercel, name: 'Vercel AI SDK' },
  prisma: { src: Prisma, name: 'Prisma' },
  midtrans: { src: Midtrans, name: 'Midtrans' },
};

const ProjectBox = ({
  preview = null,
  isVideo = false,
  title,
  type,
  date,
  subtitle,
  stacks = [],
  url = null,
  github = null,
  homepage = null,
  favicon = null,
  disableHover = false,
}: ProjectBoxProps) => {
  const desktopView = DesktopView();
  const tabletView = TabletView();
  const [hovered, setHovered] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);

  // Check if this is a Self-Hosted project
  const isSelfHosted = Array.isArray(type)
    ? type.includes('Self-Hosted')
    : type === 'Self-Hosted';

  useEffect(() => {
    if (!isVideo || !videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play();
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [isVideo]);

  let urlVisibility: string | undefined;
  let githubVisibility: string | undefined;
  if (!url) urlVisibility = 'opacity-30';
  if (!github) githubVisibility = 'opacity-30';

  const STACKS_PER_LINE = 8;

  return (
    <BlurFade className='h-full' delay={0.05} offset={15} inView>
      <div
        className={`flex h-full flex-col overflow-hidden rounded-3xl border-2 border-customgray bg-customblack py-0 shadow-lg ${disableHover ? '' : 'transition-all duration-100 md:hover:scale-[101%] md:hover:border-blurple md:hover:shadow-glowblurpleextrasmall'}`}
      >
        {!isSelfHosted && (
          <div className='aspect-[10/7] w-full bg-theme-placeholder'>
            {isVideo ? (
              <video
                ref={videoRef}
                src={preview ?? undefined}
                className='h-full w-full object-cover'
                muted
                loop
                playsInline
                preload='metadata'
              />
            ) : (
              <img
                src={preview ? preview : NoImage}
                className='h-full w-full object-cover'
                alt={`${title} preview`}
              />
            )}
          </div>
        )}
        <div className='relative flex flex-1 flex-col space-y-2 p-6'>
          <div className='flex flex-row items-start justify-between'>
            <div className='flex flex-row items-center space-x-3'>
              {(favicon || (url && url !== '')) && (
                <img
                  src={
                    favicon ||
                    `https://icon.horse/icon/${new URL(url!).hostname}`
                  }
                  alt={`${title} favicon`}
                  className='h-6 w-6 rounded-sm object-contain md:h-7 md:w-7'
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // If manual favicon fails and we have a URL, try icon.horse
                    if (
                      favicon &&
                      url &&
                      url !== '' &&
                      !target.dataset.triedFallback
                    ) {
                      target.dataset.triedFallback = 'true';
                      target.src = `https://icon.horse/icon/${new URL(url).hostname}`;
                    } else {
                      // Hide if all options fail
                      target.style.display = 'none';
                    }
                  }}
                />
              )}
              <p className='font-instrument text-2xl md:text-3xl'>{title}</p>
            </div>
            {!isSelfHosted && (
              <p className='mt-[6px] text-end font-extrabold font-jetbrainsmono text-sm opacity-70 md:mt-[10px] md:text-md'>
                {date}
              </p>
            )}
          </div>
          <div className='flex flex-row items-center space-x-2'>
            <p className='font-bold'>Type: </p>
            <div className='flex flex-row flex-wrap gap-2'>
              {Array.isArray(type) ? (
                type.map((t, index) => (
                  <div
                    // biome-ignore lint/suspicious/noArrayIndexKey: <X>
                    key={index}
                    className='w-fit rounded-md border border-blurple bg-blurple bg-opacity-10 px-2'
                  >
                    <p className='font-jetbrainsmono text-blurple text-xs md:text-sm'>
                      {t}
                    </p>
                  </div>
                ))
              ) : (
                <div className='w-fit rounded-md border border-blurple bg-blurple bg-opacity-10 px-2'>
                  <p className='font-jetbrainsmono text-blurple text-xs md:text-sm'>
                    {type}
                  </p>
                </div>
              )}
            </div>
          </div>
          <p className='text-justify text-[0.925rem]'>{subtitle}</p>
          <div className='flex flex-grow' />
          <div className='!mt-4 flex h-auto w-full flex-row items-start justify-between'>
            {!isSelfHosted && (
              <div className='flex w-fit flex-col space-y-2 rounded'>
                {Array.from({
                  length: Math.ceil(stacks.length / STACKS_PER_LINE),
                }).map((_, chunkIndex) => (
                  <div
                    key={`stacks-chunk-${chunkIndex}-${stacks.length}`}
                    className='flex flex-row space-x-2 md:space-x-3'
                  >
                    {stacks
                      .slice(
                        chunkIndex * STACKS_PER_LINE,
                        (chunkIndex + 1) * STACKS_PER_LINE,
                      )
                      .map((stack) => (
                        <motion.div
                          key={stack}
                          className='relative hover:cursor-pointer'
                          onHoverStart={() => setHovered(stack)}
                          onHoverEnd={() => setHovered('')}
                        >
                          <AnimatePresence>
                            {hovered === stack && (
                              <motion.div
                                initial={{ opacity: 0, y: -3 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -3 }}
                                transition={{
                                  duration: 0.15,
                                  ease: 'easeInOut',
                                }}
                                className='absolute -top-[32px] left-0 z-[100] transform rounded border-[0.5px] bg-tooltip-bg px-[6px] py-[3px] font-jetbrainsmono text-tooltip-text text-xs'
                              >
                                <p className='text-nowrap'>
                                  {stackIcons[stack].name}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                          <img
                            src={stackIcons[stack].src}
                            alt={stackIcons[stack].name}
                            className={
                              tabletView
                                ? 'h-5 w-5 object-contain'
                                : 'h-4 w-4 object-contain'
                            }
                            draggable='false'
                          />
                        </motion.div>
                      ))}
                  </div>
                ))}
              </div>
            )}
            {isSelfHosted && <div className='flex w-fit' />}
            <div className='flex h-[9vw] w-auto flex-row space-x-2 md:h-10 md:space-x-3'>
              {url === '' ? (
                <div className='flex h-full w-[9vw] items-center justify-center rounded-lg bg-btn-bg opacity-30 md:w-10'>
                  <IconArrowUpRight stroke={1.5} size={desktopView ? 24 : 22} />
                </div>
              ) : (
                <a
                  href={url ?? undefined}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Open deployed project URL'
                  title='Open deployed project URL'
                >
                  <div
                    className={`flex h-full w-[9vw] items-center justify-center rounded-lg bg-btn-bg md:w-10 ${urlVisibility ? urlVisibility : 'transition-all duration-100 ease-in-out hover:bg-blurple hover:bg-opacity-30 hover:text-blurple'}`}
                  >
                    <IconArrowUpRight
                      stroke={1.5}
                      size={desktopView ? 24 : 22}
                    />
                  </div>
                </a>
              )}
              {github === '' ? (
                <div className='flex h-full w-[9vw] items-center justify-center rounded-lg bg-btn-bg opacity-30 md:w-10'>
                  <IconBrandGithub stroke={1.5} size={desktopView ? 24 : 22} />
                </div>
              ) : (
                <a
                  href={github ?? undefined}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='View project source code on GitHub'
                  title='View project source code on GitHub'
                >
                  <div
                    className={`flex h-full w-[9vw] items-center justify-center rounded-lg bg-btn-bg md:w-10 ${githubVisibility ? githubVisibility : 'transition-all duration-100 ease-in-out hover:bg-blurple hover:bg-opacity-30 hover:text-blurple'}`}
                  >
                    <IconBrandGithub
                      stroke={1.5}
                      size={desktopView ? 24 : 22}
                    />
                  </div>
                </a>
              )}
              {isSelfHosted && homepage && (
                <a
                  href={homepage}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Open project homepage'
                  title='Open project homepage'
                >
                  <div className='flex h-full w-[9vw] items-center justify-center rounded-lg bg-btn-bg transition-all duration-100 ease-in-out hover:bg-blurple hover:bg-opacity-30 hover:text-blurple md:w-10'>
                    <IconHome stroke={1.5} size={desktopView ? 24 : 22} />
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </BlurFade>
  );
};

export default ProjectBox;
