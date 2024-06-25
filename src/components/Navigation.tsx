'use client';
import cn from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation({
	allSections,
	className
}: {
	allSections?: Record<string, string[]>;
	className?: string;
}) {
	let pathname = usePathname();

	function getActiveSection() {
		const parts = pathname.split('/').filter(Boolean);

		const [category, subcategory] = parts;

		if (allSections && allSections[category]) {
			if (subcategory && allSections[category].includes(subcategory)) {
				return { category, subcategory };
			}
			return { category };
		}
		return {};
	}

	const { category: activeCategory, subcategory: activeSubCategory } = getActiveSection();

	return (
		<nav className={cn(className, 'flex flex-col gap-6')}>
			{Object.entries(allSections || {})?.map(([category, subCategories]) => (
				<ul className='pl-2' key={category}>
					<li>
						<Link href={`/${category}`} className='font-semibold text-sm text-zinc-800 dark:text-zinc-300 capitalize'>
							{category}
						</Link>
						{subCategories?.map((_sub) => (
							<ul className='pl-3 pt-1 space-y-1' key={_sub}>
								<li className=''>
									<Link
										href={`/${category}/${_sub}`}
										className={cn(
											'dark:text-zinc-400 p-1 w-full block text-sm hover:text-primary-700 capitalize dark:hover:text-primary-500 transform hover:translate-x-2 transition-all text-zinc-500',
											activeSubCategory === _sub ? 'text-primary-700 dark:text-primary-500' : ''
										)}
									>
										{_sub}
									</Link>
								</li>
							</ul>
						))}
					</li>
				</ul>
			))}
		</nav>
	);
}
