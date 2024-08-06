// TODO: Make a shine through effect in "Open for new opportunities" box

import Marquee from 'react-fast-marquee';

import SliderSkills from './SliderSkills';
import SliderStacks from './SliderStacks';
import SliderTools from './SliderTools';

import { IconSettings2, IconSparkles, IconBrandSpotify } from '@tabler/icons-react';

const About = () => {
	return (
		<section className='!mt-40 flex w-[68rem] flex-col items-center relative' id='aboutsec'>
			<div id='about' className='absolute -top-40'/> {/* To scroll to top of the page */}
			<div className='shining-border flex flex-row items-center space-x-4 rounded-full border border-customgray bg-[#131313] px-6 py-2 shadow-lg transition-all duration-300 ease-in-out hover:bg-customwhite hover:text-customblack'>
				{/* TODO: Make a shining effect, moving from left to right, either the text or the div */}
				<span className='relative flex h-4 w-4 items-center justify-center'>
					<span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-blurple opacity-75'></span>
					<span className='relative inline-flex h-3 w-3 rounded-full bg-blurple'></span>
				</span>
				<p className='text-lg'>Open for new opportunities</p>
			</div>
			<div className='mt-12 w-full'>
				<p className='bg-gradient-to-br from-customwhite to-[#5c5c5a] bg-clip-text text-center font-instrument text-6xl text-transparent'>
					Abhip is a brilliant <i>fullstack engineer</i>,<br />a formidable <i>forensics CTF player</i>,<br />
					and a comprehensive <i>problem solver</i>,<br />
					developing from the lively city of Jakarta,
					<br />
					Indonesia.
				</p>
			</div>
			<div className='mt-16 flex h-auto w-full flex-row space-x-6'>
				<div className='flex h-full w-[40%] flex-col space-y-6 rounded-3xl border border-[#262626] p-6 shadow-lg'>
					<div className='flex h-[11.5rem] items-center justify-center'>
						<SliderSkills />
					</div>
					<div className='flex w-full flex-col items-start space-y-4'>
						<div className='flex h-8 w-auto items-center space-x-2 rounded-lg border px-2'>
							<IconSparkles
								size={16}
								stroke={1.5}
								color='#fff'
							/>
							<p>My skills</p>
						</div>
						<p className='text-2xl'>
							Expert in <b className='bg-gradient-to-br from-[#d4d7ff] to-[#3643FC] bg-clip-text text-transparent'>Fullstack Development</b>, also skilled in <b className='bg-gradient-to-br from-[#f4f4f9] to-[#3643FC] bg-clip-text text-transparent'>CTF</b> challenges and passionate about <i className='bg-gradient-to-br from-[#878fff] to-[#3643FC] bg-clip-text text-transparent'>Cybersecurity</i>.
						</p>
					</div>
				</div>
				<div className='flex h-full w-[39.3rem] flex-col items-center space-y-6 rounded-3xl border border-[#262626] p-6 shadow-lg'>
					<SliderStacks />
					<SliderTools />
					<div className='flex w-full flex-col items-start space-y-4'>
						<div className='flex h-8 w-auto items-center space-x-2 rounded-lg border px-2'>
							<IconSettings2
								size={16}
								stroke={1.5}
							/>
							<p>My tech stack & tools</p>
						</div>
						<p className='text-2xl'>
							Achieving peak <i>efficiency</i> and <i>productivity</i> through careful <i className='bg-gradient-to-br from-[#878fff] to-[#3643FC] bg-clip-text text-transparent'>attention to detail</i>, ensuring <b className='bg-gradient-to-br from-[#f4f4f9] to-[#3643FC] bg-clip-text text-transparent'>perfection</b> in every project.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
