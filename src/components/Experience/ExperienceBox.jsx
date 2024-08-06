import { useEffect, useRef, useState } from 'react';

const ExperienceBox = ({ title, org, logo, date, desc }) => {
	const [isInView, setIsInView] = useState(false);
	const divRef = useRef(null);

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
				rootMargin: '-30% 0px -30% 0px', // Adjust the viewport offset
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
			className={`relative flex w-[45rem] flex-col items-center space-y-3 rounded-3xl border-4 border-b-0 border-r-0 border-customgray bg-[#0f0f0f] from-[#1f1f1f] to-[#0e0e0e] p-6 transition-all duration-500 ease-in-out ${isInView ? 'shadow-glowblurple bg-gradient-to-br border-opacity-100' : 'border-opacity-20'}`}
		>
			<div className='flex flex-col items-center space-y-1 text-center'>
				<p className='font-instrument text-5xl'>{title}</p>
				<div className='flex flex-row items-center justify-center space-x-2 text-lg'>
					<p className='w-45% font-inter'>{org}</p>
					<img
						src={logo}
						className='h-5 w-5'
					/>
					<p className='w-45% font-semibold opacity-40'>{date}</p>
				</div>
			</div>
			<p className='text-center text-lg'>{desc}</p>
		</div>
	);
};

export default ExperienceBox;
