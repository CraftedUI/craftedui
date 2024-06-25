'use client';
import { componentDetails } from '@/content/components/button/3dbutton';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
	path: string;
	imagePath?: string;
};

export default async function ComponentPreviewCard({ path, imagePath }: Props) {
	const Component = dynamic(() => import(`../content/${path}.tsx`));
	const componentDetails = await import(`../content/${path}.tsx`).then((mod) => mod.componentDetails);

	const { name, desc } = componentDetails;
	return (
		<Link
			className='group border border-zinc-400 dark:border-zinc-600 rounded-xl overflow-hidden h-40 w-40 flex flex-col'
			href={`/${path}`}
		>
			<div className='group-hover:bg-zinc-600 flex-1'>
				{imagePath ? <Image src={imagePath} alt='componentImage' /> : <Component />}
			</div>
			<div className='capitalize py-2 px-3 bg-zinc-300 dark:bg-zinc-900'>{name}</div>
		</Link>
	);
}
