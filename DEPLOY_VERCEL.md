<<<<<<< HEAD
GitHub + Vercel Deployment Guide

This document explains how to host the SketchWebGen Next.js app using GitHub and Vercel.
It assumes the repository is pushed to GitHub and the project root contains `package.json`.

Prerequisites
- A GitHub repository with this project (push your local repo to GitHub).
- A Vercel account connected to your GitHub account.
- Node.js 18+ (Node 20 recommended) and npm on your local machine.

Local build & verification
1. Install dependencies and run tests locally:

```bash
npm install
npm run build
npm run test
npm run dev   # optional for local dev server
```

2. Fix any build/test issues before deploying. The GitHub Actions CI will run `npm install`, `npm run build`, and `npm test` on pushes to `main`.

Push to GitHub

```bash
git add .
git commit -m "Prepare for deployment"
git push origin main
```

Connect repository to Vercel
1. Open https://vercel.com and log in.
2. Select "Import Project" and choose the GitHub repository.
3. Vercel should auto-detect Next.js. Validate the settings:
   - Framework Preset: `Next.js`
   - Root Directory: (leave blank if repository root)
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: (leave blank; Vercel handles Next.js automatically)
4. Click "Deploy".

Notes about `vercel.json` and `netlify.toml`
- `vercel.json` is included to make builds explicit. You can customize redirects/headers here.
- `netlify.toml` is included if you prefer Netlify; install `@netlify/plugin-nextjs` on Netlify.

Service worker & PWA considerations
- `public/sw.js` and `public/manifest.json` are present and will be served from the site root by Vercel.
- Service workers only activate on HTTPS (or `http://localhost`). After deployment, verify the service worker registers in DevTools > Application > Service Workers.
- To test offline behavior, open DevTools, go Offline (Network tab), and reload the app. The `offline.html` fallback should appear for navigation failures.

Environment variables
- If you need environment variables, add them in Vercel dashboard under Project Settings -> Environment Variables. Add for both Preview and Production as needed.

Custom domain
1. In Vercel, go to Project Settings -> Domains and add your domain.
2. Update DNS records as instructed by Vercel (usually add an A/ALIAS or CNAME).
3. Enable automatic HTTPS (Vercel provides certificates automatically).

CI / GitHub Actions
- A workflow `.github/workflows/ci.yml` is included to run on push and PRs to `main`; it runs `npm install`, `npm run build`, and `npm test`.
- If you rely on Vercel's preview deployments, PRs will generate preview URLs automatically.

Post-deploy verification checklist
- Visit the deployed URL from Vercel.
- Open DevTools -> Application and confirm the `manifest.json` is loaded and the service worker is registered.
- Test offline behavior using DevTools -> Network -> Offline and reload.
- Check generated Java code export and download buttons work in the running app.

Rollback & redeploy
- Use Vercel dashboard to rollback to previous deployments, or push a new commit to `main` to trigger a fresh build.

Troubleshooting notes
- Build errors about missing types or modules: run `npm install` locally and ensure `package.json` lists required deps.
- Service worker not registering: ensure `public/sw.js` exists and that the browser is not blocking the service worker.
- PWA install prompt: some browsers control displaying the prompt (user gesture requirements). Use DevTools Application -> Manifest to inspect.

Optional advanced steps
- Add `vercel` Git integration for preview comments, or configure `protect` branches in GitHub.
- Add caching headers in `vercel.json` for static assets.

Files created in this repo to assist deployment:
- `vercel.json` — Vercel configuration
- `netlify.toml` — Netlify configuration (optional)
- `.github/workflows/ci.yml` — CI that builds & tests
- `public/manifest.json`, `public/sw.js`, `public/offline.html` — PWA/offline shell

=======
GitHub + Vercel Deployment Guide

This document explains how to host the SketchWebGen Next.js app using GitHub and Vercel.
It assumes the repository is pushed to GitHub and the project root contains `package.json`.

Prerequisites
- A GitHub repository with this project (push your local repo to GitHub).
- A Vercel account connected to your GitHub account.
- Node.js 18+ (Node 20 recommended) and npm on your local machine.

Local build & verification
1. Install dependencies and run tests locally:

```bash
npm install
npm run build
npm run test
npm run dev   # optional for local dev server
```

2. Fix any build/test issues before deploying. The GitHub Actions CI will run `npm install`, `npm run build`, and `npm test` on pushes to `main`.

Push to GitHub

```bash
git add .
git commit -m "Prepare for deployment"
git push origin main
```

Connect repository to Vercel
1. Open https://vercel.com and log in.
2. Select "Import Project" and choose the GitHub repository.
3. Vercel should auto-detect Next.js. Validate the settings:
   - Framework Preset: `Next.js`
   - Root Directory: (leave blank if repository root)
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: (leave blank; Vercel handles Next.js automatically)
4. Click "Deploy".

Notes about `vercel.json` and `netlify.toml`
- `vercel.json` is included to make builds explicit. You can customize redirects/headers here.
- `netlify.toml` is included if you prefer Netlify; install `@netlify/plugin-nextjs` on Netlify.

Service worker & PWA considerations
- `public/sw.js` and `public/manifest.json` are present and will be served from the site root by Vercel.
- Service workers only activate on HTTPS (or `http://localhost`). After deployment, verify the service worker registers in DevTools > Application > Service Workers.
- To test offline behavior, open DevTools, go Offline (Network tab), and reload the app. The `offline.html` fallback should appear for navigation failures.

Environment variables
- If you need environment variables, add them in Vercel dashboard under Project Settings -> Environment Variables. Add for both Preview and Production as needed.

Custom domain
1. In Vercel, go to Project Settings -> Domains and add your domain.
2. Update DNS records as instructed by Vercel (usually add an A/ALIAS or CNAME).
3. Enable automatic HTTPS (Vercel provides certificates automatically).

CI / GitHub Actions
- A workflow `.github/workflows/ci.yml` is included to run on push and PRs to `main`; it runs `npm install`, `npm run build`, and `npm test`.
- If you rely on Vercel's preview deployments, PRs will generate preview URLs automatically.

Post-deploy verification checklist
- Visit the deployed URL from Vercel.
- Open DevTools -> Application and confirm the `manifest.json` is loaded and the service worker is registered.
- Test offline behavior using DevTools -> Network -> Offline and reload.
- Check generated Java code export and download buttons work in the running app.

Rollback & redeploy
- Use Vercel dashboard to rollback to previous deployments, or push a new commit to `main` to trigger a fresh build.

Troubleshooting notes
- Build errors about missing types or modules: run `npm install` locally and ensure `package.json` lists required deps.
- Service worker not registering: ensure `public/sw.js` exists and that the browser is not blocking the service worker.
- PWA install prompt: some browsers control displaying the prompt (user gesture requirements). Use DevTools Application -> Manifest to inspect.

Optional advanced steps
- Add `vercel` Git integration for preview comments, or configure `protect` branches in GitHub.
- Add caching headers in `vercel.json` for static assets.

Files created in this repo to assist deployment:
- `vercel.json` — Vercel configuration
- `netlify.toml` — Netlify configuration (optional)
- `.github/workflows/ci.yml` — CI that builds & tests
- `public/manifest.json`, `public/sw.js`, `public/offline.html` — PWA/offline shell

>>>>>>> e0a9267de792070e0a727aa26d900288ed444b96
That's it — push the repo, import into Vercel, and deploy. If you want, I can create a tiny GitHub Actions secret automation or add domain DNS helper commands.