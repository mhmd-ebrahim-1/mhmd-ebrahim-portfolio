# Mohamed Ebrahim Portfolio

Personal portfolio built with React, Vite, Tailwind CSS, Framer Motion, and React Router.

## Live Website

- GitHub Pages: https://mhmd-ebrahim-1.github.io/Mohamed-Ebrahim-Hamed---Portfolio

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion
- React Router DOM
- Lucide React

## Project Structure

- `src/` application source code
- `src/pages/` main pages (Home, About, Projects, CV, Certificates)
- `src/components/` reusable UI components
- `src/data/index.js` all profile/project/certificate content
- `public/profile.jpg` profile image used in Home and CV pages
- `public/cv.pdf` downloadable CV

## Local Development

1. Install dependencies:

   npm install

2. Start development server:

   npm run dev

3. Open:

   http://localhost:5173/

## Build

Create production build:

npm run build

Preview production build:

npm run preview

## Deploy to GitHub Pages

This project is configured for GitHub Pages with:

- `homepage` in `package.json`
- `base` in `vite.config.js`
- deploy script using `gh-pages`

Deploy steps:

1. Commit your latest changes.
2. Run:

   npm run deploy

This publishes the `dist` folder to the `gh-pages` branch.

## Content Editing

- Main profile/project content: `src/data/index.js`
- Hero intro text: `src/pages/Home.jsx`
- CV button behavior and CV page: `src/pages/CV.jsx`

## Notes

- Keep `public/profile.jpg` updated with your preferred photo.
- Keep `public/cv.pdf` updated with your latest CV.
