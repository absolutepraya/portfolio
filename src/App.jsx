import React, { useEffect, useState } from 'react';

import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Copyright from './components/Copyright';

import Grid from './assets/bg/3.jpeg';

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
		<div className={'relative flex flex-col items-center space-y-32 overflow-hidden bg-[#0d0d0d] font-inter text-[#cccccc]'}>
			<NavBar desktopView={desktopView}/>
			<img
				src={Grid}
				className='absolute -top-96 left-1/2 z-0 w-[88rem] -translate-x-1/2 opacity-65'
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
