// TODO: Make a bubble message "Hover on me!"

import Laptop from '../../assets/creds/laptop.png';
import Flag from '../../assets/creds/flag.png';
import Globe from '../../assets/creds/globe.png';
import Test from '../../assets/creds/test.png';
import Indonesia from '../../assets/creds/indonesia.png';
import UI from '../../assets/orgs/fasilkom.svg';
import PFP2 from '../../assets/creds/pfp.svg';
const imgs = [Laptop, Flag, Globe, Test, Indonesia, UI];

import { useState } from 'react';

const ButtonImg = ({ img = null, text, link }) => {
	const [hovered, setHovered] = useState(false);
	const [counter, setCounter] = useState(0);

	const currentEmoji = imgs[counter];

	const changeEmoji = () => {
		setHovered(true);
		setCounter((counter + 1) % imgs.length);
	};

	return (
		<a href={link}>
			<div
				className='relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-2xl border border-[#262626] transition-all duration-200 ease-in-out hover:bg-blurple hover:bg-opacity-40 active:bg-blurple active:bg-opacity-85'
				onMouseEnter={() => changeEmoji()}
				onMouseLeave={() => setHovered(false)}
			>
				<img
					src={currentEmoji}
					className={`absolute -bottom-5 -right-6 z-20 ${hovered ? '-rotate-[4deg] scale-[50%]' : 'rotate-12 scale-[40%]'} transition-all duration-200 ease-in-out`}
				/>
				<div className='h-full w-full overflow-hidden rounded-2xl bg-white'>
					<img
						src={PFP2}
						className={`grayscale filter transition-all duration-200 ease-in-out scale-[80%] ${hovered ? 'filter-none' : ''}`}
					/>
				</div>
				<p className=''>{text}</p>
			</div>
		</a>
	);
};

export default ButtonImg;
