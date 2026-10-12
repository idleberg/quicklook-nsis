# quicklook-nsis

[![Build](https://img.shields.io/github/actions/workflow/status/idleberg/quicklook-nsis/ci.yml?style=for-the-badge)](https://github.com/idleberg/quicklook-nsis/actions)

> Quick Look preview for NSIS scripts (.nsi, .nsh), highlighted with @nsis/textmate and Shiki.

## Requirements

- macOS 14 or later, with [Xcode](https://apps.apple.com/app/xcode/id497799835) installed
- [mise](https://mise.jdx.dev), which installs Node.js (with pnpm through corepack), XcodeGen and the Rust toolchain for [clark](https://crates.io/crates/clark-cli). Installing them yourself works too.

```sh
mise install
```

## Layout

| Path                        |                                                                          |
| --------------------------- | ------------------------------------------------------------------------ |
| `quicklook.config.ts`       | App name, bundle id, the NSIS file types and the Shiki themes            |
| `src/lib/FileViewer.svelte` | The preview                                                              |

## Develop

```sh
mise run dev
```

This starts the dev server. Drop a `.nsi` file (e.g. `fixtures/bigtest.nsi`) on the page to see it rendered.

**Preview the dev server in Safari.** It uses the same WebKit engine as Quick Look's WKWebView, so it's the closest match to what the extension renders.

The page can't load anything from the network. The dev server only reports CSP violations in the console, without blocking them, so check it there.

## Try it in Quick Look

```sh
mise run register
```

This builds the app into `.quicklook/build`, copies it to `/Applications` and launches it once, which is how macOS picks up the preview. After that, select a file in Finder and press Space.

Run it again after every change. `mise run unregister` removes the app.

If the preview doesn't show up, check `pluginkit -mAv | grep com.idleberg.QuickLookNSIS`, and make sure no other app claims the same file type.

## Releasing

Push a tag like `v1.0.0`. The workflow in `.github/workflows/release.yml` builds a universal app and attaches it to a GitHub release as a zip.

The app is signed ad hoc, so other people have to allow it in System Settings → Privacy & Security on first launch. Distributing it without that step requires an Apple Developer account and notarization, which this project doesn't cover.

## Development

```sh
mise run dev            # dev server
mise run build:web      # build the page only
mise run build          # build the app into .quicklook/build
mise run register       # build, install to /Applications and register
mise run unregister     # remove the app
mise run check          # typecheck the preview, the package and the Swift code
mise run lint           # Biome and SwiftLint
mise run format         # Biome and swift-format
mise run init           # drop packages/ and use quicklook-kit from npm
```

A pre-commit hook from [hk](https://hk.jdx.dev) runs the linters and formatters with fixes on staged files.

## License

This work is licensed under [The MIT License](LICENSE).

---

Made with [Quick Look Kit](https://github.com/idleberg/quicklook-kit).
