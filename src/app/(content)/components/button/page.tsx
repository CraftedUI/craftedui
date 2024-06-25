import ComponentPreviewCard from '@/components/ComponentPreviewCard';
import { glob } from 'fast-glob';
import Link from 'next/link';

async function Button() {
	const pages: string[] = await glob('src/app/\\(content\\)/components/button/*/page.tsx');
	const allSectionsEntries = pages.map((filename) =>
		filename.replace(/(^|\/)page\.tsx$/, '').replace('src/app/(content)/components/button/', '')
	);
	return (
		<div>
			{allSectionsEntries.map((comp) => (
				<ComponentPreviewCard key={comp} path={`components/button/${comp}`} />
			))}
		</div>
	);
}

export default Button;
