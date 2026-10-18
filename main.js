const techStack = [
  ['Python', 'python', '3776ab', 'PY'],
  ['NumPy', 'numpy', '013243', 'NP'],
  ['Pandas', 'pandas', '150458', 'PD'],
  ['SQL', '', '', 'SQL'],
  ['BigQuery', 'googlebigquery', '669df6', 'BQ'],
  ['PostgreSQL', 'postgresql', '4169e1', 'PG'],
  ['LangChain', 'langchain', '1c3c3c', 'LC'],
  ['FAISS', '', '', 'FX'],
  ['OpenAI API', 'openai', '412991', 'AI'],
  ['Looker Studio', 'looker', '4285f4', 'LS'],
  ['dbt', 'dbt', 'ff694b', 'dbt'],
  ['Git', 'git', 'f03c2e', 'GIT'],
  ['FastAPI', 'fastapi', '009688', 'FA'],
  ['TypeScript', 'typescript', '3178c6', 'TS'],
  ['React', 'react', '61dafb', 'RE'],
  ['AWS', 'amazonaws', '232f3e', 'AWS'],
  ['scikit-learn', 'scikitlearn', 'f7931e', 'SK'],
  ['TensorFlow', 'tensorflow', 'ff6f00', 'TF']
];

const projects = [
  {
    title: 'Photo Album Cloud Architecture',
    type: 'AWS · serverless architecture design',
    image: 'assets/photo-album-architecture-preview.svg',
    short: 'A serverless, event-driven AWS architecture for photo uploads, metadata, global delivery, and asynchronous thumbnail processing.',
    overview: 'Co-designed a cloud architecture for a photo album application as a team architecture report. The proposal replaces a traditional web/database deployment with managed AWS services for static hosting, media delivery, upload APIs, metadata, and asynchronous image processing.',
    details: [
      'Serves the static frontend and media through S3 and CloudFront; API Gateway routes photo upload and listing requests to AWS Lambda handlers.',
      'Stores photo metadata in DynamoDB and publishes upload events to SNS so a separate Lambda can create thumbnails asynchronously and save them to S3.',
      'Documents IAM least-privilege considerations, CloudWatch monitoring, scaling, cost assumptions, Route 53/ACM, and an ECS/Fargate alternative.',
      'This repository contains an architecture proposal and report; the proposed system is not represented as a deployed application.'
    ],
    stack: ['AWS', 'Amazon S3', 'CloudFront', 'API Gateway', 'Lambda', 'DynamoDB', 'SNS', 'CloudWatch', 'IAM'],
    github: 'https://github.com/Finn043/Photo-Album-Cloud-Architecture',
    live: '',
    liveLabel: '',
    progress: 100,
    metrics: [
      { text: 'Event-driven', label: 'thumbnail workflow' },
      { text: 'Serverless', label: 'proposed architecture' },
      { text: 'AWS', label: 'cloud platform' }
    ]
  },
  {
    title: 'Melbourne Weather Lab',
    type: 'Machine learning · browser inference',
    image: 'assets/weather-lab-preview.svg',
    short: 'A NOAA-powered weather analysis app with three trained models and client-side inference in a deployed React application.',
    overview: 'Built an end-to-end weather data and modeling workflow using daily NOAA observations from Melbourne Airport. Python preprocessing prepares the station data and model inputs, while exported weights and preprocessing parameters power inference in a static React/TypeScript application without a runtime API server.',
    details: [
      'Parsed fixed-width GHCN-Daily observations, converted units, created a continuous daily index, handled missing values, and generated cyclic calendar features.',
      'Trained an LSTM to estimate next-day precipitation from a 30-day sequence, a Linear Regression baseline for maximum temperature, and K-Means weather-pattern clusters.',
      'Evaluated the temperature baseline on a chronological holdout: MAE 3.67 °C, RMSE 4.69 °C, and R² 0.488. The LSTM demo is an educational estimate, not an operational forecast.',
      'Exported model weights, scalers, and observations as JSON, then implemented typed browser-side inference in React and TypeScript for static Netlify hosting.'
    ],
    stack: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'TensorFlow / Keras', 'React', 'TypeScript', 'Netlify'],
    github: 'https://github.com/Finn043/melbourne-weather-lab',
    live: 'https://melbourne-weather-lab-finn043.netlify.app',
    liveLabel: 'Try Live Demo',
    progress: 100,
    metrics: [
      { value: 3, prefix: '', suffix: '', decimals: 0, label: 'machine-learning models' },
      { value: 3.67, prefix: '', suffix: ' °C', decimals: 2, label: 'temperature baseline MAE' },
      { text: 'JSON', label: 'browser inference artifacts' }
    ]
  },
  {
    title: 'BJJ Research Assistant',
    type: 'RAG application · live demo',
    image: 'assets/bjj-rag-preview.png',
    short: 'A source-grounded assistant that answers questions over Brazilian Jiu-Jitsu research papers and cites the source page.',
    overview: 'Built a retrieval-augmented research assistant over a small corpus of Brazilian Jiu-Jitsu papers. The production web app extracts PDF text by page, creates overlapping chunks, embeds them, retrieves relevant passages with cosine similarity, and asks the language model to answer from that evidence with file and page citations.',
    details: [
      'Production uses PDF.js, 1,200-character chunks with 200-character overlap, text-embedding-3-small, cosine similarity, a 0.2 relevance threshold, and up to five retrieved chunks.',
      'The grounded prompt asks gpt-4o-mini to cite every factual sentence and abstain when the supplied sources are insufficient.',
      'Built a Python learning path with LangChain and FAISS alongside the TypeScript Netlify production function, which computes cosine similarity over the small fixed corpus.'
    ],
    stack: ['Python', 'TypeScript', 'LangChain', 'FAISS', 'OpenAI Embeddings', 'PDF.js', 'Netlify Functions'],
    github: 'https://github.com/Finn043/RAG_Project',
    live: 'https://bjj-research-assistant-finn043.netlify.app',
    liveLabel: 'Try Live Demo',
    progress: 100,
    metrics: [
      { value: 2, prefix: '', suffix: '', decimals: 0, label: 'research PDFs' },
      { value: 8, prefix: '', suffix: '', decimals: 0, label: 'indexed pages' },
      { value: 5, prefix: '', suffix: '', decimals: 0, label: 'maximum chunks retrieved' }
    ]
  },
  {
    title: 'Melbourne House Price Prediction',
    type: 'Machine learning · learning engine',
    image: 'assets/house-price-preview.svg',
    short: 'A NumPy linear-regression engine that makes loss functions and gradient-descent training visible in a small web app.',
    overview: 'Implemented a linear regression learning engine directly with NumPy and connected it to a FastAPI service and React/TypeScript interface. Users can select a loss function and optimizer, inspect training loss across epochs, and request a price estimate from the trained model.',
    details: [
      'Implemented MSE, MAE, and Huber loss with Batch Gradient Descent and SGD.',
      'Prepared numeric and one-hot encoded features and standardized inputs and target values.',
      'The current training flow reports loss on the full dataset and does not yet measure generalization on a held-out test set.'
    ],
    stack: ['Python', 'NumPy', 'FastAPI', 'React', 'TypeScript', 'Gradient Descent'],
    github: 'https://github.com/Finn043/advanced-house-price-prediction-ml-engine',
    live: '',
    liveLabel: '',
    progress: 100,
    metrics: [
      { value: 3, prefix: '', suffix: '', decimals: 0, label: 'loss functions' },
      { value: 2, prefix: '', suffix: '', decimals: 0, label: 'optimizers' },
      { text: 'NumPy', label: 'model implementation' }
    ]
  },
  {
    title: 'Customer Segmentation',
    type: 'Machine learning · notebook',
    image: 'assets/customer-segmentation-preview.svg',
    short: 'An exploratory K-Means and PCA implementation built from scratch with NumPy on the Mall Customers dataset.',
    overview: 'A compact notebook that explores unsupervised learning by implementing K-Means and PCA with NumPy. It standardizes age, annual income, and spending score, compares candidate cluster counts, and profiles the resulting groups for exploratory interpretation.',
    details: [
      'Implemented k-means++ initialization and Lloyd assignment/update steps without delegating clustering to a model library.',
      'Compared cluster counts with within-cluster SSE and silhouette scores; K=5 is shown as an example, not a uniquely correct answer.',
      'Implemented PCA from covariance eigendecomposition to visualize groups in two dimensions while K-Means uses all three features.'
    ],
    stack: ['Python', 'NumPy', 'K-Means', 'PCA', 'Jupyter Notebook'],
    github: 'https://github.com/Finn043/customer-segmentation-app',
    live: '',
    liveLabel: '',
    progress: 100,
    metrics: [
      { value: 3, prefix: '', suffix: '', decimals: 0, label: 'customer features' },
      { value: 10, prefix: '', suffix: '', decimals: 0, label: 'cluster counts compared' },
      { text: 'PCA', label: 'visualization method' }
    ]
  }
];

