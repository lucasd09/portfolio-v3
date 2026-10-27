"use client";

import { motion } from "framer-motion";
import { ArticleCard } from "./article-card";

export const Articles = () => {
	return (
		<section className="my-12">
			<motion.h4
				className="text-4xl font-bold mb-8"
				initial={{ y: -5, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				Articles
			</motion.h4>

			<ul className="grid grid-cols-1 gap-4 animate-in fade-in-0 duration-200">
				<ArticleCard
					title="Developing generic modules for Nest.js using Drizzle-ORM"
					description="Nest.js provides a powerful framework for building scalable and maintainable backend applications. However, when working on..."
					image="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*VyWFk3hc9NlrvmPP7SC6XA.png"
					link="https://medium.com/@lucasdalan09/developing-generic-modules-for-nest-js-using-drizzle-orm-2344616a4fe9"
					date="2025-03-03"
					readTime="4 min read"
				/>
			</ul>
		</section>
	);
};
