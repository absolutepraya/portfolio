import ProjectBox from './ProjectBox';
import DesktopView from '../../DesktopView';

import GrabAuto from '../../assets/projects/grabauto.webp';
import MIPAOpenHouse from '../../assets/projects/mipaopenhouse.webp';
import DM2Calc from '../../assets/projects/dm2calc.webp';
import ValentineLetter from '../../assets/projects/valentineletter.webp';
import GusDur from '../../assets/projects/gusdur.webp';

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
				<p className='bg-gradient-to-br from-customwhite to-[#5c5c5a] bg-clip-text font-instrument text-6xl text-transparent md:text-7xl'>Stuff I&apos;ve done</p>
				<div className={`mt-1 w-full rounded-full md:mt-3 md:w-auto md:flex-grow ${desktopView ? 'h-0.5 bg-white opacity-20' : 'h-0.5 bg-gradient-to-r from-customwhite to-[#5c5c5a] opacity-60'}`} />
			</div>
			<div className='flex h-auto w-full flex-col space-y-8'>
				<div className='flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0'>
					<ProjectBox
						image=''
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
						url='https://drive.google.com/file/d/1F6Klp_QvRiYeItRbDYryoRAGXTLJcKT2/view?usp=sharing'
						github='https://github.com/Tianrider/GrabAuto'
					/>
				</div>
				<div className='flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0'>
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
				</div>
				<div className='flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0'>
					<ProjectBox
						image={ValentineLetter}
						title='Valentine Letter'
						type='Website'
						date='01/2024'
						subtitle="An interactive Valentine's Letter that allows user to customize and send it to their significant others. It features conversation-style messages and interactive elements such as “Yes” and “No”, enabling the receiver to “talk” to the sender."
						stacks={['javascript']}
						url='https://absolutepraya.github.io/valentine-letter/'
						github='https://github.com/absolutepraya/valentine-letter'
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
			</div>
		</section>
	);
};

export default Projects;
