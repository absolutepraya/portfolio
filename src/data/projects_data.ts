// Import project images and videos

export type ProjectKind =
  | 'web'
  | 'mobile'
  | 'backend'
  | 'cli'
  | 'game'
  | 'agent';

export type ProjectTag =
  | 'full-stack'
  | 'frontend'
  | 'ai'
  | 'automation'
  | 'open-source'
  | 'knowledge-graph'
  | 'personal-assistant';

export const projectKindLabels: Record<ProjectKind, string> = {
  web: 'Web',
  mobile: 'Mobile',
  backend: 'Backend',
  cli: 'CLI',
  game: 'Game',
  agent: 'Agent',
};

export const projectTagLabels: Record<ProjectTag, string> = {
  'full-stack': 'Full-stack',
  frontend: 'Frontend',
  ai: 'AI',
  automation: 'Automation',
  'open-source': 'Open source',
  'knowledge-graph': 'Knowledge graph',
  'personal-assistant': 'Personal assistant',
};

interface Project {
  preview?: string | null;
  isVideo?: boolean;
  videoPlaybackRate?: number;
  title: string;
  kind: ProjectKind;
  tags: ProjectTag[];
  date: string;
  subtitle: string;
  stacks: string[];
  url: string;
  github: string;
  favicon?: string;
}

import AurumVideo from '../assets/projects/aurum.mp4';
import BKUIVideo from '../assets/projects/bkui.mp4';
// Import favicon icons
import GrabAuto from '../assets/projects/grabauto.webp';
import NuSantap from '../assets/projects/nusantap.webp';
import NuSantapIcon from '../assets/projects/nusantap-icon.svg';
import PintaruVideo from '../assets/projects/pintaru.mp4';
import PintaruIcon from '../assets/projects/pintaru-icon.png';
import SIRAVideo from '../assets/projects/sira.mp4';

