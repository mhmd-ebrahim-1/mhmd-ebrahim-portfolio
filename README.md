# Mohamed Ebrahim Portfolio

Personal portfolio website built with React, Vite, Tailwind CSS, Framer Motion, and React Router.

## Live Website

- https://mhmd-ebrahim-1.github.io/Mohamed-Ebrahim-Hamed---Portfolio

## Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion
- React Router DOM
- Lucide React

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open in browser:

- http://localhost:5173/

## Scripts

```bash
npm run dev       # start dev server
npm run build     # production build
npm run preview   # preview production build
npm run deploy    # build + publish to gh-pages
```

## Deploy to GitHub Pages

This project is already configured for GitHub Pages through:

- homepage in package.json
- base in vite.config.js
- gh-pages deploy script

To deploy latest version:

```bash
npm run deploy
```

## Main Files

- src/data/index.js: profile, projects, certificates, experience data
- src/pages/Home.jsx: hero section and homepage content
- src/pages/CV.jsx: CV page and download/open behavior
- public/profile.jpg: profile image shown in the site
- public/cv.pdf: downloadable CV file

## Notes

- Update public/profile.jpg when you want to change your profile photo.
- Update public/cv.pdf when you have a newer CV version.
