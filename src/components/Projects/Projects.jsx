import ProjectBox from './ProjectBox';
import DesktopView from '../../lib/DesktopView';
import GrabAuto from '../../assets/projects/grabauto.webp';
import MIPAOpenHouse from '../../assets/projects/mipaopenhouse.webp';
import DM2Calc from '../../assets/projects/dm2calc.webp';
import ValentineLetter from '../../assets/projects/valentineletter.webp';
import GusDur from '../../assets/projects/gusdur.webp';
import Portfolio from '../../assets/projects/portfolio.webp';
import DesaKedisan from '../../assets/projects/desakedisan.webp';
import NuSantap from '../../assets/projects/nusantap.webp';
import Ngandung from '../../assets/projects/ngandung.webp';
import { motion } from 'framer-motion';


const Projects = () => {
	const desktopView = DesktopView();

	return (
		<section
			className='relative w-[90vw] flex-col space-y-12 md:w-[68rem]'
			id='projectssec'
		>
			<div
				id='projects'
				className='absolute -top-24'
			/>
			<div className='flex flex-col items-center md:flex-row md:space-x-8'>
				<motion.p
					className='bg-gradient-to-br from-customwhite to-[#5c5c5a] bg-clip-text font-instrument text-6xl text-transparent md:text-7xl'
					initial={{ opacity: 0, y: '50px' }}
					whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'circOut' } }}
					viewport={{ marginTop: desktopView ? '-100px' : '-14px', marginBottom: desktopView ? '-100px' : '-14px', once: true }}
				>
					Stuff I&apos;ve done
				</motion.p>
				<div className={`relative mt-1 w-full rounded-full md:mt-3 md:w-auto md:flex-grow ${desktopView ? 'h-0.5 bg-white opacity-20' : 'h-0.5 bg-gradient-to-r from-customwhite to-[#5c5c5a] opacity-60'}`}>
					<motion.div
						className='absolute h-1 w-full bg-customblack shadow-glowcustomblacksmall md:-top-2 md:h-4 md:shadow-glowcustomblack'
						whileInView={{ x: '760px', transition: { duration: 2, ease: 'circInOut', delay: 0.3 } }}
						viewport={{ marginTop: desktopView ? '-100px' : '-14px', marginBottom: desktopView ? '-100px' : '-14px', once: true }}
					/>
				</div>
			</div>
			<div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
				<ProjectBox
					image={NuSantap}
					title='NuSantap'
					type='Mobile & Web App'
					date='11/2024'
					subtitle='NuSantap is an app that uses AI and Computer Vision to provide personalized meal recommendations based on nutritional needs and local food availability, optimizing the “Makan Bergizi Gratis” program.'
					stacks={['nodejs', 'npm', 'nextjs', 'javascript', 'tailwindcss', 'firebase', 'azure', 'openai']}
					url='https://www.nusantap.id/'
					github=''
				/>
				<ProjectBox
					// image={}
					title='NuSantap Dashboard'
					type='Web App'
					date='11/2024'
					subtitle='A dashboard for NuSantap, featuring analytics graphs, user meal QR scans, and a stunting prevalence map at both provincial and national levels, with the ability to generate and manage weekly meal plans.'
					stacks={['nodejs', 'npm', 'nextjs', 'typescript', 'tailwindcss', 'firebase', 'azure', 'openai']}
					url='https://nusantap-dashboard.vercel.app/'
					github=''
				/>
				<ProjectBox
					image={Ngandung}
					title='Ngandung'
					type='Mobile & Web App'
					date='11/2024'
					subtitle='Ngandung is an application that makes it easy for users to find information about foods and stores in Bandung, leave reviews, and save favorite stores.'
					stacks={['django', 'python', 'tailwindcss', 'flutter', 'dart']}
					url=''
					github='https://github.com/Kelompok-9-PBP-Ganjil-2024-2025/ngandung-mobile'
				/>
				<ProjectBox
					image={DesaKedisan}
					title='Desa Kedisan'
					type='Website'
					date='10/2024'
					subtitle='A front-end website that serves as information center of Desa Kedisan, a small tourism village in Gianyar, Bali. This website showcases the essence of the village, its culture, and its tourism spots.'
					stacks={['nodejs', 'npm', 'vitejs', 'reactjs', 'javascript', 'tailwindcss']}
					url='https://desa-kedisan.vercel.app/'
					github='https://github.com/absolutepraya/desa-kedisan'
				/>
				<ProjectBox
					image={Portfolio}
					title='Portfolio'
					type='Website'
					date='08/2024'
					subtitle='Personal portfolio website, showcasing skills, experiences, and projects. Contents are to be updated regularly. Future update will showcase achievements section, certifications section, and some other cool stuff.'
					stacks={['nodejs', 'npm', 'vitejs', 'reactjs', 'javascript', 'tailwindcss']}
					url='https://abhipraya.dev/'
					github='https://github.com/absolutepraya/portfolio'
				/>
				<ProjectBox
					image={GrabAuto}
					title='GrabAuto'
					type='App Feature'
					date='07/2024'
					subtitle="Grab feature that uses gen-AI to diagnose vehicle issues (even when the user has no idea what's wrong), find the nearest mechanics, book a repair service, and predict the cost. Built in 23 hours during hackjakarta."
					stacks={['nodejs', 'npm', 'vitejs', 'reactjs', 'typescript', 'tailwindcss', 'bard']}
					url=''
					github='https://github.com/Tianrider/GrabAuto'
				/>
				<ProjectBox
					image={MIPAOpenHouse}
					title='OH FMIPA UI 2024'
					type='Website'
					date='06/2024'
					subtitle='Event website that showcases details about the FMIPA UI 2024 Open House, including the event details and the faculty and its departments, while also functions as a payment platform for participants.'
					stacks={['nodejs', 'npm', 'vitejs', 'reactjs', 'javascript', 'tailwindcss', 'express', 'supabase']}
					url='https://mipaopenhouse.com'
					github=''
				/>
				<ProjectBox
					image={DM2Calc}
					title={desktopView ? 'Discrete Math 2 Calculator' : 'DM2 Calc'}
					type='Terminal App'
					date='02/2024'
					subtitle="A collection of tools for solving Discrete Math 2 problems that doesn't just give out the final result, but also provides a step-by-step solution. The available solvers are for modular exponentiation, Euclidean's algorithm, CRT, and many more."
					stacks={['python']}
					url=''
					github='https://github.com/absolutepraya/dm2-calculator'
				/>
				<ProjectBox
					image={ValentineLetter}
					title='Valentine Letter'
					type='Website'
					date='01/2024'
					subtitle="An interactive Valentine's Letter that allows user to customize and send it to their significant others. It features conversation-style messages and interactive elements such as “Yes” and “No”, enabling the receiver to “talk” to the sender."
					stacks={['javascript']}
					// url='https://absolutepraya.github.io/valentine-letter/'
					// github='https://github.com/absolutepraya/valentine-letter'
					url=''
					github=''
				/>
				<ProjectBox
					image={GusDur}
					title='The Legend of Gus Dur'
					type={desktopView ? 'Video Game' : 'Game'}
					date='12/2022'
					subtitle="A plotful 2D video game as the final project for the History of Indonesia subject in grade 12, with the theme being the presidency of Gus Dur. It tells a story about a young man going back in time to learn about Gus Dur's presidency."
					stacks={[]}
					url=''
					github=''
				/>
			</div>
		</section>
	);
};

export default Projects;
