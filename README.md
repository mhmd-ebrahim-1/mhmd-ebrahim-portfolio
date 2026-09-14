# Mohamed Ebrahim — Portfolio

> Personal portfolio for **Mohamed Ebrahim**, an Artificial Intelligence student focused on **Data Analytics, Machine Learning, Generative AI, and Data Engineering**.

[![Live Portfolio](https://img.shields.io/badge/Live%20Portfolio-00f5d4?style=for-the-badge&logo=github&logoColor=081018)](https://mhmd-ebrahim-1.github.io/My_Portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-18181f?style=for-the-badge&logo=github)](https://github.com/mhmd-ebrahim-1)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/mhmd-ebrahim1/)

## Overview

This repository contains the source code for my responsive portfolio website. It presents my projects, technical skills, education, experience, certifications, and contact information in a clean, performance-focused interface.

The portfolio is designed for **recruiters, internship opportunities, and freelance clients** who want to quickly understand what I build and how I work.

## Highlights

- Modern responsive React portfolio
- Data Analytics, ML, GenAI, and Data Engineering positioning
- Featured projects connected directly to GitHub repositories
- Project categories and technology tags
- Dedicated CV, About, Projects, and Certificates sections
- Responsive navigation with mobile menu
- Lightweight animations with Framer Motion
- GitHub Pages deployment through GitHub Actions
- Vite production build with the correct `/My_Portfolio/` base path
- Startup and runtime handling designed to avoid a permanent loading/blank screen

## Featured Projects

| Project | Focus | Main Technologies |
| --- | --- | --- |
| [Financial Market Big Data Pipeline](https://github.com/mhmd-ebrahim-1/financial-market-pipeline) | Data Engineering & BI | PySpark, HDFS, Airflow, Snowflake, Power BI, Docker |
| [AI Faculty Regulations Assistant](https://github.com/mhmd-ebrahim-1/RAG_KSUAI) | Arabic RAG / NLP | Python, RAG, TF-IDF, Flask, Ollama |
| [Fruit Classification & Quality System](https://github.com/mhmd-ebrahim-1/fruit-classification) | Computer Vision | YOLOv8, PyTorch, OpenCV, Flask, Flutter, Arduino |
| [Healthcare Analytics](https://github.com/mhmd-ebrahim-1/Healthcare-Analytics) | Data Analytics & BI | Python, SQL, Pandas, PostgreSQL, Power BI |

Additional projects are available in the portfolio's Projects section.

## Tech Stack

### Frontend

- React 18
- Vite 5
- Tailwind CSS 3
- React Router DOM
- Framer Motion
- Lucide React

### Data & AI

- Python
- Pandas / NumPy
- SQL
- Scikit-learn
- TensorFlow / Keras
- PyTorch
- NLP / RAG
- OpenCV / YOLOv8
- Power BI / DAX
- PySpark
- HDFS
- Apache Airflow
- Snowflake
- Docker

## Project Structure

```text
My_Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages CI/CD
├── public/
│   ├── cv.pdf                  # Downloadable CV
│   ├── profile.jpg             # Profile image
│   └── projects/               # Project artwork / thumbnails
├── src/
│   ├── components/             # Shared UI components
│   │   ├── Cursor.jsx
│   │   ├── Loader.jsx
│   │   └── Navbar.jsx
│   ├── data/
│   │   └── index.js            # Portfolio content/data
│   ├── hooks/
│   │   └── index.js            # Reusable React hooks
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── CV.jsx
│   │   └── Certificates.jsx
│   ├── App.jsx                  # App shell + routing
│   ├── index.css                # Global styles
│   └── main.jsx                 # React entry point
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Local Development

### Requirements

- Node.js 18+
- npm 9+

### Install

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Open the local URL shown by Vite, usually:

```text
http://localhost:5173/
```

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Deployment

The portfolio is configured for GitHub Pages at:

**https://mhmd-ebrahim-1.github.io/My_Portfolio/**

Every push to `main` triggers the GitHub Actions deployment workflow. The workflow installs dependencies, builds the Vite application, and publishes the generated `dist` directory to the `gh-pages` branch.

Manual deployment is also available:

```bash
npm run deploy
```

The Vite configuration uses:

```js
base: '/My_Portfolio/'
```

so assets and routes resolve correctly under the GitHub Pages project path.

## Content Management

Most portfolio content is centralized in:

```text
src/data/index.js
```

Update that file when changing:

- Profile information
- Skills and tools
- Projects and GitHub links
- Experience
- Education
- Certificates

Update these files when needed:

```text
public/cv.pdf       # New CV
public/profile.jpg  # New profile photo
public/projects/    # Project thumbnails
```

## Design Principles

The UI intentionally follows a simple hierarchy:

1. **Who I am** — clear professional positioning
2. **What I do** — Data Analytics, ML, GenAI, and Data Engineering
3. **What I built** — real projects with GitHub links
4. **What I know** — focused skills and tools
5. **How to contact me** — CV, GitHub, LinkedIn, and email

Animations and visual effects are kept subtle so they do not interfere with usability or page loading.

## Contact

- **Email:** mohammedebrahim1177@gmail.com
- **GitHub:** https://github.com/mhmd-ebrahim-1
- **LinkedIn:** https://www.linkedin.com/in/mhmd-ebrahim1/
- **Portfolio:** https://mhmd-ebrahim-1.github.io/My_Portfolio/

## License

This project is released under the MIT License. See [LICENSE](LICENSE) for details.
