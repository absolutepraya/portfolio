const NavBar = () => {
	return (
		<div className='fixed top-8 flex h-16 w-[400px] flex-row items-center justify-between rounded-2xl border border-[#262626] bg-[#0f0f0f] bg-opacity-40 px-2 backdrop-blur-md z-10'>
			<svg /> {/* Profile picture here */}
			<div className='flex flex-row space-x-2'>
				<NavBarButton
					text='A'
					link='/'
				/>
				<NavBarButton
					text='B'
					link='/'
				/>
				<NavBarButton
					text='C'
					link='/'
				/>
			</div>
			<svg /> {/* Dark & light mode button */}
		</div>
	);
};

const NavBarButton = ({ icon, color, text, link }) => {
	return (
		<div
			className='flex h-12 w-12 items-center justify-center rounded-xl border border-[#262626] cursor-pointer'
			href={link}
		>
			<p className=''>{text}</p>
		</div>
	);
};

export default NavBar;
