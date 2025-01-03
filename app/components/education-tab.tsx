import {
	Timeline,
	TimelineItem,
	TimelineListItem,
} from "@/components/ui/timeline";
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
				imageSrc="univem-logo.jpg"
				imageAlt="Univem logo"
				start="Dec 2023"
				end="Jan 2020"
				title="UNIVEM - Marília"
				subtitle="Bachelor's Degree in Computer Science"
			>
				<TimelineListItem>
					Degree in Computer Science, where I deepened my
					knowledge in data structures, AI, fundamentals of algorithms, Agile Development and Machine Learning.
				</TimelineListItem>
			</TimelineItem>
		
		</Timeline>
	</motion.div>
);
