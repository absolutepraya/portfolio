import ProjectBox from './ProjectBox';

const Projects = () => {
	return (
		<div className='w-[68rem] flex-col space-y-12'>
			<div className='flex flex-row items-center space-x-8'>
				<p className='font-instrument text-7xl'>Projects</p>
				<div className='mt-4 h-0.5 flex-grow bg-white opacity-20' />
			</div>
			<div className='flex h-[200vh] w-full flex-col space-y-8'>
				<div className='flex flex-row space-x-8'>
					<ProjectBox />
					<ProjectBox />
				</div>
				<div className='flex flex-row space-x-6'>
					<ProjectBox />
					<ProjectBox />
				</div>
			</div>
		</div>
	);
};

export default Projects;
