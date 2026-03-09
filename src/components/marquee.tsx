'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  duration?: number;
  pauseOnHover?: boolean;
  direction?: 'left' | 'right' | 'up' | 'down';
  fade?: boolean;
  fadeAmount?: number;
}

const keyframesInjected = { current: false };

function injectKeyframes() {
  if (keyframesInjected.current) return;
  keyframesInjected.current = true;
  const style = document.createElement('style');
  style.textContent = `
    @keyframes marquee-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    @keyframes marquee-scroll-y { from { transform: translateY(0); } to { transform: translateY(-50%); } }
  `;
  document.head.appendChild(style);
}

export function Marquee({
  children,
  className,
  duration = 20,
  pauseOnHover = false,
  direction = 'left',
  fade = true,
  fadeAmount = 10,
  ...props
}: MarqueeProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    injectKeyframes();
  }, []);

  const items = React.Children.toArray(children);
  const isVertical = direction === 'up' || direction === 'down';
  const isReverse = direction === 'right' || direction === 'down';

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: marquee pause on hover
    <div
      ref={containerRef}
      className={cn(
        'flex w-full overflow-hidden',
        isVertical && 'flex-col',
        className,
      )}
      style={{
        ...(fade && {
          maskImage: isVertical
            ? `linear-gradient(to bottom, transparent 0%, black ${fadeAmount}%, black ${
                100 - fadeAmount
              }%, transparent 100%)`
            : `linear-gradient(to right, transparent 0%, black ${fadeAmount}%, black ${
                100 - fadeAmount
              }%, transparent 100%)`,
          WebkitMaskImage: isVertical
            ? `linear-gradient(to bottom, transparent 0%, black ${fadeAmount}%, black ${
                100 - fadeAmount
              }%, transparent 100%)`
            : `linear-gradient(to right, transparent 0%, black ${fadeAmount}%, black ${
                100 - fadeAmount
              }%, transparent 100%)`,
        }),
      }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      {...props}
    >
      <div
        className={cn('flex shrink-0', isVertical && 'flex-col')}
        style={{
          animation: `${isVertical ? 'marquee-scroll-y' : 'marquee-scroll'} ${duration}s linear infinite`,
          animationDirection: isReverse ? 'reverse' : 'normal',
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
      >
        {items.map((item) => (
          <div
            key={`a-${(item as React.ReactElement).key}`}
            className={cn('flex shrink-0', isVertical && 'w-full')}
          >
            {item}
          </div>
        ))}
        {items.map((item) => (
          <div
            key={`b-${(item as React.ReactElement).key}`}
            className={cn('flex shrink-0', isVertical && 'w-full')}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
