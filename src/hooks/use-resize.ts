import { useEffect, useState } from 'react';

const SCREEN_TABLET = 765;

export const useResize = () => {
	const isBrowser = typeof window != 'undefined';
	const [width, setWidth] = useState(isBrowser ? window.innerWidth : 1440);

	useEffect(() => {
		const handleResize = (event: any) => {
			setWidth(event.target.innerWidth);
		};
		isBrowser ? window.addEventListener('resize', handleResize) : null;
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return {
		width,
		tablet: width <= SCREEN_TABLET
	};
};
