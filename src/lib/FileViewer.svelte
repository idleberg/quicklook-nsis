<!--
	Highlights NSIS scripts with the @nsis/twinkleplop grammar. It compiles to a
	plain JavaScript state machine: no regexes to compile on first use and no
	WebAssembly, which the page's CSP would block.
-->
<script lang="ts" module>
	import { settings } from 'virtual:quicklook';
	import { language } from '@nsis/twinkleplop';
	import { themeCss } from './themes.ts';

	const highlight = language();
	// The page's CSP allows inline styles.
	const theme = `<style>${themeCss()}</style>`;
	const { lineNumbers } = settings() as { lineNumbers: boolean };
</script>

<script lang="ts">
	import type { QuickLookFile } from 'virtual:quicklook';

	let { file }: { file: QuickLookFile } = $props();

	// twinkleplop escapes the source, so the untrusted file can't inject markup.
	const html = $derived(highlight(new TextDecoder().decode(file.bytes), { line_numbers: lineNumbers }));
</script>

<svelte:head>{@html theme}</svelte:head>

{@html html}

<style>
	:global(body) {
		margin: 0;
		background: var(--twp-background);
	}

	:global(.twinkleplop) {
		margin: 0;
		padding: 1rem;
		color: var(--twp-identifier);
		font:
			12px ui-monospace,
			monospace;
		white-space: pre-wrap;
	}

	/* Themes have no line number color, so borrow the comment one. */
	:global(.twinkleplop .ln) {
		display: inline-block;
		min-width: 3ch;
		padding-right: 2ch;
		text-align: right;
		color: var(--twp-comment);
		user-select: none;
	}
</style>
