import { motion, type Variants } from 'framer-motion';
import { cn } from '../../lib/utils';

interface BlurInDescProps {
  className?: string;
  variant?: Variants;
  duration?: number;
}

export default function BlurInDesc({
  className,
  variant,
  duration = 0.8,
}: BlurInDescProps) {
  const defaultVariants = {
    hidden: { filter: 'blur(10px)', opacity: 0 },
    visible: { filter: 'blur(0px)', opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.h1
      initial='hidden'
      animate='visible'
      transition={{ duration, delay: 0.5 }}
      variants={combinedVariants}
      className={cn(
        'bg-linear-to-br from-customwhite to-text-secondary bg-clip-text pb-1 text-center font-instrument text-[3.4rem] text-transparent leading-[3.6rem] md:text-6xl md:leading-[4rem] lg:text-7xl lg:leading-[5rem]',
        className,
      )}
    >
      I build software that thinks, scales, and ships.
    </motion.h1>
  );
}
