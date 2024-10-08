const TopBorder = () => {
	return (
		<div className='z-100 absolute left-1/2 top-0 flex w-[80vw] -translate-x-1/2 flex-row border-opacity-100 bg-red-400 md:w-fit'>
			<div className='h-[3px] w-1/3 bg-gradient-to-l from-customgray to-customblack md:w-72' />
			<div className='h-[3px] w-1/3 bg-customgray md:w-72' />
			<div className='h-[3px] w-1/3 bg-gradient-to-r from-customgray to-customblack md:w-72' />
		</div>
	);
};

export default TopBorder;
