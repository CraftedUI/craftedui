import glob from 'fast-glob';

export async function extractPaths({ path, prefix }: { path: string; prefix: string }) {
	const result: Record<string, string[]> = {};

	try {
		const pages: string[] = await glob(path);
		const allSectionsEntries: string[][] = pages.map((filename) =>
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
		allSectionsEntries.sort((a, b) => {
			if (a[0] < b[0]) {
				return -1;
			}
			if (a[0] > b[0]) {
				return 1;
			}
			return 0;
		});
		return result;
	} catch (error) {
		console.error('Error extracting sections:', error);
		return result;
	}
}
