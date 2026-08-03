/*
	jsrepo 1.29.1
	Installed from https://reactbits.dev/tailwind/
	02-02-2025
*/

import {
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
} from 'framer-motion';
import { useEffect, useRef } from 'react';

interface CountUpProps {
  to: number;
  from?: number;
  direction?: 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
}

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2, // Duration of the animation in seconds
  className = '',
  startWhen = true,
  separator = '',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);

  // Calculate damping and stiffness based on duration
  const damping = 20 + 40 * (1 / duration); // Adjust this formula for finer control
  const stiffness = 100 * (1 / duration); // Adjust this formula for finer control

  const springValue = useSpring(motionValue, {
    damping,
    stiffness,
  });

  const isInView = useInView(ref, { once: true, margin: '0px' });

  // Set initial text content to the initial value based on direction
  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = String(direction === 'down' ? to : from);
    }
  }, [from, to, direction]);

  // Start the animation when in view and startWhen is true
  useEffect(() => {
    if (isInView && startWhen) {
      const timeoutId = setTimeout(() => {
        motionValue.set(direction === 'down' ? from : to);
      }, delay * 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isInView, startWhen, motionValue, direction, from, to, delay]);

  useMotionValueEvent(springValue, 'change', (latest) => {
    if (!ref.current) return;
    const options = {
      useGrouping: !!separator,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    };
    const formattedNumber = Intl.NumberFormat('en-US', options).format(
      Number.parseFloat(latest.toFixed(0)),
    );
    ref.current.textContent = separator
      ? formattedNumber.replace(/,/g, separator)
      : formattedNumber;
  });

  return <span className={`${className}`} ref={ref} />;
}
