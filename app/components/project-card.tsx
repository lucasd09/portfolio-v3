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
	image?: string;
	title: string;
	meta?: string;
	description?: string;
	details?: string[];
	skills?: string[];
	source?: string;
	website?: string;
};

export const ProjectCard = ({
	image,
	title,
	meta,
	description,
	details,
	skills,
	source,
	website,
}: ProjectCardProps) => {
	return (
		<li className="col-span-2">
			<Card>
				{image ? (
					<img
						src={image}
						alt=""
						className="h-auto max-h-[420px] w-full rounded-t-xl object-cover object-top"
					/>
				) : null}

				<CardHeader>
					<CardTitle>{title}</CardTitle>
					{meta ? (
						<p className="text-sm text-muted-foreground">{meta}</p>
					) : null}
					{description ? (
						<CardDescription>{description}</CardDescription>
					) : null}
				</CardHeader>

				{details?.length ? (
					<CardContent>
						<ul className="list-disc pl-5 space-y-2 text-sm">
							{details.map((detail) => (
								<li key={detail}>{detail}</li>
							))}
						</ul>
					</CardContent>
				) : null}

				{skills?.length ? (
					<CardContent className="flex w-full items-end">
						<section className="flex gap-2 flex-wrap">
							{skills.map((skill) => (
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
				) : null}

				{website || source ? (
					<CardFooter className="space-x-2">
						{website ? (
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
						) : null}

						{source ? (
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
						) : null}
					</CardFooter>
				) : null}
			</Card>
		</li>
	);
};
