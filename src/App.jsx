import React, { useEffect, useState } from 'react';

import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Copyright from './components/Copyright';

import Grid from './assets/bg/1.jpeg';
import GridMobile from './assets/bg/2.jpeg';

const App = () => {
	const [desktopView, setDesktopView] = useState(window.innerWidth >= 768);

	useEffect(() => {
		const handleResize = () => {
			setDesktopView(window.innerWidth > 768);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className={'relative flex flex-col items-center space-y-20 overflow-hidden bg-[#0d0d0d] font-inter text-[#cccccc] md:space-y-32'}>
			<NavBar desktopView={desktopView} />
			<img
				src={desktopView ? Grid : GridMobile}
				className='absolute -top-[44rem] left-1/2 z-0 w-[88rem] -translate-x-1/2 opacity-75 md:-top-96 md:opacity-65'
			/>
			<About desktopView={desktopView} />
			<Experience desktopView={desktopView} />
			<Projects desktopView={desktopView} />
			<Contact desktopView={desktopView} />
			<Copyright desktopView={desktopView} />
		</div>
	);
};

export default App;
