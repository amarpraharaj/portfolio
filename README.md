# Amar Anurag Praharaj — Portfolio

A responsive personal portfolio built with React and Vite to showcase selected projects, technical skills, education, and contact details.

**Live site:** [amarpraharaj.github.io/portfolio](https://amarpraharaj.github.io/portfolio/)

## Featured projects

| Project | Live demo | Source repository |
| --- | --- | --- |
| **DevDesk** — Full-stack ticket management | [Open demo](https://dev-desk-delta.vercel.app/) | [GitHub](https://github.com/amarpraharaj/DevDesk) |
| **Task Manager** — MERN task management | [Open demo](https://task-manager-five-orcin-75.vercel.app/) | [GitHub](https://github.com/amarpraharaj/task-manager) |
| **Rich Text Editor** — Browser-based editor | [Open demo](https://rich-text-editor-pearl-rho.vercel.app/) | [GitHub](https://github.com/amarpraharaj/rich-text-editor) |

## Features

- Responsive bento-style layout
- Light and dark themes, with the selected theme saved in browser storage
- Animated role text with reduced-motion support
- Project cards linking to live demos and source repositories
- Skills grouped by frontend, backend, databases, and tools
- Education and certification details
- Downloadable resume and GitHub, LinkedIn, and email links

## Tech stack

- **React** for the interface
- **Vite** for development and production builds
- **Tailwind CSS** and project CSS for styling
- **Motion** for project-card interactions and animation support
- **Lucide React** for icons
- **GitHub Actions** and **GitHub Pages** for deployment

## Requirements

- Node.js 22 (the deployment workflow uses Node.js 22)
- npm

## Run locally

```bash
git clone https://github.com/amarpraharaj/portfolio.git
cd portfolio
npm ci
npm run dev
```

Vite prints the local development URL in the terminal.

## Available npm scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Create the production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Check the code with Oxlint. |

## GitHub Pages deployment

The workflow in `.github/workflows/deploy-pages.yml` builds the site and deploys the `dist/` artifact to GitHub Pages.

1. In the repository, open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push changes to `main` to run the deployment workflow, or start it manually from the **Actions** tab using **Run workflow**.

## Repository structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy-pages.yml  # GitHub Pages build and deployment
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   ├── profile.jpeg          # Profile photo
│   └── resume.pdf             # Downloadable resume
├── src/
│   ├── assets/                # Local image and starter assets
│   ├── App.jsx                # Portfolio content and components
│   ├── App.css                # Component and layout styles
│   ├── index.css              # Global styles
│   └── main.jsx               # React entry point
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Updating the portfolio

- Replace `public/profile.jpeg` to update the profile photo.
- Replace `public/resume.pdf` to update the downloadable resume.
- Edit projects, skills, education, certifications, roles, and contact details in `src/App.jsx`.
- Adjust the layout and styling in `src/App.css` and `src/index.css`.

## Contact

- **GitHub:** [amarpraharaj](https://github.com/amarpraharaj)
- **LinkedIn:** [Amar Anurag Praharaj](https://linkedin.com/in/amar-anurag-praharaj)
- **Email:** [amarpraharaj283@gmail.com](mailto:amarpraharaj283@gmail.com)
