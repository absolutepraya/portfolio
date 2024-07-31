import Marquee from 'react-fast-marquee';

import SliderStacks from './SliderStacks';
import SliderTools from './SliderTools';

import { IconSettings2 } from '@tabler/icons-react';

const About = () => {
	return (
		<div className='mt-36 flex flex-col items-center'>
			<p>About</p>
			<div className='w-full'>
				<p className='font-instrument text-center text-5xl text-white'>
					Abhip is a brilliant <i>fullstack engineer</i>,<br />a
					formidable <i>forensics CTF player</i>,<br />
					and a comprehensive <i>problem solver</i>,<br />
					developing from the lively city of Jakarta,<br />
					Indonesia.
				</p>
			</div>
			<div className='mt-16 flex h-auto w-[75vw] flex-row space-x-6'>
				<div className='h-full w-2/5 rounded-3xl border border-[#262626] p-6'></div>
				<div className='flex h-full w-3/5 flex-col items-center space-y-6 rounded-3xl border border-[#262626] p-6'>
					<SliderStacks />
					<SliderTools />
					<div className='flex w-full flex-col items-start space-y-4'>
						<div className='flex h-8 w-auto items-center space-x-2 rounded-lg border px-2'>
							<IconSettings2
								size={16}
								stroke={1.5}
								color='#fff'
							/>
							<p className='text-white'>My tech stack & tools</p>
						</div>
						<p className='text-white text-2xl'>
							Achieving peak <i className='bg-gradient-to-br from-[#878fff] to-[#3643FC] bg-clip-text text-transparent'>efficiency</i> and <i className='bg-gradient-to-br from-[#878fff] to-[#3643FC] bg-clip-text text-transparent'>productivity</i> through careful <i className='bg-gradient-to-br from-[#878fff] to-[#3643FC] bg-clip-text text-transparent'>attention to detail</i>, ensuring <b className='bg-gradient-to-br from-[#878fff] to-[#3643FC] bg-clip-text text-transparent'>perfection</b> in every project.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
