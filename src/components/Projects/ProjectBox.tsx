import { IconArrowUpRight, IconBrandGithub } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import NoImage from '../../assets/projects/noimage.webp';
import Azure from '../../assets/stacks/azure.svg';
import Bun from '../../assets/stacks/bun.svg';
import Claude from '../../assets/stacks/claude.svg';
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
import BlurFade from '../../blocks/Animations/BlurFade';
import {
  type ProjectKind,
  type ProjectTag,
  projectKindLabels,
  projectTagLabels,
} from '../../data/projects_data';
import DesktopView from '../../lib/DesktopView';
import TabletView from '../../lib/TabletView';
import { Badge } from '../badge';
import { PopButton } from '../pop-button';

interface StackIcon {
  src: string;
  name: string;
}

interface ProjectBoxProps {
  preview?: string | null;
  isVideo?: boolean;
  title: string;
  kind: ProjectKind;
  tags: ProjectTag[];
  date: string;
  subtitle: string;
  stacks?: string[];
  url?: string | null;
  github?: string | null;
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
  claude: { src: Claude, name: 'Claude' },
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
  kind,
  tags,
  date,
  subtitle,
  stacks = [],
  url = null,
  github = null,
  favicon = null,
  disableHover = false,
}: ProjectBoxProps) => {
  const desktopView = DesktopView();
  const tabletView = TabletView();
  const [hovered, setHovered] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const STACKS_PER_LINE = 8;

  return (
    <BlurFade className='h-full' delay={0.05} offset={15} inView>
      <div
        className={`flex h-full flex-col overflow-hidden rounded-3xl border-2 border-customgray bg-customblack py-0 shadow-lg ${disableHover ? '' : 'transition-all duration-200 md:hover:scale-[101%] md:hover:border-customgray md:hover:shadow-lg'}`}
      >
        <div className='aspect-10/7 w-full bg-theme-placeholder'>
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
        <div className='relative flex flex-1 flex-col space-y-2 p-6'>
          <div className='flex flex-row items-start justify-between'>
            <div className='flex flex-row items-center space-x-3'>
              {(favicon || (url && url !== '')) && (
                <img
                  src={
                    favicon ||
                    `https://icon.horse/icon/${new URL(url as string).hostname}`
                  }
                  alt={`${title} favicon`}
                  className='h-6 w-6 rounded-xs object-contain md:h-7 md:w-7'
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
            <p className='mt-[6px] text-end font-extrabold font-jetbrainsmono text-sm opacity-70 md:mt-[10px] md:text-md'>
              {date}
            </p>
          </div>
          <div className='flex flex-row flex-wrap gap-1.5'>
            <Badge variant='default'>{projectKindLabels[kind]}</Badge>
            {tags.map((tag) => (
              <Badge key={tag} variant='default'>
                {projectTagLabels[tag]}
              </Badge>
            ))}
          </div>
          <p className='text-justify text-[0.925rem]'>{subtitle}</p>
          <div className='flex grow' />
          <div className='mt-4! flex min-h-12 w-full flex-row items-center justify-between'>
            <div className='flex w-fit flex-col space-y-2 rounded-sm'>
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
                              className='absolute -top-[32px] left-0 z-100 transform rounded-sm border-[0.5px] bg-tooltip-bg px-[6px] py-[3px] font-jetbrainsmono text-tooltip-text text-xs'
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
            <div className='flex w-auto flex-row space-x-2 md:space-x-3'>
              {url && (
                <PopButton className='aspect-square p-0' asChild>
                  <a
                    href={url}
                    target='_blank'
                    rel='noreferrer'
                    aria-label='Open deployed project URL'
                    title='Open deployed project URL'
                  >
                    <IconArrowUpRight
                      stroke={1.5}
                      size={desktopView ? 20 : 18}
                    />
                  </a>
                </PopButton>
              )}
              {github && (
                <PopButton className='aspect-square p-0' asChild>
                  <a
                    href={github}
                    target='_blank'
                    rel='noreferrer'
                    aria-label='View project source code on GitHub'
                    title='View project source code on GitHub'
                  >
                    <IconBrandGithub
                      stroke={1.5}
                      size={desktopView ? 20 : 18}
                    />
                  </a>
                </PopButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </BlurFade>
  );
};

export default ProjectBox;
