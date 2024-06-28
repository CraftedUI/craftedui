'use client';

import { motion } from 'framer-motion';
import Footer from './Footer';
import Navigation from './Navigation';

export default function ContentLayout({
	children,
	allSections
}: {
	children: React.ReactNode;
	allSections?: Record<string, string[]>;
}) {
	return (
		<div className='h-full lg:ml-72 xl:ml-80'>
			<motion.header layoutScroll className='contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex'>
				<div className='contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-4 xl:w-80 lg:dark:border-white/10'>
					<Navigation allSections={allSections} className='hidden lg:mt-[4rem]' />
				</div>
			</motion.header>
			<div className='relative flex max-h-full min-h-screen flex-col md:p-14 p-6'>
				<main className='flex-auto'>{children}</main>
				{/* <div className='sm:px-6 lg:px-8 px-12'>
					<PageNavigation allSections={allSections} />
				</div> */}
				<Footer padding />
			</div>
		</div>
	);
}
