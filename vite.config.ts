import { sveltekit } from '@sveltejs/kit/vite';
import { quicklook } from 'quicklook-kit/vite';
import { defineConfig } from 'vite';
import config from './quicklook.config.ts';

const { theme } = config.public as { theme: { light: string; dark: string } };

export default defineConfig({
	plugins: [sveltekit(), quicklook()],
	// Bundles only the two Shiki themes named in quicklook.config.ts.
	resolve: {
		alias: {
			'virtual:shiki-theme-light': `shiki/themes/${theme.light}.mjs`,
			'virtual:shiki-theme-dark': `shiki/themes/${theme.dark}.mjs`,
		},
	},
});
