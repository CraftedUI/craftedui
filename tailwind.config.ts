import type { Config } from 'tailwindcss';
import hocusPlugin from 'tailwindcss-hocus';
import typography from '@tailwindcss/typography';

import colors from 'tailwindcss/colors';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				primary: colors.violet
			}
		}
	},
	plugins: [hocusPlugin, typography]
};
export default config;
