import Button from './Button';
import ButtonImg from './ButtonImg';

import { IconHome, IconBriefcase2, IconBox, IconMail } from '@tabler/icons-react';

const NavBar = () => {
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
				<Button icon={<IconHome />} text='Home' link='#about'/>
				<Button icon={<IconBriefcase2 />} text='Experience' link='#experience'/>
				<Button icon={<IconBox />} text='Projects' link='#projects'/>
				<Button icon={<IconMail />} text='Contacts'link='#contacts'/>
			</div>
			<div className='flex w-1/3 flex-row justify-end'>
				<Button />
			</div>
		</div>
	);
};

export default NavBar;
