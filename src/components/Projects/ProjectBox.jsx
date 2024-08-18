import DesktopView from '../../DesktopView';

import Bard from '../../assets/stacks/bard.svg';
import Docker from '../../assets/stacks/docker.svg';
import Express from '../../assets/stacks/express.svg';
import Gemini from '../../assets/stacks/gemini.svg';
import JavaScript from '../../assets/stacks/javascript.svg';
import Jest from '../../assets/stacks/jest.svg';
import MongoDB from '../../assets/stacks/mongodb.svg';
import NodeJS from '../../assets/stacks/nodejs.svg';
import NPM from '../../assets/stacks/npm.svg';
import OpenAI from '../../assets/stacks/openai.svg';
import Python from '../../assets/stacks/python.svg';
import ReactJS from '../../assets/stacks/react.svg';
import TailwindCSS from '../../assets/stacks/tailwind.svg';
import TypeScript from '../../assets/stacks/typescript.svg';
import ViteJS from '../../assets/stacks/vitejs.svg';
import Vitest from '../../assets/stacks/vitest.svg';
import Supabase from '../../assets/stacks/supabase.svg';

import NoImage from '../../assets/projects/noimage.webp';

import { IconArrowUpRight, IconBrandGithub } from '@tabler/icons-react';

const stackIcons = {
	docker: Docker,
	express: Express,
	javascript: JavaScript,
	jest: Jest,
	mongodb: MongoDB,
	nodejs: NodeJS,
	npm: NPM,
	python: Python,
	reactjs: ReactJS,
	tailwindcss: TailwindCSS,
	typescript: TypeScript,
	vitejs: ViteJS,
	vitest: Vitest,
	bard: Bard,
	gemini: Gemini,
	openai: OpenAI,
	supabase: Supabase,
};

const ProjectBox = ({ image = null, title, type, date, subtitle, stacks = [], url = null, github = null }) => {
	const desktopView = DesktopView();

	// If URL or GitHub is not provided, change the button to disabled
	var urlVisibility, githubVisibility;
	if (!url) urlVisibility = 'opacity-30 cursor-not-allowed';
	if (!github) githubVisibility = 'opacity-30 cursor-not-allowed';

	return (
		<div className='flex h-auto flex-col overflow-hidden rounded-3xl border-2 border-customgray py-0 shadow-lg transition-all duration-300 ease-in-out md:w-1/2 md:hover:rotate-[1.5deg]'>
			<div className='aspect-[10/7] w-full bg-[#2d2d2d]'>
				{/* Aspect ratio 10:7 */}
				<img
					src={image ? image : NoImage}
					className='h-full w-full object-cover'
				/>
			</div>
			<div className='relative flex flex-col space-y-2 p-6'>
				<div className='flex flex-row items-start justify-between'>
					<div className='flex flex-row items-start space-x-3'>
						<p className='font-instrument text-2xl md:text-3xl'>{title}</p>
						<div className='mt-[8px] rounded-md border border-blurple bg-blurple bg-opacity-20 px-2'>
							<p className='text-xs text-blurple md:text-sm'>{type}</p>
						</div>
					</div>
					<p className='md:text-md mt-[6px] text-end text-sm font-extrabold opacity-50 md:mt-[10px]'>{date}</p>
				</div>
				<p className='text-justify'>{subtitle}</p>
				<div className='!mt-4 flex h-auto w-full flex-row items-start justify-between'>
					<div className='flex w-fit flex-row space-x-2 rounded md:space-x-3'>
						{stacks.map((stack, index) => (
							<img
								key={index}
								src={stackIcons[stack]}
								alt={stack}
								className={desktopView ? 'h-5 w-5 object-contain' : 'h-[4vw] w-[4vw] object-contain'}
							/>
						))}
					</div>
					<div className='flex h-[9vw] w-auto flex-row space-x-2 md:h-10 md:space-x-3'>
						<a href={url}>
							<button className={`flex h-full w-[9vw] items-center justify-center rounded-lg bg-[#2c2c32] md:w-10 ${urlVisibility ? urlVisibility : 'transition-all duration-100 ease-in-out hover:bg-blurple hover:bg-opacity-30 hover:text-blurple'}`}>
								<IconArrowUpRight
									stroke={1.5}
									size={desktopView ? 24 : 22}
								/>
							</button>
						</a>
						<a href={github}>
							<button className={`flex h-full w-[9vw] items-center justify-center rounded-lg bg-[#2c2c32] md:w-10 ${githubVisibility ? githubVisibility : 'transition-all duration-100 ease-in-out hover:bg-blurple hover:bg-opacity-30 hover:text-blurple'}`}>
								<IconBrandGithub
									stroke={1.5}
									size={desktopView ? 24 : 22}
								/>
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectBox;
