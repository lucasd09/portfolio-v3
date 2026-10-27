"use client";

import { ThemeSelector } from "@/components/theme-selector";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileDownIcon, MapPinIcon } from "lucide-react";
import { SocialLinks } from "./social-links";

export const Header = () => {
	return (
		<motion.header
			className="min-w-0 text-muted-foreground"
			initial={{ y: -5, opacity: 0.5 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ type: "spring", stiffness: 100, damping: 15 }}
		>
			<section className="mb-2 justify-between flex items-center">
				<h2 className="text-[44px] text-foreground font-bold ">Lucas Dalan</h2>
				<ThemeSelector className="hidden md:flex" />
			</section>

			<section className="flex items-center justify-between gap-3 mb-1">
				<h3 className="min-w-0 text-balance text-2xl text-muted-foreground">
					AI-enabled Frontend Engineer
				</h3>
				<ThemeSelector className="flex md:hidden" />
			</section>

			<h3 className="flex gap-1 items-center font-semibold">
				<MapPinIcon className="size-4" /> São Paulo, Brazil
			</h3>

			<p className="mt-4 text-sm leading-relaxed text-foreground/80">
				AI-enabled Frontend Engineer specializing in TypeScript and React, with
				experience delivering greenfield products, design systems, AI-powered
				interfaces, ERP systems, integrations, and production full-stack tools.
				Uses Claude in professional work and Cursor independently. Designs
				custom agent skills that batch backlog tickets, test feasibility
				through structured questioning, produce specifications, and implement
				approved work.
			</p>

			<section className="flex gap-4 mt-4 text-foreground/80">
				<Button type="button" variant="outline" className="" asChild={true}>
					<a href="/lucas-dalan-resume.pdf" download={true}>
						Resume <FileDownIcon className="size-4" />
					</a>
				</Button>

				<SocialLinks />
			</section>
		</motion.header>
	);
};
