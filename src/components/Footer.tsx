import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='mx-auto flex justify-between w-full border-t border-zinc-300 dark:border-zinc-700 py-7 my-7 backdrop-blur-lg'>
			<div className='text-sm dark:text-zinc-400 text-zinc-500  font-medium'>
				Building in public at{' '}
				<Link href='/' target='_blank' className='font-bold underline'>
					@shubhintech
				</Link>{' '}
				<Link href='/' target='_blank' className='font-bold underline'>
					@dinezh256
				</Link>
			</div>

			<div className='grid grid-cols-2 gap-8 dark:text-zinc-400 text-zinc-500 text-sm '>
				<ul className='space-y-2'>
					<li className='hover:text-zinc-600 dark:hover:text-zinc-300'>
						<Link href='/components'>Components</Link>
					</li>
					<li className='hover:text-zinc-600 dark:hover:text-zinc-300'>
						<Link href='/components'>Contact</Link>
					</li>
				</ul>

				<ul className='space-y-2'>
					<li className='hover:text-zinc-600 dark:hover:text-zinc-300'>
						<Link href='/components'>Github</Link>
					</li>
					<li className='hover:text-zinc-600 dark:hover:text-zinc-300'>
						<Link href='/components'>Twitter</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
}
