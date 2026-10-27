"use client";

import { motion } from "framer-motion";

const groups = [
	{
		label: "Paid production",
		text: "TypeScript, JavaScript, React, Tailwind CSS, Git, CI/CD, REST APIs, Delphi, PascalScript.",
	},
	{
		label: "Production personal project",
		text: "TanStack Start, SQLite, and full-stack TypeScript deployed to a VPS.",
	},
];

export const Skills = () => {
	return (
		<section className="my-12">
			<motion.h4
				className="text-4xl font-bold mb-8"
				initial={{ y: -5, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				Skills
			</motion.h4>
			<div className="space-y-3 animate-in fade-in-0 duration-200">
				{groups.map((group) => (
					<p key={group.label} className="text-sm leading-relaxed">
						<span className="font-semibold text-foreground">{group.label}.</span>{" "}
						{group.text}
					</p>
				))}
			</div>
		</section>
	);
};
