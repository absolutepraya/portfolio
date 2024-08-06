import { useState } from 'react';

import { IconBrandLinkedin } from '@tabler/icons-react';

const ButtonReach = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<a href='https://www.linkedin.com/in/daffaabhipraya/'>
			<div
				className='relative flex h-14 w-fit cursor-pointer flex-row items-center justify-center space-x-2 rounded-2xl border border-[#424242] bg-[#3f3f3f] bg-opacity-40 pl-4 pr-3 shadow-md transition-all hover:bg-customwhite hover:text-customblack'
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{/* TODO: Make the LinkedIn icon go up, going away, replaced by IconSend */}
				<p className='text text-end font-semibold leading-4'>Reach out</p>
				<IconBrandLinkedin
					size={28}
					stroke={2}
				/>
			</div>
		</a>
	);
};

export default ButtonReach;
