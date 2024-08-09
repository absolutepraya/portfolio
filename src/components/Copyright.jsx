// TODO: Add a easter egg on bottom left

import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';

import { IconCopyright, IconBrandGithub, IconClock } from '@tabler/icons-react';

const Copyright = ({ desktopView }) => {
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
		<div className='flex md:h-16 py-4 md:py-0 w-full md:flex-row flex-col items-center justify-between border-t border-customgray bg-customgray bg-opacity-40 md:px-32 md:text-sm text-xs md:space-y-0 space-y-2'>
			<div className='flex md:w-1/3 flex-row items-center justify-start space-x-1'>
				<IconCopyright size={desktopView ? 18 : 14} />
				<p>2024 Daffa Abhipraya — All Rights Reserved.</p>
			</div>
			<div className='flex md:w-1/3 flex-row items-center justify-center space-x-1'>
				<p>Jakarta, Indonesia</p>
				<IconClock size={desktopView ? 18 : 14} />
				<p>{currentTime}</p>
			</div>
			<div className='flex md:w-1/3 flex-row items-center justify-end space-x-1'>
				<p>Designed and built by me</p>
				<IconBrandGithub size={desktopView ? 18 : 14} />
				<a href='https://github.com/absolutepraya/portfolio'>
					<p className='underline underline-offset-2'>Source code here.</p>
				</a>
			</div>
		</div>
	);
};

export default Copyright;
