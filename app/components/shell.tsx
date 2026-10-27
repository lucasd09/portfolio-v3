import type { PropsWithChildren } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export const Shell = ({ children }: PropsWithChildren) => {
	return (
		<div className="mx-auto flex min-h-screen w-full min-w-0 max-w-3xl flex-col overflow-x-hidden px-8 py-12 space-y-8">
			<Header />

			<section className="flex min-w-0 grow flex-col">{children}</section>

			<Footer />
		</div>
	);
};
