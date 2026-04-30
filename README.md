# BESSER — React rebuild

A from-scratch React recreation of [besser-pearl.org](https://besser-pearl.org/).
The original site is built on WordPress; this project rebuilds the same content
and structure as a single-page React app.

## Stack

- **Vite** — dev server and bundler
- **React 18** + **React Router 6** — routing for `/`, `/features`, `/services`,
  `/learn`, `/research`, `/projects`, `/team`, `/contact`
- **Tailwind CSS** — styling

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into ./dist
npm run preview  # preview the production build
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home — hero, demo, features, tech logos, learn, newsletter |
| `/features` | All BESSER features (4 primary + 10 secondary) |
| `/services` | Adaptation, Migration, Teaching |
| `/learn` | Technical docs, handbook, blog |
| `/research` | Scientific publications list |
| `/research/projects`, `/projects` | MOSAICO, Climaborough, BESSER |
| `/team` | Leadership + core team |
| `/contact` | Contact form + newsletter |

## Notes

- Sub-domains (e.g. `editor.besser-pearl.org`) are intentionally **not**
  reproduced — only content from `besser-pearl.org/{path}` is included.
- Images are loaded directly from the original WordPress media library so the
  app stays small. Replace with local assets in `public/` if you need offline use.
- Forms are non-functional placeholders (front-end only). Wire them to your
  preferred backend / form service to make them live.
