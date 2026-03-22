# @baghel/portfolio

Interactive terminal portfolio for Devansh Baghel — built with [OpenTUI](https://opentui.com) and React.

## Run it

```bash
bunx @baghel/portfolio
```

## Features

- **ASCII art header** with lime green branding
- **6 navigable sections**: Home, Experience, Projects, Skills, Blog, Contact
- **Keyboard-driven**: Tab/arrows to navigate, number keys to jump, `h` for help
- **Typewriter animation** on the hero section
- **Project browser** with selectable list and detail pane
- **Contact form** with real email submission via Cloudflare Worker
- **Blog listing** with browser-open on Enter

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `q` / `Ctrl+C` | Quit |
| `h` / `?` | Toggle help |
| `1-6` | Jump to section |
| `Tab` / `[ ]` | Navigate sections |
| `↑↓` / `jk` | Scroll/navigate lists |
| `Enter` | Select / confirm |

## Development

```bash
bun install
bun src/index.tsx
```

## License

MIT
