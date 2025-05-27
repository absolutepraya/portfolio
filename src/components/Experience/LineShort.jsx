import { motion } from 'framer-motion';
import DesktopView from '../../lib/DesktopView';

const Line = () => {
  const desktopView = DesktopView();

  return (
    <motion.div
      className='flex flex-col items-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.6, ease: 'circOut' } }}
      viewport={{ marginTop: desktopView ? '-100px' : '-14px', marginBottom: desktopView ? '-100px' : '-14px', once: true }}
    >
      <div className='h-16 w-[2.5px] bg-gradient-to-b from-transparent to-customlightgray' />
      <div className='flex flex-row justify-center'>
        <div className='h-[2.5px] w-5 bg-gradient-to-r from-transparent to-customlightgray' />
        <div className='h-[2.5px] w-5 bg-customlightgray' />
        <div className='h-[2.5px] w-5 bg-gradient-to-l from-transparent to-customlightgray' />
      </div>
    </motion.div>
  );
};

export default Line;
