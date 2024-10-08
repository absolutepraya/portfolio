import SliderSkills from './SliderSkills';
import SliderStacks from './SliderStacks';
import SliderTools from './SliderTools';
import DesktopView from '../../DesktopView';
import { IconSettings2, IconSparkles } from '@tabler/icons-react';
import { motion } from 'framer-motion';

const About = () => {
	const desktopView = DesktopView();

	return (
		<section
			className='relative !mt-40 flex w-[90vw] flex-col items-center md:w-[68rem]'
			id='aboutsec'
		>
			<div
				id='about'
				className='absolute -top-40'
			/>
			<motion.div
				className='shining-border flex flex-row items-center -space-x-[1rem] rounded-full border border-customgray bg-[#131313] py-2 pl-6 shadow-lg transition-all duration-300 ease-in-out'
				initial={{ scale: 0 }}
				animate={{ scale: 1, transition: { duration: 0.5, ease: 'easeInOut', delay: 2 } }}
			>
				<span className='relative flex h-4 w-4 items-center justify-center'>
					<span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-blurple opacity-75'></span>
					<span className='relative inline-flex h-3 w-3 rounded-full bg-blurple'></span>
				</span>
				<p className='shine-through !-mr-2 text-lg transition-all ease-in-out'>Open for new opportunities</p>
			</motion.div>
			<div className='mt-12 md:w-[53rem]'>
				<motion.p
					className='bg-gradient-to-br from-customwhite to-[#5c5c5a] bg-clip-text text-center font-instrument text-5xl text-transparent md:text-7xl'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 1, ease: 'easeOut', delay: 1.3 } }}
					viewport={{ once: true }}
				>
					An excellent <i>Full Stack Engineer</i>, a dynamic <i>CTF Forensics Player</i>, and to the core, a <i>problem solver</i>, crafting solutions from the lively city of Jakarta, Indonesia.
				</motion.p>
			</div>
			<div className='mt-16 flex h-auto w-full flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0'>
				<motion.div
					className='flex h-full w-full flex-col space-y-6 rounded-3xl border border-customgray bg-customblack p-6 shadow-lg md:w-[40%]'
					initial={{ y: '200px' }}
					animate={{ y: 0, transition: { duration: 1, ease: 'circOut', delay: 0.2 } }}
				>
					<div className='relative flex items-center justify-center md:h-[11.5rem]'>
						{/* To fix transparent shadow gap for in Marquee for mobile */}
						{!desktopView && <div className='absolute -left-[1px] -top-2 z-10 h-[105%] w-1 bg-customblack' />}
						{!desktopView && <div className='absolute -right-[1px] -top-2 z-10 h-[105%] w-1 bg-customblack' />}
						<SliderSkills />
					</div>
					<div className='flex w-full flex-col items-start space-y-4'>
						<div className='flex h-8 w-auto items-center space-x-2 rounded-lg border px-2'>
							<IconSparkles
								size={16}
								stroke={1.5}
								color='#fff'
							/>
							<p className='md:text-md text-sm'>My skillsets</p>
						</div>
						<p className='text-xl md:text-2xl'>
							Expert in <b className='bg-gradient-to-br from-[#d4d7ff] to-blurple bg-clip-text text-transparent'>Fullstack Development</b>, also skilled in <b className='bg-gradient-to-br from-[#f4f4f9] to-blurple bg-clip-text text-transparent'>CTF</b> challenges and passionate about <i className='bg-gradient-to-br from-[#878fff] to-blurple bg-clip-text text-transparent'>Cybersecurity</i>.
						</p>
					</div>
				</motion.div>
				<motion.div
					className='flex h-full w-full flex-col items-center space-y-6 rounded-3xl border border-customgray bg-customblack p-6 shadow-lg md:w-[39.3rem]'
					initial={{ y: '200px' }}
					animate={{ y: 0, transition: { duration: 1, ease: 'circOut', delay: 0.2 } }}
				>
					<div className='relative flex w-full flex-col gap-y-5 md:space-y-[0.24rem]'>
						{/* To fix transparent shadow gap for in Marquee for mobile */}
						{!desktopView && <div className='absolute -left-[1px] -top-2 z-10 h-[105%] w-1 bg-customblack' />}
						{!desktopView && <div className='absolute -right-[1px] -top-2 z-10 h-[105%] w-1 bg-customblack' />}
						<SliderStacks />
						<SliderTools />
					</div>
					<div className='flex w-full flex-col items-start space-y-4'>
						<div className='flex h-8 w-auto items-center space-x-2 rounded-lg border px-2'>
							<IconSettings2
								size={16}
								stroke={1.5}
							/>
							<p className='md:text-md text-sm'>My tech stack & tools</p>
						</div>
						<p className='text-xl md:text-2xl'>
							Achieving peak <i>efficiency</i> and <i>productivity</i> through careful <i className='bg-gradient-to-br from-[#878fff] to-blurple bg-clip-text text-transparent'>attention to detail</i>, ensuring <b className='bg-gradient-to-br from-[#f4f4f9] to-blurple bg-clip-text text-transparent'>perfection</b> in every project.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
