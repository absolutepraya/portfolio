import React from 'react';

import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';

const App = () => {
	return (
		<div className={'flex flex-col items-center font-inter relative bg-[#0d0d0d] text-[#cccccc] space-y-16'}>
			<NavBar />
			<About />
			<Experience />
			<Projects />
		</div>
	);
};

export default App;