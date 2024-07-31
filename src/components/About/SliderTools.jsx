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
	return (
		<Marquee
			speed='40'
			gradient={true}
			gradientColor='#0d0d0d'
			gradientWidth={100}
			autoFill={true}
			direction='right'
		>
			{toolsList.map((tool, index) => (
				<div
					key={index}
					className='mx-3 flex h-20 w-20 items-center justify-center rounded-lg bg-gradient-to-br from-[#1f1f1f] to-[#0e0e0e] p-4 shadow-xl'
				>
					<img
						src={tool.src}
						alt={tool.alt}
						className='h-full w-full object-contain'
					/>
				</div>
			))}
		</Marquee>
	);
};

export default SliderTools;
