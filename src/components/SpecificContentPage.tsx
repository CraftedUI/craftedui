import { glob } from 'fast-glob';
import ComponentPreviewCard from './ComponentPreviewCard';

type SpecificContentPageProps = {
	contents: string[];
	cardUrl: string;
	title: string;
};

export default async function SpecificContentPage({ title, contents, cardUrl }: SpecificContentPageProps) {
	return (
		<>
			<h1 className='capitalize font-bold text-2xl'>{title}</h1>
			<div className='flex flex-wrap lg:gap-8 md:gap-6 gap-4 transition-all my-4'>
				{contents.map((content) => (
					<ComponentPreviewCard key={content} path={`${cardUrl}${content}`} />
				))}
			</div>
		</>
	);
}
