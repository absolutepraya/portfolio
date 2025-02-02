import DesktopView from '../../lib/DesktopView';
import { motion } from 'framer-motion';
import AchievementsBox from './AchievementsBox';
import Kemenkeu from '../../assets/orgs/kemenkeu.webp';

const achievementsData = [
	{
		title: 'Gov-AI Hackathon 2024',
		organizer: 'Kementerian Keuangan (Ministry of Finance) RI',
		organizerUrl: 'https://www.kemenkeu.go.id/',
		organizerLogo: Kemenkeu,
		date: '11/2024',
		desc: 'Securing victory among 500 participants from 3 countries across three stages (proposal, 5-minute pitch, and 7-minute final pitch) as the youngest finalist team, competing against professionals and academics, with an AI-driven solution.',
		award: '1st Place',
		awardInt: 1,
		prizeCurr: 'IDR',
		prizeInt: 50000000,
		location: 'Jakarta, Indonesia',
		articles: [
			{
				platform: 'KataData',
				url: 'https://katadata.co.id/digital/teknologi/673c272ade16a/gali-inovasi-ai-untuk-layanan-publik-pemerintah-gelar-govai-hackathon-2024',
			},
			{
				platform: 'Microsoft News',
				url: 'https://news.microsoft.com/id-id/2024/11/18/govai-hackathon-produces-five-generative-ai-solutions-to-improve-the-quality-of-government-services-in-indonesia/',
			},
			{
				platform: 'Kemahasiswaan UI',
				url: 'https://kemahasiswaan.ui.ac.id/tim-uinnovator-raih-juara-1-pada-govai-kementerian-keuangan-hackathon-2024-2/',
			},
		],
	},
];

const Achievements = () => {
	const desktopView = DesktopView();

	return (
		<section
			className='relative w-[90vw] flex-col space-y-12 md:w-[68rem]'
			id='achievementssec'
		>
			<div
				id='achievements'
				className='absolute -top-24'
			/>
			<div className='flex flex-col items-center md:flex-row md:space-x-8'>
				<motion.p
					className='bg-gradient-to-br from-customwhite to-[#5c5c5a] bg-clip-text font-instrument text-6xl text-transparent md:text-7xl'
					initial={{ opacity: 0, y: '50px' }}
					whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'circOut' } }}
					viewport={{ marginTop: desktopView ? '-100px' : '-14px', marginBottom: desktopView ? '-100px' : '-14px', once: true }}
				>
					"Victory Laps"
				</motion.p>
				<div className={`relative mt-1 w-full rounded-full md:mt-3 md:w-auto md:flex-grow ${desktopView ? 'h-0.5 bg-white opacity-20' : 'h-0.5 bg-gradient-to-r from-customwhite to-[#5c5c5a] opacity-60'}`}>
					<motion.div
						className='absolute h-1 w-full bg-customblack shadow-glowcustomblacksmall md:-top-2 md:h-4 md:shadow-glowcustomblack'
						whileInView={{ x: '800px', transition: { duration: 2, ease: 'circInOut', delay: 0.3 } }}
						viewport={{ marginTop: desktopView ? '-100px' : '-14px', marginBottom: desktopView ? '-100px' : '-14px', once: true }}
					/>
				</div>
			</div>

			<AchievementsBox
				achievementData={achievementsData}
			/>
		</section>
	);
};

export default Achievements;
