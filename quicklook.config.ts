import { defineConfig } from 'quicklook-kit';

const theme = (light: boolean) => ({
	type: 'string' as const,
	default: 'catppuccin',
	enum: [
		{ value: 'atom-one', description: light ? 'Atom One Light' : 'Atom One Dark' },
		{ value: 'ayu', description: light ? 'Ayu Light' : 'Ayu Dark' },
		{ value: 'catppuccin', description: light ? 'Catppuccin Latte' : 'Catppuccin Mocha' },
		{ value: 'github', description: light ? 'GitHub Light' : 'GitHub Dark' },
		{ value: 'material', description: light ? 'Material Lighter' : 'Material' },
		{ value: 'night-owl', description: light ? 'Light Owl' : 'Night Owl' },
		{ value: 'rose-pine', description: light ? 'Rosé Pine Dawn' : 'Rosé Pine' },
		{ value: 'solarized', description: light ? 'Solarized Light' : 'Solarized Dark' },
	],
});

export default defineConfig({
	name: 'Quick Look NSIS',
	macos: {
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
	},
	windows: {
		id: 'QuickLook.Plugin.NSIS',
		extensions: ['nsi', 'nsh', 'nsdinc'],
	},
	framework: 'sveltekit',
	settings: {
		lightTheme: theme(true),
		darkTheme: theme(false),
		lineNumbers: { type: 'boolean', default: false, title: 'Show Line Numbers' },
	},
});
