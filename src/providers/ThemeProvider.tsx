'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	return (
		<NextThemeProvider attribute='class' disableTransitionOnChange defaultTheme='light'>
			{children}
		</NextThemeProvider>
	);
}
