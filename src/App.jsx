import { motion } from 'framer-motion';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Copyright from './components/Copyright';
import Achievements from './components/Achievements/Achievements';
import Hero1 from './assets/hero/hero1.webp';
import Hero2 from './assets/hero/hero2.webp';

const App = () => {
  return (
    <div className='relative flex flex-col items-center space-y-20 overflow-hidden bg-[#05040E] font-inter text-customwhite md:space-y-32'>
      <NavBar />

      <motion.div 
        className='absolute -top-32 left-1/2 z-0 w-[88rem] -translate-x-1/2 select-none bg-[#05040E] opacity-80'
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 2.5, delay: 1.2 }}
      >
        <img
          src={Hero1}
          alt='Hero background'
          className='h-full w-full object-cover'
          draggable='false'
          loading='eager'
          fetchPriority='high'
          width='2048'
          height='1324'
        />
      </motion.div>

      <About />
      <Experience />
      <Achievements />
      <Projects />
      <Contact />
      <Copyright />

      <motion.div 
        className='absolute bottom-24 left-1/2 -z-0 w-[80rem] -translate-x-1/2 select-none bg-[#05040E] opacity-100 md:bottom-16 lg:w-full'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: 1.2 }}
        viewport={{ once: true, margin: '-30%' }}
      >
        <div className='relative w-full'>
          <div className='absolute inset-0 z-10 bg-gradient-to-b from-[#05040E] to-transparent'></div>
          <img
            src={Hero2}
            alt='Hero background'
            className='h-full w-full object-cover'
            draggable='false'
            loading='eager'
            fetchPriority='high'
            width='2048'
            height='1324'
          />
        </div>
      </motion.div>
    </div>
  );
};

export default App;
