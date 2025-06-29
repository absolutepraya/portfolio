// Import organization logos
import COMPFEST from '../assets/orgs/compfest.webp';
import RISTEK from '../assets/orgs/ristek.svg';
import Fasilkom from '../assets/orgs/fasilkom.svg';
import DDP0 from '../assets/orgs/ddp0.svg';
import BETIS from '../assets/orgs/betis.svg';
import GDG from '../assets/orgs/gdg.svg';
import CO80 from '../assets/orgs/80co.webp';
import SB from '../assets/orgs/sb.webp';

const experienceData = [
  {
    title: 'Product Engineer Intern',
    org: 'SobatBisnis',
    url: 'https://www.linkedin.com/company/sobatbisnis/posts/?feedView=all',
    logo: SB,
    date: '06/2025 - Present',
    desc: '- Building a cutting-edge **B2B AI application**\n- Creating seamless user experiences for enterprise clients',
    alignCenter: false,
  },
  {
    title: 'Full-Stack Engineer',
    org: '80&Company',
    url: 'https://80and.co/en/company/',
    logo: CO80,
    date: '01/2025 - Present',
    desc: '- Working on beauty acupuncture salon:\n  - Implemented **responsive UI** for all functionality\n  - Optimized **GraphQL queries** by implementing caching, pagination, splitting, and lazy loading, resulting in **50-60% reduction** in query time\n  - Fixed several critical bugs related to state collisions, race conditions, etc.\n- Developed **BaaS AI voice-call** system:\n  - Powered by Dify AI (open-source AI agent backend) and OpenAI gpt-4o-mini model\n  - Python integration for customer insights\n\n- Crafted **blockchain project frontend** using Next.js:\n  - Optimized **SSR** for enhanced performance',
    alignCenter: false,
  },
  {
    title: 'Lead of Web Infra. & VPIC',
    org: 'COMPFEST',
    url: 'https://compfest.id/',
    logo: COMPFEST,
    date: '03/2024 - Present',
    desc: '- Currently leading **COMPFEST CTF AnD gameserver revamp:**\n  - Flask, SQLAlchemy, SocketIO, Redis, APScheduler, and Pika (RabbitMQ) backend\n  - Next.js frontend\n  - Deployed using Kubernetes (GKE) and Docker within Google Cloud Platform\n  - Enabled WireGuard VPN for private network competition\n- Led **COMPFEST CTF jeopardy web platform design and maintenance:**\n  - Flask, Node.js (Webpack), and Bootstrap\n  - Enabled with custom bash script automations\n  - Deployed via Docker within Google Cloud Platform\n- Managed **high-traffic competition servers** with efficient resource utilization',
    alignCenter: false,
    previousTitles: ['Staff of Web Infra.'],
    previousDates: ['03/2024 - 11/2024'],
  },
  {
    title: 'Software Engineering Team',
    org: 'Google Dev Group (GDG) UI',
    url: 'https://gdg.community.dev/gdg-on-campus-universitas-indonesia-jakarta-indonesia/',
    logo: GDG,
    date: '11/2024 - Present',
    desc: '- Teaching and mentoring across multiple batches about **Google Technologies**\n  - **Firebase**, **Flutter**, **Google Cloud**\n- Developing learning modules and live web apps\n  - Hands-on demos during Study Jam sessions\n  - Using **Google Technologies** and **React.js**\n- Co-organizing **GDGoC UI National Hackathon**\n  - Guidebook author and judge alongside industry professionals',
    alignCenter: false,
    previousTitles: ['Member'],
    previousDates: ['09/2023 - 08/2024'],
  },
  {
    title: 'Lead of NetSOS SIG',
    org: 'RISTEK Fasilkom UI',
    url: 'https://www.ristek.cs.ui.ac.id/',
    logo: RISTEK,
    date: '03/2024 - Present',
    desc: '- Selected from competitive batch for RISTEK membership and promoted to lead position\n- Developed and deployed **Attack and Defense CTF**\n  - **Next.js** frontend\n  - **Flask**, **RabbitMQ**, **Redis**, **Wireguard** backend\n  - Deployed via **Docker** with **Ansible**\n- Participated in cross-SIG **RISTEK Capstone Project** as Next.js Frontend Developer\n- Served as Person in Charge for NetSOS SIG Open Classes in the fields of **Web Penetration** and **Cryptography**',
    alignCenter: false,
    previousTitles: ['Member of NetSOS SIG', 'PIC of Open Class', 'Mentee of Open Class'],
    previousDates: ['03/2024 - 02/2025', '09/2024 - 11/2024', '10/2023 - 10/2023'],
  },
  {
    title: 'TA for Linear Algebra',
    org: 'Fasilkom UI',
    url: 'https://cs.ui.ac.id/',
    logo: Fasilkom,
    date: '01/2025 - 06/2025',
    desc: '- Designs assignment questions and handles grading\n- Overseeing 60+ students during exams\n- Hosts weekly forum discussions\n- Teaching in assistance sessions before quizzes and exams',
    alignCenter: false,
    previousTitles: ['TA for Discrete Math 1'],
    previousDates: ['07/2024 - 12/2024'],
  },
  {
    title: 'Python Mentor',
    org: 'Dasar-Dasar Pemrograman 0',
    url: 'https://www.linkedin.com/company/ddp-0/mycompany/',
    logo: DDP0,
    date: '06/2024 - 09/2024',
    desc: '- Teaching Fasilkom UI freshmen about **Python Language**\n- Provision for **DDP-1 course** preparation\n- Materials covering:\n  - **Python** basics\n  - **Python Turtle** library',
    alignCenter: false,
  },
  {
    title: 'Academician & Lecturer',
    org: 'BETIS Fasilkom UI',
    url: 'https://www.instagram.com/betisfasilkomui/',
    logo: BETIS,
    date: '12/2023 - 05/2024',
    desc: '- Conducted interviews to select prospective tutors\n- Created comprehensive learning materials:\n  - Modules and quizzes\n  - Try-outs and PowerPoint presentations\n- Stepped in to teach classes when tutors were unavailable',
    alignCenter: false,
  },
];

export default experienceData;
