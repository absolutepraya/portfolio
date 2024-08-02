const Line = () => {
	return (
		<div className='flex flex-col'>
			<div className='to-customgray h-24 w-[2.5px] bg-gradient-to-b from-transparent' />
			<div className='bg-customgray h-32 w-[2.5px]' />
			<div className='to-customgray h-24 w-[2.5px] bg-gradient-to-t from-transparent' />
		</div>
	);
};

export default Line;
