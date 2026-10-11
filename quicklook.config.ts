import { defineConfig } from 'quicklook-kit';

export default defineConfig({
	name: 'QuickLook NSIS',
	bundleId: 'com.idleberg.QuickLookNSIS',
	types: [
		{
			id: 'com.idleberg.QuickLookNSIS.nsis',
			description: 'NSIS Script',
			extensions: ['nsi', 'nsh', 'nsdinc'],
			conformsTo: ['public.source-code'],
		},
	],
	icon: 'assets/AppIcon.icns',
	framework: 'sveltekit',
	public: {
		// Any theme in shiki/themes, e.g. 'nord' or 'one-dark-pro'.
		theme: {
			light: 'catppuccin-latte',
			dark: 'catppuccin-macchiato',
		},
	},
});
