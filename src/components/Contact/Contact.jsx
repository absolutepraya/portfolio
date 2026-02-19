import { motion } from 'framer-motion';
import DesktopView from '../../lib/DesktopView';
import ContactBox from './ContactBox';

const Contact = () => {
  const desktopView = DesktopView();

  return (
    <section
      className='!z-10 relative flex flex-col space-y-12'
      id='contactsec'
    >
      <div id='contacts' className='absolute -top-24' />
      <div className='flex flex-col items-center lg:flex-row lg:space-x-8'>
        <motion.p
          className='bg-gradient-to-br from-customwhite to-[#5c5c5a] bg-clip-text font-instrument text-6xl text-transparent md:text-7xl'
          initial={{ opacity: 0, y: '40px' }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'circOut' },
          }}
          viewport={{
            marginTop: desktopView ? '-100px' : '-14px',
            marginBottom: desktopView ? '-100px' : '-14px',
            once: true,
          }}
        >
          Let&apos;s connect!
        </motion.p>
        <div
          className={`relative mt-1 w-full max-w-[35rem] rounded-full md:mt-8 lg:mt-3 lg:w-auto lg:max-w-[1000rem] lg:flex-grow ${desktopView ? 'h-0.5 bg-white opacity-20' : 'h-0.5 bg-gradient-to-r from-customwhite to-[#5c5c5a] opacity-60'}`}
        >
          <motion.div
            className='absolute h-1 w-full bg-[#03020F] shadow-glowcustomblacksmall lg:-top-2 lg:h-4 lg:shadow-glowcustomblack'
            whileInView={{
              x: '1000px',
              transition: { duration: 2, ease: 'circInOut', delay: 0.3 },
            }}
            viewport={{
              marginTop: desktopView ? '-100px' : '-14px',
              marginBottom: desktopView ? '-100px' : '-14px',
              once: true,
            }}
          />
        </div>
      </div>

      <div className='relative rounded-3xl'>
        <ContactBox />
      </div>
    </section>
  );
};

export default Contact;
