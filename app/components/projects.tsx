"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ProjectCard } from "./project-card";

export const Projects = () => {
	const [isShowingAll, setIsShowingAll] = useState(false);
	const [fullHeight, setFullHeight] = useState(0);

	const ulRef = useRef<HTMLUListElement>(null);

	const toggleShowAll = () => {
		setIsShowingAll((prev) => !prev);
	};

	useEffect(() => {
		if (!ulRef.current) {
			return;
		}

		setFullHeight(ulRef.current.scrollHeight);
	}, []);

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

			<ul
				ref={ulRef}
				className="grid grid-cols-2 gap-4 overflow-hidden transition-[height] animate-in fade-in-0 duration-200"
				style={{
					height: isShowingAll ? fullHeight : 560,
				}}
			>
				<ProjectCard
					title="Money Map"
					description="Comprehensive finance tracker with transaction history, category management, account tracking, and a detailed dashboard for all essential insights."
					image="moneymap-display.png"
					source="https://github.com/GilbertoFreitasJunior997/money-map"
					website="https://money-map-gray.vercel.app/"
					skills={[
						"NextJS",
						"NodeJS",
						"PostgreSQL",
						"TailwindCSS",
						"DrizzleORM",
						"Supabase",
						"Typescript",
					]}
				/>

				<ProjectCard
					title="SaaS Template"
					description="A modern Next.js SaaS template featuring authentication, responsive design, ORM setup and customizable components to kickstart your next project."
					image="saas-template-display.png"
					source="https://github.com/GilbertoFreitasJunior997/nextjs-template"
					skills={[
						"NextJS",
						"NodeJS",
						"OAuth",
						"LuciaAuth",
						"TailwindCSS",
						"DrizzleORM",
						"Typescript",
					]}
				/>
				<ProjectCard
					title="Bun API"
					description="A API made from scratch with no other libs or frameworks besides built-in Bun Methods. It has every standard HTTP Methods and it was built for a cleaner and better Developer experience."
					image="bun-api-display.jpg"
					source="https://github.com/lucasd09/bun-api"
					skills={["Bun", "DrizzleORM", "Typescript"]}
				/>
			</ul>

			<div className="flex items-center justify-center mx-2 mt-4">
				<Button variant="ghost" className="group" onClick={toggleShowAll}>
					{isShowingAll ? (
						<>
							View Less
							<ChevronUpIcon className="size-4 transition-transform group-hover:-translate-y-0.5" />
						</>
					) : (
						<>
							View More
							<ChevronDownIcon className="size-4 transition-transform group-hover:translate-y-0.5" />
						</>
					)}
				</Button>
			</div>
		</section>
	);
};