const experience = [
  {
    period: '2026',
    dates: 'Nov 2025 – Present',
    company: 'Filum.ai',
    role: 'Data Analyst',
    summary: 'Analytics, pipeline, and data-modeling work across business reporting and customer insights.',
    impact: 'Built BigQuery lead-scoring pipelines that increased sales conversion by 15% and maintained data models across 50+ KPIs.',
    bullets: [
      'Engineered automated lead-scoring classification pipelines in BigQuery using customer behavioral attributes and interaction data, increasing sales conversion rates by 15%.',
      'Architected, validated, and maintained centralized data models across touchpoints, tracking 50+ commercial KPIs for operational and predictive analytics.',
      'Identified churn signals and feature-adoption patterns across user segments, translating quantitative analysis into recommendations for Product and Sales teams.'
    ],
    tools: ['Python', 'SQL', 'Data Pipelines', 'Data Modeling', 'Analytics']
  },
  {
    period: '2025–26',
    dates: 'May 2025 – Feb 2026',
    company: 'CoverGo',
    role: 'AI Engineer Intern',
    summary: 'Supported RAG workflow development for medical insurance document retrieval.',
    impact: 'Supported model-response review and reduced manual validation effort by 25%.',
    bullets: [
      'Supported production RAG workflow development for complex medical insurance document retrieval, focusing on context accuracy and source grounding.',
      'Constructed 200+ Q&A validation examples to benchmark model outputs, identify hallucinations, and track domain-specific exceptions.',
      'Developed Python and API-based retrieval automation, reducing manual QA review time by 25% and cutting information retrieval response time.'
    ],
    tools: ['RAG', 'Insurance AI', 'Medical Documents', 'Knowledge Retrieval']
  },
  {
    period: '2024–25',
    dates: 'Nov 2024 – Apr 2025',
    company: 'MoMo',
    role: 'Data Analyst Intern',
    summary: 'Built the analytics data foundation for an AI conversational chatbot.',
    impact: 'Supported a 10% lift in chatbot engagement and maintained two data pipelines processing 1M+ rows daily at 99.95% uptime.',
    bullets: [
      'Architected analytics schemas for chatbot intent logs, session metadata, and dialogue turns to support scalable reporting.',
      'Analyzed dialogue fallbacks, session drop-offs, and A/B test variants, contributing to a 10% lift in chatbot user engagement.',
      'Maintained two production data pipelines processing 1M+ rows daily with 99.95% uptime, ensuring clean feature extraction and data integrity.'
    ],
    tools: ['SQL', 'Data Modeling', 'AI Chatbot Analytics', 'Pipeline Reliability']
  }
];

