import APIDog from '../../assets/stacks/apidog.svg';
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

import { IconArrowUpRight, IconBrandGithub } from '@tabler/icons-react';

const stackIcons = {
	apidog: APIDog,
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
};

const ProjectBox = ({ image, title, type, date, subtitle, stacks = [], url, github }) => {
	return (
		<div className='flex h-auto w-1/2 flex-col overflow-hidden rounded-3xl border-2 border-[#262626] py-0 hover:-rotate-[1.5deg] transition-all duration-300 ease-in-out shadow-lg hover:scale-105'>
			<div className='h-[318px] w-full bg-[#2d2d2d]' />
			<div className='flex flex-col space-y-2 p-6'>
				<div className='flex flex-row items-start justify-between'>
					<div className='flex flex-row items-start space-x-3'>
						<p className='font-instrument text-3xl'>{title}</p>
						<div className='bg-blurple border-blurple mt-[8px] rounded-md border bg-opacity-20 px-2'>
							<p className='text-blurple text-sm'>{type}</p>
						</div>
					</div>
					<p className='mt-[10px] text-end font-extrabold opacity-50'>{date}</p>
				</div>
				<p className='text-justify'>{subtitle}</p>
				<div className='!mt-4 flex h-auto w-full flex-row items-start justify-between'>
					<div className='flex w-fit flex-row space-x-3 rounded'>
						{stacks.map((stack, index) => (
							<img
								key={index}
								src={stackIcons[stack]}
								alt={stack}
								className='h-5 w-5 object-contain'
							/>
						))}
					</div>
					<div className='flex h-10 w-auto flex-row space-x-3'>
						<a href={url}>
							<button className='hover:bg-blurple hover:text-blurple flex h-full w-10 items-center justify-center rounded-lg bg-[#2c2c32] transition-all duration-100 ease-in-out hover:bg-opacity-30'>
								<IconArrowUpRight
									stroke={1.5}
									size={24}
								/>
							</button>
						</a>
						<a href={github}>
							<button className='hover:bg-blurple hover:text-blurple flex h-full w-10 items-center justify-center rounded-lg bg-[#2c2c32] transition-all duration-100 ease-in-out hover:bg-opacity-30'>
								<IconBrandGithub
									stroke={1.5}
									size={24}
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
