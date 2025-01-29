import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';
import DesktopView from '../lib/DesktopView';
import { IconCopyright, IconBrandGithub, IconClock } from '@tabler/icons-react';

const Copyright = () => {
	const [currentTime, setCurrentTime] = useState('');
	const desktopView = DesktopView();

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
		<div className='flex font-jetbrainsmono w-full flex-col items-center justify-between space-y-2 border-t border-customgray bg-customgray bg-opacity-40 py-4 text-xs md:h-16 md:flex-row md:space-y-0 md:px-32 md:py-0 md:text-xs'>
			<div className='flex flex-row items-center justify-start space-x-2 md:w-1/3'>
				<IconCopyright size={desktopView ? 16 : 14} />
				<p>2024 — All Rights Reserved.</p>
			</div>
			<div className='flex flex-row items-center justify-center space-x-2 md:w-1/3'>
				<p>Jakarta, Indonesia</p>
				<IconClock size={desktopView ? 16 : 14} />
				<p>{currentTime}</p>
			</div>
			<div className='flex flex-row items-center justify-end space-x-2 md:w-1/3'>
				<p>Built by me</p>
				<IconBrandGithub size={desktopView ? 16 : 14} />
				<a href='https://github.com/absolutepraya/portfolio'>
					<p className='underline underline-offset-2'>Source code</p>
				</a>
			</div>
		</div>
	);
};

export default Copyright;
