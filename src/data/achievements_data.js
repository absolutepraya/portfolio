// Import organizer logos
import Kemenkeu from '../assets/orgs/kemenkeu.webp';
import JIHS from '../assets/orgs/jihs.webp';
import UC from '../assets/orgs/uc.webp';
import COMSNETS from '../assets/orgs/comsnets.webp';
import Microsoft from '../assets/orgs/microsoft.svg';
import ASSI from '../assets/orgs/assi.webp';
import Alibaba from '../assets/orgs/alibaba.webp';
import PERMIKOMNAS from '../assets/orgs/permikomnas.webp';
import BEMFTIUNTAR from '../assets/orgs/bemuntar.webp';
import BNCC from '../assets/orgs/bncc.webp';

const achievementsData = [
  {
    title: 'Gov-AI Hackathon 2024',
    organizer: 'Kemenkeu (Ministry of Finance) RI',
    organizerUrl: 'https://www.kemenkeu.go.id/',
    organizerLogo: Kemenkeu,
    date: '11/2024',
    desc: 'Securing victory among 500 participants from 3 countries across three stages (proposal, 5-minute pitch, and 7-minute final pitch) as the youngest finalist team, competing against professionals and academics, with an AI-driven solution.',
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
    imagesPath: 'src/assets/achievements/govai'
  },
  {
    title: 'JIHS Hackathon 2025',
    organizer: 'Jakarta International Polytechnic',
    organizerUrl: 'https://jihs.ac.id/',
    organizerLogo: JIHS,
    date: '04/2025',
    desc: "Winning in a competitive final round against 9 other teams from Indonesia's leading universities. Our product features an AI-generated explanation video with clear & concise text, graphs, visualizations, animations, and human-like audio, alongside an AI-generated kid storybook that was first of its kind. Our team was interviewed by JAKTV following the winners awarding ceremony.",
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
    // imagesPath: 'src/assets/achievements/jihs'
  },
  {
    title: 'Alibaba Cloud Hackathon 2025',
    organizer: 'Alibaba Cloud',
    organizerUrl: 'https://www.alibabacloud.com/',
    organizerLogo: Alibaba,
    date: '05/2025',
    desc: "Participated in Alibaba Cloud's flagship GenAI Hackathon 2025, held in collaboration with GoTo and Komdigi RI (Ministry of Communication and Information Technology). Our team developed AI solutions using Alibaba Cloud's Model Studio platform and Qwen AI models. The two-day event offered a grand prize of trip to Paris as Indonesia's representative, which we fumbled because we didn't have enough development time during final exam week. Ended up our team being out of theme. 💔",
    award: 'Runner-Up + The Most Favorite Award',
    awardInt: 3,
    prizeInt: 5000000,
    prizeCurr: 'IDR',
    bonus: ['Acrylic Plaque', 'Alibaba Cloud Voucher', 'Alibaba Merchandises', 'GoTo Merchandises'],
    location: 'Jakarta, Indonesia',
  },
  {
    title: 'Indonesia Aerospace Hackathon 2025',
    organizer: 'Indonesian Satellite Association',
    organizerUrl: 'https://assi.or.id/id/',
    organizerLogo: ASSI,
    date: '06/2025',
    desc: "Competed in ASSI's prestigious satellite innovation competition with the theme 'Empowering Indonesia's Future with Space-Driven Innovation for Prosperity and Sustainability.' The hackathon challenged participants to develop solutions addressing satellite technology, business strategy, and social innovation challenges, with a focus on space debris collision prevention. Teams presented proposals and technical implementations before a panel of industry experts from the Asia-Pacific satellite sector.",
    award: '1 of 4 Champions',
    awardInt: 1,
    location: 'Jakarta, Indonesia',
  },
  {
    title: 'I/O FEST Web Dev 2025',
    organizer: 'BEM FTI UNTAR',
    organizerUrl: 'https://www.instagram.com/bemftiuntar/',
    organizerLogo: BEMFTIUNTAR,
    date: '05/2025',
    desc: "Participating in I/O FESTIVAL 2025, UNTAR's largest technology competition for students and high school students. The festival features multiple categories including Web Development, UI/UX Design, Android Development, and Business Plan, with a total prize pool of IDR 42 million.",
    award: 'Finalist [On-Going]',
    awardInt: 0,
    location: 'Jakarta, Indonesia',
  },
  {
    title: 'elevAIte Hackathon 2025',
    organizer: 'Microsoft',
    organizerUrl: 'https://www.microsoft.com/',
    organizerLogo: Microsoft,
    date: '06/2025',
    desc: "Advancing through the semi-finals of Microsoft's flagship AI hackathon, part of the elevAIte Indonesia initiative aimed at developing 1 million AI talents across the country. The hackathon focused on creating innovative AI solutions addressing real-world challenges using Azure services, with emphasis on sustainability and community impact.",
    award: 'Semi-Finalist [On-Going]',
    awardInt: 0,
    location: 'Jakarta, Indonesia',
  },
  {
    title: 'COMSNETS 2025',
    organizer: 'COMSNETS',
    organizerUrl: 'https://www.comsnet.org/',
    organizerLogo: COMSNETS,
    date: '05/2025',
    desc: 'The only team representing Indonesia among finalists composed of 60% teams from India and 40% from other nations. Collaborating directly with Kementerian Komunikasi dan Informatika RI (Ministry of Communication and Information Technology of the Republic of Indonesia).',
    award: 'Finalist [On-Going]',
    awardInt: 0,
    location: 'Bali, Indonesia [Online]',
  },
  {
    title: 'TechnoScape Hackathon 8.0',
    organizer: 'BNCC BINUS',
    organizerUrl: 'https://technoscape.id/hackathon',
    organizerLogo: BNCC,
    date: '06/2025',
    desc: 'Competing in BNCC\'s flagship annual hackathon with the theme "Hack the Horizon: Redefining Boundaries with Code." BNCC is the oldest and biggest computer-based organization at BINUS University, established since 1989.',
    award: 'Finalist [On-Going]',
    location: 'Jakarta, Indonesia'
  },
  {
    title: 'Hackathon Permikomnas 2025',
    organizer: 'PERMIKOMNAS',
    organizerUrl: 'https://permikomnas.org/',
    organizerLogo: PERMIKOMNAS,
    date: '06/2025',
    desc: "Competing in PERMIKOMNAS's flagship hackathon with the theme 'Government Tech', aimed at creating digital talent from students who excel in innovation and provide real solutions for Indonesia's public service systems. The competition focuses on E-Government Services, Smart Government, and Cyber Security for Public Service, open to students from all 38 provinces in Indonesia.",
    award: 'Finalist [Withdrawn]',
    awardInt: 0,
    location: 'Makassar, Indonesia',
  },
  {
    title: 'Hackfest UC 2025',
    organizer: 'Universitas Ciputra',
    organizerUrl: 'https://www.uc.ac.id/',
    organizerLogo: UC,
    date: '04/2025',
    desc: 'Top-scored the final stage with our innovative solution. The judges were so impressed with our ideas that they requested extra time from the staff to learn more about our concept. Fellow participants were amazed by our compelling demo presentation. Unfortunately, despite our strong performance, we were ultimately disqualified. 🪦',
    award: '1st Place [Disqualified]',
    awardInt: 0,
    location: 'Surabaya, Indonesia',
  },
];

export default achievementsData;
