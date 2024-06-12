// import glob from 'fast-glob';
import ContentLayout from '@/components/ContentLayout';
// import '@/styles/tailwind.css';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	// let pages = await glob('/(content)/**/*.mdx', { cwd: 'src/app' });
	// let allSectionsEntries = (await Promise.all(
	// 	pages.map(async (filename) => [
	// 		'/' + filename.replace(/(^|\/)page\.mdx$/, ''),
	// 		(await import(`./${filename}`)).sections
	// 	])
	// )) as Array<[string, Array<Section>]>;
	// let allSections = Object.fromEntries(allSectionsEntries);

	return (
		<div className='flex min-h-full w-full bg-white antialiased dark:bg-zinc-900'>
			<div className='w-full'>
				<ContentLayout>{children}</ContentLayout>
			</div>
		</div>
	);
}
