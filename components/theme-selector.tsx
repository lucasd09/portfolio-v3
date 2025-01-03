"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export type ThemeSelectorProps = {
	className?: string;
};

export const ThemeSelector = ({ className }: ThemeSelectorProps) => {
	const { theme, setTheme } = useTheme();

	const handleClick = () => {
		const newTheme = theme === "light" ? "dark" : "light";

		setTheme(newTheme);
	};

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={handleClick}
			className={className}
		>
			{theme === "light" ? <SunIcon /> : <MoonIcon />}
		</Button>
	);
};
