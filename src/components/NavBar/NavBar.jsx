import { useState, useEffect } from 'react';

import Button from './Button';
import ButtonImg from './ButtonImg';

import { IconHome, IconBriefcase2, IconBox, IconMail, IconBrandLinkedin } from '@tabler/icons-react';

const NavBar = ({ desktopView }) => {
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
		<div className='fixed top-8 z-10 flex h-[4.9rem] w-auto flex-row items-center justify-between rounded-3xl border border-[#262626] bg-[#262626] bg-opacity-40 px-2.5 backdrop-blur-md md:w-[55rem]'>
			<div className='flex flex-row items-center space-x-4 md:w-1/3'>
				{desktopView && <ButtonImg />}
				{desktopView && (
					<div className='flex flex-col justify-start'>
						<p className='text-start font-bold'>Daffa Abhipraya</p>
						<p className='text-start'>Computer Science, UI</p>
					</div>
				)}
			</div>
			<div className='flex w-1/3 flex-row justify-center space-x-3'>
				{!desktopView && <ButtonImg />}
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
			<div className='flex flex-row justify-end md:w-1/3'>
				{desktopView && (
					<a
						href='https://www.linkedin.com/in/daffaabhipraya/'
						className='relative flex h-14 w-fit cursor-pointer flex-row items-center justify-center space-x-2 rounded-2xl border border-[#424242] bg-[#3f3f3f] bg-opacity-40 pl-4 pr-3 shadow-md transition-all hover:bg-customwhite hover:text-customblack'
					>
						{/* TODO: Make the LinkedIn icon go up, going away, replaced by IconSend */}
						<p className='text text-end font-semibold leading-4'>Reach out</p>
						<IconBrandLinkedin
							size={28}
							stroke={2}
						/>
					</a>
				)}
			</div>
		</div>
	);
};

export default NavBar;