const techGrid = document.querySelector('#tech-grid');
const projectGrid = document.querySelector('#project-grid');
const experienceList = document.querySelector('#experience-list');
const modal = document.querySelector('#project-modal');
const aboutModal = document.querySelector('#about-modal');
const closeModal = document.querySelector('.modal-close');

techGrid.innerHTML = techStack.map(([name, slug, color, mark]) => `
  <article class="tech-card ${slug ? '' : 'logo-fallback'}" data-mark="${mark}">
    <div class="tech-icon" data-mark="${mark}">
      ${slug ? `<img src="https://cdn.simpleicons.org/${slug}/${color}" alt="${name} logo" loading="lazy" onerror="this.parentElement.parentElement.classList.add('logo-fallback');this.remove()">` : ''}
    </div>
    <span>${name}</span>
  </article>
`).join('');

const featuredProjectOrder = [2, 1, 0, 3, 4];
projectGrid.innerHTML = featuredProjectOrder.map((index) => {
  const project = projects[index];
  return `
  <button class="project-card" type="button" data-project="${index}" style="--progress: ${project.progress}%">
    <img src="${project.image}" alt="${project.title} preview" loading="lazy">
    <div>
      <span>${project.type}</span>
      <h3>${project.title}</h3>
      <p>${project.short}</p>
      <div class="project-progress">
        <div class="project-progress-row"><span>Completion</span><strong data-progress-count="${project.progress}">0%</strong></div>
        <div class="project-progress-track"><i class="project-progress-fill"></i></div>
      </div>
    </div>
  </button>
`;
}).join('');

