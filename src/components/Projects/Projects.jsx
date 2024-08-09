import ProjectBox from './ProjectBox';

import GrabAuto from '../../assets/projects/grabauto.jpg';
import MIPAOpenHouse from '../../assets/projects/mipaopenhouse.jpg';
import DM2Calc from '../../assets/projects/dm2calc.jpg';
import ValentineLetter from '../../assets/projects/valentineletter.jpg';
import GusDur from '../../assets/projects/gusdur.jpg';

const Projects = ({ deviceMobile }) => {
	return (
		<section
			className='relative w-[68rem] flex-col space-y-12'
			id='projectssec'
		>
			<div
				id='projects'
				className='absolute -top-24'
			/>
			<div className='flex flex-row items-center space-x-8'>
				<p className='bg-gradient-to-br from-customwhite to-[#5c5c5a] bg-clip-text font-instrument text-7xl text-transparent'>Stuff I&apos;ve done</p>
				<div className='mt-4 h-0.5 flex-grow bg-white opacity-20' />
			</div>
			<div className='flex h-auto w-full flex-col space-y-8'>
				<div className='flex flex-row space-x-8'>
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
				<div className='flex flex-row space-x-8'>
					<ProjectBox
						image={MIPAOpenHouse}
						title='Open House FMIPA UI 2024'
						type='Website'
						date='06/2024'
						subtitle='Event website that showcases details about the FMIPA UI 2024 Open House, including the event details and the faculty and its departments, while also functions as a payment platform for participants.'
						stacks={['nodejs', 'npm', 'vitejs', 'reactjs', 'javascript', 'tailwindcss', 'express', 'apidog']}
						url='https://mipaopenhouse.com'
						github=''
					/>
					<ProjectBox
						image={DM2Calc}
						title='DM2 Calculator w/ Steps'
						type='Terminal App'
						date='02/2024'
						subtitle="A collection of tools for solving Discrete Math 2 problems that doesn't just give out the final result, but also provides a step-by-step solution. The available solvers are for modular exponentiation, Euclidean's algorithm, CRT, and many more."
						stacks={['python']}
						url=''
						github='https://github.com/absolutepraya/dm2-calculator'
					/>
				</div>
				<div className='flex flex-row space-x-8'>
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
						type='Video Game'
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
