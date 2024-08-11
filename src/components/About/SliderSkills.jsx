import Marquee from 'react-fast-marquee';
import { IconBrowser, IconServerCog, IconTestPipe, IconChecklist, IconZoomCode, IconBrowserX, IconLockBolt, IconUrgent, IconPrompt } from '@tabler/icons-react';

const skills = ['Front-End Development', 'Back-End Development', 'Back-End Testing', 'Quality Assurance', 'Digital Forensics (CTF)', 'Web Exploitation (CTF)', 'Cyber Threat Intelligence', 'Risk Management', 'Prompt Engineering'];

const icons = [IconBrowser, IconServerCog, IconTestPipe, IconChecklist, IconZoomCode, IconBrowserX, IconLockBolt, IconUrgent, IconPrompt];

const SliderSkills = () => {
	return (
		<Marquee
			speed='35'
			gradient={true}
			gradientColor='#0d0d0d'
			gradientWidth={110}
			autoFill={true}
			direction='left'
			pauseOnClick={true}
		>
			{skills.map((skill, index) => {
				const IconComponent = icons[index];
				return (
					<div
						key={index}
						className='mx-3 flex h-36 w-48 flex-col items-center justify-center space-y-3 rounded-xl border-2 border-b-0 border-r-0 border-[#2a2a2a] bg-gradient-to-br from-[#1f1f1f] to-[#0e0e0e] px-4 text-[#b0b0b0]'
					>
						<IconComponent className='scale-110 transition-all duration-100 hover:scale-125' />
						<p className='text-center text-xl'>{skill}</p>
					</div>
				);
			})}
		</Marquee>
	);
};

export default SliderSkills;
