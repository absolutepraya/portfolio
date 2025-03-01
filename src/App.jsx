import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Copyright from './components/Copyright';
import Achievements from './components/Achievements/Achievements';
import DesktopView from './lib/DesktopView';
import TabletView from './lib/TabletView';
import Grid from './assets/elements/bg1.webp';
import GridMobile from './assets/elements/bg2.webp';

const App = () => {
	const desktopView = DesktopView();
	const tabletView = TabletView();

	return (
		<div className={'relative flex flex-col items-center space-y-20 overflow-hidden bg-customblack font-inter text-customwhite md:space-y-32'}>
			<NavBar />
			<img
				src={tabletView ? Grid : GridMobile}
				className='absolute -top-[41rem] left-1/2 z-0 w-[88rem] -translate-x-1/2 scale-[120%] select-none opacity-50 md:-top-80 md:scale-100 md:opacity-80'
				alt='Grid background'
				draggable='false'
			/>
			<About />
			<Experience />
			<Projects />
			{/* TODO: Mobile-view */}
			{desktopView && <Achievements />}
			<Contact />
			<Copyright />
		</div>
	);
};

export default App;
