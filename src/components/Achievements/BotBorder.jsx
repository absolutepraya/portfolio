const BotBorder = () => {
	return (
		<div className='absolute right-1/2 -bottom-[1px] flex w-[80%] translate-x-1/2 flex-row border-opacity-100'>
			<div className='h-[2px] w-1/3 bg-gradient-to-l from-customgray to-customblack' />
			<div className='h-[2px] w-1/3 bg-customgray' />
			<div className='h-[2px] w-1/3 bg-gradient-to-r from-customgray to-customblack' />
		</div>
	);
};

export default BotBorder;
