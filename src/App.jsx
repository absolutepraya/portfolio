import { motion } from 'framer-motion';
import Hero1 from './assets/hero/hero1.webp';
import Hero2 from './assets/hero/hero2.webp';
import About from './components/About/About';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Copyright from './components/Footer';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';

const App = () => {
  return (
    <div className='relative flex flex-col items-center space-y-20 overflow-hidden bg-[#03020F] font-inter text-customwhite md:space-y-32'>
      <NavBar />

      <motion.div
        className='absolute -top-32 left-1/2 z-0 w-[88rem] -translate-x-1/2 select-none bg-[#03020F] opacity-80'
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

      <main className='flex flex-col items-center space-y-20 md:space-y-32'>
        <About />
        <Experience />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <Copyright />

      <motion.div
        className='absolute bottom-24 left-1/2 -z-0 w-[80rem] -translate-x-1/2 select-none bg-[#03020F] opacity-100 md:bottom-16 lg:w-full'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: 1.2 }}
        viewport={{ once: true, margin: '-30%' }}
      >
        <img
          src={Hero2}
          alt='Hero background'
          className='h-full w-full object-cover'
          style={{
            maskImage:
              'linear-gradient(to bottom, transparent 0%, transparent 20%, rgba(0,0,0,1) 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 0%, transparent 20%, rgba(0,0,0,1) 100%)',
          }}
          draggable='false'
          loading='eager'
          fetchPriority='high'
          width='2048'
          height='1324'
        />
      </motion.div>
    </div>
  );
};

export default App;
