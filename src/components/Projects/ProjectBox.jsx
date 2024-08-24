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
import { motion } from 'framer-motion';

const stackIcons = {
	docker: { src: Docker, name: 'Docker' },
	express: { src: Express, name: 'Express' },
	javascript: { src: JavaScript, name: 'JavaScript' },
	jest: { src: Jest, name: 'Jest' },
	mongodb: { src: MongoDB, name: 'MongoDB' },
	nodejs: { src: NodeJS, name: 'NodeJS' },
	npm: { src: NPM, name: 'NPM' },
	python: { src: Python, name: 'Python' },
	reactjs: { src: ReactJS, name: 'ReactJS' },
	tailwindcss: { src: TailwindCSS, name: 'TailwindCSS' },
	typescript: { src: TypeScript, name: 'TypeScript' },
	vitejs: { src: ViteJS, name: 'ViteJS' },
	vitest: { src: Vitest, name: 'Vitest' },
	bard: { src: Bard, name: 'Bard' },
	gemini: { src: Gemini, name: 'Gemini' },
	openai: { src: OpenAI, name: 'OpenAI' },
	supabase: { src: Supabase, name: 'Supabase' },
};

const ProjectBox = ({ image = null, title, type, date, subtitle, stacks = [], url = null, github = null }) => {
	const desktopView = DesktopView();

	// If URL or GitHub is not provided, change the button to disabled
	var urlVisibility, githubVisibility;
	if (!url) urlVisibility = 'opacity-30 cursor-not-allowed';
	if (!github) githubVisibility = 'opacity-30 cursor-not-allowed';

	return (
		<motion.div
			className='flex h-auto flex-col overflow-hidden rounded-3xl border-2 border-customgray py-0 shadow-lg md:w-1/2'
			initial={{ opacity: 0, y: '50px' }}
			whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }}
			viewport={{ margin: desktopView ? '-100px' : '-14px', once: true }}
			whileHover={{ rotate: desktopView ? 1.5 : 0, transition: { duration: 0.3, ease: 'easeInOut' } }}
		>
			<div className='aspect-[10/7] w-full bg-[#2d2d2d]'>
				{/* Aspect ratio 10:7 */}
				<img
					src={image ? image : NoImage}
					className='h-full w-full object-cover'
					alt={title + ' image preview'}
				/>
			</div>
			<div className='relative flex flex-col space-y-2 p-6'>
				<div className='flex flex-row items-start justify-between'>
					<div className='flex flex-row items-start space-x-3'>
						<p className='font-instrument text-2xl md:text-3xl'>{title}</p>
						<div className='mt-[8px] rounded-md border border-blurple bg-blurple bg-opacity-10 px-2'>
							<p className='text-xs text-blurple md:text-sm'>{type}</p>
						</div>
					</div>
					<p className='md:text-md mt-[6px] text-end text-sm font-extrabold opacity-70 md:mt-[10px]'>{date}</p>
				</div>
				<p className='text-justify'>{subtitle}</p>
				<div className='!mt-4 flex h-auto w-full flex-row items-start justify-between'>
					<div className='flex w-fit flex-row space-x-2 rounded md:space-x-3'>
						{stacks.map((stack, index) => (
							<img
								key={index}
								src={stackIcons[stack].src}
								alt={stackIcons[stack].name}
								className={desktopView ? 'h-5 w-5 object-contain' : 'h-[4vw] w-[4vw] object-contain'}
							/>
						))}
					</div>
					<div className='flex h-[9vw] w-auto flex-row space-x-2 md:h-10 md:space-x-3'>
						<a
							href={url}
							target='_blank'
							rel='noreferrer'
							aria-label='Open deployed project URL'
							title='Open deployed project URL'
						>
							<div className={`flex h-full w-[9vw] items-center justify-center rounded-lg bg-[#2c2c32] md:w-10 ${urlVisibility ? urlVisibility : 'transition-all duration-100 ease-in-out hover:bg-blurple hover:bg-opacity-30 hover:text-blurple'}`}>
								<IconArrowUpRight
									stroke={1.5}
									size={desktopView ? 24 : 22}
								/>
							</div>
						</a>
						<a
							href={github}
							target='_blank'
							rel='noreferrer'
							aria-label='View project source code on GitHub'
							title='View project source code on GitHub'
						>
							<div className={`flex h-full w-[9vw] items-center justify-center rounded-lg bg-[#2c2c32] md:w-10 ${githubVisibility ? githubVisibility : 'transition-all duration-100 ease-in-out hover:bg-blurple hover:bg-opacity-30 hover:text-blurple'}`}>
								<IconBrandGithub
									stroke={1.5}
									size={desktopView ? 24 : 22}
								/>
							</div>
						</a>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectBox;
