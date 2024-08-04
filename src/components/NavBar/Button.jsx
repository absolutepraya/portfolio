import { useState } from 'react';

const Button = ({ icon = null, text, link }) => {
	const [isActive, setIsActive] = useState(false);
	// transition-all duration-200 ease-in-out
	// ${isActive ? 'bg-blurple bg-opacity-85' : ''}
	return (
		<a href={link}>
			<div
				className={`flex h-14 w-14 cursor-pointer flex-col items-center justify-center rounded-2xl border border-[#262626] transition-all ${isActive ? 'bg-blurple bg-opacity-85 active:bg-opacity-50' : 'hover:bg-blurple hover:bg-opacity-40 active:bg-opacity-20'}`}
				onClick={() => setIsActive(!isActive)}
			>
				{icon}
				{/* { isActive ? <p className='text-xs'>{text}</p> : null } */}
			</div>
		</a>
	);
};

export default Button;
