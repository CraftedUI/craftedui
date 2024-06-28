'use client';
import { ReactNode, useState } from 'react';
import dynamic from 'next/dynamic';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import cn from '@/utils/cn';
import { useTheme } from 'next-themes';
import iconMap from '@/utils/iconMap';

type CodeAndPreviewProps = {
	path: string;
	componentDetails: {
		name: string;
		desc?: string;
		libraries?: string[];
	};
};

export default function PreviewContent({ children, className }: { children?: ReactNode; className?: string }) {
	return <section className={cn('flex flex-col', className)}>{children}</section>;
}

PreviewContent.CodeAndPreview = function ({ path, componentDetails }: CodeAndPreviewProps) {
	const { resolvedTheme } = useTheme();
	const isDark = resolvedTheme === 'dark';

	const [isPreview, setIsPreview] = useState(true);

	const Component = dynamic(() => import(`../content/${path}.tsx`));
	const codestring = require(`!!raw-loader!../content/${path}.tsx`).default;

	const { name, desc, libraries } = componentDetails;

	const btnClass = (selected: boolean) =>
		cn(
			'px-3 py-[2px] transition-all text-sm font-semibold',
			selected ? 'text-neutral-1000' : 'text-neutral-600',
			selected ? 'bg-primary-400' : 'bg-zinc-400'
		);

	return (
		<section className='flex flex-col gap-6 mt-12'>
			<div className='flex gap-4'>
				<h1 className='font-bold text-xl'>{name}</h1>
				<ol className='flex gap-2 items-center'>
					{libraries?.map((lib: string) => {
						const LibIcon = iconMap[lib];
						return (
							<li key={lib}>
								<LibIcon />
							</li>
						);
					})}
				</ol>
			</div>
			<div className='flex flex-col sm:flex-row justify-between sm:items-end gap-4'>
				<span className='sm:w-9/12 font-light'>{desc}</span>
				<div className='flex rounded-md overflow-hidden w-fit'>
					<button className={btnClass(isPreview)} onClick={() => setIsPreview(true)}>
						Preview
					</button>
					<button className={btnClass(!isPreview)} onClick={() => setIsPreview(false)}>
						Code
					</button>
				</div>
			</div>
			<div className='w-full border-[1px] border-gray-200 dark:border-gray-700 rounded-md min-h-60 flex justify-center items-center overflow-hidden'>
				{isPreview ? (
					<div className='h-fit'>
						<Component />
					</div>
				) : (
					<SyntaxHighlighter language='javascript' style={isDark ? atelierCaveDark : docco}>
						{codestring}
					</SyntaxHighlighter>
				)}
			</div>
		</section>
	);
};
