# Mohamed Ebrahim — Portfolio

> Personal portfolio for **Mohamed Ebrahim**, an Artificial Intelligence student focused on **Data Analytics, Machine Learning, Generative AI, and Data Engineering**.

[![Live Portfolio](https://img.shields.io/badge/Live%20Portfolio-00f5d4?style=for-the-badge&logo=github&logoColor=081018)](https://mhmd-ebrahim-1.github.io/My_Portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-18181f?style=for-the-badge&logo=github)](https://github.com/mhmd-ebrahim-1)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/mhmd-ebrahim1/)

## Overview

A responsive React portfolio showcasing my work across **Data Analytics, Machine Learning, Generative AI, Computer Vision, and Data Engineering**. The site is built for recruiters, internship opportunities, and freelance clients who need a fast overview of my skills and real projects.

## Highlights

- Modern responsive React portfolio
- Professional Data Analyst & ML Engineer positioning
- Real GitHub projects with direct repository links
- Project categories and technology tags
- Project thumbnails stored in `public/projects/`
- Dedicated Home, About, Projects, CV, and Certificates sections
- Responsive mobile navigation
- Lightweight Framer Motion animations
- GitHub Pages deployment through GitHub Actions
- Correct Vite `/My_Portfolio/` base path
- Updated CV PDF served from `public/My_Cv_Update.pdf`
- Non-blocking startup and runtime recovery handling

## Featured Projects

| Project | Focus | Main Technologies |
| --- | --- | --- |
| [Financial Market Big Data Pipeline](https://github.com/mhmd-ebrahim-1/financial-market-pipeline) | Data Engineering & BI | PySpark, HDFS, Airflow, Snowflake, Power BI, Docker |
| [AI Faculty Regulations Assistant](https://github.com/mhmd-ebrahim-1/RAG_KSUAI) | Arabic RAG / NLP | Python, RAG, TF-IDF, Flask, Ollama |
| [Fruit Classification & Quality System](https://github.com/mhmd-ebrahim-1/fruit-classification) | Computer Vision | YOLOv8, PyTorch, OpenCV, Flask, Flutter, Arduino |
| [Healthcare Analytics](https://github.com/mhmd-ebrahim-1/Healthcare-Analytics) | Data Analytics & BI | Python, SQL, Pandas, PostgreSQL, Power BI |

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
├── .github/workflows/deploy.yml   # GitHub Pages CI/CD
├── public/
│   ├── My_Cv_Update.pdf           # Current downloadable CV
│   ├── profile.jpg                # Profile photo
│   ├── gallery/                   # Personal photo assets
│   └── projects/                  # Project thumbnails
├── src/
│   ├── components/                # Shared UI
│   ├── config/contact.js          # Central contact email
│   ├── data/index.js              # Portfolio content
│   ├── hooks/index.js             # Reusable hooks
│   ├── pages/                     # Portfolio pages
│   ├── App.jsx                    # App shell + routing
│   ├── index.css                  # Global styles
│   └── main.jsx                   # React entry point
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

### Start

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## GitHub Pages Deployment

Live site:

**https://mhmd-ebrahim-1.github.io/My_Portfolio/**

Every push to `main` triggers the deployment workflow. It installs dependencies, runs the Vite production build, and publishes the production site to GitHub Pages.

Manual deployment:

```bash
npm run deploy
```

The Vite base path is:

```js
base: '/My_Portfolio/'
```

## Content Management

Main portfolio data:

```text
src/data/index.js
```

Contact email:

```text
src/config/contact.js
```

Assets:

```text
public/profile.jpg             # Profile photo
public/gallery/                # Personal gallery assets
public/My_Cv_Update.pdf       # Current CV
public/projects/               # Project thumbnails
```

The current portfolio contact email is:

**mhmd_ebrahim_1@outlook.com**

## Design Principles

1. **Clear positioning** — Data Analyst & ML Engineer
2. **Real work first** — projects and GitHub repositories
3. **Readable UI** — strong hierarchy and concise content
4. **Performance** — no blocking loaders or unnecessary effects
5. **Responsive** — desktop, tablet, and mobile support

## Contact

- **Email:** mhmd_ebrahim_1@outlook.com
- **GitHub:** https://github.com/mhmd-ebrahim-1
- **LinkedIn:** https://www.linkedin.com/in/mhmd-ebrahim1/
- **Portfolio:** https://mhmd-ebrahim-1.github.io/My_Portfolio/

## License

This project is released under the MIT License. See [LICENSE](LICENSE) for details.
