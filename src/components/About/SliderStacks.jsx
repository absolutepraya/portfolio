import React, { useState } from 'react';
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
import Tailwind from '../../assets/stacks/tailwind.svg';
import TypeScript from '../../assets/stacks/typescript.svg';
import ViteJS from '../../assets/stacks/vitejs.svg';
import Vitest from '../../assets/stacks/vitest.svg';
import NextJS from '../../assets/stacks/nextjs.svg';
import Django from '../../assets/stacks/django.svg';

const stacksList = [
	{ src: NodeJS, alt: 'NodeJS' },
	{ src: NPM, alt: 'NPM' },
	{ src: ViteJS, alt: 'ViteJS' },
	{ src: ReactJS, alt: 'ReactJS' },
	{ src: NextJS, alt: 'NextJS' },
	{ src: JavaScript, alt: 'JavaScript' },
	{ src: TypeScript, alt: 'TypeScript' },
	{ src: Django, alt: 'Django' },
	{ src: Tailwind, alt: 'Tailwind' },
	{ src: Express, alt: 'Express' },
	{ src: MongoDB, alt: 'MongoDB' },
	{ src: Jest, alt: 'Jest' },
	{ src: Vitest, alt: 'Vitest' },
	{ src: Docker, alt: 'Docker' },
	{ src: Python, alt: 'Python' },
];

const SliderStacks = () => {
	const [hoveredIndex, setHoveredIndex] = useState(null);

	return (
		<Marquee
			speed='40'
			gradient={true}
			gradientColor='#0d0d0d'
			gradientWidth={110}
			autoFill={true}
			direction='left'
			pauseOnClick={true}
		>
			{stacksList.map((stack, index) => (
				<div
					key={index}
					className='relative mx-2 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-lg border-2 border-b-0 border-r-0 border-[#2a2a2a] bg-gradient-to-br from-[#1f1f1f] to-[#0e0e0e] p-4 shadow-xl md:mx-3 md:h-20 md:w-20 hover:cursor-pointer'
					onMouseEnter={() => setHoveredIndex(index)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					{hoveredIndex === index && <div className='absolute z-30 bg-black text-[#cccccc] text-xs rounded px-1 py-1'>{stack.alt}</div>}
					<img
						src={stack.src}
						alt={stack.alt}
						className={`h-full w-full object-contain transition-all duration-200 ${hoveredIndex === index ? 'blur-sm' : ''}`}
					/>
				</div>
			))}
		</Marquee>
	);
};

export default SliderStacks;
