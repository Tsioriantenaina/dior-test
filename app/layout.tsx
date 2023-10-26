import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import ToastProvider from "@/providers/ToastProvider";
import ModalProvider from "@/providers/ModalProvider";

const inter = Inter({
	style: ["normal"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Dior",
	description: "Dior test app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ToastProvider />
				<ModalProvider />
				{children}
			</body>
		</html>
	);
}
