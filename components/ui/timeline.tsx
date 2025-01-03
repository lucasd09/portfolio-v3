import type { PropsWithChildren } from "react";

export const Timeline = ({ children }: PropsWithChildren) => {
	return (
		<div className="rounded-xl border bg-card text-card-foreground shadow">
			<div className="p-0">
				<ul className="ml-10 border-l">{children}</ul>
			</div>
		</div>
	);
};

type TimelineItemProps = {
	imageSrc?: string;
	imageAlt?: string;

	start: string;
	end: string;

	title?: string;
	subtitle: string;
} & PropsWithChildren;

export const TimelineItem = ({
	imageAlt,
	imageSrc,
	start,
	end,
	title,
	subtitle,
	children,
}: TimelineItemProps) => {
	return (
		<li className="relative ml-10 py-4">
			{!!imageSrc && (
				<div className="absolute -left-16 top-4 flex items-center justify-center rounded-full">
					<span className="relative flex shrink-0 overflow-hidden rounded-full size-12">
						<img
							className="aspect-square h-full w-full bg-background object-cover object-center"
							alt={imageAlt}
							src={imageSrc}
						/>
					</span>
				</div>
			)}

			<div className="flex flex-1 flex-col justify-start gap-1">
				<time className="text-xs text-muted-foreground">
					<span>{start}</span>
					<span> - </span>
					<span>{end}</span>
				</time>

				{!!title && <h2 className="font-semibold leading-none">{title}</h2>}
				<p className="text-sm text-muted-foreground">{subtitle}</p>
				<ul className="ml-4 list-outside list-disc">{children}</ul>
			</div>
		</li>
	);
};

export const TimelineListItem = ({ children }: PropsWithChildren) => {
	return <li className="prose pr-8 text-sm dark:prose-invert">{children}</li>;
};
