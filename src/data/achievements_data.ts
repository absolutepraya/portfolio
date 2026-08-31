// Import organizer logos

export interface Article {
  platform: string;
  url: string;
}

export interface Achievement {
  title: string;
  organizer: string;
  organizerUrl: string;
  organizerLogo: string;
  date: string;
  desc: string;
  award: string;
  awardInt: number;
  prizeCurr?: string;
  prizeInt?: number;
  bonus?: string[];
  location: string;
  articles?: Article[];
  imagesPath?: string;
}

import Alibaba from '../assets/orgs/alibaba.webp';
import ASSI from '../assets/orgs/assi.webp';
import JIHS from '../assets/orgs/jihs.webp';
import Kemenkeu from '../assets/orgs/kemenkeu.webp';
import Microsoft from '../assets/orgs/microsoft.svg';
import UC from '../assets/orgs/uc.webp';

const achievementsData: Achievement[] = [
  {
    title: 'Gov-AI Hackathon 2024',
    organizer: 'Kemenkeu (Ministry of Finance) RI',
    organizerUrl: 'https://www.kemenkeu.go.id/',
    organizerLogo: Kemenkeu,
    date: '11/2024',
    desc: 'Won **1st place** among **500+ participants** from **3 countries** after proposal and pitch rounds with an **AI-driven solution**.',
    award: '1st Place',
    awardInt: 1,
    prizeCurr: 'IDR',
    prizeInt: 50000000,
    bonus: ['Soundcore TWS', 'Merchandises'],
    location: 'Jakarta, Indonesia',
    articles: [
      {
        platform: 'Microsoft News',
        url: 'https://news.microsoft.com/id-id/2024/11/18/govai-hackathon-produces-five-generative-ai-solutions-to-improve-the-quality-of-government-services-in-indonesia/',
      },
      {
        platform: 'KataData',
        url: 'https://katadata.co.id/digital/teknologi/673c272ade16a/gali-inovasi-ai-untuk-layanan-publik-pemerintah-gelar-govai-hackathon-2024',
      },
      {
        platform: 'Kemahasiswaan UI',
        url: 'https://kemahasiswaan.ui.ac.id/tim-uinnovator-raih-juara-1-pada-govai-kementerian-keuangan-hackathon-2024-2/',
      },
      {
        platform: 'DEPOK POS',
        url: 'https://www.depokpos.com/2024/12/manfaatkan-ai-dalam-distribusikan-makanan-bergizi-mahasiswa-ui-raih-juar-1-govai-hackaton-2024/',
      },
      {
        platform: 'Gizimologi',
        url: 'https://gizmologi.id/news/govai-hackathon-2024-selalu-perkuat-ai/',
      },
      {
        platform: 'Hybrid',
        url: 'https://hybrid.co.id/post/govai-hackathon-2024-cetak-5-terobosan-ai-untuk-layanan-pemerintah/',
      },
      {
        platform: 'Heta News',
        url: 'https://www.hetanews.com/article/294648/tim-mahasiswa-ui-raih-juara-1-govai-kementerian-keuangan-hackathon-2024',
      },
    ],
    imagesPath: 'src/assets/achievements/govai',
  },
  {
    title: 'JIHS Hackathon 2025',
    organizer: 'Jakarta International Polytechnic',
    organizerUrl: 'https://jihs.ac.id/',
    organizerLogo: JIHS,
    date: '04/2025',
    desc: 'Won **1st place** in the final round against **9 other teams** with **PINTARU**, an AI learning platform for narrated explanations and illustrated storybooks.',
    award: '1st Place',
    awardInt: 1,
    prizeCurr: 'IDR',
    prizeInt: 8000000,
    bonus: ['IDR 400.000 Voucher', 'Merchandises'],
    location: 'Jakarta, Indonesia',
    articles: [
      {
        platform: 'The Jakarta Post',
        url: 'https://www.thejakartapost.com/culture/2025/05/18/jihs-hackathon-2025-concludes-with-breakthrough-innovations-in-jakartas-scbd.html',
      },
      {
        platform: 'EPORTAL',
        url: 'https://eportal.id/release-jihs-hackathon-2025-ajang-kreativitas-teknologi-dalam-mewujudkan-visi-asta-cita/',
      },
    ],
    imagesPath: 'src/assets/achievements/jihs',
  },
  {
    title: 'elevAIte Hackathon 2025',
    organizer: 'Microsoft & Biji-Biji',
    organizerUrl: 'https://www.microsoft.com/',
    organizerLogo: Microsoft,
    date: '06/2025',
    desc: "Won **3rd place** in Microsoft's **elevAIte Indonesia** AI hackathon with a solution built using **Azure services**. The team advanced to the national final.",
    award: '3rd Place',
    awardInt: 3,
    prizeCurr: 'US$',
    prizeInt: 400,
    bonus: ['Merchandises', 'Microsoft Voucher'],
    location: 'Tangerang, Indonesia',
    imagesPath: 'src/assets/achievements/elevaite',
    articles: [
      {
        platform: 'BINUS News',
        url: 'https://socs.binus.ac.id/2025/07/02/binus-university-gelar-hackathon-elevaite-2025-angkat-tema-ai-for-inclusivity/',
      },
    ],
  },
  {
    title: 'Alibaba Cloud Hackathon 2025',
    organizer: 'Alibaba Cloud',
    organizerUrl: 'https://www.alibabacloud.com/',
    organizerLogo: Alibaba,
    date: '05/2025',
    desc: "Won **Runner-Up** and **The Most Favorite Award** at Alibaba Cloud's GenAI Hackathon, held with **GoTo** and **Komdigi RI**. Built an education-focused solution using **Model Studio** and **Qwen AI models**.",
    award: 'Runner-Up + The Most Favorite Award',
    awardInt: 3,
    prizeInt: 5000000,
    prizeCurr: 'IDR',
    bonus: [
      'Acrylic Plaque',
      'Alibaba Cloud Voucher',
      'Alibaba Merchandises',
      'GoTo Merchandises',
    ],
    location: 'Jakarta, Indonesia',
    imagesPath: 'src/assets/achievements/alibaba',
  },
  {
    title: 'AI4Accessibility Hackathon 2025',
    organizer: 'Microsoft',
    organizerUrl: 'https://www.microsoft.com/',
    organizerLogo: Microsoft,
    date: '06/2025',
    desc: 'Won **2nd place** with **PINTARU**, an adaptive study helper and digital storybook solution for children with dyslexia. The team used **Azure OpenAI**, **Azure Search**, and **Azure Speech**, competing against 46 teams with 10 finalists.',
    award: '2nd Place',
    awardInt: 2,
    bonus: [
      'Dinner with President of Microsoft Indonesia, Dharma Simorangkir',
      'Merchandises',
    ],
    location: 'FT UI, Depok, Indonesia',
    imagesPath: 'src/assets/achievements/ai4a',
  },
  {
    title: 'Indonesia Aerospace Hackathon 2025',
    organizer: 'Indonesian Space Society',
    organizerUrl: 'https://assi.or.id/id/',
    organizerLogo: ASSI,
    date: '04/2025',
    desc: "Named one of **4 champions** in ASSI's satellite innovation competition with an AI-powered solution addressing fraud against bank customers in Indonesia.",
    award: '1 of 4 Champions',
    awardInt: 1,
    location: 'Jakarta, Indonesia',
  },
  {
    title: 'Hackfest UC 2025',
    organizer: 'Universitas Ciputra',
    organizerUrl: 'https://www.uc.ac.id/',
    organizerLogo: UC,
    date: '04/2025',
    desc: 'Reached the final stage before the team was ultimately **disqualified**.',
    award: '1st Place [Disqualified]',
    awardInt: 0,
    location: 'Surabaya, Indonesia',
  },
];

export default achievementsData;
