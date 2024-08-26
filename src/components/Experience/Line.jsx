import { motion } from 'framer-motion';
import DesktopView from '../../DesktopView';

const Line = () => {
	const desktopView = DesktopView();

	return (
		<motion.div
			className='flex flex-col'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1, transition: { duration: 0.6, ease: 'circOut' } }}
			viewport={{ marginTop: desktopView ? '-100px' : '-14px', marginBottom: desktopView ? '-100px' : '-14px', once: true }}
		>
			<div className='h-24 w-[2.5px] bg-gradient-to-b from-transparent to-customlightgray' />
			<div className='h-24 w-[2.5px] bg-customlightgray' />
			<div className='h-24 w-[2.5px] bg-gradient-to-t from-transparent to-customlightgray' />
		</motion.div>
	);
};

export default Line;
