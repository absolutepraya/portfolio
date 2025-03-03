import DesktopView from '../../lib/DesktopView';
import { motion } from 'framer-motion';
import AchievementsBox from './AchievementsBox';
import Kemenkeu from '../../assets/orgs/kemenkeu.webp';
import { FlickeringGrid } from '../../blocks/Animations/FlickeringGrid/FlickeringGrid';
import BlurFade from '../../blocks/Animations/BlurFade/BlurFade';
import TabletView from '../../lib/TabletView';

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
	const tabletView = TabletView();

	return (
		<section
			className='relative w-[90vw] flex-col space-y-12 xl:w-[68rem]'
			id='achievementssec'
		>
			<div
				id='achievements'
				className='absolute -top-24'
			/>
			<div className='flex flex-col items-center lg:flex-row lg:space-x-8'>
				<motion.p
					className='bg-gradient-to-br from-customwhite to-[#5c5c5a] bg-clip-text font-instrument text-6xl text-transparent md:text-7xl'
					initial={{ opacity: 0, y: '40px' }}
					whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'circOut' } }}
					viewport={{ marginTop: desktopView ? '-100px' : '-14px', marginBottom: desktopView ? '-100px' : '-14px', once: true }}
				>
					Victory Laps
				</motion.p>
				<div className={`relative mt-1 w-full max-w-[35rem] rounded-full md:mt-8 lg:mt-3 lg:w-auto lg:max-w-[1000rem] lg:flex-grow ${desktopView ? 'h-0.5 bg-white opacity-20' : 'h-0.5 bg-gradient-to-r from-customwhite to-[#5c5c5a] opacity-60'}`}>
					<motion.div
						className='absolute h-1 w-full bg-customblack shadow-glowcustomblacksmall lg:-top-2 lg:h-4 lg:shadow-glowcustomblack'
						whileInView={{ x: '1000px', transition: { duration: 2, ease: 'circInOut', delay: 0.3 } }}
						viewport={{ marginTop: desktopView ? '-100px' : '-14px', marginBottom: desktopView ? '-100px' : '-14px', once: true }}
					/>
				</div>
			</div>

			<div className='relative w-fit rounded-3xl'>
				{tabletView && (
					<FlickeringGrid
						squareSize={6}
						gridGap={6}
						color={'#6B7280'}
						maxOpacity={0.3}
						flickerChance={0.2}
						className={`absolute left-0 top-0 !z-[10] h-full w-full`}
					></FlickeringGrid>
				)}
				<div className='absolute left-0 top-0 !z-[20] h-full w-full shadow-[inset_0px_0px_40px_50px_rgba(13,13,13,1)]' />
				<AchievementsBox achievementData={achievementsData} />
			</div>
		</section>
	);
};

export default Achievements;
