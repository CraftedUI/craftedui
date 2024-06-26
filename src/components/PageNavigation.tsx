'use client';
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
			{activeIndex > 0 ? <div>{flatSections[activeIndex - 1]}</div> : <div></div>}
			{activeIndex < flatSections.length - 1 ? <div>{flatSections[activeIndex + 1]}</div> : <div></div>}
		</div>
	);
}
