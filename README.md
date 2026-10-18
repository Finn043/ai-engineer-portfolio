# Bao Tin Luong | AI Engineer Portfolio

Standalone AI Engineer portfolio for LLM applications, RAG, applied machine learning, and data-pipeline work. It retains the original dark, video-backed portfolio design; the AI version changes the candidate content and project evidence while keeping the established visual system and interactions.

## Keep the two portfolios separate

- **AI Engineer:** <https://bao-tin-luong-ai-portfolio.netlify.app>
- **Data Analyst:** <https://tin-luong-portfolio.netlify.app>
- **AI portfolio source:** <https://github.com/Finn043/ai-engineer-portfolio>

Do not combine these sites or deployments. See [`AGENTS.md`](AGENTS.md) for the user-approved design and content boundaries.

## Sections and interactions

The page order is Hero, Experience, Projects, Tech Stack, Education & Certifications, and Contact. It has a looping video background, portrait-led hero, animated experience metrics, expandable experience timeline, project cards with overview/data/stack/GitHub/live links, technology logo grid, and an About modal with the existing cursor-tracking and clickable mascot.

Project and experience content is maintained in `main.js`; layout is in `index.html` and `styles.css`. The expandable timeline uses one `.timeline-node` element per entry so each marker remains aligned to the vertical rail while a card opens.

## Project list

- [BJJ Research Assistant](https://github.com/Finn043/RAG_Project) · [live demo](https://bjj-research-assistant-finn043.netlify.app)
- [Melbourne Weather Lab](https://github.com/Finn043/melbourne-weather-lab) · [live demo](https://melbourne-weather-lab-finn043.netlify.app)
- [Photo Album Cloud Architecture](https://github.com/Finn043/Photo-Album-Cloud-Architecture) · architecture proposal/report, not a deployed system
- [ML Engine / Melbourne House Price Prediction](https://github.com/Finn043/advanced-house-price-prediction-ml-engine)
- [Customer Segmentation](https://github.com/Finn043/customer-segmentation-app)

## Build and preview

No framework build is required. `build.sh` copies the page and required assets into `dist/`.

```sh
sh build.sh
python3 -m http.server 8000 --directory dist
```

Open <http://127.0.0.1:8000>.

## Deployment

Netlify builds with `sh build.sh` and publishes `dist/`. This folder is connected to the separate Netlify project for the AI portfolio; do not deploy it to the Data portfolio site.
