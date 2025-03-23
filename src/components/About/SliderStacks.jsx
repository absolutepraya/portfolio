import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import Docker from '../../assets/stacks/docker.svg';
import Express from '../../assets/stacks/express.svg';
import JavaScript from '../../assets/stacks/javascript.svg';
import MongoDB from '../../assets/stacks/mongodb.svg';
import npm from '../../assets/stacks/npm.svg';
import Python from '../../assets/stacks/python.svg';
import Reactjs from '../../assets/stacks/react.svg';
import Tailwind from '../../assets/stacks/tailwind.svg';
import TypeScript from '../../assets/stacks/typescript.svg';
import Next from '../../assets/stacks/nextjs.svg';
import Flutter from '../../assets/stacks/flutter.svg';
import Django from '../../assets/stacks/django.svg';
import Supabase from '../../assets/stacks/supabase.svg';
import Firebase from '../../assets/stacks/firebase.svg';
import Nest from '../../assets/stacks/nestjs.svg';
import Discord from '../../assets/stacks/discord.svg';
import X from '../../assets/stacks/x.svg';
import Dart from '../../assets/stacks/dart.svg';
import Bun from '../../assets/stacks/bun.svg';
import DesktopView from '../../lib/DesktopView';

export const stacksList = [
	// { src: Node.js, alt: 'Node.js' },
	// { src: npm, alt: 'npm' },
	{ src: Reactjs, alt: 'React.js' },
	{ src: Next, alt: 'Next.js' },
	{ src: Bun, alt: 'Bun' },
	{ src: JavaScript, alt: 'JavaScript' },
	{ src: TypeScript, alt: 'TypeScript' },
	{ src: Tailwind, alt: 'Tailwind' },
	{ src: Express, alt: 'Express' },
	{ src: Nest, alt: 'Nest.js' },
	{ src: MongoDB, alt: 'MongoDB' },
	{ src: Django, alt: 'Django' },
	{ src: Firebase, alt: 'Firebase' },
	{ src: Supabase, alt: 'Supabase' },
	{ src: Docker, alt: 'Docker' },
	{ src: Python, alt: 'Python' },
	{ src: Flutter, alt: 'Flutter' },
	{ src: Dart, alt: 'Dart' },
	{ src: Discord, alt: 'Discord Bot' },
	{ src: X, alt: 'Twitter Bot' },
];

export const SliderStacks = () => {
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const desktopView = DesktopView();

	return (
		<Marquee
			speed='40'
			gradient={true}
			gradientColor='#0d0d0d'
			gradientWidth={110}
			autoFill={true}
			direction='left'
			pauseOnClick={desktopView ? false : true}
			pauseOnHover={desktopView ? true : false}
		>
			{stacksList.map((stack, index) => (
				<div
					key={index}
					className='small-clickable relative mx-2 flex h-[4.5rem] w-[4.5rem] cursor-help items-center justify-center rounded-lg bg-gradient-to-br from-[#1f1f1f] to-[#0e0e0e] p-4 shadow-xl md:mx-3 md:h-20 md:w-20'
					onMouseEnter={() => setHoveredIndex(index)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<div className='absolute h-[4.5rem] w-[4.5rem] rounded-lg border-2 border-b-0 border-r-0 border-[#2a2a2a] md:h-20 md:w-20' />
					{hoveredIndex === index && <div className='absolute z-30 max-w-[3.5rem] rounded bg-black px-1 py-1 text-center text-[0.6rem] text-[#cccccc] md:max-w-[4rem] md:text-xs'>{stack.alt}</div>}
					<img
						src={stack.src}
						alt={stack.alt}
						className={`h-full w-full select-none object-contain transition-all duration-200 ${hoveredIndex === index ? 'blur-sm' : ''}`}
						draggable='false'
					/>
				</div>
			))}
		</Marquee>
	);
};
