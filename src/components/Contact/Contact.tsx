import { motion } from 'framer-motion';
import DesktopView from '../../lib/DesktopView';
import ContactBox from './ContactBox';

const Contact = () => {
  const desktopView = DesktopView();

  return (
    <section
      className='relative z-10! flex flex-col space-y-12'
      id='contactsec'
    >
      <div id='contacts' className='absolute -top-24' />
      <div className='flex flex-col items-center lg:flex-row lg:space-x-8'>
        <motion.h2
          className='bg-linear-to-br from-customwhite to-text-secondary bg-clip-text font-instrument text-6xl text-transparent md:text-7xl'
          initial={{ opacity: 0, y: '40px' }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'circOut' },
          }}
          viewport={{
            margin: desktopView ? '-100px' : '-14px',
            once: true,
          }}
        >
          Let&apos;s connect!
        </motion.h2>
        <div
          className={`relative mt-1 w-full max-w-140 rounded-full md:mt-8 lg:mt-3 lg:w-auto lg:max-w-4000 lg:grow ${desktopView ? 'h-0.5 bg-white opacity-20' : 'h-0.5 bg-linear-to-r from-customwhite to-text-secondary opacity-60'}`}
        >
          <motion.div
            className='absolute h-1 w-full bg-page-bg shadow-glowcustomblacksmall lg:-top-2 lg:h-4 lg:shadow-glowcustomblack'
            whileInView={{
              x: '1000px',
              transition: { duration: 2, ease: 'circInOut', delay: 0.3 },
            }}
            viewport={{
              margin: desktopView ? '-100px' : '-14px',
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
