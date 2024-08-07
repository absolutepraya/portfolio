import React, { useEffect } from 'react';

import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Copyright from './components/Copyright';

import Grid from './assets/bg/3.jpeg';

const App = () => {
	return (
		<div className={'relative flex flex-col items-center space-y-32 bg-[#0d0d0d] font-inter text-[#cccccc] overflow-hidden'}>
			<NavBar />
			<img
				src={Grid}
				className='absolute left-1/2 -translate-x-1/2 -top-96 z-0 w-[88rem] opacity-65'
			/>
			<About />
			<Experience />
			<Projects />
			<Contact />
			<Copyright />
		</div>
	);
};

export default App;
