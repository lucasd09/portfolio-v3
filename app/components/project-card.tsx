import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { GithubIcon, GlobeIcon } from "lucide-react";

export type ProjectCardProps = {
	image: string;
	title: string;
	description: string;
	skills?: string[];
	source?: string;
	website?: string;
};

export const ProjectCard = ({
	image,
	title,
	description,
	skills,
	source,
	website,
}: ProjectCardProps) => {
	return (
		<li className="col-span-2 md:col-span-1 h-[525px]">
			<Card className="size-full">
				<CardHeader className="p-0">
					<img
						src={image}
						alt="Project display"
						className="w-full rounded-t-xl object-cover h-[220px]"
					/>

					<div className="px-6 pt-2 pb-6">
						<CardTitle>{title}</CardTitle>
						<CardDescription>{description}</CardDescription>
					</div>
				</CardHeader>

				<CardContent className="flex w-full items-end">
					<section className="flex gap-2 flex-wrap">
						{skills?.length &&
							skills.map((skill) => (
								<Badge
									key={skill}
									variant="secondary"
									className="text-[10px] h-fit"
								>
									{skill}
								</Badge>
							))}
					</section>
				</CardContent>

				<CardFooter className="space-x-2">
					{website && (
						<Button size="sm" asChild>
							<a
								href={website}
								target="_blank"
								rel="noreferrer"
								className="flex gap-2"
							>
								<GlobeIcon /> Website
							</a>
						</Button>
					)}

					{source && (
						<Button size="sm" asChild>
							<a
								href={source}
								target="_blank"
								rel="noreferrer"
								className="flex gap-2"
							>
								<GithubIcon /> Source
							</a>
						</Button>
					)}
				</CardFooter>
			</Card>
		</li>
	);
};
