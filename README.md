# Guariño Torres portfolio

React portfolio built with Vite and plain CSS. Requires Node.js 22.12+ (Node 24 recommended).

```sh
npm ci
npm run dev
```

Create a production build with `npm run build`, then inspect it with `npm run preview`.

- `src/App.jsx`: page composition and reveal animations.
- `src/components/`: navigation, page sections, and certificate dialog.
- `data.js`: editable project list.
- Projects can use a linked `image` preview or a `screenshots` gallery with `image` and `label` entries. Omit `link` for projects without a public app URL. Mobrail's original screenshots are in `public/img/`; the mobile card features sign-in, duty, and trips, with the fourth screenshot retained alongside them.
- `src/data/portfolio.js`: skills and certificates.
- `src/styles.css`: responsive portfolio styles.
- `src/components/ScrollPanel.jsx`: shared, keyboard-accessible scroll panels for skills and projects. Add skills in `src/data/portfolio.js`; the count and scroll range update automatically without expanding the section.
- `public/`: images, certificates, and resume; copied into the build unchanged.

The GitHub Pages workflow builds and deploys `dist/` on pushes to `main`. In repository Settings → Pages, use GitHub Actions as the source. Vite uses relative asset paths to support repository subdirectories. Do not deploy the source folder directly or open `index.html` with a file URL; use the development server or built output.
