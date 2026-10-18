# AI Portfolio Working Context

## Product boundary

This folder is the standalone AI Engineer portfolio. Keep it separate from the Data Analyst portfolio and do not merge their content, deployment, or visual system.

- AI portfolio: https://bao-tin-luong-ai-portfolio.netlify.app
- Data portfolio: https://tin-luong-portfolio.netlify.app
- AI portfolio repository: https://github.com/Finn043/ai-engineer-portfolio

## User-approved direction

Preserve the restored dark, video-backed frontend from the original portfolio: pixel display typography, right-side portrait, expandable experience timeline, project cards with detail modals, tech grid, and About modal with its interactive mascot. The user asked for content updates while keeping this frontend. Do not redesign, change themes, or reorder sections unless asked directly.

Current section order: Hero → Experience → Projects → Tech Stack → Education & Certifications → Contact. Keep Projects before Tech Stack. The Home nav active marker is a short underline, not three dots. Keep “Tech Stack” on one line at desktop widths; navigation collapses to the mobile menu below 920px.

## Sources of truth

- `index.html`: page structure, navigation, hero and About modal copy.
- `main.js`: experience, project, and skills data; counters; interactions; timeline markup; mascot behavior.
- `styles.css`: visual system, responsive rules, and animation/layout behavior.
- `assets/bao-tin-luong-ai-resume.pdf`: current AI CV download.
- `README.md`: human-facing setup and deployment notes.

Before changing anything, inspect `git status` and the relevant source. Preserve unrelated/uncommitted work. Never infer candidate dates, metrics, responsibilities, or project deployment status; check the current approved CV and ask or flag conflicts when sources disagree.

## Candidate/content guardrails

- Position Bao as an early-career AI Engineer focused on LLM applications, RAG, applied ML, and data foundations.
- MoMo: analytics data model for an AI chatbot project.
- CoverGo: supported an insurance-document RAG project; do not imply sole ownership.
- Filum.ai: Data Analyst work, including analytics and pipelines.
- Photo Album Cloud Architecture is an architecture proposal/report, not a deployed cloud product.
- Keep the AI site distinct from the Data Analyst portfolio at `tin-luong-portfolio.netlify.app`.

## Build, validate, deploy

```sh
sh build.sh
node --check main.js
python3 -m http.server 8000 --directory dist
```

Netlify publishes `dist/` using `sh build.sh`. The AI site has its own Netlify project and GitHub repository. Deploy only when the user requests a live update or the active task clearly continues an already authorized deployment.