const projectsData: Project[] = [
  {
    title: 'Marka',
    kind: 'web',
    tags: ['full-stack', 'ai', 'open-source'],
    date: '06/2025',
    subtitle:
      'Maintain and extend an open-source bookmark-everything app for links, notes, images, and AI-assisted organization. I own its production deployment, Docker services, and ongoing product work.',
    stacks: [
      'nextjs',
      'nodejs',
      'typescript',
      'docker',
      'meilisearch',
      'openai',
    ],
    url: 'https://marka.abhipraya.dev/',
    github: 'https://github.com/absolutepraya/marka',
  },
  {
    title: 'wt',
    kind: 'cli',
    tags: ['automation', 'open-source'],
    date: '2026',
    subtitle:
      'An agent-first Git worktree manager for running multiple LLM coding agents on the same project without stepping on each other. It provides one workflow for isolated worktrees, numbered slots, port offsets, setup and teardown, locking, and safety checks, regardless of which coding agent or CLI you use.',
    stacks: ['python'],
    url: '',
    github: 'https://github.com/absolutepraya/wt',
  },
  // {
  //   title: 'Hermes Agent',
  //   kind: 'agent',
  //   tags: ['ai', 'automation', 'personal-assistant'],
  //   date: '05/2026',
  //   subtitle:
  //     'A 24/7 AI agent I built and operate on my VPS, available through Telegram, Discord, and WhatsApp. It combines a configurable LLM with custom skills and MCP integrations for charts, finance, weather, Google Workspace, and RSS, plus identity-aware permissions and risk-based approvals.',
  //   stacks: ['python', 'claude', 'openai', 'docker'],
  //   url: '',
  //   github: '',
  // },
  {
    preview: SIRAVideo,
    isVideo: true,
    title: 'SIRA: Smart Invoice Reminder AI',
    kind: 'web',
    tags: ['full-stack', 'ai', 'automation'],
    date: '04/2026',
    subtitle:
      'Built an accounts-receivable automation platform for a client that scores payment risk daily and sends approval-gated reminder emails with tone based on risk. Includes invoice and payment workflows, a finance dashboard, and internal Telegram alerts.',
    stacks: [
      'reactjs',
      'vitejs',
      'typescript',
      'tailwindcss',
      'python',
      'supabase',
      'postgresql',
      'redis',
    ],
    url: '',
    github: '',
  },
  {
    preview: AurumVideo,
    isVideo: true,
    videoPlaybackRate: 2,
    title: 'Aurum Art Gallery',
    kind: 'web',
    tags: ['full-stack', 'ai', 'knowledge-graph'],
    date: '11/2025',
    subtitle:
      'Built an AI art-exploration app that combines semantic search, a Neo4j relationship graph, and a RAG museum guide grounded in graph data and Wikidata.',
    stacks: [
      'bun',
      'nextjs',
      'typescript',
      'tailwindcss',
      'neo4j',
      'gemini',
      'vercelaisdk',
    ],
    url: '',
    github: 'https://github.com/absolutepraya/aurum-knowledge-graph',
  },
  {
    preview: BKUIVideo,
    isVideo: true,
    videoPlaybackRate: 2,
    title: 'Bedah Kampus UI 2025',
    kind: 'web',
    tags: ['full-stack'],
    date: '11/2025',
    subtitle:
      'Built an event-commerce platform for Bedah Kampus UI 2025, covering ticket sales, merchandise orders, Midtrans payments, QR check-in, and organizer operations.',
    stacks: ['nextjs', 'typescript', 'bun', 'supabase', 'midtrans'],
    url: 'https://dev.bedahkampusui.com/tickets',
    github: 'https://github.com/absolutepraya/bkui',
  },
  // {
  //   preview: null,
  //   title: 'Strata',
  //   type: ['Fullstack', 'Web App'],
  //   date: '11/2025',
  //   subtitle:
  //     'Strata is an AI-driven incident analyst that helps engineers troubleshoot AWS infrastructure issues in seconds. It takes your problem description, logs, metrics, and events, then generates ranked root-cause hypotheses, a clear human-readable timeline of what happened, and safe, explainable fix plans you can follow immediately.',
  //   stacks: ['bun', 'nextjs', 'typescript', 'tailwindcss', 'prisma', 'postgresql', 'openai', 'vercelaisdk'],
  //   url: '',
  //   github: '',
  // },
  {
    preview: PintaruVideo,
    isVideo: true,
    title: 'PINTARU',
    kind: 'web',
    tags: ['full-stack', 'ai'],
    date: '04/2025',
    subtitle:
      'Developed an AI learning platform that turns student questions from text, images, or PDFs into narrated explanation videos, and generates illustrated storybooks for children.',
    stacks: [
      'bun',
      'nextjs',
      'typescript',
      'tailwindcss',
      'express',
      'redis',
      'rabbitmq',
      'supabase',
      'python',
      'gemini',
      'openai',
      'docker',
      'digitalocean',
    ],
    url: 'https://pintaru-edu.vercel.app/',
    github: 'https://github.com/Tianrider/pintaru',
    favicon: PintaruIcon,
  },
  {
    preview: NuSantap,
    title: 'NuSantap (Gov-AI)',
    kind: 'mobile',
    tags: ['full-stack', 'ai'],
    date: '11/2024',
    subtitle:
      "Built an AI and computer-vision meal recommendation app for Indonesia's Makan Bergizi Gratis program, using nutritional needs and local food availability to personalize recommendations.",
    stacks: [
      'nodejs',
      'npm',
      'nextjs',
      'javascript',
      'tailwindcss',
      'firebase',
      'azure',
      'openai',
    ],
    url: 'http://nusantap.vercel.app/',
    github: 'https://github.com/absolutepraya/nusantap',
    favicon: NuSantapIcon,
  },
  {
    preview: GrabAuto,
    title: 'GrabAuto (hackjakarta 2024)',
    kind: 'web',
    tags: ['frontend', 'ai'],
    date: '07/2024',
    subtitle:
      'Built a prototype Grab vehicle-assistance flow in 23 hours: AI diagnosis, nearby mechanic discovery, repair booking, and cost prediction.',
    stacks: [
      'nodejs',
      'npm',
      'vitejs',
      'reactjs',
      'typescript',
      'tailwindcss',
      'gemini',
    ],
    url: '',
    github: 'https://github.com/Tianrider/GrabAuto',
  },
  // {
  //   preview: null,
  //   title: 'SwiftCash',
  //   kind: 'web',
  //   tags: ['full-stack'],
  //   date: '02/2025',
  //   subtitle:
  //     'A fast, secure, and reliable web-based digital banking app with dynamic account management and a powerful admin system. Built by maxxing out Next.js performance optimizations.',
  //   stacks: [
  //     'bun',
  //     'nextjs',
  //     'typescript',
  //     'tailwindcss',
  //     'supabase',
  //     'postgresql',
  //   ],
  //   url: 'https://swiftcash.abhipraya.dev/',
  //   github: 'https://github.com/absolutepraya/swiftcash',
  // },
  // {
  //   preview: null,
  //   title: 'NuSantap Dashboard',
  //   kind: 'web',
  //   tags: ['full-stack', 'ai'],
  //   date: '11/2024',
  //   subtitle:
  //     'A dashboard for NuSantap, featuring analytics graphs, user meal QR scans, and a stunting prevalence map at both provincial and national levels, with the ability to generate and manage weekly meal plans.',
  //   stacks: [
  //     'nodejs',
  //     'npm',
  //     'nextjs',
  //     'typescript',
  //     'tailwindcss',
  //     'firebase',
  //     'azure',
  //     'openai',
  //   ],
  //   url: 'https://nusantap-dashboard.vercel.app/',
  //   github: '',
  // },
  // {
  //   preview: Portfolio,
  //   title: 'Personal Portfolio',
  //   kind: 'web',
  //   tags: ['frontend'],
  //   date: '08/2024',
  //   subtitle:
  //     'Personal portfolio website, showcasing skills, experiences, achievements, and projects. Contents are to be updated regularly. Feel free to explore and reach out!',
  //   stacks: [
  //     'bun',
  //     'npm',
  //     'vitejs',
  //     'reactjs',
  //     'javascript',
  //     'tailwindcss',
  //     'cloudflare',
  //   ],
  //   url: 'https://abhipraya.dev/',
  //   github: 'https://github.com/absolutepraya/portfolio',
  //   favicon: PortfolioIcon,
  // },
];

export default projectsData;
