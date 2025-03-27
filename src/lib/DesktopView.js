import { useState, useEffect } from 'react';

const DesktopView = () => {
  const [desktopView, setDesktopView] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setDesktopView(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return desktopView;
};

export default DesktopView;
