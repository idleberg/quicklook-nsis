<!--
	Highlights NSIS scripts with the @nsis/textmate grammar. Shiki's JavaScript
	regex engine keeps this synchronous and free of WebAssembly, which the
	page's CSP would block.
-->
<script lang="ts" module>
	import grammar from '@nsis/textmate';
	import type { LanguageRegistration } from 'shiki';
	import { createHighlighterCoreSync } from 'shiki/core';
	import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
	import { themePair } from './themes.ts';

	const [light, dark] = themePair();

	const highlighter = createHighlighterCoreSync({
		engine: createJavaScriptRegexEngine(),
		themes: [light, dark],
		langs: [{ ...grammar, name: 'nsis' } as LanguageRegistration]
	});
</script>

<script lang="ts">
	import type { QuickLookFile } from 'virtual:quicklook';

	let { file }: { file: QuickLookFile } = $props();

	// Shiki escapes the source, so the untrusted file can't inject markup.
	const html = $derived(
		highlighter.codeToHtml(new TextDecoder().decode(file.bytes), {
			lang: 'nsis',
			themes: { light: light.name ?? '', dark: dark.name ?? '' }
		})
	);
</script>

{@html html}

<style>
	:global(body) {
		margin: 0;
	}

	:global(.shiki) {
		margin: 0;
		padding: 1rem;
		min-height: 100vh;
		box-sizing: border-box;
		font: 12px ui-monospace, monospace;
		white-space: pre-wrap;
	}

	@media (prefers-color-scheme: dark) {
		:global(.shiki),
		:global(.shiki span) {
			/* biome-ignore lint/complexity/noImportantStyles: overrides Shiki's inline light-theme styles. */
			color: var(--shiki-dark) !important;
			/* biome-ignore lint/complexity/noImportantStyles: overrides Shiki's inline light-theme styles. */
			background-color: var(--shiki-dark-bg) !important;
		}
	}
</style>
