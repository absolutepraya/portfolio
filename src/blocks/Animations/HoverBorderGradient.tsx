import { motion } from 'framer-motion';
import {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useTheme } from '../../lib/ThemeContext';
import { cn } from '../../lib/utils';

type Direction = 'TOP' | 'LEFT' | 'BOTTOM' | 'RIGHT';

interface HoverBorderGradientProps {
  children: ReactNode;
  containerClassName?: string;
  className?: string;
  as?: React.ElementType;
  duration?: number;
  clockwise?: boolean;
  [key: string]: unknown;
}

export default function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = 'button',
  duration = 1,
  clockwise = true,
  ...props
}: HoverBorderGradientProps) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState<Direction>('TOP');
  const { isDark } = useTheme();

  const rotateDirection = useCallback(
    (currentDirection: Direction) => {
      const directions: Direction[] = ['TOP', 'LEFT', 'BOTTOM', 'RIGHT'];
      const currentIndex = directions.indexOf(currentDirection);
      const nextIndex = clockwise
        ? (currentIndex - 1 + directions.length) % directions.length
        : (currentIndex + 1) % directions.length;
      return directions[nextIndex];
    },
    [clockwise],
  );

  const borderColor = isDark ? 'hsl(0, 0%, 100%)' : 'rgba(26, 26, 46, 0.8)';
  const borderColorTransparent = isDark
    ? 'rgba(255, 255, 255, 0)'
    : 'rgba(26, 26, 46, 0)';
  const highlightColor = isDark ? 'hsl(0, 0%, 100%)' : 'rgba(26, 26, 46, 0.9)';

  const movingMap: Record<Direction, string> = useMemo(
    () => ({
      TOP: `radial-gradient(30% 60% at 50% 0%, ${borderColor} 0%, ${borderColorTransparent} 100%)`,
      LEFT: `radial-gradient(25% 55% at 0% 50%, ${borderColor} 0%, ${borderColorTransparent} 100%)`,
      BOTTOM: `radial-gradient(30% 60% at 50% 100%, ${borderColor} 0%, ${borderColorTransparent} 100%)`,
      RIGHT: `radial-gradient(25% 55% at 100% 50%, ${borderColor} 0%, ${borderColorTransparent} 100%)`,
    }),
    [borderColor, borderColorTransparent],
  );

  const highlight = `radial-gradient(75% 181.15942028985506% at 50% 50%, ${highlightColor} 0%, rgba(255, 255, 255, 0) 100%)`;

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, rotateDirection]);
  return (
    <Tag
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        'relative flex h-min w-fit flex-col flex-nowrap content-center items-center justify-center gap-10 overflow-visible bg-page-bg/20 box-decoration-clone p-px transition duration-500 hover:scale-105 hover:bg-page-bg/10',
        containerClassName,
      )}
      {...props}
    >
      <div
        className={cn(
          'z-10 w-auto rounded-[inherit] border border-customgray bg-customblack py-2',
          className,
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          'absolute inset-0 z-0 flex-none overflow-hidden rounded-[inherit]',
        )}
        style={{
          filter: 'blur(2px)',
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: 'linear', duration: duration ?? 1 }}
      />
      <div className='absolute inset-[2px] z-1 flex-none rounded-[inherit] bg-customblack' />
    </Tag>
  );
}
