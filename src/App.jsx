import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Copyright from './components/Copyright';
import Achievements from './components/Achievements/Achievements';
import DesktopView from './lib/DesktopView';
import TabletView from './lib/TabletView';
import { useState, useEffect } from 'react';
import Grid from './assets/elements/bg1.webp';
import GridMobile from './assets/elements/bg2.webp';

const App = () => {
  const desktopView = DesktopView();
  const tabletView = TabletView();
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload the grid image
  useEffect(() => {
    const imageToLoad = tabletView ? Grid : GridMobile;

    if (!imagesLoaded) {
      const imageLoader = new Image();
      imageLoader.src = imageToLoad;
      imageLoader.onload = () => setImagesLoaded(true);
    }
  }, [tabletView, imagesLoaded]);

  // Use the correct image source based on screen size
  const gridImage = tabletView ? Grid : GridMobile;

  return (
    <div className='relative flex flex-col items-center space-y-20 overflow-hidden bg-customblack font-inter text-customwhite md:space-y-32'>
      <NavBar />

      {/* Background grid image with fallback */}
      {imagesLoaded ? (
        <img
          src={gridImage}
          className='absolute -top-[41rem] left-1/2 z-0 w-[88rem] -translate-x-1/2 scale-[120%] select-none opacity-50 md:-top-80 md:scale-100 md:opacity-80'
          alt='Grid background'
          draggable='false'
          loading='eager'
          fetchpriority='high'
          width='1408'
          height='1056'
        />
      ) : (
        <div className='absolute -top-[41rem] left-1/2 z-0 h-screen w-[88rem] -translate-x-1/2 bg-customblack'></div>
      )}

      <About />
      <Experience />
      <Achievements />
      <Projects />
      <Contact />
      <Copyright />
    </div>
  );
};

export default App;
