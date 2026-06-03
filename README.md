<<<<<<< HEAD
# SketchWebGen

Scaffold for a mobile-first WebApp that visually designs Android UI components
and exports equivalent Java/Android code. This scaffold includes Next.js, TypeScript,
and Tailwind CSS with a minimal set of components and a shared preferences wrapper.

Next steps:
- Install dependencies: `npm install`
- Run dev server: `npm run dev`

All files include explanatory comments to guide implementation.

Features scaffolded:
- Mobile-first editor shell with bottom-sheet inspector and device simulator (Redmi Note 13 5G).
- Live Java code generation preview and export.
- SharedPreferences-like persistence via localStorage and import/export JSON.
- Installable PWA with offline shell and service worker support.
- Color picker with image sampling placeholder, ID suggestions by MFU.

PWA notes:
- `public/manifest.json` provides install metadata and home screen icons.
- `public/sw.js` caches shell assets, runtime app resources, and an offline fallback.
- `public/icon-maskable.svg` enables maskable home screen icons for Android.
- `public/offline.html` shows a friendly offline experience when navigation fails.

Deployment recommendations:
- Use `npm install` and `npm run build` before `npm start`.
- Deploy on Vercel for best compatibility with Next.js.
- `vercel.json` is included for explicit Vercel configuration.
- `netlify.toml` is included for Netlify; `@netlify/plugin-nextjs` is required.
- A GitHub Actions workflow at `.github/workflows/ci.yml` installs, builds, and tests the app.

To build for production:

```
npm run build
npm start
```
=======
# SketchWebGen

Scaffold for a mobile-first WebApp that visually designs Android UI components
and exports equivalent Java/Android code. This scaffold includes Next.js, TypeScript,
and Tailwind CSS with a minimal set of components and a shared preferences wrapper.

Next steps:
- Install dependencies: `npm install`
- Run dev server: `npm run dev`

All files include explanatory comments to guide implementation.

Features scaffolded:
- Mobile-first editor shell with bottom-sheet inspector and device simulator (Redmi Note 13 5G).
- Live Java code generation preview and export.
- SharedPreferences-like persistence via localStorage and import/export JSON.
- Installable PWA with offline shell and service worker support.
- Color picker with image sampling placeholder, ID suggestions by MFU.

PWA notes:
- `public/manifest.json` provides install metadata and home screen icons.
- `public/sw.js` caches shell assets, runtime app resources, and an offline fallback.
- `public/icon-maskable.svg` enables maskable home screen icons for Android.
- `public/offline.html` shows a friendly offline experience when navigation fails.

Deployment recommendations:
- Use `npm install` and `npm run build` before `npm start`.
- Deploy on Vercel for best compatibility with Next.js.
- `vercel.json` is included for explicit Vercel configuration.
- `netlify.toml` is included for Netlify; `@netlify/plugin-nextjs` is required.
- A GitHub Actions workflow at `.github/workflows/ci.yml` installs, builds, and tests the app.

To build for production:

```
npm run build
npm start
```
>>>>>>> e0a9267de792070e0a727aa26d900288ed444b96
