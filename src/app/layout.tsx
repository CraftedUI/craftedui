import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/providers';
import Header from '@/components/Header';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Crafted UI',
	description: 'Handpicked set of UI components, boosts your app.'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	);
}
