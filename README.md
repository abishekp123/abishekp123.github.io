# Abishek Prabaharan | Portfolio

Responsive portfolio built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui. Fonts (Inter and Instrument Serif) are self-hosted.

Run `npm install` then `npm run dev` for development. `npm run build` checks TypeScript and builds production assets. `npm run preview` previews the build.

Content: `src/App.tsx`. Visual design: `src/App.css`. shadcn components: `src/components/ui`.

Includes accessible project dialogs, expandable experience, persistent dark mode, email copy, keyboard navigation, and reduced-motion support. The printable résumé is reconstructed from the provided image. Project illustrations are architecture diagrams. Project source links point to the verified public Patchwork and EmberKV repositories.

## Deployment

Hosted at https://abishekp123.github.io/. Push to `main` to test, build, and deploy via `.github/workflows/deploy.yml`. GitHub Pages uses the GitHub Actions source. Vite uses the root base path for this user site.

Run `npm test` for component interaction checks. Browser visual QA was unavailable during initial implementation due to a browser connector error.
