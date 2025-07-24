import { useEffect, useState } from "react";

export function useMobile(breakpoint = 768) {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

		const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
			setIsMobile(event.matches);
		};

		handleChange(mediaQuery);

		mediaQuery.addEventListener("change", handleChange);

		return () => {
			mediaQuery.removeEventListener("change", handleChange);
		};
	}, [breakpoint]);

	return isMobile;
}
