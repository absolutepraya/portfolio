// TODO: Add a easter egg on bottom left

import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';

import { IconCopyright, IconBrandGithub, IconClock } from '@tabler/icons-react';

const Copyright = () => {
	const [currentTime, setCurrentTime] = useState('');

	useEffect(() => {
		const updateTime = () => {
			const time = moment().tz('Asia/Jakarta').format('hh:mm A');
			setCurrentTime(time);
		};
		const interval = setInterval(updateTime, 1000);
		updateTime();
		return () => clearInterval(interval);
	}, []);

	return (
		<div className='flex h-16 w-full flex-row items-center justify-between border-t bg-opacity-40  bg-customgray border-customgray px-32 text-sm'>
			<div className='flex flex-row items-center space-x-1 w-1/3 justify-start'>
				<IconCopyright size={18} />
				<p>2024 Daffa Abhipraya — All Rights Reserved.</p>
			</div>
			<div className='flex flex-row items-center space-x-1 w-1/3 justify-center'>
				<p>Jakarta, Indonesia</p>
				<IconClock size={18} />
				<p>{currentTime}</p>
			</div>
			<div className='flex flex-row items-center space-x-1 w-1/3 justify-end'>
				<p>Designed and built by me</p>
				<IconBrandGithub size={18} />
				<a href='https://github.com/absolutepraya/portfolio'>
					<p className='underline underline-offset-2'>Source code here.</p>
				</a>
			</div>
		</div>
	);
};

export default Copyright;
