import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import DesktopView from '../../lib/DesktopView';
import TabletView from '../../lib/TabletView';

export default function BlurInDesc({ className, variant, duration = 0.8 }) {
	const defaultVariants = {
		hidden: { filter: 'blur(10px)', opacity: 0 },
		visible: { filter: 'blur(0px)', opacity: 1 },
	};
	const combinedVariants = variant || defaultVariants;
	const desktopView = DesktopView();
	const tabletView = TabletView();

	return (
		<motion.h1
			initial='hidden'
			animate='visible'
			transition={{ duration, delay: 1.5 }}
			variants={combinedVariants}
			className={cn('bg-gradient-to-br from-customwhite to-[#5c5c5a] bg-clip-text text-center font-instrument text-[3.2rem] leading-[3.2rem] text-transparent md:text-6xl lg:text-7xl', className)}
		>
			An excellent <i>Software Architect</i>,{tabletView && <br />} a versatile <i>Full-Stack Engineer</i>,{tabletView && <br />} and to the core, a <i>problem solver</i>,{tabletView && <br />} crafting innovative IT solutions{tabletView && <br />} from the lively city of Jakarta,{tabletView && <br />} Indonesia.
			<br />
			<span className='text-[0]'>X</span>
		</motion.h1>
	);
}
