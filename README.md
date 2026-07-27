# Jiarun Fu · Academic GitHub Homepage

A minimalist, high-end AI research homepage designed for GitHub Pages.

## Included

- Responsive bilingual website (English / 中文)
- Academic portrait and AI-inspired neural background
- Research themes, selected publications, experience, service, and contact
- Accessibility support and reduced-motion mode
- GitHub Actions workflow for automatic Pages deployment
- Optional GitHub profile README in `profile-readme/README.md`
- Detailed Chinese deployment guide in `DEPLOYMENT.zh-CN.md`

## Before publishing

Search the repository for `YOUR_GITHUB_USERNAME` and replace every occurrence with your real GitHub username.

Main files to edit later:

- `index.html` — biography, publications, links, and visible content
- `assets/styles.css` — visual style
- `assets/avatar.webp` / `assets/avatar.jpg` — portrait
- `assets/og-card.png` — social sharing image

## Local preview

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

Read [`DEPLOYMENT.zh-CN.md`](DEPLOYMENT.zh-CN.md).

## Content and image rights

The website code may be reused and modified. The portrait and personal academic content belong to Jiarun Fu and are not granted for third-party reuse.
