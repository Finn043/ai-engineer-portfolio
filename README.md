# Bao Tin Luong | AI Engineer Portfolio

Static portfolio for AI Engineer, RAG, applied machine learning, and data-pipeline work. Its visual system follows the current one-page CV: white page, serif name and section headings, thin violet rules, compact technical detail, and clear experience and project sections.

## Sections and interactions

- Hero profile with a responsive portrait, counters, and downloadable AI CV.
- Technical skills, expandable experience timeline, and project cards with detailed metric and implementation modals.
- Education, capstone project leadership, and certifications.
- About modal with the existing cursor-tracking, clickable mascot.
- Responsive navigation: desktop links collapse to a menu below 920px.

The order follows the CV: summary, technical skills, experience, selected projects, then education and certifications. Experience dates and claims should stay aligned with the latest user-approved CV; confirm conflicts with older saved versions before changing facts.

## Project list

- [BJJ Research Assistant](https://github.com/Finn043/RAG_Project) · [live demo](https://bjj-research-assistant-finn043.netlify.app)
- [Melbourne Weather Lab](https://github.com/Finn043/melbourne-weather-lab) · [live demo](https://melbourne-weather-lab-finn043.netlify.app)
- [Photo Album Cloud Architecture](https://github.com/Finn043/Photo-Album-Cloud-Architecture) · architecture proposal/report, not a deployed system
- [ML Engine / Melbourne House Price Prediction](https://github.com/Finn043/advanced-house-price-prediction-ml-engine)
- [Customer Segmentation](https://github.com/Finn043/customer-segmentation-app)

## Build and preview

No framework build is required. `build.sh` copies the page and its required assets into `dist/`.

```sh
sh build.sh
python3 -m http.server 8000 --directory dist
```

Open <http://127.0.0.1:8000>.

## Deployment

- Live site: <https://bao-tin-luong-ai-portfolio.netlify.app>
- GitHub: <https://github.com/Finn043/ai-engineer-portfolio>
- Netlify builds with `sh build.sh` and publishes `dist/`.