experienceList.innerHTML = experience.map((item, index) => `
  <button class="timeline-item ${index === 0 ? 'active' : ''}" type="button" data-experience="${index}" aria-expanded="${index === 0}">
    <div class="timeline-period">${item.period}</div>
    <div>
      <div class="timeline-company">${item.company}</div>
      <h3 class="timeline-role">${item.role}</h3>
      <p class="timeline-summary">${item.summary}</p>
    </div>
    <div class="timeline-open">${index === 0 ? '-' : '+'}</div>
    <div class="timeline-detail">
      <div>
        <p class="timeline-dates">${item.dates}</p>
        <ul>${item.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}</ul>
        <div class="timeline-impact"><strong>Impact</strong><span>${item.impact}</span></div>
        <div class="timeline-tags">${item.tools.map((tool) => `<span>${tool}</span>`).join('')}</div>
      </div>
    </div>
  </button>
`).join('');

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function startCounters() {
  document.querySelectorAll('.stat').forEach((stat, index) => {
    const target = Number(stat.dataset.target);
    const suffix = stat.dataset.suffix || '';
    const decimals = Number(stat.dataset.decimals || 0);
    const value = stat.querySelector('strong');
    const suffixNode = stat.querySelector('span');
    suffixNode.textContent = suffix;

    setTimeout(() => {
      const start = performance.now();
      const duration = 1500 + index * 80;
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        value.textContent = (target * easeOutCubic(progress)).toFixed(decimals);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }, 480 + index * 90);
  });
}

const statObserver = new IntersectionObserver((entries, observer) => {
  if (entries.some((entry) => entry.isIntersecting)) {
    startCounters();
    observer.disconnect();
  }
}, { threshold: 0.25 });
statObserver.observe(document.querySelector('.stats'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.16 });
document.querySelectorAll('.reveal').forEach((node) => revealObserver.observe(node));

const progressObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const card = entry.target;
    card.classList.add('progress-visible');
    const node = card.querySelector('[data-progress-count]');
    const target = Number(node.dataset.progressCount);
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / 1100, 1);
      node.textContent = `${Math.round(target * easeOutCubic(progress))}%`;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    observer.unobserve(card);
  });
}, { threshold: 0.3 });
document.querySelectorAll('.project-card').forEach((card) => progressObserver.observe(card));

