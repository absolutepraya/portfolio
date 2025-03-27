import { useState, useEffect } from 'react';

const TabletView = () => {
  const [tabletView, setTabletView] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setTabletView(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return tabletView;
};

export default TabletView;
