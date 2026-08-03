import AzureAIFoundry from '../assets/stacks/azure/ai-foundry.svg';
import ApplicationInsights from '../assets/stacks/azure/application-insights.svg';
import ContainerApps from '../assets/stacks/azure/container-apps.svg';
import DocumentIntelligence from '../assets/stacks/azure/document-intelligence.svg';
import AzureFunctions from '../assets/stacks/azure/functions.svg';
import AzureMonitor from '../assets/stacks/azure/monitor.svg';
import AzureSql from '../assets/stacks/azure/sql.svg';
import AzureSreAgent from '../assets/stacks/azure/sre-agent.png';
import AzureVirtualMachine from '../assets/stacks/azure/virtual-machine.svg';
import Azure from '../assets/stacks/azure.svg';
import Brave from '../assets/stacks/brave.svg';
import Cloudflare from '../assets/stacks/cloudflare.svg';
import Dify from '../assets/stacks/dify.svg';
import Firebase from '../assets/stacks/firebase.svg';
import Flask from '../assets/stacks/flask.svg';
import Flutter from '../assets/stacks/flutter.svg';
import GCP from '../assets/stacks/gcp.svg';
import Gemini from '../assets/stacks/gemini.svg';
import MicrosoftFabric from '../assets/stacks/microsoft-fabric.svg';
import Next from '../assets/stacks/nextjs.svg';
import OpenAI from '../assets/stacks/openai.svg';
import OpenClaw from '../assets/stacks/openclaw.svg';
import PostHog from '../assets/stacks/posthog.svg';
import PowerSync from '../assets/stacks/powersync.svg';
import RabbitMQ from '../assets/stacks/rabbitmq.svg';
import React from '../assets/stacks/react.svg';
import Redis from '../assets/stacks/redis.svg';
import Remix from '../assets/stacks/remix.svg';
import SAP from '../assets/stacks/sap.svg';
import Sentry from '../assets/stacks/sentry.svg';
import Tailwind from '../assets/stacks/tailwind.svg';
import Telegram from '../assets/stacks/telegram.svg';
import Vercel from '../assets/stacks/vercel.svg';
import WhatsApp from '../assets/stacks/whatsapp.svg';

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
    logo: AzureAIFoundry,
  },
  {
    href: 'https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/',
    labels: ['Azure Content Understanding'],
    logo: Azure,
  },
  {
    href: 'https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/overview?view=doc-intel-4.0.0',
    labels: ['Azure Document Intelligence'],
    logo: DocumentIntelligence,
  },
  {
    href: 'https://www.microsoft.com/en-us/microsoft-fabric',
    labels: ['Microsoft Fabric', 'Microsoft Fabric Power BI Copilot'],
    logo: MicrosoftFabric,
  },
  {
    href: 'https://azure.microsoft.com/en-us/products/functions',
    labels: ['Azure Functions'],
    logo: AzureFunctions,
  },
  {
    href: 'https://azure.microsoft.com/en-us/products/azure-sql',
    labels: ['Azure SQL'],
    logo: AzureSql,
  },
  {
    href: 'https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview',
    labels: ['App Insights'],
    logo: ApplicationInsights,
  },
  {
    href: 'https://azure.microsoft.com/en-us/products/virtual-machines',
    labels: ['Azure VM'],
    logo: AzureVirtualMachine,
  },
  {
    href: 'https://azure.microsoft.com/en-us/products/container-apps',
    labels: ['Azure Container Apps'],
    logo: ContainerApps,
  },
  {
    href: 'https://azure.microsoft.com/en-us/products/monitor',
    labels: ['Azure Monitor'],
    logo: AzureMonitor,
  },
  {
    href: 'https://azure.microsoft.com/en-us/products/sre-agent',
    labels: ['Azure SRE Agent'],
    logo: AzureSreAgent,
  },
  {
    href: 'https://sap.github.io/cloud-sdk/',
    labels: ['SAP Cloud SDK'],
    logo: SAP,
  },
  {
    href: 'https://developers.cloudflare.com/agents/',
    labels: ['Cloudflare Agents SDK'],
    logo: Cloudflare,
  },
  {
    href: 'https://developers.cloudflare.com/queues/',
    labels: ['Cloudflare Queues'],
    logo: Cloudflare,
  },
  {
    href: 'https://docs.openclaw.ai/automation/cron-jobs',
    labels: ['OpenClaw cron'],
    logo: OpenClaw,
  },
  {
    href: 'https://www.cloudflare.com/',
    labels: ['Cloudflare'],
    logo: Cloudflare,
  },
  { href: 'https://ai-sdk.dev/', labels: ['Vercel AI SDK'], logo: Vercel },
  { href: 'https://gemini.google.com/', labels: ['Gemini'], logo: Gemini },
  {
    href: 'https://ai.google.dev/gemini-api/docs/models/gemini-embedding-001',
    labels: ['Gemini Embedding 001'],
    logo: Gemini,
  },
  {
    href: 'https://brave.com/search/api/',
    labels: ['Brave Search API'],
    logo: Brave,
  },
  {
    href: 'https://core.telegram.org/bots/api',
    labels: ['Telegram'],
    logo: Telegram,
  },
  {
    href: 'https://whatsappbusiness.com/developers/developer-hub/',
    labels: ['Meta WhatsApp Business API'],
    logo: WhatsApp,
  },
  { href: 'https://openai.com/', labels: ['OpenAI'], logo: OpenAI },
  { href: 'https://posthog.com/', labels: ['PostHog'], logo: PostHog },
  { href: 'https://sentry.io/', labels: ['Sentry'], logo: Sentry },
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
];

export const getTechnologyByHref = (href: string) =>
  technologies.find((technology) => technology.href === href);

export const getPlainTechnologyByLabel = (label: string) =>
  technologies.find(
    (technology) => !technology.href && technology.labels.includes(label),
  );
