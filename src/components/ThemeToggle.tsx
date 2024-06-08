'use client';
import Moon from '@/icons/Moon';
import Sun from '@/icons/Sun';
import Theme from '@/icons/Sun';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
	let { resolvedTheme, setTheme } = useTheme();
	let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
	return (
		<button
			className='p-1 rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5'
			onClick={() => setTheme(otherTheme)}
		>
			<Sun width={18} height={18} className='block dark:hidden fill-transparent stroke-zinc-500' />
			<Moon width={18} height={18} className='hidden dark:block fill-zinc-100 stroke-zinc-100' />
		</button>
	);
}
