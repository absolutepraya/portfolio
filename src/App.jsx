import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Copyright from './components/Copyright';
import DesktopView from './DesktopView';

import Grid from './assets/bg/1.webp';
import GridMobile from './assets/bg/2.webp';

const App = () => {
	const desktopView = DesktopView();

	return (
		<div className={'relative flex flex-col items-center space-y-20 overflow-hidden bg-customblack font-inter text-customwhite md:space-y-32'}>
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
