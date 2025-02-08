import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({subsets: ['latin']});

export const metadata = {
	title: "AI Finance",
	description: "One Stop Finance App",
};

export default function RootLayout({ children }) {
  return (
	<ClerkProvider>
		<html lang="en">
			<body className={`${inter.className}`}>
				<Header/>
				<main className="min-h-screen">{children}</main>

				<footer className="bg-blue-400 py-12">
					<div className="container mx-auto text-center text-gray-600">
					<p>Made with 💗 by RoadsideCoder</p>
					</div>
				</footer>
			</body>
		</html>
	</ClerkProvider>
  );
}
