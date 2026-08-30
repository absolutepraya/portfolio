import { m } from 'framer-motion';
import DesktopView from '../../lib/DesktopView';

interface LineProps {
  compact?: boolean;
}

const Line = ({ compact = false }: LineProps) => {
  const desktopView = DesktopView();
  const segmentHeight = compact ? 'h-4' : 'h-12';

  return (
    <m.div
      className='flex flex-col'
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 0.6, ease: 'circOut' },
      }}
      viewport={{
        margin: desktopView ? '-100px 0px -100px 0px' : '-14px 0px -14px 0px',
        once: true,
      }}
    >
      <div
        className={`${segmentHeight} w-[2.5px] bg-linear-to-b from-transparent to-customlightgray`}
      />
      <div className={`${segmentHeight} w-[2.5px] bg-customlightgray`} />
      <div
        className={`${segmentHeight} w-[2.5px] bg-linear-to-t from-transparent to-customlightgray`}
      />
    </m.div>
  );
};

export default Line;
