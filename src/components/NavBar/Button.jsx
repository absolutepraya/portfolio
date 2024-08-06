import { useState } from 'react';

const Button = ({ icon = null, text, link, isActive }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<a href={link}>
			<div
				className={`relative flex h-14 w-14 cursor-pointer flex-col items-center justify-center rounded-2xl border border-[#424242] shadow-md transition-all ${isActive ? 'bg-blurple bg-opacity-85 active:bg-opacity-50' : 'bg-[#3f3f3f] bg-opacity-40 hover:bg-blurple hover:bg-opacity-40 active:bg-opacity-20'}`}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{icon}
				{isHovered && (
					<div className='w-aut absolute -bottom-10 h-auto rounded bg-customgray px-1 transition-all duration-75'>
						<p>{text}</p>
					</div>
				)}
				{isActive && <div className='absolute -bottom-2 h-[0.2rem] w-6 rounded-full bg-[#424242] transition-all duration-100 ease-in-out' />}
			</div>
		</a>
	);
};

export default Button;
