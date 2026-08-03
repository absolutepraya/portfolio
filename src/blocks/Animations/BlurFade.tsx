import { AnimatePresence, m, useInView, type Variants } from 'framer-motion';
import { type ReactNode, useRef } from 'react';

interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  variant?: Variants;
  duration?: number;
  delay?: number;
  offset?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  inView?: boolean;
  inViewMargin?: string;
  blur?: string;
  scale?: number;
}

export default function BlurFade({
  children,
  className,
  style,
  variant,
  duration = 0.4,
  delay = 0,
  offset = 6,
  direction = 'up',
  inView = false,
  inViewMargin = '-50px',
  blur = '6px',
  scale = 1,
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inViewResult = useInView(ref, {
    once: true,
    margin: inViewMargin as `${number}px`,
  });
  const isInView = !inView || inViewResult;
  const defaultVariants = {
    hidden: {
      [direction === 'left' || direction === 'right' ? 'x' : 'y']:
        direction === 'right' || direction === 'down' ? -offset : offset,
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
      <m.div
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
        style={style}
      >
        {children}
      </m.div>
    </AnimatePresence>
  );
}
