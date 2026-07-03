// Import organization logos

interface Experience {
  title: string;
  org: string;
  orgShort?: string;
  url: string;
  logo: string;
  date: string;
  desc: string;
  alignCenter?: boolean;
  previousTitles?: string[];
  previousDates?: string[];
}

import CO80 from '../assets/orgs/80co.webp';
import Aiccountant from '../assets/orgs/aiccountant.webp';
// import Avanade from '../assets/orgs/avanade.webp'; // TODO: re-enable with Avanade experience below
import COMPFEST from '../assets/orgs/compfest.webp';
import DDP0 from '../assets/orgs/ddp0.svg';
import Fasilkom from '../assets/orgs/fasilkom.svg';
import GDG from '../assets/orgs/gdg.svg';
import RISTEK from '../assets/orgs/ristek.svg';
import SB from '../assets/orgs/sb.webp';
import TVI from '../assets/orgs/tvi.webp';

const experienceData: Experience[] = [
  // TODO: Avanade experience temporarily hidden. Re-enable by removing this
  // block comment wrapper and uncommenting the Avanade import above.
  /*
  {
    title: 'AI Solution Intern',
    org: 'Avanade',
    orgShort: 'Avanade',
    url: 'https://www.avanade.com/',
    logo: Avanade,
    date: '03/2026 - Present',
    desc: '- Designed and pitched **Microsoft-stack AI** solution architectures to enterprise clients (**a leading Indonesian bank** and **a major pulp & paper group**) as the technical partner alongside Business Development, turning business problems into **Azure** designs, PoC proposals, business cases, and live demos across procurement and HR\n- For the pulp & paper group, architected a **Microsoft Fabric Power BI Copilot** PoC for natural-language procurement analytics (semantic model, hybrid on-prem data-tiering, RLS/CLS) and a **three-agent MRO sourcing system** on **Microsoft Foundry** automating SAP S/4HANA to Ariba, re-architected from low-code to **pro-code (Azure Functions)** after client discovery\n- Built an end-to-end **Azure SRE Agent** demo: a sample FSI loan API (**Node.js/Express**, **Azure SQL**, App Insights) with 7 fault-injection types, deployable to both **Azure VM** and **Azure Container Apps**, where the agent autonomously remediates safe incidents and proposes human-approved fixes on **Azure Monitor** alerts',
    alignCenter: false,
  },
  */
  {
    title: 'Fullstack & AI Engineer',
    org: 'Aiccountant',
    url: 'https://aiccountant.id/',
    logo: Aiccountant,
    date: '01/2026 - 06/2026',
    desc: '- Led the **WhatsApp Customer Service AI Agent** rewrite on **Cloudflare** (**Agents SDK**, **Durable Objects**, **Workflows**) and **Vercel AI SDK** with 10+ tools (knowledge-base search, transaction logging, spending analytics, support tickets, human escalation) and multimodal receipt reading from photo uploads; cut its **LLM cost** by roughly 50% with prompt-cache-optimized prompts, and re-architected messaging onto a **channel-agnostic** schema so Telegram and other channels plug in without a rewrite\n- Designed and shipped the **user categorization rules engine** that auto-categorizes new transactions by merchant name and short-circuits the LLM pipeline on hit. Pattern matching combines **word-boundary substring**, **trigram**, and **Gemini embedding** similarity to survive messy bank-descriptor variants, with system-suggested rules and atomic retroactive application across historical transactions, cutting manual rule-saves from 3-10s to under half a second\n- Built the **merchant normalization pipeline** that turns inconsistent bank-statement counterparties into canonical merchants. Async enrichment runs through **Brave Search** (Indonesia-geo) and **Gemini 2.5 Flash** structured output, gated by a Telegram admin review queue before promotion to a canonical merchants table backed by **OpenAI embeddings**, plus folding brand extraction into the email classifier to drop a per-email LLM call\n- Powered **45,000+ AI workflow runs at 96.2% success rate** across Gmail ingestion, email classification, and agent execution, and instrumented the rule-suggestion adoption funnel and time-to-prompt latency in **PostHog**\n- Designed the **marketing landing page** end-to-end (animated phone-simulation hero auto-cycling through product tabs, interactive product demos, testimonial carousel, multilingual ID/EN, **PostHog** CTA funnel tracking; built on **Remix** + **Framer Motion**) and the **budgeting feature** (Smart Budget AI-suggested monthly limits, Manual Budget income-based allocation, per-category traffic-light indicators), backed by **PowerSync** offline-first reactive queries computing budget vs. actual in real time',
    alignCenter: false,
  },
  {
    title: 'AI Engineer (R&D)',
    org: 'Technet Vision Indonesia',
    orgShort: 'Technet',
    url: 'https://tekvision.co.id/',
    logo: TVI,
    date: '08/2025 - 12/2025',
    desc: '- Automated insurance-claims processing for a client using **OCR** and **multimodal LLMs**, cutting manual review time and improving fraud-detection accuracy for faster, fairer claim approvals\n- Researched the feasibility of **photoplethysmogram (PPG)** signals for AI-based medical applications',
  },
  {
    title: 'Product Engineer Intern',
    org: 'SobatBisnis',
    url: 'https://www.linkedin.com/company/sobatbisnis/posts/?feedView=all',
    logo: SB,
    date: '06/2025 - 09/2025',
    desc: '- Implemented zero-trust IAM across microservices (Auth, LMS, Shopee) by building endpoint-permission mapping and middleware in Go with JWT RS256 and Redis sessions, enforcing per-endpoint authorization and immediate revocation\n- Delivered the product Listing Management Service with tenant default inheritance/overrides, product CRUD + variants, CSV/XLSX import/export via RabbitMQ workers and S3/MinIO presigned uploads, enabling reliable bulk operations with job tracking\n- Built Shopee platform connection module with OAuth 2.0 flow, HMAC-signed token exchange, encrypted token storage, Redis caching, and background refresh, providing multi-shop support with status and health endpoints\n- Established versioned database migrations (Goose) and standardized API response envelopes across services, improving schema evolution safety and client integration consistency',
    alignCenter: false,
  },
  {
    title: 'Lead of Web Infra. & DevOps',
    org: 'COMPFEST',
    url: 'https://compfest.id/',
    logo: COMPFEST,
    date: '03/2025 - 09/2025',
    desc: '- Co-led COMPFEST CTF 2025: prelims 1900+ participants (~650 teams) → finals 45 participants (15 teams) → 15 winners (5 winning teams)\n- Led a 3-month architectural revamp and deployment of a CTF gameserver on Google Kubernetes Engine (GKE), secured with a VPN server, to support 45 finalists\n  - Backend: Flask, SocketIO, Redis, RabbitMQ, MySQL\n  - Frontend: Next.js, Tailwind CSS\n- Implemented a new gameserver service mode on Google Compute Engine (GCE) by provisioning 7 VMs per team (one challenge per VM) in the Attack & Defense environment, resulting in stronger isolation and predictable performance alongside the GKE mode\n- Mitigated a DDoS attack (~300k requests in 1 hour from rotating mobile proxies across regions) by tightening Nginx rate limiting and Cloudflare filtering, resulting in minimal platform downtime while keeping all challenge instances online\n- Managed servers handling 500+ RPS with <100ms average response time via strategic GCP resource allocation\n- During COMPFEST 2024, designed and maintained a CTF platform hosting 1600+ participants (~550 teams) with 99.9% uptime during a 9-hour event',
    alignCenter: false,
    previousTitles: ['Staff of Web Infra.'],
    previousDates: ['03/2024 - 11/2024'],
  },
  {
    title: 'Fullstack Engineer',
    org: '80&Company',
    orgShort: '80&Co.',
    url: 'https://80and.co/en/company/',
    logo: CO80,
    date: '01/2025 - 08/2025',
    desc: '- Led frontend development for a salon booking platform, increasing mobile conversion by 15% with a new responsive UI\n- Optimized **GraphQL queries** by implementing caching, pagination, and lazy loading, resulting in a **50-60% reduction** in data retrieval time\n- Increased application stability by 40% by resolving 10+ critical bugs related to state collisions and race conditions\n- Developed a **BaaS AI voice-call** system with a Dify + OpenAI backend workflow and Python service to extract customer insights\n- Improved page load speed by 30% on a blockchain app by optimizing Next.js **SSR**',
    alignCenter: false,
  },
  {
    title: 'Software Engineering Team',
    org: 'Google Dev Group (GDG) UI',
    orgShort: 'GDGoC UI',
    url: 'https://gdg.community.dev/gdg-on-campus-universitas-indonesia-jakarta-indonesia/',
    logo: GDG,
    date: '11/2024 - 06/2025',
    desc: '- Teaching and mentoring across multiple batches about **Google Technologies**\n  - **Firebase**, **Flutter**, **Google Cloud**\n- Developing learning modules and live web apps\n  - Hands-on demos during Study Jam sessions\n  - Using **Google Technologies** and **React.js**\n- Co-organizing **GDGoC UI National Hackathon**\n  - Guidebook author and judge alongside industry professionals',
    alignCenter: false,
    previousTitles: ['Member'],
    previousDates: ['09/2023 - 08/2024'],
  },
  {
    title: 'Lead of NetSOS SIG',
    org: 'RISTEK Fasilkom UI',
    orgShort: 'RISTEK UI',
    url: 'https://www.ristek.cs.ui.ac.id/',
    logo: RISTEK,
    date: '03/2024 - Present',
    desc: '- Selected from competitive batch for RISTEK membership and promoted to lead position\n- Deployed an **Attack/Defense CTF** platform for 20 internal members in GCP with GKE using Ansible automation:\n  - [https://github.com/ctfcompfest/ailurus-frontend](https://github.com/ctfcompfest/ailurus-frontend)\n  - [https://github.com/ctfcompfest/ailurus-backend](https://github.com/ctfcompfest/ailurus-backend)\n- Contributed as **Next.js Frontend Developer** to cross-SIG **RISTEK Capstone Project**, collaborating with multiple teams to deliver integrated solutions\n- Led open classes on **Web Penetration** and **Cryptography** topic for 50+ participants on cybersecurity fundamentals, mainly in the form of CTF (Capture The Flag)',
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
  {
    title: 'Python Mentor',
    org: 'Dasar-Dasar Pemrograman 0',
    orgShort: 'DDP-0',
    url: 'https://www.linkedin.com/company/ddp-0/mycompany/',
    logo: DDP0,
    date: '06/2024 - 09/2024',
    desc: "- Mentored 30 freshmen in foundational **Python** to prepare them for the university's introductory course\n- Developed a 4-week Python curriculum, leading to their score increase of up to 20% on the final project",
    alignCenter: false,
  },
];

export default experienceData;
