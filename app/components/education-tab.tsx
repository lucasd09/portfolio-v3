import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { motion } from "framer-motion";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export const EducationTab = () => (
	<motion.div variants={containerVariants} initial="hidden" animate="visible">
		<Timeline>
			<TimelineItem
				start="January 2020"
				end="December 2023"
				title="UNIVEM"
				subtitle="Bachelor's Degree in Computer Science"
			/>
		</Timeline>
	</motion.div>
);
