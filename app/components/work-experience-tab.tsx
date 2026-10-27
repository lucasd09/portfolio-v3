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
				imageSrc="crewfare-logo.jpg"
				imageAlt="Crewfare logo"
				start="October 2025"
				end="present"
				title="Crewfare"
				subtitle="Software Engineer"
			>
				<TimelineListItem>
					Build the frontend of Spotlight, Crewfare&apos;s newest product, as
					one of three frontend engineers on the team that built the v1 product
					from scratch with TanStack Start, React, TypeScript, and Tailwind
					CSS.
				</TimelineListItem>
				<TimelineListItem>
					Make major contributions to the project&apos;s standalone
					design-system repository.
				</TimelineListItem>
			</TimelineItem>

			<TimelineItem
				imageSrc="mindcloud-logo.jpg"
				imageAlt="MindCloud logo"
				start="August 2025"
				end="October 2025"
				title="MindCloud"
				subtitle="Integrator"
			>
				<TimelineListItem>
					Built customer workflows on the company&apos;s proprietary platform,
					connecting systems such as ERPs and e-commerce platforms.
				</TimelineListItem>
			</TimelineItem>

			<TimelineItem
				imageSrc="swizzle-ai.jpeg"
				imageAlt="Swizzle AI logo"
				start="May 2025"
				end="September 2025"
				title="Swizzle AI"
				subtitle="Frontend Engineer (part-time)"
			>
				<TimelineListItem>
					Developed the frontend of a B2C platform for building and deploying
					AI-powered tools, in collaboration with another developer.
				</TimelineListItem>
			</TimelineItem>

			<TimelineItem
				imageSrc="harmonit-logo.jpeg"
				imageAlt="Harmonit logo"
				start="November 2023"
				end="October 2024"
				title="Harmonit"
				subtitle="Software Engineer"
			>
				<TimelineListItem>
					Implemented and optimized ERP interfaces using React, TypeScript,
					Tailwind CSS, and related UI tools.
				</TimelineListItem>
			</TimelineItem>

			<TimelineItem
				imageSrc="frg-logo.jpeg"
				imageAlt="FRG Gestão Inteligente logo"
				start="August 2022"
				end="November 2023"
				title="FRG Gestão Inteligente"
				subtitle="Software Engineer"
			>
				<TimelineListItem>
					Served as the primary developer for the Mosaic legacy ERP: planned
					and maintained it, implemented features, and made technical direction
					decisions.
				</TimelineListItem>
				<TimelineListItem>Mentored one developer.</TimelineListItem>
			</TimelineItem>

			<TimelineItem
				imageSrc="frg-logo.jpeg"
				imageAlt="FRG Gestão Inteligente logo"
				start="November 2021"
				end="July 2022"
				title="FRG Gestão Inteligente"
				subtitle="Trainee Developer"
			/>

			<TimelineItem
				imageSrc="dsin-logo.jpg"
				imageAlt="DSIN Solutions logo"
				start="January 2020"
				end="November 2020"
				title="DSIN Solutions"
				subtitle="Trainee Developer (internship)"
			>
				<TimelineListItem>
					Worked on the SGIT legacy system with Delphi.
				</TimelineListItem>
				<TimelineListItem>
					Learned team development, Git, and CI/CD practices.
				</TimelineListItem>
			</TimelineItem>
		</Timeline>
	</motion.div>
);
