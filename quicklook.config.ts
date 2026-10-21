import { defineConfig } from 'quicklook-kit';

const theme = (light: boolean) => ({
	type: 'string' as const,
	default: 'catppuccin',
	enum: [
		{ value: 'atom-one', description: light ? 'One Light' : 'One Dark Pro' },
		{ value: 'ayu', description: light ? 'Ayu Light' : 'Ayu Dark' },
		{ value: 'catppuccin', description: light ? 'Catppuccin Latte' : 'Catppuccin Mocha' },
		{ value: 'everforest', description: light ? 'Everforest Light' : 'Everforest Dark' },
		{ value: 'github', description: light ? 'GitHub Light' : 'GitHub Dark' },
		{ value: 'gruvbox', description: light ? 'Gruvbox Light' : 'Gruvbox Dark' },
		{ value: 'horizon', description: light ? 'Horizon Bright' : 'Horizon' },
		{ value: 'material', description: light ? 'Material Lighter' : 'Material' },
		{ value: 'night-owl', description: light ? 'Night Owl Light' : 'Night Owl' },
		{ value: 'rose-pine', description: light ? 'Rosé Pine Dawn' : 'Rosé Pine' },
		{ value: 'solarized', description: light ? 'Solarized Light' : 'Solarized Dark' },
	],
});

export default defineConfig({
	name: 'Quick Look NSIS',
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
	settings: {
		lightTheme: theme(true),
		darkTheme: theme(false),
	},
});
