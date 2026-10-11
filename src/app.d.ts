/// <reference types="quicklook-kit/virtual" />

// Aliased in vite.config.ts to the themes named in quicklook.config.ts.
declare module 'virtual:shiki-theme-*' {
	const theme: import('shiki').ThemeRegistration;
	export default theme;
}
