import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function BlurFade({ children, className, variant, duration = 0.4, delay = 0, offset = 6, direction = 'up', inView = false, inViewMargin = '-50px', blur = '6px', scale = 1 }) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;
  const defaultVariants = {
    hidden: {
      [direction === 'left' || direction === 'right' ? 'x' : 'y']: direction === 'right' || direction === 'down' ? -offset : offset,
      opacity: 0,
      filter: `blur(${blur})`,
      scale: scale,
    },
    visible: {
      [direction === 'left' || direction === 'right' ? 'x' : 'y']: 0,
      opacity: 1,
      filter: 'blur(0px)',
      scale: scale,
    },
  };
  const combinedVariants = variant || defaultVariants;
  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        exit='hidden'
        variants={combinedVariants}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: 'easeOut',
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
