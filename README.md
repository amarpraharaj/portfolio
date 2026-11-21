# Amar Anurag Praharaj — Portfolio

A responsive personal portfolio built to present my profile, selected projects, technical skills, education, and contact links.

**Live site:** https://amarpraharaj.github.io/portfolio/

## Built with

- React
- Vite
- Tailwind CSS
- Motion
- Lucide icons

## Features

- Responsive bento-style layout
- Light and dark themes
- Lightweight typing effect with reduced-motion support
- Project cards with live demos and source links
- Downloadable resume
- GitHub, LinkedIn, and email links

## Run locally

```bash
npm ci
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Deployment

The repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`. Set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. Each push to `main` then builds and deploys the site to GitHub Pages.
