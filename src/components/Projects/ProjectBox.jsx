import NodeJS from '../../assets/stacks/nodejs.svg';
import React from '../../assets/stacks/react.svg';
import JavaScript from '../../assets/stacks/javascript.svg';
import TailwindCSS from '../../assets/stacks/tailwind.svg';

import { IconArrowUpRight, IconBrandGithub } from '@tabler/icons-react';

const ProjectBox = () => {
	return (
		<div className='flex h-auto w-1/2 flex-col overflow-hidden rounded-3xl border border-[#262626] py-0'>
			<div className='h-[318px] w-full bg-[#3643FC]' />
			<div className='flex flex-col space-y-2 p-6'>
				<div className='flex flex-row items-start space-x-3'>
					<p className='font-instrument text-3xl'>Infinix Project Name</p>
					<div className='bg-blurple border-blurple mt-2 rounded-md border bg-opacity-20 px-2'>
						<p className='text-blurple text-sm'>Web Application</p>
					</div>
				</div>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut consectetur fugiat id? Aut ea voluptatibus error neque ex officiis sunt fuga amet veritatis.</p>
				<div className='flex h-auto w-full flex-row items-center justify-between'>
					<div className='flex w-fit flex-row space-x-3 rounded'>
						<img
							src={NodeJS}
							alt='NodeJS'
							className='w-4 object-contain'
						/>
						<img
							src={React}
							alt='React'
							className='w-4 object-contain'
						/>
						<img
							src={JavaScript}
							alt='JavaScript'
							className='w-4 object-contain'
						/>
						<img
							src={TailwindCSS}
							alt='TailwindCSS'
							className='w-4 object-contain'
						/>
					</div>
					<div className='flex h-10 w-auto flex-row space-x-3'>
						<button className='h-full w-10 rounded-lg flex items-center justify-center bg-[#2c2c32]'>
							<IconArrowUpRight stroke={1.5} size={24} />
						</button>
						<button className='h-full w-10 rounded-lg flex items-center justify-center bg-[#2c2c32]'>
							<IconBrandGithub stroke={1.5} size={24} className=''/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectBox;
