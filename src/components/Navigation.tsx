'use client';
import cn from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation({
	allSections,
	className
}: {
	allSections: Record<string, string[]>;
	className?: string;
}) {
	let pathname = usePathname();

	function getActiveSection() {
		const parts = pathname.split('/').filter(Boolean);

		const [category, subcategory] = parts;

		if (allSections[category]) {
			if (subcategory && allSections[category].includes(subcategory)) {
				return { category, subcategory };
			}
			return { category };
		}
	}

	return (
		<nav className={cn(className)}>
			{Object.entries(allSections)?.map(([category, subCategories]) => (
				<ul className='pl-2 pt-2'>
					<li>
						<Link href={`/${category}`} className='font-semibold text-zinc-800 dark:text-zinc-300'>
							{category}
						</Link>
						{subCategories?.map((_sub) => (
							<ul className='pl-4 pt-2'>
								<li>
									<Link href={`/${category}/${_sub}`} className='dark:text-zinc-400 text-zinc-500'>
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
