import React from 'react';

import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';

const App = () => {
	return (
		<div className={'relative flex flex-col items-center space-y-16 bg-[#0d0d0d] font-inter text-[#cccccc]'}>
			<NavBar />
			<About />
			<Experience />
			<Projects />
		</div>
	);
};

export default App;
