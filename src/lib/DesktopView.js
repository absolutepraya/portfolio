import { useState, useEffect } from 'react';

const DesktopView = () => {
	const [desktopView, setDesktopView] = useState(window.innerWidth >= 768);

	useEffect(() => {
		const handleResize = () => {
			setDesktopView(window.innerWidth >= 768);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return desktopView;
};

export default DesktopView;
