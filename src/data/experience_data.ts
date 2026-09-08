// Import organization logos

interface Experience {
  title: string;
  org: string;
  url: string;
  logo: string;
  logoRounded?: boolean;
  date: string;
  desc: string;
  alignCenter?: boolean;
  previousTitles?: string[];
  previousDates?: string[];
}

import CO80 from '../assets/orgs/80co.svg';
import Aiccountant from '../assets/orgs/aiccountant-rounded.webp';
import Avanade from '../assets/orgs/avanade.webp';
import COMPFEST from '../assets/orgs/compfest.webp';
import Fasilkom from '../assets/orgs/fasilkom.svg';
import RISTEK from '../assets/orgs/ristek.svg';
import SobatBisnis from '../assets/orgs/sobatbisnis.jpeg';

const experienceData: Experience[] = [
  {
    title: 'AI Engineer Intern',
    org: 'Avanade',
    url: 'https://www.avanade.com/',
    logo: Avanade,
    date: '03/2026 - Present',
    desc: '- Designed and pitched Microsoft-stack AI solution architectures for a leading Indonesian bank and a major pulp and paper group, partnering with Business Development to turn business problems into Azure designs, PoC proposals, business cases, and live demos\n- Completed Microsoft Learn preparation for AI-103, covering [Microsoft Foundry](https://azure.microsoft.com/en-us/products/ai-foundry) agents, RAG, multimodal AI, evaluation, observability, security, responsible AI, and information extraction\n- Architected a [Microsoft Fabric](https://www.microsoft.com/en-us/microsoft-fabric) [Power BI](https://www.microsoft.com/en-us/power-platform/products/power-bi) Copilot PoC for natural-language procurement analytics, plus a three-agent Microsoft Foundry MRO sourcing system connecting SAP S/4HANA to Ariba with [Azure Functions](https://azure.microsoft.com/en-us/products/functions)\n- Built an end-to-end [Azure SRE Agent](https://azure.microsoft.com/en-us/products/sre-agent) demo around a Node.js and Express FSI loan API with [Azure SQL](https://azure.microsoft.com/en-us/products/azure-sql), [App Insights](https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview), [Azure Monitor](https://azure.microsoft.com/en-us/products/monitor), 7 fault-injection types, and deployment to [Azure VM](https://azure.microsoft.com/en-us/products/virtual-machines) and [Azure Container Apps](https://azure.microsoft.com/en-us/products/container-apps)',
    alignCenter: false,
  },
  {
    title: 'Fullstack & AI Engineer',
    org: 'Aiccountant',
    url: 'https://aiccountant.id/',
    logo: Aiccountant,
    date: '01/2026 - 07/2026',
    desc: '- Owned the full software development lifecycle for a production WhatsApp customer-service AI agent on [Cloudflare Agents SDK](https://developers.cloudflare.com/agents/), Durable Objects, Workflows, and [Vercel AI SDK](https://ai-sdk.dev/), from architecture and implementation through testing, deployment, observability, debugging, and maintenance; built 10+ tools and multimodal receipt reading, cutting LLM cost about 50%\n- Built a transaction-categorization rules engine with layered text and embedding matching, proactive rule suggestions, and historical re-application, reducing manual rule saves from 3 to 10 seconds to under half a second\n- Built merchant-normalization workflows using Indonesia-scoped search, [Gemini](https://gemini.google.com/) 2.5 Flash, [Telegram](https://core.telegram.org/bots/api) review queues, and [OpenAI](https://openai.com/) embeddings, folding brand extraction into the email classifier to remove a per-email AI call\n- Powered 45,000+ AI workflow runs at a 96.2% success rate across email ingestion, classification, and agent execution, with [PostHog](https://posthog.com/) and [Sentry](https://sentry.io/) telemetry; debugged production workflows and instrumented adoption and latency metrics\n- Built the [Remix](https://remix.run/) marketing landing page and budgeting feature with Framer Motion and offline-first [PowerSync](https://www.powersync.com/) sync',
    alignCenter: false,
  },
  {
    title: 'Product Engineer Intern',
    org: 'Sobatbisnis',
    url: 'https://www.linkedin.com/company/sobatbisnis/posts/?feedView=all',
    logo: SobatBisnis,
    logoRounded: true,
    date: '06/2025 - 09/2025',
    desc: '- Implemented endpoint-level IAM across 3 Go microservices using JWT RS256 and [Redis](https://redis.io/), with immediate session revocation and least-privilege API access\n- Built merchant-facing product and variant management for a smart inventory system, helping brands manage SKU stock and availability across connected e-commerce stores, with [RabbitMQ](https://www.rabbitmq.com/)-backed CSV/XLSX bulk jobs, progress tracking, and S3/MinIO storage\n- Built the [Shopee platform connection module](https://open.shopee.com/developer-guide/4) for inventory, availability, and checkout workflows with OAuth 2.0, HMAC, API integration, scraping, encrypted token storage, Redis caching, background refresh, and multi-shop status and health monitoring',
    alignCenter: false,
  },
  {
    title: 'Lead of Web Infra. & DevOps',
    org: 'COMPFEST',
    url: 'https://compfest.id/',
    logo: COMPFEST,
    date: '03/2024 - 09/2025',
    desc: '- Co-led COMPFEST CTF 2024 and 2025, re-architecting and deploying [Ailurus](https://github.com/ctfcompfest/ailurus-frontend), a high-volume distributed backend Attack and Defense game server on [Google Kubernetes Engine (GKE)](https://cloud.google.com/kubernetes-engine) with Flask/SocketIO, [Redis](https://redis.io/), [RabbitMQ](https://www.rabbitmq.com/), MySQL, Next.js, and Tailwind, supporting 45 finalists with 7 [Google Compute Engine (GCE)](https://cloud.google.com/products/compute) challenge VMs per team\n- Built a custom [CTFd](https://ctfd.io/) frontend plugin with SCSS across about 650 teams; sustained 500+ RPS below 100ms average response time, mitigated a 300,000 requests/hour DDoS through Nginx and [Cloudflare](https://developers.cloudflare.com/dns/) controls, and maintained the prior platform for 1,600+ participants at 99.9% uptime',
    alignCenter: false,
    previousTitles: ['Staff of Web Infra.'],
    previousDates: ['03/2024 - 11/2024'],
  },
  {
    title: 'Fullstack Engineer',
    org: '80&Company',
    url: 'https://80and.co/en/company/',
    logo: CO80,
    date: '01/2025 - 08/2025',
    desc: "- Led frontend development for a salon booking platform, increasing mobile conversion by 15% with a responsive UI\n- Optimized GraphQL queries with caching, pagination, and lazy loading, reducing data retrieval time by 50 to 60%, and resolved 10+ critical state-collision and race-condition bugs, improving stability by 40%\n- Built a [Dify](https://dify.ai/) and [OpenAI](https://openai.com/) voice-call workflow with Python and improved a blockchain app's page-load speed by 30% through [Next.js](https://nextjs.org/) SSR optimization",
    alignCenter: false,
  },
  {
    title: 'Lead of NetSOS SIG',
    org: 'RISTEK Fasilkom UI',
    url: 'https://www.ristek.cs.ui.ac.id/',
    logo: RISTEK,
    date: '03/2025 - 03/2026',
    desc: '- Advanced from competitive RISTEK member selection to lead the NetSOS SIG\n- Deployed an Attack/Defense CTF platform for 20 internal members on [Google Cloud Platform (GCP)](https://cloud.google.com/) and [Google Kubernetes Engine (GKE)](https://cloud.google.com/kubernetes-engine), automated with Ansible\n- Contributed the [Next.js](https://nextjs.org/) frontend to a cross-SIG RISTEK capstone project, integrating work across multiple teams\n- Led Web Penetration and Cryptography open classes for 50+ participants, teaching cybersecurity fundamentals through Capture The Flag exercises',
    alignCenter: false,
    previousTitles: [
      'Member of NetSOS SIG',
      'PIC of Open Class',
      'Mentee of Open Class',
    ],
    previousDates: [
      '03/2024 - 02/2025',
      '09/2024 - 11/2024',
      '10/2023 - 10/2023',
    ],
  },
  {
    title: 'TA for Linear Algebra',
    org: 'Fasilkom UI',
    url: 'https://cs.ui.ac.id/',
    logo: Fasilkom,
    date: '01/2025 - 06/2025',
    desc: '- Improved average quiz and exam scores by 10% by leading pre-quiz and pre-exam assistance sessions for 120+ students\n- Designed assignment questions and managed grading for 30+ students, ensuring timely feedback and academic integrity',
    alignCenter: false,
    previousTitles: ['TA for Discrete Math 1'],
    previousDates: ['07/2024 - 12/2024'],
  },
];

export default experienceData;
