import glob from 'fast-glob';

export async function extractPaths({ path, prefix }: { path: string; prefix: string }) {
	const result: Record<string, string[]> = {};

	try {
		const pages: string[] = await glob(path);
		const allSectionsEntries = pages.map((filename) =>
			filename
				.replace(/(^|\/)page\.tsx$/, '')
				.replace(prefix, '')
				.split('/')
				.filter(Boolean)
		);
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
		return result;
	}
}
