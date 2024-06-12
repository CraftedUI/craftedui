'use client';

// import { Footer } from '@/components/Footer';
// import { Header } from '@/components/Header';
// import { Navigation } from '@/components/Navigation';
// import { SectionProvider, type Section } from '@/components/SectionProvider';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function ContentLayout({
	children,
	allSections
}: {
	children: React.ReactNode;
	allSections?: Record<string, Array<any>>;
}) {
	let pathname = usePathname();

	return (
		// <SectionProvider sections={allSections[pathname] ?? []}>
		<div className='h-full lg:ml-72 xl:ml-80'>
			<motion.header layoutScroll className='contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex'>
				<div className='contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-4 xl:w-80 lg:dark:border-white/10'>
					{/* <Navigation className='hidden lg:mt-[4rem] lg:block' /> */}
				</div>
			</motion.header>
			<div className='relative flex max-h-full min-h-screen flex-col px-4 pt-14 sm:px-6 lg:px-8'>
				<main className='flex-auto'>{children}</main>
				<Footer />
			</div>
		</div>
		// </SectionProvider>
	);
}
