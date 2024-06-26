import glob from 'fast-glob';

export async function extractPaths() {
	try {
		const pages: string[] = await glob('src/app/\\(content\\)/**/*/page.tsx');
		const allSectionsEntries = pages.map((filename) =>
			filename
				.replace(/(^|\/)page\.tsx$/, '')
				.replace('src/app/(content)/', '')
				.split('/')
				.filter(Boolean)
		);
		const result: Record<string, string[]> = {};
		allSectionsEntries.forEach((path) => {
			const [category, subcategory] = path;

			if (!result[category]) {
				result[category] = [];
			}

			if (subcategory && !result[category].includes(subcategory)) {
				result[category].push(subcategory);
			}
		});
		allSectionsEntries.sort();
		return result;
	} catch (error) {
		console.error('Error extracting sections:', error);
	}
}
