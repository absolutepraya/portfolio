/*
	jsrepo 1.29.1
	Installed from https://reactbits.dev/tailwind/
	02-02-2025
*/

import { animated, useSprings } from '@react-spring/web';
import { type CSSProperties, useEffect, useRef, useState } from 'react';

interface SplitTextProps {
  text?: string;
  className?: string;
  delay?: number;
  animationFrom?: Record<string, unknown>;
  animationTo?: Record<string, unknown>;
  easing?: string;
  threshold?: number;
  rootMargin?: string;
  textAlign?: CSSProperties['textAlign'];
  onLetterAnimationComplete?: () => void;
  animateBy?: 'words' | 'letters';
}

const SplitText = ({
  text = '',
  className = '',
  delay = 100,
  animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
  animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
  easing = 'easeOutCubic',
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
}: SplitTextProps) => {
  const words = text.split(' ').map((word) => word.split(''));
  const wordKeys = (() => {
    let offset = 0;
    return words.map((word) => {
      const joined = word.join('');
      const key = `${offset}-${joined}`;
      offset += joined.length + 1;
      return key;
    });
  })();
  const letters = words.flat();
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const animatedCount = useRef(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const [springs, api] = useSprings(letters.length, () => ({
    ...animationFrom,
  }));

  useEffect(() => {
    if (inView) {
      api.start((i) => ({
        ...animationTo,
        delay: i * delay,
        config: { easing },
        onRest: () => {
          animatedCount.current += 1;
          if (
            animatedCount.current === letters.length &&
            onLetterAnimationComplete
          ) {
            onLetterAnimationComplete();
          }
        },
      }));
    }
  }, [
    inView,
    api,
    animationTo,
    delay,
    easing,
    letters.length,
    onLetterAnimationComplete,
  ]);

  return (
    <p
      ref={ref}
      className={`split-parent inline overflow-hidden ${className}`}
      style={{ textAlign, whiteSpace: 'normal', wordWrap: 'break-word' }}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordKeys[wordIndex]}
          style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
        >
          {word.map((letter, letterIndex) => {
            const index =
              words.slice(0, wordIndex).reduce((acc, w) => acc + w.length, 0) +
              letterIndex;

            return (
              // @ts-expect-error -- react-spring animated types lack children in strict mode
              <animated.span
                key={index}
                style={springs[index]}
                className='inline-block will-change-transform'
              >
                {letter}
              </animated.span>
            );
          })}
          <span style={{ display: 'inline-block', width: '0.3em' }}>
            &nbsp;
          </span>
        </span>
      ))}
    </p>
  );
};

export default SplitText;
