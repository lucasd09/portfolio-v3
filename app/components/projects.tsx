"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./project-card";

export const Projects = () => {
	return (
		<section className="my-12">
			<motion.h4
				className="text-4xl font-bold mb-8"
				initial={{ y: -5, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				Projects
			</motion.h4>

			<ul className="grid grid-cols-2 gap-4 animate-in fade-in-0 duration-200">
				<ProjectCard
					title="Pejota"
					image="pejota-dashboard.png"
					meta="Solo production project · September 2026–present"
					details={[
						"Built and operate a private application that schedules invoice delivery, with dashboards, payment tracking, income and expense reporting, and a Brazilian service-invoice workflow.",
						"Deployed the TanStack Start application and its local SQLite database together on a Hostinger VPS. The co-located application and database run at low latency.",
					]}
					skills={["TanStack Start", "SQLite", "TypeScript"]}
				/>
			</ul>
		</section>
	);
};
