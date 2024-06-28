import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/providers';
import Header from '@/components/Header';

import './globals.css';
import { extractPaths } from '@/utils/paths';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Crafted UI',
	description: 'Handpicked set of UI components, boosts your app.'
};

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	const paths = await extractPaths({
		path: 'src/app/\\(content\\)/**/*/page.tsx',
		prefix: 'src/app/(content)/'
	});
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>
					<Header paths={paths} />
					{children}
				</Providers>
			</body>
		</html>
	);
}
