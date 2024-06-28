import Link from 'next/link';
import cn from '@/utils/cn';
import { PropsWithChildren } from 'react';
import LogoIcon from '@/icons/Logo';

export default function Footer({ padding = false }: { padding?: boolean }) {
	const ListItem = (props: PropsWithChildren) => (
		<li className='hover:text-zinc-600 dark:hover:text-zinc-300 text-xs'>{props.children}</li>
	);
	return (
		<footer
			className={cn(
				'mx-auto flex flex-col sm:flex-row gap-12 sm:gap-0 justify-between w-full border-t border-zinc-300 dark:border-zinc-700 py-7 my-7 px-12 sm:px-0 backdrop-blur-lg',
				padding ? 'sm:px-8' : ''
			)}
		>
			<div className='flex flex-col gap-2'>
				<Link href='/'>
					<div className='flex items-center gap-1'>
						<LogoIcon className='fill-white dark:fill-black bg-black dark:bg-white rounded-md' width={28} height={28} />
						<div className=''>
							<span className='text-lg font-semibold text-zinc-800 dark:text-zinc-200'>Crafted</span>
							<span className='text-primary-600 dark:text-primary-500 text-sm font-semibold pl-0.5'>UI</span>
						</div>
					</div>
				</Link>
				<div className='text-xs dark:text-zinc-400 text-zinc-500 mt-2'>
					Building in public at&nbsp;
					<Link href='https://x.com/Crafted_UI' target='_blank' className='font-semibold'>
						Crafted UI
					</Link>
				</div>

				<div className='text-xs dark:text-zinc-400 text-zinc-500'>
					By&nbsp;
					<Link href='https://x.com/ShubhInTech' target='_blank' className='font-semibold'>
						@shubhintech
					</Link>
					{' and '}
					<Link href='https://x.com/Dinezh256' target='_blank' className='font-semibold'>
						@dinezh256
					</Link>
				</div>
			</div>

			<div className='grid grid-cols-2 gap-8 dark:text-zinc-400 text-zinc-500 text-sm'>
				<ul className='space-y-2'>
					<ListItem>
						<Link href='/'>Home</Link>
					</ListItem>
					<ListItem>
						<Link href='/explore'>Explore</Link>
					</ListItem>
					<ListItem>
						<Link href='/contact'>Contact</Link>
					</ListItem>
				</ul>

				<ul className='space-y-2'>
					<ListItem>
						<Link href='https://github.com/CraftedUI/craftedui' target='_blank'>
							Github
						</Link>
					</ListItem>
					<ListItem>
						<Link href='https://x.com/_CraftedUI' target='_blank'>
							X
						</Link>
					</ListItem>
				</ul>
			</div>
		</footer>
	);
}
