import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Copyright from './components/Copyright';

const App = () => {
	return (
		<div className={'relative flex flex-col items-center space-y-32 bg-[#0d0d0d] font-inter text-[#cccccc]'}>
			<NavBar />
			<About />
			<Experience />
			<Projects />
			<Contact />
			<Copyright />
		</div>
	);
};

export default App;
