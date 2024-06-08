import Hamburger from '@/icons/Hamburger';
import Logo from '@/icons/Logo';
import Link from 'next/link';
import Search from './Search';
import ThemeToggle from './ThemeToggle';
import Twitter from '@/icons/Twitter';
import Github from '@/icons/Github';

export default function Header() {
	return (
		<header className='flex justify-between w-full items-center px-8 py-2 fixed top-0 z-50 h-auto border-b border-b-zinc-300 dark:border-b-zinc-700 backdrop-blur-sm backdrop-saturate-150'>
			<div className='flex items-center gap-3'>
				<Link href='/'>
					<div className='flex items-center gap-1'>
						<Hamburger height={20} width={20} className='block md:hidden' />
						<Logo withoutBg className='fill-black dark:fill-white' width={36} height={36} />
						<div className='md:block hidden'>
							<span className='text-base font-medium text-zinc-800 dark:text-zinc-200'>Crafted</span>
							<span className='text-primary-600 text-xs font-semibold pl-0.5'>UI</span>
						</div>
					</div>
				</Link>

				<nav>
					<ul className='flex items-center gap-2'>
						<li className='px-1'>
							<Link
								href='/components'
								className='transition text-sm text-zinc-600 hocus:text-black dark:text-zinc-400 dark:hocus:text-white'
							>
								Components
							</Link>
						</li>
						<li className='px-1'>
							<Link
								href='/contact'
								className='transition text-sm text-zinc-600 hocus:text-black dark:text-zinc-400 dark:hocus:text-white'
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>

			<div className='gap-2 items-center hidden sm:flex'>
				<Search />
				<div className='flex items-center gap-3'>
					<ThemeToggle />
					<Link
						href='https://x.com/_CraftedUI'
						target='_blank'
						className='p-1 rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5'
					>
						<Twitter width={18} height={18} className='fill-zinc-500 dark:fill-zinc-200' />
					</Link>
					<Link
						href='https://github.com/CraftedUI/craftedui'
						target='_blank'
						className='p-1 rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5'
					>
						<Github width={18} height={18} className='fill-zinc-500 dark:fill-zinc-200' />
					</Link>
				</div>
			</div>
		</header>
	);
}
