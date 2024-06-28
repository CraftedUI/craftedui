import SpecificContentPage from '@/components/SpecificContentPage';
import { glob } from 'fast-glob';

async function Button() {
	const allButtonsPages: string[] = await glob('src/app/\\(content\\)/components/button/*/page.tsx');
	const buttons = allButtonsPages.map((filename) =>
		filename.replace(/(^|\/)page\.tsx$/, '').replace('src/app/(content)/components/button/', '')
	);

	return <SpecificContentPage title={'Buttons'} contents={buttons} cardUrl='components/button/' />;
}

export default Button;
