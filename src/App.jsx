import React from 'react';

import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';

const App = () => {
	return (
		<div className={'flex flex-col h-[300vh] items-center font-inter relative bg-[#0d0d0d]'}>
			<NavBar />
			<About />
		</div>
	);
};

export default App;