import { settings } from 'virtual:quicklook';
import type { ThemeRegistration } from 'shiki';
import ayuDark from 'shiki/themes/ayu-dark.mjs';
import ayuLight from 'shiki/themes/ayu-light.mjs';
import catppuccinLatte from 'shiki/themes/catppuccin-latte.mjs';
import catppuccinMocha from 'shiki/themes/catppuccin-mocha.mjs';
import everforestDark from 'shiki/themes/everforest-dark.mjs';
import everforestLight from 'shiki/themes/everforest-light.mjs';
import githubDark from 'shiki/themes/github-dark.mjs';
import githubLight from 'shiki/themes/github-light.mjs';
import gruvboxDark from 'shiki/themes/gruvbox-dark-medium.mjs';
import gruvboxLight from 'shiki/themes/gruvbox-light-medium.mjs';
import horizon from 'shiki/themes/horizon.mjs';
import horizonBright from 'shiki/themes/horizon-bright.mjs';
import materialTheme from 'shiki/themes/material-theme.mjs';
import materialLighter from 'shiki/themes/material-theme-lighter.mjs';
import nightOwl from 'shiki/themes/night-owl.mjs';
import nightOwlLight from 'shiki/themes/night-owl-light.mjs';
import oneDarkPro from 'shiki/themes/one-dark-pro.mjs';
import oneLight from 'shiki/themes/one-light.mjs';
import rosePine from 'shiki/themes/rose-pine.mjs';
import rosePineDawn from 'shiki/themes/rose-pine-dawn.mjs';
import solarizedDark from 'shiki/themes/solarized-dark.mjs';
import solarizedLight from 'shiki/themes/solarized-light.mjs';

const themes: Record<string, [light: ThemeRegistration, dark: ThemeRegistration]> = {
	'atom-one': [oneLight, oneDarkPro],
	ayu: [ayuLight, ayuDark],
	catppuccin: [catppuccinLatte, catppuccinMocha],
	everforest: [everforestLight, everforestDark],
	github: [githubLight, githubDark],
	gruvbox: [gruvboxLight, gruvboxDark],
	horizon: [horizonBright, horizon],
	material: [materialLighter, materialTheme],
	'night-owl': [nightOwlLight, nightOwl],
	'rose-pine': [rosePineDawn, rosePine],
	solarized: [solarizedLight, solarizedDark],
};

/** The user's light and dark Shiki themes; Catppuccin if unknown. */
export function themePair(): [light: ThemeRegistration, dark: ThemeRegistration] {
	const { lightTheme, darkTheme } = settings() as { lightTheme: string; darkTheme: string };
	const [light] = themes[lightTheme] ?? themes.catppuccin;
	const [, dark] = themes[darkTheme] ?? themes.catppuccin;
	return [light, dark];
}
