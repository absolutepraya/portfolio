// Import project images and videos

interface Project {
  preview?: string | null;
  isVideo?: boolean;
  title: string;
  type: string[];
  date: string;
  subtitle: string;
  stacks: string[];
  url: string;
  github: string;
  favicon?: string;
  homepage?: string;
}

import ALSAEcomp from '../assets/projects/alsaecomp.webp';
import ALSAEcompIcon from '../assets/projects/alsaecomp-icon.webp';
import AurumVideo from '../assets/projects/aurum.mp4';
import BKUIVideo from '../assets/projects/bkui.mp4';
import DesaKedisan from '../assets/projects/desakedisan.webp';
// Import favicon icons
import DesaKedisanIcon from '../assets/projects/desakedisan-icon.svg';
import DM2Calc from '../assets/projects/dm2calc.webp';
import GrabAuto from '../assets/projects/grabauto.webp';
import GusDur from '../assets/projects/gusdur.webp';
import MIPAOpenHouse from '../assets/projects/mipaopenhouse.webp';
import MIPAOpenHouseIcon from '../assets/projects/mipaopenhouse-icon.webp';
import Ngandung from '../assets/projects/ngandung.webp';
import NuSantap from '../assets/projects/nusantap.webp';
import NuSantapIcon from '../assets/projects/nusantap-icon.svg';
import PintaruVideo from '../assets/projects/pintaru.mp4';
import PintaruIcon from '../assets/projects/pintaru-icon.png';
import Portfolio from '../assets/projects/portfolio.webp';
import PortfolioIcon from '../assets/projects/portfolio-icon.svg';
import Rumble from '../assets/projects/rumble.webp';

