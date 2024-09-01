import { useState, useEffect } from 'react';
import DesktopView from '../../DesktopView';
import Arrow from '../../assets/elements/arrow.webp';
import Laptop from '../../assets/creds/laptop.webp';
import Flag from '../../assets/creds/flag.webp';
import Globe from '../../assets/creds/globe.webp';
import Test from '../../assets/creds/test.webp';
import Indonesia from '../../assets/creds/indonesia.webp';
import PFP2 from '../../assets/creds/pfp.svg';
import Fasilkom from '../../assets/orgs/fasilkom.svg';

const imgs = [Fasilkom, Laptop, Flag, Globe, Test, Indonesia];

const ButtonImg = () => {
	const [hovered, setHovered] = useState(false);
	const [hoveredOnce, setHoveredOnce] = useState(false);
	const [counter, setCounter] = useState(0);
	const [showMessage, setShowMessage] = useState(false);
	const desktopView = DesktopView();

	const currentEmoji = imgs[counter];

	useEffect(() => {
		if (!hoveredOnce) {
			const timer = setTimeout(() => {
				if (!hoveredOnce) {
					setShowMessage(true);
					const hideMessageTimer = setTimeout(() => {
						setShowMessage(false);
					}, 15000);
					return () => clearTimeout(hideMessageTimer);
				} else {
					setShowMessage(false);
				}
			}, 5000);

			return () => clearTimeout(timer);
		} else {
			setShowMessage(false);
		}
	}, [hoveredOnce]);

	const changeEmoji = () => {
		setHovered(true);
		setHoveredOnce(true);
		setCounter((counter + 1) % imgs.length);
	};

	return (
		<div>
			<div className='relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#424242] shadow-md hover:bg-blurple hover:bg-opacity-40 active:bg-blurple active:bg-opacity-85'>
				{desktopView && (
					<div className={`absolute -bottom-16 -left-6 flex flex-col space-y-1 transition-all duration-[1000ms] ease-out ${showMessage ? 'opacity-100' : 'opacity-0'}`}>
						<img
							src={Arrow}
							className='h-10 w-10'
							alt='Arrow'
						/>
						<div className='customgray -rotate-[8deg] rounded-lg border border-customgray bg-[#161616] px-2 py-1'>
							<p className='text-nowrap text-sm'>Hover me!</p>
						</div>
					</div>
				)}
				<img
					src={currentEmoji}
					className={`absolute -bottom-5 -right-6 z-20 ${hovered ? '-rotate-[4deg] scale-[50%]' : 'rotate-12 scale-[35%]'} transition duration-200 ease-in-out`}
					alt='Emoji'
				/>
				<div
					className='h-full w-full cursor-pointer overflow-hidden rounded-2xl bg-white'
					onMouseEnter={() => changeEmoji()}
					onMouseLeave={() => setHovered(false)}
					aria-label='Profile picture'
					title='Profile picture'
				>
					<img
						src={PFP2}
						className={`scale-[80%] grayscale filter transition duration-200 ease-in-out ${hovered ? 'filter-none' : ''}`}
						alt='Profile picture'
					/>
				</div>
			</div>
		</div>
	);
};

export default ButtonImg;
