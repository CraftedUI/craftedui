import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
	path: string;
	imagePath?: string;
};

export default async function ComponentPreviewCard({ path, imagePath }: Props) {
	const Component = dynamic(() => import(`../content/${path}.tsx`));
	const componentDetails = await import(`../app/(content)/${path}/data.json`);
	const { name, desc } = componentDetails;
	return (
		<Link href={`/${path}`} className=''>
			<div className='p-5 h-72 w-52 transition-[background-color, shadow] duration-500 hover:shadow-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 shadow-sm rounded-md overflow-hidden'>
				<div className='h-3/4 rounded-md w-full flex items-center transition-none bg-zinc-50 dark:bg-transparent justify-center group-hover:scale-105 transition duration-300 relative overflow-hidden'>
					<div className='h-fit z-20'>{imagePath ? <Image src={imagePath} alt='componentImage' /> : <Component />}</div>
					<svg
						className='pointer-events-none top-0 left-0 absolute opacity-70 isolate z-10  mix-blend-soft-light'
						width='100%'
						height='100%'
					>
						<filter id='pedroduarteisalegend'>
							<feTurbulence type='fractalNoise' baseFrequency='0.80' numOctaves='4' stitchTiles='stitch'></feTurbulence>
						</filter>
						<rect width='100%' height='100%' filter='url(#pedroduarteisalegend)'></rect>
					</svg>
				</div>
				<div className='flex flex-col p-2'>
					<span className='font-medium text-sm mb-1 capitalize'>{name}</span>
					<span className='font-normal text-xs overflow-ellipsis overflow-hidden line-clamp-2'>{desc}</span>
				</div>
			</div>
		</Link>
	);
}
