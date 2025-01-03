import { SocialLinks } from "./social-links";

export const Footer = () => {
	return (
		<footer className="flex justify-between items-center border-t pt-4 px-2">
			<p className="text-sm">© 2024 Lucas Dalan</p>

			<SocialLinks />
		</footer>
	);
};
