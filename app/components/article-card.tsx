import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface ArticleCardProps {
	title: string;
	description: string;
	image: string;
	link: string;
	date: string;
	readTime: string;
}

export const ArticleCard = ({
	title,
	description,
	image,
	link,
	date,
	readTime,
}: ArticleCardProps) => {
	return (
		<li className="col-span-1 min-w-0">
			<Card className="w-full min-w-0 flex-col overflow-hidden sm:flex-row sm:items-center">
				<img
					src={image}
					alt={title}
					className="h-40 w-full min-w-0 max-w-full rounded-t-xl object-cover sm:ml-4 sm:h-[125px] sm:w-56 sm:shrink-0 sm:rounded-none"
				/>
				<div className="min-w-0">
					<CardHeader>
						<CardTitle className="text-balance">{title}</CardTitle>
						<CardDescription>{description}</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground">
							<div className="flex items-center gap-2">
								<span>{date}</span>
								<span>•</span>
								<span>{readTime}</span>
							</div>
							<Link
								href={link}
								target="_blank"
								className="inline-flex items-center gap-2 text-primary"
							>
								Read Article
								<ExternalLink className="size-4" />
							</Link>
						</div>
					</CardContent>
				</div>
			</Card>
		</li>
	);
};
