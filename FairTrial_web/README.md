# FairTrial — Self-hosted prototype

This folder contains the complete static FairTrial product-vision website. It has no ChatGPT or OpenAI hosting dependency and requires no build step.

## Run locally

### Windows

Double-click `start-local.bat`. Your browser will open `http://localhost:8000`.

### macOS or Linux

Open Terminal in this folder and run:

```bash
chmod +x start-local.sh
./start-local.sh
```

You can also open `index.html` directly, although a local web server gives more consistent browser behavior.

## Deploy independently

- **GitHub Pages:** upload the contents of this folder to the repository root, then select **Settings → Pages → Deploy from a branch → main → /(root)**.
- **Netlify:** drag this folder into Netlify Drop.
- **Cloudflare Pages or Vercel:** deploy this folder as a static site with no build command.

## Prototype scope

The upload and AI-analysis flow is a front-end demonstration. It does not send records to an AI model or a production backend. Official legal-source links require internet access, but the interface and sample case are stored locally.
