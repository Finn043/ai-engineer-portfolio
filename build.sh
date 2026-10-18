#!/bin/sh
set -eu

mkdir -p dist/assets dist/fonts dist/mascots
cp index.html styles.css main.js dist/
cp assets/logo.webp assets/portrait.png assets/bjj-rag-preview.png assets/weather-lab-preview.svg assets/photo-album-architecture-preview.svg assets/house-price-preview.svg assets/customer-segmentation-preview.svg assets/bao-tin-luong-ai-resume.pdf dist/assets/
cp fonts/GeistPixel-Circle.woff2 dist/fonts/
cp mascots/bao-directions.webp mascots/bao-reactions.webp dist/mascots/
