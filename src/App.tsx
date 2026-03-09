import About from './components/About/About';
import Achievements from './components/Achievements/Achievements';
import Experience from './components/Experience/Experience';
import Copyright from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';

const App = () => {
  return (
    <div className='relative flex flex-col items-center overflow-hidden bg-page-bg font-inter text-customwhite'>
      <NavBar />

      <main className='mt-0! flex w-full flex-col items-center'>
        <div className='flex w-full flex-col items-center space-y-20 md:space-y-32'>
          <About />
        </div>

        <div className='mt-20 w-full rounded-t-[3rem] border-white/20 border-t bg-page-bg shadow-2xl md:mt-32 md:rounded-t-[5rem]'>
          <div className='flex flex-col items-center space-y-20 pt-20 pb-24 md:space-y-32 md:pt-32'>
            <Experience />
            <Achievements />
            <Projects />
          </div>
        </div>
      </main>
      <div className='w-full bg-page-bg'>
        <Copyright />
      </div>
    </div>
  );
};

export default App;
