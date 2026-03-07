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
        'bg-gradient-to-br from-customwhite to-text-secondary bg-clip-text text-center font-instrument text-[3.4rem] text-transparent leading-[3.2rem] md:text-6xl lg:text-7xl',
        className,
      )}
    >
      Systems thinker. Product builder. AI tinkerer. Cloud wrangler.
      <br />
      {/* Intentional: Easter egg hidden text, meant to be here */}
      <span className='text-[0]'>
        eW8gaWYgeW91J3JlIHNlZWluZyB0aGlzLCB3aGF0IGFyZSB5b3UgdXAgdG8gYnJv
      </span>
    </motion.h1>
  );
}
