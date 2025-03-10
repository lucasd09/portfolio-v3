"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skills: string[] = [
	"TypeScript",
	"JavaScript",
	"React",
	"NextJS",
	"TailwindCSS",
	"NestJS",
	"NodeJS",
	"Postgres",
	"MySQL",
	"CI/CD",
	"Pipelines",
	"Docker",
	"Git",
	"Cloud Solutions (AWS, Oracle, Azure)",
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
			<div className="flex gap-2 flex-wrap animate-in fade-in-0 duration-200">
				{skills.map((skill) => (
					<Badge key={skill} variant="secondary" className="px-3 py-1">
						{skill}
					</Badge>
				))}
			</div>
		</section>
	);
};
