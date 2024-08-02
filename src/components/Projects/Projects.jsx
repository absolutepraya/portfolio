import ProjectBox from './ProjectBox';

const Projects = () => {
	return (
		<div className='w-[68rem] flex-col space-y-12'>
			<div className='flex flex-row items-center space-x-8'>
				<p className='from-customwhite bg-gradient-to-br to-[#5c5c5a] bg-clip-text font-instrument text-7xl text-transparent'>Stuff I&apos;ve done</p>
				<div className='mt-4 h-0.5 flex-grow bg-white opacity-20' />
			</div>
			<div className='flex h-auto w-full flex-col space-y-8'>
				<div className='flex flex-row space-x-8'>
					<ProjectBox
						image=''
						title='Portfolio'
						type='Website'
						date='08/2024'
						subtitle='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, expedita quas quae minima dicta quod facilis repellendus qui enim repellat doloribus.'
						stacks={['nodejs', 'npm', 'vitejs', 'reactjs', 'javascript', 'tailwindcss']}
						url='https://abhipraya.dev/'
						github='https://github.com/absolutepraya/portfolio'
					/>
					<ProjectBox
						image=''
						title='GrabAuto'
						type='App Feature'
						date='07/2024'
						subtitle='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, expedita quas quae minima dicta quod facilis repellendus qui enim repellat doloribus.'
						stacks={['nodejs', 'npm', 'vitejs', 'reactjs', 'typescript', 'tailwindcss', 'bard']}
						url='https://example.com/'
						github='https://github.com/'
					/>
				</div>
				<div className='flex flex-row space-x-8'>
					<ProjectBox
						image=''
						title='Open House FMIPA UI 2024'
						type='Website'
						date='06/2024'
						subtitle='Event website that showcases details about the FMIPA UI 2024 open house and also functions as a payment platform for participants.'
						stacks={['nodejs', 'npm', 'vitejs', 'reactjs', 'javascript', 'tailwindcss', 'express', 'apidog']}
						url='https://example.com/'
						github='https://github.com/'
					/>
					<ProjectBox
						image=''
						title='DM2 Calculator w/ Steps'
						type='Terminal App'
						date='02/2024'
						subtitle='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, expedita quas quae minima dicta quod facilis repellendus qui enim repellat doloribus.'
						stacks={['python']}
						url='https://example.com/'
						github='https://github.com/'
					/>
				</div>
				<div className='flex flex-row space-x-8'>
					<ProjectBox
						image=''
						title='Valentine Letter'
						type='Website'
						date='01/2024'
						subtitle='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, expedita quas quae minima dicta quod facilis repellendus qui enim repellat doloribus.'
						stacks={['javascript']}
						url='https://example.com/'
						github='https://github.com/'
					/>
					<ProjectBox
						image=''
						title='The Legend of Gus Dur'
						type='Video Game'
						date='12/2022'
						subtitle='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, expedita quas quae minima dicta quod facilis repellendus qui enim repellat doloribus.'
						stacks={[]}
						url='https://example.com/'
						github='https://github.com/'
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
