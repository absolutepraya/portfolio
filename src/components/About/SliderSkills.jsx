import Marquee from 'react-fast-marquee';
import { IconBrowser, IconServerCog, IconTestPipe, IconChecklist, IconZoomCode, IconBrowserX, IconLockBolt, IconUrgent } from '@tabler/icons-react';

const skills = ['Front-End Development', 'Back-End Development', 'Back-End Testing', 'Quality Assurance', 'Digital Forensics (CTF)', 'Web Exploitation (CTF)', 'Cyber Threat Intelligence', 'Risk Management'];

const icons = [IconBrowser, IconServerCog, IconTestPipe, IconChecklist, IconZoomCode, IconBrowserX, IconLockBolt, IconUrgent];

const SliderSkills = () => {
	return (
		<Marquee
			speed='35'
			gradient={true}
			gradientColor='#0d0d0d'
			gradientWidth={110}
			autoFill={true}
			direction='left'
		>
			{skills.map((skill, index) => {
				const IconComponent = icons[index];
				return (
					<div
						key={index}
						className='mx-3 flex h-36 w-48 flex-col items-center justify-center space-y-3 rounded-xl bg-gradient-to-br from-[#1f1f1f] to-[#0e0e0e] px-4 text-[#b0b0b0] border-2 border-[#2a2a2a] border-r-0 border-b-0'
					>
						<IconComponent className='scale-110' />
						<p className='text-center text-xl'>{skill}</p>
					</div>
				);
			})}
		</Marquee>
	);
};

export default SliderSkills;
