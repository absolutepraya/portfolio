import Marquee from 'react-fast-marquee';
import { IconBrowser, IconServerCog, IconTestPipe, IconChecklist, IconZoomCode, IconBrowserX, IconPrompt, IconApi, IconBrain } from '@tabler/icons-react';
import DesktopView from '../../lib/DesktopView';

const skills = ['Front-End Development', 'Back-End Development', 'AI Engineering Integration', 'API and Automation', 'Quality Assurance', 'Penetration Testing', 'Digital Forensics'];

const icons = [IconBrowser, IconServerCog, IconBrain, IconTestPipe, IconApi, IconChecklist, IconBrowserX, IconPrompt, IconZoomCode];

export const SliderSkills = () => {
	const desktopView = DesktopView();

	return (
		<Marquee
			speed='35'
			gradient={true}
			gradientColor='#0d0d0d'
			gradientWidth={110}
			autoFill={true}
			direction='left'
			pauseOnClick={desktopView ? false : true}
			pauseOnHover={desktopView ? true : false}
		>
			{skills.map((skill, index) => {
				const IconComponent = icons[index];
				return (
					<div
						key={index}
						className='relative mx-3 flex h-36 w-48 flex-col items-center justify-center space-y-3 rounded-xl bg-gradient-to-br from-[#1f1f1f] to-[#0e0e0e] px-4 text-[#b0b0b0]'
					>
						<div className='absolute h-[144px] w-[192px] rounded-xl border-2 border-b-0 border-r-0 border-[#2a2a2a]' />
						<div className='cursor-pointer'>
							<IconComponent className='z-20 scale-110 transition-all duration-100 hover:scale-125' />
						</div>
						<p className='z-20 text-center font-jetbrainsmono text-lg'>{skill}</p>
					</div>
				);
			})}
		</Marquee>
	);
};
