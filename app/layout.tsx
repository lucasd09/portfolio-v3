import "./globals.css";
import { metadataConfig, viewportConfig } from "@/lib/seo";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import type { PropsWithChildren } from "react";
import { Shell } from "./components/shell";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = metadataConfig;
export const viewport = viewportConfig;

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider attribute="class">
					<Shell>{children}</Shell>
				</ThemeProvider>
			</body>
		</html>
	);
}
