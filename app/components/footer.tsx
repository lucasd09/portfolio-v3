import { SocialLinks } from "./social-links";

export const Footer = () => {
	return (
		<footer className="flex min-w-0 items-center justify-between border-t px-2 pt-4">
			<p className="text-sm">© 2026 Lucas Dalan</p>

			<SocialLinks />
		</footer>
	);
};
