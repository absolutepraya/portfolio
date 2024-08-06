const TopBorder = () => {
	return (
		<div className='z-100 absolute left-1/2 top-0 flex w-fit -translate-x-1/2 flex-row border-opacity-100 bg-red-400'>
			<div className='h-0.5 w-72 bg-gradient-to-l from-customgray to-customblack' />
			<div className='h-0.5 w-72 bg-customgray' />
			<div className='h-0.5 w-72 bg-gradient-to-r from-customgray to-customblack' />
		</div>
	);
};

export default TopBorder;
