# quicklook-nsis

> A macOS Quick Look plugin that highlights NSIS scripts with [Shiki](https://shiki.style/)

Built with [quicklook-kit](https://www.npmjs.com/package/quicklook-kit) and SvelteKit.

## Installation

Download the latest zip from the [releases](https://github.com/idleberg/quicklook-nsis/releases) and move `Quick Look NSIS.app` to `/Applications`.

> [!IMPORTANT]
> To register the plugin, you need to launch `Quick Look NSIS.app` once after installation. The app is signed ad hoc, so you have to allow it in System Settings → Privacy & Security on first launch.

## Themes

Pick a light and a dark theme in the app's Settings tab. The preview follows the system appearance and defaults to Catppuccin. Changes apply to the next preview.

Available themes: **Atom One**, **Ayu**, **Catppuccin**, **Everforest**, **GitHub**, **Gruvbox**, **Horizon**, **Material**, **Night Owl**, **Rosé Pine** and **Solarized**.

## Development

### Requirements

- macOS 14 or later, with Xcode installed
- [mise](https://mise.jdx.dev), which installs Node, pnpm and XcodeGen

```sh
mise trust
mise install
```

### Usage

```sh
pnpm dev        # drop a file on the page to preview it
pnpm register   # build, install to /Applications and register with Quick Look
pnpm unregister
```

The preview claims `.nsi`, `.nsh` and `.nsdinc` files. `fixtures/bigtest.nsi` makes a good test file.

### Releasing

Push a tag like `v1.0.0`. The release workflow builds a universal app and attaches it to a GitHub release as a zip.

### Why Shiki?

The NSIS grammar from [`@nsis/textmate`](https://www.npmjs.com/package/@nsis/textmate) is a TextMate grammar, which Shiki runs as is. Its JavaScript regex engine keeps highlighting synchronous and free of WebAssembly, which the preview's CSP would block.

## License

This work is licensed under [The MIT License](LICENSE).
