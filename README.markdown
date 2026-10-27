# quicklook-nsis

> A Quick Look plugin for macOS and [QuickLook](https://github.com/QL-Win/QuickLook) on Windows that highlights NSIS scripts with [twinkleplop](https://twinkleplop.pngwn.at)

Built with [quicklook-kit](https://www.npmjs.com/package/quicklook-kit) and SvelteKit.

> [!TIP]
> For a full-featured Quick Look plugin for developers, check out [`quicklook-coder`](https://github.com/idleberg/quicklook-coder) instead.

## Installation

### macOS

Download the latest `-macos.zip` from the [releases](https://github.com/idleberg/quicklook-nsis/releases) and move `Quick Look NSIS.app` to `/Applications`.

> [!IMPORTANT]
> To register the plugin, you need to launch `Quick Look NSIS.app` once after installation. The app is signed ad hoc, so you have to allow it in System Settings → Privacy & Security on first launch.

### Windows

Download the latest `-windows.qlplugin` from the [releases](https://github.com/idleberg/quicklook-nsis/releases), select it in Explorer and press <kbd>Space</kbd> to preview it in QuickLook, then click the install button and restart QuickLook. The preview needs the Microsoft Edge WebView2 Runtime, which ships with Windows 11.

## Themes

The preview follows the system appearance and defaults to Catppuccin.

On macOS, pick a light and a dark theme, and whether to show line numbers, in the app's Settings tab; changes apply to the next preview. On Windows, set them in `%APPDATA%\pooi.moe\QuickLook\QuickLook.Plugin.NSIS.config`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<Settings>
  <lightTheme>github</lightTheme>
  <darkTheme>rose-pine</darkTheme>
  <lineNumbers>true</lineNumbers>
</Settings>
```

Restart QuickLook afterwards, since it reads the file only when it starts. A portable QuickLook keeps it in `UserData` next to `QuickLook.exe` instead.

Available themes: **Atom One**, **Ayu**, **Catppuccin**, **GitHub**, **Material**, **Night Owl**, **Rosé Pine** and **Solarized**.

## Development

### Requirements

- macOS 14 or later, with Xcode installed, to build the macOS app
- [mise](https://mise.jdx.dev), which installs Node, pnpm, the .NET SDK and XcodeGen

```sh
mise trust
mise install
```

### Usage

```sh
pnpm dev        # drop a file on the page to preview it
pnpm register   # build, install to /Applications (macOS) or into QuickLook (Windows)
pnpm unregister
```

The preview claims `.nsi`, `.nsh` and `.nsdinc` files. `fixtures/bigtest.nsi` makes a good test file.

### Releasing

Push a tag like `v1.0.0`. The release workflow builds a universal macOS app and the Windows plugin, and attaches both to a GitHub release.

### Why twinkleplop?

The NSIS grammar from [`@nsis/twinkleplop`](https://www.npmjs.com/package/@nsis/twinkleplop) compiles to a plain JavaScript state machine, so highlighting is fast, synchronous and free of WebAssembly, which the preview's CSP would block.

## License

This work is licensed under [The MIT License](LICENSE).
