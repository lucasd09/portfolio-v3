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

export const WorkExperienceTab = () => (
	<motion.div variants={containerVariants} initial="hidden" animate="visible">
		<Timeline>
			<TimelineItem
				imageSrc="harmonit-logo.jpeg"
				imageAlt="Company logo"
				start="Nov 2023"
				end="Oct 2024"
				title="Harmonit"
				subtitle="Software Engineer"
			>
				<TimelineListItem>
					Implemented new features and optimizations to the ERP system,
					resulting in a better UI for the customers.
				</TimelineListItem>
				<TimelineListItem>
					Enhanced user interface performance by 40% through the implementation
					of React, TypeScript, TailwindCSS, and various UI tools, resulting in
					improved user satisfaction and engagement.
				</TimelineListItem>
				<TimelineListItem>
					Applied agile methodologies to plan and manage sprints, ensuring all
					tasks are completed efficiently and aligned with project objectives.
				</TimelineListItem>
			</TimelineItem>

			<TimelineItem
				imageSrc="frg-logo.jpeg"
				imageAlt="Company logo"
				start="Aug 2022"
				end="Nov 2023"
				title="FRG Informática"
				subtitle="Software Engineer"
			>
				<TimelineListItem>
					Developed a desktop ERP application for over 10,000 users using
					Delphi/Pascalscipt, organizing the operation with Agile methodology.
				</TimelineListItem>
				<TimelineListItem>
					Refactored every module, aiming for a better code structure, therefore
					improving resource usage in most of the pages, resulting in enhanced
					application performance and user satisfaction.
				</TimelineListItem>
				<TimelineListItem>
					Mentored and guided a team of 2 developers, resulting in a improvement
					in code quality, leading to a more efficient and seamless project
					delivery process.
				</TimelineListItem>
			</TimelineItem>

			<TimelineItem
				start="Nov 2021"
				end="Aug 2022"
				subtitle="Trainee Developer"
			>
				<TimelineListItem>
					Worked on legacy systems, using Delphi as the main Framework.
				</TimelineListItem>
				<TimelineListItem>
					Managed tasks in kanban methods using Redmine and Trello, utilizing
					Git for version control to maintain the legacy product.
				</TimelineListItem>
				<TimelineListItem>
					Collaborated with team members to troubleshoot and debug code,
					ensuring seamless functionality of software applications.
				</TimelineListItem>
			</TimelineItem>
			<TimelineItem
				imageSrc="dsin-logo.jpg"
				imageAlt="Company logo"
				start="Jan 2020"
				end="Nov 2020"
				title="DSIN - Solutions"
				subtitle="Trainee Developer"
			>
				<TimelineListItem>
					Mastered Git, CI/CD and the fundamentals of team development.
				</TimelineListItem>
				<TimelineListItem>
					Worked on a legacy system called SGIT, using Delphi as the main
					Framework.
				</TimelineListItem>
				<TimelineListItem>
					Strengthened interpersonal skills through active participation in team
					meetings, enabling smoother project workflows within a 2-month period.
				</TimelineListItem>
			</TimelineItem>
		</Timeline>
	</motion.div>
);
