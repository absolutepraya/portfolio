import { useState } from 'react';

const Button = ({ icon = null, text, link, isActive }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<a href={link}>
			<div
				className={`relative flex h-14 w-14 cursor-pointer flex-col items-center justify-center rounded-2xl border border-[#262626] transition-all ${isActive ? 'bg-blurple bg-opacity-85 active:bg-opacity-50' : 'hover:bg-blurple hover:bg-opacity-40 active:bg-opacity-20'}`}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{icon}
				{isHovered && (
					<div className='absolute -bottom-10 h-auto w-aut px-1 rounded bg-customgray transition-all duration-75'>
						<p>{text}</p>
					</div>
				)}
			</div>
		</a>
	);
};

export default Button;
