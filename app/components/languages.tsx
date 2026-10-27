"use client";

import { motion } from "framer-motion";

export const Languages = () => {
	return (
		<section className="my-12">
			<motion.h4
				className="text-4xl font-bold mb-8"
				initial={{ y: -5, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				Languages
			</motion.h4>
			<p className="text-sm leading-relaxed animate-in fade-in-0 duration-200">
				English, CEFR C1. CCI English course completed in 2021; the diploma
				states C1 proficiency.
			</p>
		</section>
	);
};
