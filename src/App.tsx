import { domAnimation, LazyMotion } from 'framer-motion';
import About from './components/About/About';
import Achievements from './components/Achievements/Achievements';
import Experience from './components/Experience/Experience';
import Copyright from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';

const App = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div className='relative flex flex-col items-center overflow-hidden bg-page-bg font-inter text-customwhite'>
        <NavBar />

        <main className='mt-0! flex w-full flex-col items-center space-y-20 pb-24 md:space-y-32'>
          <About />
          <Experience />
          <Achievements />
          <Projects />
        </main>
        <div className='w-full bg-page-bg'>
          <Copyright />
        </div>
      </div>
    </LazyMotion>
  );
};

export default App;
