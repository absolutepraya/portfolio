import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
// import Bash from '../../assets/tools/bash.svg';
import Canva from '../../assets/tools/canva.svg';
import Figma from '../../assets/tools/figma.svg';
import GitHub from '../../assets/tools/github.svg';
import Heroku from '../../assets/tools/heroku.svg';
import Railway from '../../assets/tools/railway.svg';
import Vercel from '../../assets/tools/vercel.svg';
import Ubuntu from '../../assets/tools/ubuntu.svg';
import Azure from '../../assets/tools/azure.svg';
import OpenAI from '../../assets/tools/openai.svg';
import VSCode from '../../assets/tools/vscode.svg';
import Vitest from '../../assets/tools/vitest.svg';
import Jest from '../../assets/tools/jest.svg';
import Selenium from '../../assets/tools/selenium.svg';
import Tableau from '../../assets/tools/tableau.svg';
import DesktopView from '../../lib/DesktopView';

export const toolsList = [
	{ src: Azure, alt: 'Azure' },
	{ src: Vercel, alt: 'Vercel' },
	{ src: Heroku, alt: 'Heroku' },
	{ src: Railway, alt: 'Railway' },
	{ src: Selenium, alt: 'Selenium' },
	{ src: Vitest, alt: 'Vitest' },
	{ src: Jest, alt: 'Jest' },
	{ src: Tableau, alt: 'Tableau' },
	{ src: Canva, alt: 'Canva' },
	{ src: Figma, alt: 'Figma' },
	// { src: Bash, alt: 'Bash' },
	{ src: Ubuntu, alt: 'Ubuntu' },
	{ src: GitHub, alt: 'GitHub' },
	{ src: VSCode, alt: 'VSCode' },
];

export const SliderTools = () => {
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const desktopView = DesktopView();

	return (
		<Marquee
			speed='40'
			gradient={true}
			gradientColor='#0d0d0d'
			gradientWidth={110}
			autoFill={true}
			direction='right'
			pauseOnClick={desktopView ? false : true}
			pauseOnHover={desktopView ? true : false}
		>
			{toolsList.map((tool, index) => (
				<div
					key={index}
					className='small-clickable mx-2 flex h-[4.5rem] w-[4.5rem] cursor-help items-center justify-center rounded-lg bg-gradient-to-br from-[#1f1f1f] to-[#0e0e0e] p-4 shadow-xl md:mx-3 md:h-20 md:w-20'
					onMouseEnter={() => setHoveredIndex(index)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<div className='absolute h-[4.5rem] w-[4.5rem] rounded-lg border-2 border-b-0 border-r-0 border-[#2a2a2a] md:h-20 md:w-20' />
					{hoveredIndex === index && <div className='absolute z-30 rounded bg-black px-1 py-1 text-xs text-[#cccccc]'>{tool.alt}</div>}
					<img
						src={tool.src}
						alt={tool.alt}
						className={`h-full w-full select-none object-contain transition-all duration-200 ${hoveredIndex === index ? 'blur-sm' : ''}`}
						draggable='false'
					/>
				</div>
			))}
		</Marquee>
	);
};