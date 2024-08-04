const TopBorder = () => {
	return (
		<div className='z-100 absolute left-1/2 -translate-x-1/2 top-0 flex flex-row bg-red-400 w-fit border-opacity-100'>
			<div className='h-0.5 bg-gradient-to-l from-customgray to-customblack w-72' />
			<div className='h-0.5 bg-customgray w-72' />
			<div className='h-0.5 bg-gradient-to-r from-customgray to-customblack w-72' />
		</div>
	);
};

export default TopBorder;