const projectsData: Project[] = [
  {
    preview: AurumVideo,
    isVideo: true,
    title: 'Aurum Art Gallery',
    type: ['Fullstack', 'Web App', 'Knowledge Graph'],
    date: '11/2025',
    subtitle:
      'Aurum is an AI-powered knowledge graph platform that revolutionizes art exploration. It combines a semantic search engine for finding artworks by description, an interactive force-directed graph to visualize complex relationships between artists and movements, and a RAG-based "Museum Guide" chatbot that provides context-aware educational insights by synthesizing internal graph data with external Wikidata enrichment.',
    stacks: [
      'bun',
      'nextjs',
      'typescript',
      'tailwindcss',
      'neo4j',
      'gemini',
      'vercelaisdk',
    ],
    url: 'https://aurum.abhipraya.dev/',
    github: 'https://github.com/absolutepraya/aurum-knowledge-graph',
  },
  {
    preview: BKUIVideo,
    isVideo: true,
    title: 'Bedah Kampus UI 2025',
    type: ['Fullstack', 'Web App'],
    date: '11/2024',
    subtitle:
      'A comprehensive event platform for Bedah Kampus UI 2025 featuring a high-performance landing page, an integrated ticketing and merchandise store with Midtrans payment gateway, and a robust admin dashboard. The system also includes a mobile-optimized QR code check-in tool, enabling the committee to scan tickets and verify participants in real-time at the venue.',
    stacks: ['nextjs', 'typescript', 'bun', 'supabase', 'midtrans'],
    url: 'https://dev.bedahkampusui.com/tickets',
    github: '',
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
    type: ['Fullstack'],
    date: '04/2025',
    subtitle:
      'PINTARU is an AI-powered platform that offers 2 features: 1) AI-generated video explanations to answer questions from text, photos, or PDFs for students, and 2) AI-generated storybooks with interactive visuals for kids, with custom moral value and custom characters. This is our greatest project yet, guaranteed to make you impressed. Right now, it is still limited to several users.',
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
    type: ['Fullstack', 'Mobile'],
    date: '11/2024',
    subtitle:
      'NuSantap is an app that uses AI and Computer Vision to provide personalized meal recommendations based on nutritional needs and local food availability, optimizing the "Makan Bergizi Gratis" program.',
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
    type: ['Frontend'],
    date: '07/2024',
    subtitle:
      "Grab feature that uses gen-AI to diagnose vehicle issues (even when the user has no idea what's wrong), find the nearest mechanics, book a repair service, and predict the cost. Built in 23 hours during hackjakarta.",
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
  {
    preview: DM2Calc,
    title: 'Discrete Math Calculator',
    type: ['CLI App'],
    date: '02/2024',
    subtitle:
      "A collection of tools for solving Discrete Math problems that doesn't just give out the final result, but also provides a step-by-step solution. The available solvers are for modular exponentiation, Euclidean's algorithm, CRT, and many more.",
    stacks: ['python'],
    url: '',
    github: 'https://github.com/absolutepraya/dm2-calculator',
  },
  {
    preview: null,
    title: 'Cobaju',
    type: ['Fullstack', 'Extension', 'Under Dev'],
    date: '03/2025',
    subtitle:
      'Cobaju is an online shopping companion, where you can see yourself in the clothes you want, complete with accurate sizing details in a matter of seconds. Cobaju collects clothing pictures you choose from the e-commerce website you visit and combines with your full-body image to see how it would fit you!',
    stacks: [
      'nextjs',
      'typescript',
      'tailwindcss',
      'supabase',
      'vitejs',
      'reactjs',
      'tailwindcss',
      'gemini',
      'openai',
    ],
    url: '',
    github: '',
  },
  {
    favicon: ALSAEcompIcon,
    preview: ALSAEcomp,
    title: 'ALSA LC FH UI E-Comp Portal',
    type: ['Frontend'],
    date: '02/2025',
    subtitle:
      'This website serves as the portal for ALSA FH UI E-Comp, a national competition held by ALSA LC UI. It features information about the competition categories, timeline, participants accomodation, etc.',
    stacks: ['nodejs', 'npm', 'nextjs', 'javascript', 'tailwindcss'],
    url: 'https://alsaecomp.id/',
    github: 'https://github.com/absolutepraya/alsa-ecomp',
  },
  {
    preview: Rumble,
    title: 'Rumble Backend',
    type: ['Backend'],
    date: '01/2025',
    subtitle:
      'Rumble is an On-Chain Solana Battle Royale Game. This is the backend server for Rumble, handling user authentication, game logic, player management, etc. Game announcements are sent via X (Twitter) Bot using X API v2.',
    stacks: ['nodejs', 'npm', 'express', 'javascript', 'supabase', 'x'],
    url: 'https://rumble-landing.vercel.app/',
    github: '',
  },
  {
    preview: null,
    title: 'SwiftCash',
    type: ['Fullstack'],
    date: '02/2025',
    subtitle:
      'A fast, secure, and reliable web-based digital banking app with dynamic account management and a powerful admin system. Built by maxxing out Next.js performance optimizations.',
    stacks: [
      'bun',
      'nextjs',
      'typescript',
      'tailwindcss',
      'supabase',
      'postgresql',
    ],
    url: 'https://swiftcash.abhipraya.dev/',
    github: 'https://github.com/absolutepraya/swiftcash',
  },
  {
    preview: null,
    title: 'NuSantap Dashboard',
    type: ['Fullstack'],
    date: '11/2024',
    subtitle:
      'A dashboard for NuSantap, featuring analytics graphs, user meal QR scans, and a stunting prevalence map at both provincial and national levels, with the ability to generate and manage weekly meal plans.',
    stacks: [
      'nodejs',
      'npm',
      'nextjs',
      'typescript',
      'tailwindcss',
      'firebase',
      'azure',
      'openai',
    ],
    url: 'https://nusantap-dashboard.vercel.app/',
    github: '',
  },
  {
    preview: Ngandung,
    title: 'Ngandung: Ngemil di Bandung',
    type: ['Fullstack', 'Mobile'],
    date: '11/2024',
    subtitle:
      'Ngandung is an application that makes it easy for users to find information about foods and stores in Bandung, leave reviews, and save favorite stores.',
    stacks: [
      'django',
      'python',
      'javascript',
      'tailwindcss',
      'flutter',
      'dart',
    ],
    url: '',
    github:
      'https://github.com/Kelompok-9-PBP-Ganjil-2024-2025/ngandung-mobile',
  },
  {
    preview: DesaKedisan,
    title: 'Desa Kedisan Tourism Portal',
    type: ['Frontend'],
    date: '10/2024',
    subtitle:
      'A front-end website that serves as information center of Desa Kedisan, a small tourism village in Gianyar, Bali. This website showcases the essence of the village, its culture, and its tourism spots.',
    stacks: ['nodejs', 'npm', 'vitejs', 'reactjs', 'javascript', 'tailwindcss'],
    url: 'https://desa-kedisan.vercel.app/',
    github: 'https://github.com/absolutepraya/desa-kedisan',
    favicon: DesaKedisanIcon,
  },
  {
    preview: Portfolio,
    title: 'Personal Portfolio',
    type: ['Frontend'],
    date: '08/2024',
    subtitle:
      'Personal portfolio website, showcasing skills, experiences, achievements, and projects. Contents are to be updated regularly. Feel free to explore and reach out!',
    stacks: [
      'bun',
      'npm',
      'vitejs',
      'reactjs',
      'javascript',
      'tailwindcss',
      'cloudflare',
    ],
    url: 'https://abhipraya.dev/',
    github: 'https://github.com/absolutepraya/portfolio',
    favicon: PortfolioIcon,
  },
  {
    preview: MIPAOpenHouse,
    title: 'Open House FMIPA UI 2024',
    type: ['Fullstack'],
    date: '06/2024',
    subtitle:
      'Event website that showcases details about the FMIPA UI 2024 Open House, including the event details and the faculty and its departments, while also functions as a payment platform for participants.',
    stacks: [
      'nodejs',
      'npm',
      'vitejs',
      'reactjs',
      'javascript',
      'tailwindcss',
      'nestjs',
      'supabase',
    ],
    url: 'https://mipaopenhouse.com',
    github: '',
    favicon: MIPAOpenHouseIcon,
  },
  {
    preview: GusDur,
    title: 'The Legend of Gus Dur: EoTR',
    type: ['Video Game'],
    date: '12/2022',
    subtitle:
      "A plotful 2D video game as the final project for the History of Indonesia subject in grade 12, with the theme being the presidency of Gus Dur. It tells a story about a young man going back in time to learn about Gus Dur's presidency.",
    stacks: ['rpgmaker'],
    url: '',
    github: '',
  },
  {
    title: 'Karakeep (Self-Hosted)',
    type: ['Self-Hosted'],
    date: '06/2025',
    subtitle:
      "An open-source bookmark-everything app (links, notes and images) with AI-based automatic tagging and full text search. Self-hosted by me. Contact me if you're interested in trying it!",
    stacks: ['docker', 'meilisearch', 'openai'],
    url: 'https://keep.abhipraya.dev/',
    github: 'https://github.com/karakeep-app/karakeep',
    homepage: 'https://karakeep.app/',
  },
  {
    title: 'MinIO (Self-Hosted)',
    type: ['Self-Hosted'],
    date: '10/2025',
    subtitle:
      'MinIO is a high-performance, S3 compatible object store, open sourced under GNU AGPLv3 license. Self-hosted alternative to cloud storage services.',
    stacks: ['docker'],
    url: '',
    github: 'https://github.com/minio/minio',
    homepage: 'https://www.min.io/',
  },
  {
    title: 'Cap (Self-Hosted)',
    type: ['Self-Hosted'],
    date: '10/2025',
    subtitle:
      'Cap is an open source Loom alternative for beautiful, shareable screen recordings. Record, edit, and share videos with ease.',
    stacks: ['docker'],
    url: 'https://cap.abhipraya.dev/',
    github: 'https://github.com/CapSoftware/Cap',
    homepage: 'https://cap.so/',
  },
  {
    title: 'Nextcloud (Self-Hosted)',
    type: ['Self-Hosted'],
    date: '08/2025',
    subtitle:
      'Nextcloud is an open-source, self-hosted productivity platform with file sync, calendar, contacts, and office suite (Collabora). My instance is private.',
    stacks: ['docker'],
    url: 'https://cloud.abhipraya.dev/',
    github: 'https://github.com/nextcloud/all-in-one',
    homepage: 'https://nextcloud.com/',
  },
  {
    title: 'qBittorrent (Self-Hosted)',
    type: ['Self-Hosted'],
    date: '10/2025',
    subtitle:
      'qBittorrent is a free, open-source BitTorrent client. Self-hosted web UI for managing downloads on my VPS.',
    stacks: ['docker'],
    url: 'https://torrent.abhipraya.dev/',
    github: 'https://github.com/qbittorrent/qBittorrent',
    homepage: 'https://www.qbittorrent.org/',
  },
  {
    title: 'Glances (Self-Hosted)',
    type: ['Self-Hosted'],
    date: '10/2025',
    subtitle:
      'Glances is a cross-platform system monitoring tool. Self-hosted on my VPS for real-time CPU, memory, disk, and network monitoring. Access is private (Tailscale-only).',
    stacks: ['docker'],
    url: '',
    github: 'https://github.com/nicolargo/glances',
    homepage: 'https://nicolargo.github.io/glances/',
  },
  {
    title: 'RSSHub (Self-Hosted)',
    type: ['Self-Hosted'],
    date: '05/2026',
    subtitle:
      'RSSHub is an open-source, extensible RSS feed generator that turns almost any website into a customizable RSS/Atom/JSON feed, even sites that dropped native RSS support (social media, news, forums, and more). Self-hosted on my VPS (basic-auth gated) to follow many sources from a single reader.',
    stacks: ['docker', 'nodejs', 'redis'],
    url: '',
    github: 'https://github.com/DIYgod/RSSHub',
    homepage: 'https://docs.rsshub.app/',
  },
  {
    title: 'Hermes Agent (Self-Hosted)',
    type: ['Self-Hosted', 'AI Agent'],
    date: '05/2026',
    subtitle:
      'A self-hosted AI agent ("Yanto") running 24/7 on my VPS, reachable over Telegram and Discord. It wires a configurable LLM to MCP servers and a library of custom skills (charts, maps, finance, weather, Google Workspace, RSS), with identity-aware permissions (owner vs guest) and a smart-approval system that auto-judges safe vs risky actions.',
    stacks: ['python', 'openai'],
    url: '',
    github: '',
  },
];

export default projectsData;
