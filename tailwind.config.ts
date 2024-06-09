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
			},
			animation: {
				spotlight: 'spotlight 2s ease .75s 1 forwards'
			},
			keyframes: {
				spotlight: {
					'0%': {
						opacity: '0',
						transform: 'translate(-72%, -62%) scale(0.5)'
					},
					'100%': {
						opacity: '1',
						transform: 'translate(-50%,-40%) scale(1)'
					}
				}
			}
		}
	},
	plugins: [hocusPlugin, typography]
};
export default config;
