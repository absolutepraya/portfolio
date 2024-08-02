import { IconDoor, IconBriefcase2, IconAppWindow, IconUser } from '@tabler/icons-react';

const NavBar = () => {
	return (
		<div className='fixed top-8 z-10 flex h-[4.5rem] w-[55rem] flex-row items-center justify-between rounded-3xl border border-[#262626] bg-[#262626] bg-opacity-40 px-3 backdrop-blur-md'>
			<div className='flex w-1/3 flex-row space-x-3'>
				<NavBarButton />
				<div className='flex flex-col items-start'>
					<p className='text-start font-bold'>Daffa Abhipraya</p>
					<p className='text-start'>Computer Science, UI</p>
				</div>
			</div>
			<div className='flex w-1/3 flex-row space-x-3 justify-center'>
				<NavBarButton
					color='blurple'
					icon={<IconDoor />}
				/>
				<NavBarButton
					color='blurple'
					icon={<IconBriefcase2 />}
				/>
				<NavBarButton
					color='blurple'
					icon={<IconAppWindow />}
				/>
				<NavBarButton
					color='blurple'
					icon={<IconUser />}
				/>
			</div>
			<div className='flex w-1/3 flex-row justify-end'>
				<NavBarButton />
			</div>
		</div>
	);
};

const NavBarButton = ({ icon = null, image = null, color, text, link }) => {
	const colorHover = `hover:bg-${color}`;

	return (
		<a href={link}>
			<div className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl border border-[#262626] ${colorHover} transition-all duration-200 ease-in-out`}>
				{icon}
				<p className=''>{text}</p>
			</div>
		</a>
	);
};

export default NavBar;
