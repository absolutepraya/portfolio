import { useState, useEffect } from 'react';

const TvView = () => {
  const [tvView, setTvView] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    const handleResize = () => {
      setTvView(window.innerWidth >= 1280);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return tvView;
};

export default TvView;
