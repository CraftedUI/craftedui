import Link from 'next/link';
import cn from '@/utils/cn';

export default function Footer({ padding = false }: { padding?: boolean }) {
	return (
		<footer
			className={cn(
				'mx-auto flex flex-col sm:flex-row gap-12 sm:gap-0 justify-between w-full border-t border-zinc-300 dark:border-zinc-700 py-7 my-7 px-12 sm:px-0 backdrop-blur-lg',
				padding ? 'sm:px-8' : ''
			)}
		>
			<div className='text-sm dark:text-zinc-400 text-zinc-500'>
				Building in public by{' '}
				<Link href='https://x.com/ShubhInTech' target='_blank' className='font-semibold underline underline-offset-2'>
					@shubhintech
				</Link>
				{' and '}
				<Link href='https://x.com/Dinezh256' target='_blank' className='font-semibold underline underline-offset-2'>
					@dinezh256
				</Link>
			</div>

			<div className='grid grid-cols-2 gap-8 dark:text-zinc-400 text-zinc-500 text-sm'>
				<ul className='space-y-2'>
					<li className='hover:text-zinc-600 dark:hover:text-zinc-300'>
						<Link href='/explore'>Explore</Link>
					</li>
					<li className='hover:text-zinc-600 dark:hover:text-zinc-300'>
						<Link href='/contact'>Contact</Link>
					</li>
				</ul>

				<ul className='space-y-2'>
					<li className='hover:text-zinc-600 dark:hover:text-zinc-300'>
						<Link href='https://github.com/CraftedUI/craftedui' target='_blank'>
							Github
						</Link>
					</li>
					<li className='hover:text-zinc-600 dark:hover:text-zinc-300'>
						<Link href='https://x.com/_CraftedUI' target='_blank'>
							X
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
}
