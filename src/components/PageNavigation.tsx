'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function PageNavigation({ allSections }: { allSections?: Record<string, string[]> }) {
	if (!allSections) {
		return;
	}
	const flatSections: string[] = Object.values(allSections).flat();
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

	const { subcategory } = getActiveSection();
	const activeIndex = flatSections.findIndex((val) => val === subcategory);

	// TODO: find the category of prev and next index subcategory and then form a link from it
	return (
		<div className='w-full flex justify-between'>
			{activeIndex > 0 ? (
				<div className='flex flex-col gap-2 items-start'>
					<Link href={``}>
						<button className='w-fit bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-200 hover:dark:bg-zinc-600 rounded-md transition text-sm font-normal py-2 px-4'>
							Previous
						</button>
					</Link>
					<span className='font-normal text-base capitalize'>{flatSections[activeIndex - 1]}</span>
				</div>
			) : (
				<div></div>
			)}
			{activeIndex < flatSections.length - 1 ? (
				<div className='flex flex-col gap-2 items-end'>
					<Link href={``}>
						<button className='w-fit bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-200 hover:dark:bg-zinc-600 rounded-md transition text-sm font-normal py-2 px-4'>
							Next
						</button>
					</Link>
					<span className='font-normal text-base capitalize'>{flatSections[activeIndex + 1]}</span>
				</div>
			) : (
				<div></div>
			)}
		</div>
	);
}
