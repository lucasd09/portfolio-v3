"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { EducationTab } from "./education-tab";
import { WorkExperienceTab } from "./work-experience-tab";

export const WorkEducationTab = () => {
	const [activeTab, setActiveTab] = useState("work");

	return (
		<section className="mt-12">
			<Tabs
				defaultValue="work"
				className="w-full"
				onValueChange={(value) => setActiveTab(value)}
			>
				<TabsList>
					<TabsTrigger value="work">Work Experience</TabsTrigger>
					<TabsTrigger value="education">Education</TabsTrigger>
				</TabsList>

				<AnimatePresence mode="wait">
					<motion.div
						key={activeTab}
						initial={{ x: 10, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.2 }}
					>
						<TabsContent value="work">
							<WorkExperienceTab />
						</TabsContent>
						<TabsContent value="education">
							<EducationTab />
						</TabsContent>
					</motion.div>
				</AnimatePresence>
			</Tabs>
		</section>
	);
};
