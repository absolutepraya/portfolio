import { useEffect, useRef, useState } from 'react';
import DesktopView from '../../lib/DesktopView';
import { motion } from 'framer-motion';

const ExperienceBox = ({ title, org, logo, date, desc, url, previousTitles, previousDates }) => {
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
				rootMargin: '-42% 0px -42% 0px', // Adjust the viewport offset
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
		<motion.div
			ref={divRef}
			className={`relative flex flex-col items-center space-y-3 rounded-3xl bg-[#0f0f0f] from-[#1f1f1f] to-[#0e0e0e] p-6 !pt-4 transition-all duration-[480ms] ease-in-out lg:w-[45rem] ${isInView ? (desktopView ? 'border-opacity-100 bg-gradient-to-br shadow-glowblurple' : 'border-opacity-100 bg-gradient-to-br shadow-glowblurplesmall') : 'border-opacity-20'}`}
		>
			<div
				ref={divRef}
				className={`absolute top-0 h-full w-full rounded-3xl border-[3px] border-b-0 border-r-0 border-customgray ${isInView ? (desktopView ? 'border-opacity-100' : 'border-opacity-100') : 'border-opacity-20'}`}
			/>
			<div className='z-20 flex flex-col items-center space-y-0 text-center md:space-y-0'>
				<p className={`relative font-instrument text-4xl md:text-5xl ${isInView ? '' : 'opacity-30'} transition-all duration-[380ms] ease-in-out`}>{title}</p>
				<div className='flex flex-col items-center justify-center md:flex-row md:space-x-2 md:text-lg'>
					{desktopView ? (
						<a
							className={`w-45% relative font-inter font-semibold ${isInView ? '' : 'opacity-30'} transition-all duration-[380ms] ease-in-out`}
							href={url}
							target='_blank'
							rel='noreferrer'
							title={`Open ${org} website`}
						>
							{org}
							<div className='absolute bottom-[0.11rem] h-[1.8px] w-full rounded-full bg-gradient-to-br from-[#d3d3ee] to-blurple' />
						</a>
					) : (
						<div className='flex flex-row items-center space-x-2'>
							<img
								src={logo}
								className={`h-5 w-5 ${isInView ? '' : 'opacity-30'} transition-all duration-[380ms] ease-in-out`}
								alt={org}
								draggable='false'
							/>
							<a
								className={`w-45% relative font-inter font-semibold ${isInView ? '' : 'opacity-30'} transition-all duration-[380ms] ease-in-out`}
								href={url}
								target='_blank'
								rel='noreferrer'
								title={`Open ${org} website`}
							>
								{org}
								<div className={`absolute bottom-[0.040rem] h-[1.8px] w-full rounded-full bg-gradient-to-br from-[#d3d3ee] to-blurple opacity-0 transition-all duration-[480ms] ease-in ${isInView ? 'opacity-100' : ''}`} />
							</a>
						</div>
					)}
					{desktopView && (
						<img
							src={logo}
							className={`h-5 w-5 ${isInView ? '' : 'opacity-30'} transition-all duration-[380ms] ease-in-out`}
							alt={org}
							draggable='false'
						/>
					)}
					<p className={`w-45% font-semibold ${isInView ? 'opacity-60' : 'opacity-15'} font-jetbrainsmono transition-all duration-[380ms] ease-in-out`}>{date}</p>
				</div>
			</div>
			<p className={`z-20 text-center md:text-lg ${isInView ? '' : 'opacity-30'} transition-all duration-[380ms] ease-in-out`}>{desc}</p>

			{previousTitles && previousDates && (
				<motion.div className={`flex w-full flex-col`}>
					<div className={`mb-4 mt-2 h-0.5 w-full rounded-full bg-customlightgray ${isInView ? '' : 'opacity-30'} transition-all duration-[380ms] ease-in-out`} />
					<p className={`${isInView ? '' : 'opacity-30'} mb-2 text-sm transition-all duration-[380ms] ease-in-out md:text-base`}>Previous/other roles:</p>
					<div className='flex w-full flex-col space-y-2'>
						{/* TODO: Implement directory tree-like listing visual */}

						{previousTitles.map((previousTitle, index) => (
							<div
								className='flex w-full flex-row items-center justify-between'
								key={index}
							>
								<p className={`${isInView ? '' : 'opacity-30'} font-instrument text-xl transition-all duration-[380ms] ease-in-out md:text-2xl`}>{previousTitle}</p>
								<p className={`font-jetbrainsmono font-semibold ${isInView ? 'opacity-60' : 'opacity-15'} font-jetbrainsmono text-sm transition-all duration-[380ms] ease-in-out md:text-base`}>{previousDates[index]}</p>
							</div>
						))}
					</div>
				</motion.div>
			)}
		</motion.div>
	);
};

export default ExperienceBox;
