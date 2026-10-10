# FairTrial — Every Word Matters

FairTrial is a visual prototype for reviewing trial records with AI-assisted human-rights analysis. A user uploads a transcript, reviews flagged passages in their original context, and opens a linked panel explaining the right potentially violated, the legal basis, and the analysis.

## Live demo

[Open FairTrial](https://chrishuang7260.github.io/TrialWatchAIHackathon_Track2/)

## What the prototype demonstrates

- Uploading or selecting a full trial record
- Highlighting multiple problematic quotations across the transcript
- Linking numbered quotations to the same numbered violation
- Reviewing the implicated right, legal authorities, and analysis beside the record
- Returning from the review workspace to the main page

The included sample is based on *Adonis v. Philippines* and presents the record in a courtroom-transcript format.

## Run locally

No build step or package installation is required.

### Windows

Double-click `start-local.bat`, then open the address shown in the terminal.

### macOS or Linux

```bash
chmod +x start-local.sh
./start-local.sh
```

You can also open `index.html` directly, although using the local server is more reliable across browsers.

## Publish with GitHub Pages

1. Push these files to the root of the `main` branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select **main** and **/(root)**, then save.

GitHub Pages will publish the site at:

`https://chrishuang7260.github.io/TrialWatchAIHackathon_Track2/`

## Project files

- `index.html` — landing and upload experience
- `review.html` — full-record review workspace
- `landing-case.js` — sample case summary on the landing page
- `review-data.js` — sample transcript, quotations, violations, and legal analysis
- `review.js` — review-page interactions
- `storage.js` — browser-based file and session storage
- `start-local.bat` / `start-local.sh` — local preview helpers

## Important prototype notes

This is a front-end demonstration of the intended product experience. It does not currently send uploaded records to a live AI inference backend or generate new legal findings automatically.

Uploaded files are handled in the browser for the demo. Do not use confidential, privileged, sealed, or personally sensitive trial material until the product has an audited secure backend and a documented data-retention policy.

The displayed findings are illustrative and are not legal advice.

## Sample-case sources

- [Supreme Court of the Philippines E-Library — *Adonis v. Republic of the Philippines*](https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/1/56053)
- [UN Human Rights Committee — *Adonis v. Philippines*, Communication No. 1815/2008](https://docs.un.org/en/CCPR/C/103/D/1815/2008/REV.1)

