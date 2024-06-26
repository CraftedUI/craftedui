import { glob } from 'fast-glob';
import ComponentPreviewCard from './ComponentPreviewCard';

type SpecificContentPageProps = {
	globUrl: string;
	cardUrl: string;
	globPrefixUrl: string;
};

export default async function SpecificContentPage({ globUrl, cardUrl, globPrefixUrl }: SpecificContentPageProps) {
	const pages: string[] = await glob(globUrl);
	const allSectionsEntries = pages.map((filename) =>
		filename.replace(/(^|\/)page\.tsx$/, '').replace(globPrefixUrl, '')
	);
	return (
		<div>
			{allSectionsEntries.map((comp) => (
				<ComponentPreviewCard key={comp} path={`${cardUrl}${comp}`} />
			))}
		</div>
	);
}
