import ContentLayout from '@/components/ContentLayout';
import { extractPaths } from '@/utils/paths';
import './global.css';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const paths = await extractPaths();
	return (
		<div className='flex min-h-full w-full bg-white antialiased dark:bg-zinc-900'>
			<div className='w-full'>
				<ContentLayout allSections={paths}>{children}</ContentLayout>
			</div>
		</div>
	);
}
