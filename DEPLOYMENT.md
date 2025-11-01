# GitHub Pages Deployment Guide

## Setup Instructions for hassnain0.github.io

### Prerequisites
1. Make sure you have `gh-pages` installed:
```bash
npm install --save-dev gh-pages
```

### Option 1: User Page (hassnain0.github.io - Root URL)

**Repository Setup:**
1. Create a new repository on GitHub named exactly: `hassnain0.github.io`
2. Push your code to the `main` branch
3. Go to repository Settings → Pages
4. Set Source to: `main` branch, `/ (root)` folder
5. Click Save

**Your site will be live at:** `https://hassnain0.github.io`

**Note:** For user pages, GitHub serves from the `main` branch, not `gh-pages`.

### Option 2: Project Page (hassnain0.github.io/react-portfolio-template)

**Repository Setup:**
1. Keep your current repository name (or any name)
2. Deploy using:
```bash
npm run deploy
```
3. Go to repository Settings → Pages
4. Set Source to: `gh-pages` branch
5. Click Save

**Your site will be live at:** `https://hassnain0.github.io/react-portfolio-template`

**For Project Pages, update homepage in package.json:**
```json
"homepage": "https://hassnain0.github.io/react-portfolio-template"
```

## Deployment Commands

After setup, every time you make changes:
```bash
npm run deploy
```

This will:
1. Build your app (`npm run build`)
2. Deploy to `gh-pages` branch
3. Your site updates automatically (may take 1-2 minutes)

## Troubleshooting

- **Blank page?** Check browser console for errors
- **404 errors?** Make sure `homepage` in package.json matches your GitHub Pages URL
- **Assets not loading?** Rebuild with correct homepage URL: `npm run build`

