import Marquee from 'react-fast-marquee';

import Docker from '../../assets/stacks/docker.svg';
import Express from '../../assets/stacks/express.svg';
import JavaScript from '../../assets/stacks/javascript.svg';
import Jest from '../../assets/stacks/jest.svg';
import MongoDB from '../../assets/stacks/mongodb.svg';
import NodeJS from '../../assets/stacks/nodejs.svg';
import NPM from '../../assets/stacks/npm.svg';
import ReactJS from '../../assets/stacks/react.svg';
import TailwindCSS from '../../assets/stacks/tailwind.svg';
import TypeScript from '../../assets/stacks/typescript.svg';
import ViteJS from '../../assets/stacks/vitejs.svg';
import vitest from '../../assets/stacks/vitest.svg';

const stacksList = [
	{ src: NodeJS, alt: 'NodeJS' },
	{ src: NPM, alt: 'NPM' },
	{ src: ViteJS, alt: 'ViteJS' },
	{ src: ReactJS, alt: 'ReactJS' },
	{ src: JavaScript, alt: 'JavaScript' },
	{ src: TypeScript, alt: 'TypeScript' },
	{ src: TailwindCSS, alt: 'TailwindCSS' },
	{ src: Express, alt: 'Express' },
	{ src: MongoDB, alt: 'MongoDB' },
	{ src: Jest, alt: 'Jest' },
	{ src: vitest, alt: 'Vitest' },
	{ src: Docker, alt: 'Docker' },
];

const SliderStacks = () => {
	return (
		<Marquee
			speed='40'
			gradient={true}
			gradientColor='#0d0d0d'
			gradientWidth={110}
			autoFill={true}
			direction='left'
		>
			{stacksList.map((stack, index) => (
				<div
					key={index}
					className='mx-3 flex h-20 w-20 items-center justify-center rounded-lg bg-gradient-to-br from-[#1f1f1f] to-[#0e0e0e] p-4 shadow-xl border-2 border-[#2a2a2a] border-r-0 border-b-0'
				>
					<img
						src={stack.src}
						alt={stack.alt}
						className='h-full w-full object-contain'
					/>
				</div>
			))}
		</Marquee>
	);
};

export default SliderStacks;