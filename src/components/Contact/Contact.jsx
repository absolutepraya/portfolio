import DesktopView from '../../DesktopView';
import ContactBox from './ContactBox';
import { motion } from 'framer-motion';

const Contact = () => {
	const desktopView = DesktopView();

	return (
		<section
			className='relative flex flex-col space-y-12'
			id='contactsec'
		>
			<div
				id='contacts'
				className='absolute -top-24'
			/>
			<div className='flex flex-col items-center md:flex-row md:space-x-8'>
				<motion.p
					className='bg-gradient-to-br from-customwhite to-[#5c5c5a] bg-clip-text font-instrument text-6xl text-transparent md:text-7xl'
					initial={{ opacity: 0, y: '40px' }}
					whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'circOut' } }}
					viewport={{ marginTop: desktopView ? '-100px' : '-14px', marginBottom: desktopView ? '-100px' : '-14px', once: true }}
				>
					Let&apos;s connect!
				</motion.p>
				<div className={`relative mt-1 w-full rounded-full md:mt-3 md:w-auto md:flex-grow ${desktopView ? 'h-0.5 bg-white opacity-20' : 'h-0.5 bg-gradient-to-r from-customwhite to-[#5c5c5a] opacity-60'}`}>
					<motion.div
						className='absolute h-1 w-full bg-customblack shadow-glowcustomblacksmall md:-top-2 md:h-4 md:shadow-glowcustomblack'
						whileInView={{ x: '760px', transition: { duration: 2, ease: 'circInOut', delay: 0.3 } }}
						viewport={{ marginTop: desktopView ? '-100px' : '-14px', marginBottom: desktopView ? '-100px' : '-14px', once: true }}
					/>
				</div>
			</div>

			<ContactBox />
		</section>
	);
};

export default Contact;
