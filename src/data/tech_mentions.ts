import Azure from '../assets/stacks/azure.svg';
import Cloudflare from '../assets/stacks/cloudflare.svg';
import Dify from '../assets/stacks/dify.svg';
import Firebase from '../assets/stacks/firebase.svg';
import Flask from '../assets/stacks/flask.svg';
import Flutter from '../assets/stacks/flutter.svg';
import GCP from '../assets/stacks/gcp.svg';
import Gemini from '../assets/stacks/gemini.svg';
import Go from '../assets/stacks/go.svg';
import Next from '../assets/stacks/nextjs.svg';
import OpenAI from '../assets/stacks/openai.svg';
import PostHog from '../assets/stacks/posthog.svg';
import PowerSync from '../assets/stacks/powersync.svg';
import Python from '../assets/stacks/python.svg';
import RabbitMQ from '../assets/stacks/rabbitmq.svg';
import React from '../assets/stacks/react.svg';
import Redis from '../assets/stacks/redis.svg';
import Remix from '../assets/stacks/remix.svg';
import Tailwind from '../assets/stacks/tailwind.svg';
import Vercel from '../assets/stacks/vercel.svg';

interface TechnologyMention {
  href?: string;
  labels: readonly string[];
  logo?: string;
}

const technologies: readonly TechnologyMention[] = [
  { href: 'https://azure.microsoft.com/', labels: ['Azure'], logo: Azure },
  {
    href: 'https://azure.microsoft.com/en-us/products/ai-foundry',
    labels: ['Microsoft Foundry'],
  },
  {
    href: 'https://www.microsoft.com/en-us/microsoft-fabric',
    labels: ['Microsoft Fabric', 'Microsoft Fabric Power BI Copilot'],
  },
  {
    href: 'https://azure.microsoft.com/en-us/products/functions',
    labels: ['Azure Functions'],
    logo: Azure,
  },
  {
    href: 'https://azure.microsoft.com/en-us/products/azure-sql',
    labels: ['Azure SQL'],
    logo: Azure,
  },
  {
    href: 'https://azure.microsoft.com/en-us/products/virtual-machines',
    labels: ['Azure VM'],
    logo: Azure,
  },
  {
    href: 'https://azure.microsoft.com/en-us/products/container-apps',
    labels: ['Azure Container Apps'],
    logo: Azure,
  },
  {
    href: 'https://azure.microsoft.com/en-us/products/monitor',
    labels: ['Azure Monitor'],
    logo: Azure,
  },
  {
    href: 'https://www.cloudflare.com/',
    labels: ['Cloudflare'],
    logo: Cloudflare,
  },
  { href: 'https://ai-sdk.dev/', labels: ['Vercel AI SDK'], logo: Vercel },
  { href: 'https://gemini.google.com/', labels: ['Gemini'], logo: Gemini },
  { href: 'https://openai.com/', labels: ['OpenAI'], logo: OpenAI },
  { href: 'https://posthog.com/', labels: ['PostHog'], logo: PostHog },
  { href: 'https://remix.run/', labels: ['Remix'], logo: Remix },
  {
    href: 'https://www.powersync.com/',
    labels: ['PowerSync'],
    logo: PowerSync,
  },
  { href: 'https://redis.io/', labels: ['Redis'], logo: Redis },
  {
    href: 'https://www.rabbitmq.com/',
    labels: ['RabbitMQ'],
    logo: RabbitMQ,
  },
  {
    href: 'https://cloud.google.com/kubernetes-engine',
    labels: ['Google Kubernetes Engine (GKE)'],
    logo: GCP,
  },
  {
    href: 'https://cloud.google.com/products/compute',
    labels: ['Google Compute Engine (GCE)'],
    logo: GCP,
  },
  {
    href: 'https://cloud.google.com/',
    labels: ['Google Cloud', 'Google Cloud Platform (GCP)'],
    logo: GCP,
  },
  {
    href: 'https://flask.palletsprojects.com/',
    labels: ['Flask'],
    logo: Flask,
  },
  { href: 'https://nextjs.org/', labels: ['Next.js'], logo: Next },
  {
    href: 'https://tailwindcss.com/',
    labels: ['Tailwind CSS'],
    logo: Tailwind,
  },
  { href: 'https://dify.ai/', labels: ['Dify'], logo: Dify },
  {
    href: 'https://firebase.google.com/',
    labels: ['Firebase'],
    logo: Firebase,
  },
  { href: 'https://flutter.dev/', labels: ['Flutter'], logo: Flutter },
  { href: 'https://react.dev/', labels: ['React.js'], logo: React },
  { labels: ['Go'], logo: Go },
  { labels: ['Python'], logo: Python },
];

export const getTechnologyByHref = (href: string) =>
  technologies.find((technology) => technology.href === href);

export const getPlainTechnologyByLabel = (label: string) =>
  technologies.find(
    (technology) => !technology.href && technology.labels.includes(label),
  );
