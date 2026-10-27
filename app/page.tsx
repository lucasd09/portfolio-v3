import { Articles } from "./components/articles";
import { Languages } from "./components/languages";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import { WorkEducationTab } from "./components/work-education-tab";

export default function Home() {
	return (
		<>
			<WorkEducationTab />
			<Languages />
			<Skills />
			<Projects />
			<Articles />
		</>
	);
}
