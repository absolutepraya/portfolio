// Import organization logos

import CO80 from '../assets/orgs/80co.webp';
import Aiccountant from '../assets/orgs/aiccountant.webp';
import COMPFEST from '../assets/orgs/compfest.webp';
import DDP0 from '../assets/orgs/ddp0.svg';
import Fasilkom from '../assets/orgs/fasilkom.svg';
import GDG from '../assets/orgs/gdg.svg';
import RISTEK from '../assets/orgs/ristek.svg';
import SB from '../assets/orgs/sb.webp';
import TVI from '../assets/orgs/tvi.webp';

const experienceData = [
  {
    title: 'Fullstack Engineer',
    org: 'Aiccountant',
    url: 'https://aiccountant.id/',
    logo: Aiccountant,
    date: '01/2026 - Present',
    desc: '- Built full-stack **budgeting & analytics dashboard** with offline-first sync, enabling users to track spending across 15+ categories with monthly budget targets and trend visualization\n- Redesigned user **onboarding flow** across 4 steps with auto-recovery logic, improving mobile completion rates by 40% and supporting 20+ major Indonesian banks/e-wallets\n- Built an AI-powered **WhatsApp customer service bot** with RAG-based bilingual knowledge retrieval, smart ticket deduplication, and Linear issue tracking integration, reducing support response time and enabling automated inquiry handling\n- Developed **interactive product demo** with 4 auto-cycling screens and real-time animations, increasing landing page engagement and session duration',
    alignCenter: false,
  },
  {
    title: 'AI Engineer (R&D)',
    org: 'PT. Teknologi Vision Indonesia',
    orgShort: 'TekVis',
    url: 'https://tekvision.co.id/',
    logo: TVI,
    date: '08/2025 - Present',
    desc: '- Automating insurance claims processing for a client using OCR and multimodal LLMs, cutting manual review time and improving fraud detection accuracy, ensuring faster, fairer claim approvals.\n- Researching the feasibility of **photoplethysmogram (PPG)** for AI-based medical purposes',
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