document.querySelector('.page').addEventListener('pointermove', (event) => {
  if (event.pointerType !== 'mouse' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const rect = event.currentTarget.getBoundingClientRect();
  const mx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
  const my = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  event.currentTarget.style.setProperty('--mx', mx.toFixed(3));
  event.currentTarget.style.setProperty('--my', my.toFixed(3));
});

document.querySelector('.page').addEventListener('pointerleave', (event) => {
  event.currentTarget.style.setProperty('--mx', '0');
  event.currentTarget.style.setProperty('--my', '0');
});

projectGrid.addEventListener('click', (event) => {
  const card = event.target.closest('[data-project]');
  if (!card) return;
  const project = projects[Number(card.dataset.project)];
  modal.querySelector('.modal-image').src = project.image;
  modal.querySelector('.modal-image').alt = `${project.title} preview`;
  modal.querySelector('.modal-kicker').textContent = project.type;
  modal.querySelector('#modal-title').textContent = project.title;
  modal.querySelector('.modal-overview').textContent = project.overview;
  modal.querySelector('.modal-data').innerHTML = project.metrics.map((metric) => `
    <article>
      <strong
        ${metric.text ? '' : `data-count="${metric.value}" data-prefix="${metric.prefix}" data-suffix="${metric.suffix}" data-decimals="${metric.decimals}"`}
      >${metric.text || `${metric.prefix}0${metric.suffix}`}</strong>
      <span>${metric.label}</span>
    </article>
  `).join('');
  modal.querySelector('.modal-points').innerHTML = project.details.map((detail) => `<p>${detail}</p>`).join('');
  modal.querySelector('.modal-stack').innerHTML = project.stack.map((item) => `<span>${item}</span>`).join('');
  modal.querySelector('.modal-links').innerHTML = [
    project.github ? `<a href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>` : '',
    project.live ? `<a href="${project.live}" target="_blank" rel="noreferrer">${project.liveLabel}</a>` : '',
    project.download ? `<a href="${project.download}" download>${project.downloadLabel}</a>` : ''
  ].join('') || '<span class="empty-link">Links will be added when the project is published.</span>';
  modal.showModal();
  animateModalMetrics();
});

function formatMetric(value, prefix, suffix, decimals) {
  const number = value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
  return `${prefix}${number}${suffix}`;
}

function animateModalMetrics() {
  modal.querySelectorAll('[data-count]').forEach((node, index) => {
    const target = Number(node.dataset.count);
    const prefix = node.dataset.prefix || '';
    const suffix = node.dataset.suffix || '';
    const decimals = Number(node.dataset.decimals || 0);
    const start = performance.now() + index * 90;
    const duration = 900 + index * 120;

    function tick(now) {
      const progress = Math.min(Math.max((now - start) / duration, 0), 1);
      node.textContent = formatMetric(target * easeOutCubic(progress), prefix, suffix, decimals);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

experienceList.addEventListener('click', (event) => {
  const selected = event.target.closest('[data-experience]');
  if (!selected) return;
  experienceList.querySelectorAll('.timeline-item').forEach((item) => {
    const active = item === selected;
    item.classList.toggle('active', active);
    item.setAttribute('aria-expanded', String(active));
    item.querySelector('.timeline-open').textContent = active ? '-' : '+';
  });
});

function mascotCell(index) {
  return `${(index % 3) * 50}% ${Math.floor(index / 3) * 50}%`;
}

function setMascotLayer(layer, sheet, index) {
  if (!layer) return;
  layer.style.backgroundImage = `url(${sheet})`;
  layer.style.backgroundPosition = mascotCell(index);
}

function initMascot(mascotButton) {
  const directionLayer = mascotButton.querySelector('.mascot-directions');
  const reactionLayer = mascotButton.querySelector('.mascot-reactions');
  const directions = ['up-left', 'up', 'up-right', 'left', 'center', 'right', 'down-left', 'down', 'down-right'];
  const reactions = ['blink', 'heart', 'sparkle', 'surprised', 'wink', 'bashful', 'sleepy', 'dizzy', 'delighted'];
  const clockwise = ['right', 'down-right', 'down', 'down-left', 'left', 'up-left', 'up', 'up-right'];
  let boops = 0;
  let lastBoop = 0;
  let reactionTimer;

  setMascotLayer(directionLayer, mascotButton.dataset.directions, directions.indexOf('center'));
  setMascotLayer(reactionLayer, mascotButton.dataset.reactions, 0);

  if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
    addEventListener('pointermove', (event) => {
      const box = mascotButton.getBoundingClientRect();
      if (!box.width || !box.height) return;
      const dx = event.clientX - (box.left + box.width / 2);
      const dy = event.clientY - (box.top + box.height / 2);
      if (Math.hypot(dx, dy) < 70) {
        setMascotLayer(directionLayer, mascotButton.dataset.directions, directions.indexOf('center'));
        return;
      }
      const sector = (Math.round(Math.atan2(dy, dx) / (Math.PI / 4)) + 8) % 8;
      setMascotLayer(directionLayer, mascotButton.dataset.directions, directions.indexOf(clockwise[sector]));
    }, { passive: true });
  }

  mascotButton.addEventListener('click', () => {
    clearTimeout(reactionTimer);
    const now = Date.now();
    boops = now - lastBoop < 1600 ? boops + 1 : 1;
    lastBoop = now;
    const reaction = boops >= 4 ? 'dizzy' : ['blink', 'heart', 'sparkle', 'delighted'][(boops - 1) % 4];
    if (boops >= 4) boops = 0;
    setMascotLayer(reactionLayer, mascotButton.dataset.reactions, reactions.indexOf(reaction));
    mascotButton.classList.remove('is-booped');
    void mascotButton.offsetWidth;
    mascotButton.classList.add('is-reacting', 'is-booped');
    reactionTimer = setTimeout(() => mascotButton.classList.remove('is-reacting', 'is-booped'), 620);
  });
}

document.querySelector('.hero-portrait').addEventListener('click', () => aboutModal.showModal());
document.querySelectorAll('[data-mascot]').forEach(initMascot);
document.querySelectorAll('.modal-close').forEach((button) => {
  button.addEventListener('click', () => button.closest('dialog').close());
});
document.querySelectorAll('dialog').forEach((dialog) => {
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
});

const burger = document.querySelector('.burger');
const overlay = document.querySelector('.mobile-overlay');
const mobileMenu = document.querySelector('.mobile-menu');
const navigationLinks = document.querySelectorAll('.nav-pill a, .mobile-menu a');

function setMenu(open) {
  burger.setAttribute('aria-expanded', String(open));
  overlay.hidden = !open;
  mobileMenu.hidden = !open;
  document.body.classList.toggle('menu-open', open);
}

burger.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
overlay.addEventListener('click', () => setMenu(false));
mobileMenu.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});
addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setMenu(false);
    if (modal.open) modal.close();
    if (aboutModal.open) aboutModal.close();
  }
});
addEventListener('resize', () => {
  if (innerWidth > 920) setMenu(false);
});

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navigationLinks.forEach((link) => {
      const active = link.hash === `#${entry.target.id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  });
}, { rootMargin: '-28% 0px -62% 0px' });
document.querySelectorAll('#home, #tech, #experience, #projects, #credentials, #contact').forEach((section) => sectionObserver.observe(section));
