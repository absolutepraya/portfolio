import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import Bash from '../../assets/tools/bash.svg';
import Canva from '../../assets/tools/canva.svg';
import Figma from '../../assets/tools/figma.svg';
import GitHub from '../../assets/tools/github.svg';
import Heroku from '../../assets/tools/heroku.svg';
import Railway from '../../assets/tools/railway.svg';
import Ubuntu from '../../assets/tools/ubuntu.svg';
import VSCode from '../../assets/tools/vscode.svg';

const toolsList = [
	{ src: VSCode, alt: 'VSCode' },
	{ src: GitHub, alt: 'GitHub' },
	{ src: Ubuntu, alt: 'Ubuntu' },
	{ src: Bash, alt: 'Bash' },
	{ src: Figma, alt: 'Figma' },
	{ src: Canva, alt: 'Canva' },
	{ src: Heroku, alt: 'Heroku' },
	{ src: Railway, alt: 'Railway' },
];

const SliderTools = () => {
	const [hoveredIndex, setHoveredIndex] = useState(null);

	return (
		<Marquee
			speed='40'
			gradient={true}
			gradientColor='#0d0d0d'
			gradientWidth={110}
			autoFill={true}
			direction='right'
			pauseOnClick={true}
		>
			{toolsList.map((tool, index) => (
				<div
					key={index}
					className='mx-2 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-lg border-2 border-b-0 border-r-0 border-[#2a2a2a] bg-gradient-to-br from-[#1f1f1f] to-[#0e0e0e] p-4 shadow-xl hover:cursor-pointer md:mx-3 md:h-20 md:w-20'
					onMouseEnter={() => setHoveredIndex(index)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					{hoveredIndex === index && <div className='absolute z-30 rounded bg-black px-1 py-1 text-xs text-[#cccccc]'>{tool.alt}</div>}
					<img
						src={tool.src}
						alt={tool.alt}
						className={`h-full w-full object-contain transition-all duration-200 ${hoveredIndex === index ? 'blur-sm' : ''}`}
					/>
				</div>
			))}
		</Marquee>
	);
};

export default SliderTools;
