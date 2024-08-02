// TODO: Underline when title is hovered with blurple

const ExperienceBox = ({ title, org, logo, date, desc }) => {
	return (
		<div className='border-customgray flex w-[45rem] flex-col items-center space-y-3 rounded-3xl border border-opacity-0 p-6 hover:border-opacity-100'>
			<div className='flex flex-col items-center space-y-1 text-center'>
				<p className='font-instrument text-5xl'>{title}</p>
				<div className='flex flex-row items-center space-x-2 justify-center text-lg'>
					<p className='font-inter w-45%'>{org}</p>
					<img
						src={logo}
						alt='COMPFEST'
						className='h-5 w-5 w-10%'
					/>
					<p className='font-semibold opacity-40 w-45%'>{date}</p>
				</div>
			</div>
			<p className='text-center text-lg'>{desc}</p>
		</div>
	);
};

export default ExperienceBox;
