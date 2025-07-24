import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

export const ArticleCard = ({ title, description, image, link, date, readTime }: ArticleCardProps) => {
  return (
    <li className="col-span-1">
      <Card className="flex-col sm:flex-row items-center">
        <img src={image} alt={title} className="object-cover sm:h-[125px] sm:ml-4 rounded-t-xl sm:rounded-none" />
        <div>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex text-sm text-muted-foreground justify-between">
              <div className="flex items-center gap-2">
                <span>{date}</span>
                <span>•</span>
                <span>{readTime}</span>
              </div>
              <Link href={link} target="_blank" className="inline-flex items-center gap-2 text-primary">
                Read Article
                <ExternalLink className="size-4 ml-2 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </CardContent>
        </div>
      </Card>
    </li>
  );
}; 