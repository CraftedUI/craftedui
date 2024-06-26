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
						{subCategories?.length > 0 ? (
							<div className='font-semibold text-sm text-zinc-800 dark:text-zinc-300 capitalize'>{category}</div>
						) : (
							<Link
								href={`/${category}`}
								className={cn('p-1 w-full block rounded-md', activeCategory === category ? ' bg-zinc-100' : '')}
							>
								<span
									className={cn(
										activeCategory === category
											? 'text-primary-700 dark:text-primary-500 translate-x-2'
											: 'transform hover:translate-x-2 dark:text-zinc-400 text-zinc-500',
										'text-sm  hover:text-primary-700 capitalize dark:hover:text-primary-500 transition-all w-full block '
									)}
								>
									{category}
								</span>
							</Link>
						)}
						{subCategories?.map((_sub) => (
							<ul className='pt-1 space-y-1' key={_sub}>
								<li className=''>
									<Link
										href={`/${category}/${_sub}`}
										className={cn(
											'p-1 pl-3 w-full block rounded-md',
											activeSubCategory === _sub && activeCategory === category ? ' bg-zinc-100' : ''
										)}
									>
										<span
											className={cn(
												activeSubCategory === _sub && activeCategory === category
													? 'text-primary-700 dark:text-primary-500 translate-x-2'
													: 'transform hover:translate-x-2 dark:text-zinc-400 text-zinc-500',
												'text-sm  hover:text-primary-700 capitalize dark:hover:text-primary-500 transition-all w-full block '
											)}
										>
											{_sub}
										</span>
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
