import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import { WorkEducationTab } from "./components/work-education-tab";

export default function Home() {
	return (
		<>
			<WorkEducationTab />
			<Skills />
			<Projects />
		</>
	);
}
