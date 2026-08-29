// Import organization logos

interface Experience {
  title: string;
  org: string;
  orgShort?: string;
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
    title: 'AI Engineer (GTM) Intern',
    org: 'Avanade',
    orgShort: 'Avanade',
    url: 'https://www.avanade.com/',
    logo: Avanade,
    date: '03/2026 - Present',
    desc: "AI Engineer intern supporting Go-to-Market, translating enterprise discovery into Microsoft AI architectures, prototype demos, and business cases to deliver practical AI solutions.\n\n- Partnered with Business Development on 4 enterprise AI engagements, translating discovery into Microsoft solution architectures, business cases, pitch materials, and live demos for procurement, document operations, analytics, and financial-services workflows\n- Built a procurement and sourcing agent on [Microsoft Foundry](https://azure.microsoft.com/en-us/products/ai-foundry) using [SAP Cloud SDK](https://sap.github.io/cloud-sdk/) to connect to the client's SAP ECC, S/4HANA, and Ariba APIs, with specialist review and an audit trail; validated 25 model calls on a curated 494-line procurement snapshot, producing 147 proposed RFQ groups in 147.6 seconds\n- Developed a Python evaluation harness for multi-format invoice extraction, benchmarking Microsoft Foundry, [Azure Content Understanding](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/), and [Azure Document Intelligence](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/overview?view=doc-intel-4.0.0) across 10 invoices and 3 repeated runs; recommended gpt-5.4 at 83% precision and recall, 8.9s median latency, and Rp792 per invoice\n- Built an end-to-end [Azure SRE Agent](https://azure.microsoft.com/en-us/products/sre-agent) demo that applies OS, dependency, and in-server updates against compliance checklists and verifies each maintenance step before completion\n- Architected a [Microsoft Copilot](https://www.microsoft.com/en-us/microsoft-365/copilot) solution in [Microsoft Teams](https://www.microsoft.com/en-us/microsoft-teams/group-chat-software) for division leads, connected to a [Power BI](https://www.microsoft.com/en-us/power-platform/products/power-bi) model to deliver daily priorities and announcements, answer KPI questions, and provide conversational reporting without opening a dashboard",
    alignCenter: false,
  },
  {
    title: 'Fullstack & AI Engineer',
    org: 'Aiccountant',
    url: 'https://aiccountant.id/',
    logo: Aiccountant,
    date: '01/2026 - 07/2026',
    desc: '- Built the WhatsApp Customer Service AI Agent via the [Meta WhatsApp Business API](https://whatsappbusiness.com/developers/developer-hub/) on the [Cloudflare Agents SDK](https://developers.cloudflare.com/agents/) with 10+ tools and multimodal receipt workflows; cut LLM cost by roughly 50% through prompt-cache optimization\n- Built user-configured transaction recategorization rules using multi-stage similarity matching across substring, fuzzy, trigram, and [Gemini Embedding 001](https://ai.google.dev/gemini-api/docs/models/gemini-embedding-001); after 3 consistent corrections for the same merchant and category, [Cloudflare Queues](https://developers.cloudflare.com/queues/) triggers an LLM suggestion of a reusable brand pattern for dialog approval\n- Designed a scheduled merchant-enrichment workflow using search and web scraping to create reviewable context for downstream LLM categorization\n- Extended the agent architecture to [Telegram](https://core.telegram.org/bots/api), enabling proactive budget alerts and conversational financial assistance alongside WhatsApp\n- Powered 45,000+ AI workflow runs at a 96.2% success rate across Gmail ingestion, email classification, and agent execution, with telemetry and error monitoring through [PostHog](https://posthog.com/) and [Sentry](https://sentry.io/)\n- Built the [Remix](https://remix.run/) product landing page and made every user-facing workflow I developed available offline with [PowerSync](https://www.powersync.com/) local-first sync',
    alignCenter: false,
  },
  {
    title: 'Product Engineer Intern',
    org: 'Sobat Bisnis Group',
    orgShort: 'SBG',
    url: 'https://www.linkedin.com/company/sobatbisnis/posts/?feedView=all',
    logo: SobatBisnis,
    logoRounded: true,
    date: '06/2025 - 09/2025',
    desc: '- Implemented endpoint-level IAM across 3 microservices using Go, JWT RS256, and [Redis](https://redis.io/), with immediate session revocation\n- Delivered the listing-management service with tenant defaults and overrides, product and variant CRUD, plus asynchronous CSV/XLSX bulk operations with job tracking\n- Built a [Shopee platform connection module](https://open.shopee.com/developer-guide/4) with OAuth 2.0, encrypted token storage, caching, and background refresh, enabling multi-shop connection health and status visibility\n- Established versioned database migrations and standardized API response contracts across services, improving schema-change safety and client integration consistency',
    alignCenter: false,
  },
  {
    title: 'Lead of Web Infra. & DevOps',
    org: 'COMPFEST',
    url: 'https://compfest.id/',
    logo: COMPFEST,
    date: '03/2025 - 09/2025',
    desc: '- Co-led COMPFEST CTF 2025 from 1,900+ preliminary participants across ~650 teams to 45 finalists and 15 winners\n- Re-architected and deployed [Ailurus](https://github.com/ctfcompfest/ailurus-frontend), a COMPFEST-inherited Attack and Defence CTF gameserver for the final round, on [Google Kubernetes Engine (GKE)](https://cloud.google.com/kubernetes-engine), supporting 45 finalists through a 3-month infrastructure revamp\n- Built a custom [CTFd](https://ctfd.io/) frontend interface plugin with SCSS for the preliminary competition, carrying the COMPFEST visual theme across ~650 teams\n- Provisioned 7 [Google Compute Engine (GCE)](https://cloud.google.com/products/compute) challenge VMs for each of 15 finalist teams, strengthening isolation and predictable performance in the Attack & Defense environment\n- Mitigated a DDoS event of ~300,000 requests in 1 hour with Nginx rate limits and [Cloudflare](https://developers.cloudflare.com/dns/) filtering, while sustaining 500+ RPS at under 100ms average response time\n- Previously maintained the 2024 CTF platform for 1,600+ participants at 99.9% uptime during its 9-hour event',
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
    desc: '- Led frontend development for a salon booking platform, increasing mobile conversion by 15% with a new responsive UI\n- Optimized GraphQL queries by implementing caching, pagination, and lazy loading, resulting in a 50-60% reduction in data retrieval time\n- Increased application stability by 40% by resolving 10+ critical bugs related to state collisions and race conditions\n- Developed a BaaS AI voice-call system with a [Dify](https://dify.ai/) + [OpenAI](https://openai.com/) backend workflow and Python service to extract customer insights\n- Improved page load speed by 30% on a blockchain app by optimizing [Next.js](https://nextjs.org/) SSR',
    alignCenter: false,
  },
  {
    title: 'Lead of NetSOS SIG',
    org: 'RISTEK Fasilkom UI',
    orgShort: 'RISTEK UI',
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
