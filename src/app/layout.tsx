import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import Navbar from "@/components/Navbar";
import "./globals.css";


const roboto = Roboto({
	weight: ['400', '500', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: "Amazon Scrapers",
	description: "A Open Source Amazon Product Scraper",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${roboto.className}`}
			>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
