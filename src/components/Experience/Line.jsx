const Line = () => {
	return (
		<div className='flex flex-col'>
			<div className='h-24 w-[2.5px] bg-gradient-to-b from-transparent to-customgray' />
			<div className='h-24 w-[2.5px] bg-customgray' />
			<div className='h-24 w-[2.5px] bg-gradient-to-t from-transparent to-customgray' />
		</div>
	);
};

export default Line;
