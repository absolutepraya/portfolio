import { useState, useEffect } from 'react';

import Button from './Button';
import ButtonImg from './ButtonImg';

import { IconHome, IconBriefcase2, IconBox, IconMail } from '@tabler/icons-react';

const NavBar = () => {
	const [activeSection, setActiveSection] = useState('aboutsec');

	useEffect(() => {
		const sections = document.querySelectorAll('section');
		const options = {
			root: null,
			rootMargin: '-40% 0px -40% 0px',
			threshold: 0,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id);
				}
			});
		}, options);

		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			sections.forEach((section) => {
				observer.unobserve(section);
			});
		};
	}, []);

	return (
		<div className='fixed top-8 z-10 flex h-[4.5rem] w-[55rem] flex-row items-center justify-between rounded-3xl border border-[#262626] bg-[#262626] bg-opacity-40 px-2 backdrop-blur-md'>
			<div className='flex w-1/3 flex-row items-center space-x-4'>
				<ButtonImg />
				<div className='flex flex-col justify-start'>
					<p className='text-start font-bold'>Daffa Abhipraya</p>
					<p className='text-start'>Computer Science, UI</p>
				</div>
			</div>
			<div className='flex w-1/3 flex-row justify-center space-x-3'>
				<Button
					icon={<IconHome />}
					text='Home'
					link='#about'
					isActive={activeSection === 'aboutsec'}
				/>
				<Button
					icon={<IconBriefcase2 />}
					text='Experience'
					link='#experience'
					isActive={activeSection === 'experiencesec'}
				/>
				<Button
					icon={<IconBox />}
					text='Projects'
					link='#projects'
					isActive={activeSection === 'projectssec'}
				/>
				<Button
					icon={<IconMail />}
					text='Contacts'
					link='#contacts'
					isActive={activeSection === 'contactsec'}
				/>
			</div>
			<div className='flex w-1/3 flex-row justify-end'>
				<Button />
			</div>
		</div>
	);
};

export default NavBar;
