import About from './components/About/About';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Copyright from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';

const App = () => {
  return (
    <div className='relative flex flex-col items-center space-y-20 overflow-hidden bg-page-bg font-inter text-customwhite md:space-y-32'>
      <NavBar />

      <main className='mt-0! flex flex-col items-center space-y-20 md:space-y-32'>
        <About />
        <Experience />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <Copyright />
    </div>
  );
};

export default App;
