'use client';
import Hamburger from '@/icons/Hamburger';
import Logo from '@/icons/Logo';
import Link from 'next/link';
import Search from './Search';
import ThemeToggle from './ThemeToggle';
import Twitter from '@/icons/Twitter';
import Github from '@/icons/Github';
import cn from '@/utils/cn';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
	const [openHam, setOpenHam] = useState<boolean>(false);
	const [activeNavItem, setActiveNavItem] = useState('home');

	const pathname = usePathname();

	const nav = (
		<nav className='md:flex-1'>
			<ul className='flex flex-col md:flex-row md:items-center gap-2 sm:mt-0 mt-24 pl-4 sm:pl-0'>
				<li className='px-1'>
					<Link
						href='/components'
						onClick={() => setActiveNavItem('explore')}
						className={cn(
							'transition sm:text-sm text-lg text-zinc-600 hocus:text-black dark:text-zinc-400 dark:hocus:text-white',
							activeNavItem === 'component' || (pathname !== '/' && pathname !== '/contact')
								? 'text-black dark:text-white'
								: ''
						)}
					>
						Explore
					</Link>
				</li>
				<li className='px-1'>
					<Link
						href='/contact'
						onClick={() => setActiveNavItem('contact')}
						className={cn(
							'transition sm:text-sm text-lg text-zinc-600 hocus:text-black dark:text-zinc-400 dark:hocus:text-white',
							activeNavItem === 'contact' || pathname.includes('/contact') ? 'text-black dark:text-white' : ''
						)}
					>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);

	const socials = (
		<div className='flex items-center gap-3 pl-4 sm:pl-0'>
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
	);

	return (
		<>
			<header
				className={cn(
					'w-full px-8 py-2 fixed top-0 z-50 h-auto',
					'backdrop-blur-sm backdrop-saturate-150',
					'flex items-center justify-between'
					// 'border border-b-zinc-300 dark:border-b-zinc-700'
				)}
			>
				<div className='flex items-center gap-6'>
					<Link href='/'>
						<div className='flex items-center gap-1'>
							<Logo withoutBg className='fill-black dark:fill-white' width={36} height={36} />
							<div className=''>
								<span className='text-base font-medium text-zinc-800 dark:text-zinc-200'>Crafted</span>
								<span className='text-primary-600 text-xs font-semibold pl-0.5'>UI</span>
							</div>
						</div>
					</Link>

					<div className='hidden md:block'>{nav}</div>
				</div>

				<div className='flex gap-8 items-center'>
					<Search />

					<div className='md:block hidden'>{socials}</div>

					<Hamburger
						onClick={() => setOpenHam((prev) => !prev)}
						height={20}
						width={20}
						className='block md:hidden cursor-pointer stroke-zinc-500 dark:stroke-zinc-200'
					/>
				</div>
			</header>

			<div
				className={cn(
					'md:hidden flex flex-col gap-4 w-full transition-transform px-3 fixed z-50 backdrop-blur-lg backdrop-saturate-150',
					openHam ? 'h-screen top-0' : 'h-0 overflow-hidden'
				)}
				onClick={() => setOpenHam(false)}
			>
				{nav}
				{socials}
			</div>
		</>
	);
}
