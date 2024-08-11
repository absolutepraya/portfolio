import Marquee from 'react-fast-marquee';

import Docker from '../../assets/stacks/docker.svg';
import Express from '../../assets/stacks/express.svg';
import JavaScript from '../../assets/stacks/javascript.svg';
import Jest from '../../assets/stacks/jest.svg';
import MongoDB from '../../assets/stacks/mongodb.svg';
import NodeJS from '../../assets/stacks/nodejs.svg';
import NPM from '../../assets/stacks/npm.svg';
import Python from '../../assets/stacks/python.svg';
import ReactJS from '../../assets/stacks/react.svg';
import TailwindCSS from '../../assets/stacks/tailwind.svg';
import TypeScript from '../../assets/stacks/typescript.svg';
import ViteJS from '../../assets/stacks/vitejs.svg';
import Vitest from '../../assets/stacks/vitest.svg';

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
	{ src: Vitest, alt: 'Vitest' },
	{ src: Docker, alt: 'Docker' },
	{ src: Python, alt: 'Python' },
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
					className='md:mx-3 mx-2 flex md:h-20 md:w-20 h-[4.5rem] w-[4.5rem] items-center justify-center rounded-lg border-2 border-b-0 border-r-0 border-[#2a2a2a] bg-gradient-to-br from-[#1f1f1f] to-[#0e0e0e] p-4 shadow-xl'
				>
					<img
						src={stack.src}
						alt={stack.alt}
						className='h-full w-full object-contain transition-all duration-100 hover:scale-110'
					/>
				</div>
			))}
		</Marquee>
	);
};

export default SliderStacks;
