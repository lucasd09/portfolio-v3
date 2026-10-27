import type { Metadata, Viewport } from "next";

const siteUrl = "https://lucas-dalan-portfolio.vercel.app/";

const name = "Lucas Dalan";

const SEOConfig = {
	siteName: `${name} - Portfolio`,
	description:
		"AI-enabled Frontend Engineer specializing in TypeScript and React, with experience delivering greenfield products, design systems, AI-powered interfaces, ERP systems, integrations, and production full-stack tools.",
	siteUrl,
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
		"AI-enabled Frontend Engineer",
		"TypeScript",
		"React",
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
		title: SEOConfig.siteName,
		description: SEOConfig.description,
		images: [SEOConfig.imageUrl],
	},
};

export const viewportConfig: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
};
