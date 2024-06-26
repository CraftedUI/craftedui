import SpecificContentPage from '@/components/SpecificContentPage';

function Button() {
	return (
		<SpecificContentPage
			globUrl='src/app/\(content\)/components/button/*/page.tsx'
			globPrefixUrl='src/app/(content)/components/button/'
			cardUrl='components/button/'
		/>
	);
}

export default Button;
