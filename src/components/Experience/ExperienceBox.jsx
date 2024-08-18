import { useEffect, useRef, useState } from 'react';
import DesktopView from '../../DesktopView';

const ExperienceBox = ({ title, org, logo, date, desc, url }) => {
	const [isInView, setIsInView] = useState(false);
	const divRef = useRef(null);
	const desktopView = DesktopView();

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsInView(true);
					} else {
						setIsInView(false);
					}
				});
			},
			{
				root: null,
				rootMargin: '-40% 0px -40% 0px', // Adjust the viewport offset
				threshold: 0, // Trigger as soon as the element enters/exits the viewport
			}
		);

		if (divRef.current) {
			observer.observe(divRef.current);
		}

		return () => {
			if (divRef.current) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				observer.unobserve(divRef.current);
			}
		};
	}, []);

	return (
		<div
			ref={divRef}
			className={`relative flex flex-col items-center space-y-3 rounded-3xl border-4 border-b-0 border-r-0 border-customgray bg-[#0f0f0f] from-[#1f1f1f] to-[#0e0e0e] p-6 transition-all duration-[480ms] ease-in-out md:w-[45rem] ${isInView ? (desktopView ? 'border-opacity-100 bg-gradient-to-br shadow-glowblurple' : 'border-opacity-100 bg-gradient-to-br shadow-glowblurplesmall') : 'border-opacity-20'}`}
		>
			<div className='flex flex-col items-center space-y-0 text-center md:space-y-0'>
				<p className='relative font-instrument text-4xl md:text-5xl'>{title}</p>
				<div className='flex flex-col items-center justify-center md:flex-row md:space-x-2 md:text-lg'>
					{desktopView ? (
						<a
							className='w-45% relative font-inter font-semibold'
							href={url}
						>
							{org}
							<div className='absolute bottom-[0.11rem] h-[1.8px] w-full bg-gradient-to-br from-[#d3d3ee] to-blurple' />
						</a>
					) : (
						<div className='flex flex-row items-center space-x-2'>
							<img
								src={logo}
								className='h-5 w-5'
							/>
							<a
								className='w-45% relative font-inter font-semibold'
								href={url}
							>
								{org}
								<div className={`absolute bottom-[0.040rem] h-[1.8px] w-full bg-gradient-to-br from-[#d3d3ee] to-blurple opacity-0 transition-all duration-[480ms] ease-in ${isInView ? 'opacity-100' : ''}`} />
							</a>
						</div>
					)}
					{desktopView && (
						<img
							src={logo}
							className='h-5 w-5'
						/>
					)}
					<p className='w-45% font-semibold opacity-40'>{date}</p>
				</div>
			</div>
			<p className='text-center md:text-lg'>{desc}</p>
		</div>
	);
};

export default ExperienceBox;
