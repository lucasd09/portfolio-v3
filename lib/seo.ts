import type { Metadata } from "next";

const siteUrl = "https://lucas-dalan-portfolio.vercel.app/";

const name = "Lucas Dalan";

const SEOConfig = {
	siteName: `${name} - Portfolio`,
	description:
		"Professional portfolio showcasing my work in web development, including projects in React, Next.js, and more.",
	siteUrl,
	twitterHandle: "@lucasdalan",
	imageUrl: `${siteUrl}portfolio-display.png`,
	ogType: "website",
};

export const metadataConfig: Metadata = {
	title: {
		default: SEOConfig.siteName,
		template: `%s | ${SEOConfig.siteName}`,
	},
	description: SEOConfig.description,
	applicationName: SEOConfig.siteName,
	authors: [{ name }],
	creator: name,
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
	keywords: [
		"web developer",
		"software engineer",
		"full-stack developer",
		"React developer",
		"Next.js",
		name,
		"portfolio",
	],
	icons: {
		icon: [
			{ url: "/favicon.ico" },
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
		],
		apple: [
			{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
		],
		other: [
			{
				rel: "android-chrome-192x192",
				url: "/android-chrome-192x192.png",
			},
			{
				rel: "android-chrome-512x512",
				url: "/android-chrome-512x512.png",
			},
		],
	},
	manifest: "/site.webmanifest",
	openGraph: {
		type: "website",
		siteName: SEOConfig.siteName,
		title: SEOConfig.siteName,
		description: SEOConfig.description,
		url: SEOConfig.siteUrl,
		images: [
			{
				url: SEOConfig.imageUrl,
				width: 1200,
				height: 630,
				alt: SEOConfig.siteName,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: SEOConfig.twitterHandle,
		creator: SEOConfig.twitterHandle,
		title: SEOConfig.siteName,
		description: SEOConfig.description,
		images: [SEOConfig.imageUrl],
	},
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 1,
	},
};
