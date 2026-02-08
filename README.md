# Wedding Photo Challenge

A mobile-first, single-page web app for Zack & Sean’s wedding guests. It serves playful photo/video challenges and routes guests to the shared Google Photos album.

## Features
- Time-aware segments (Cocktail Hour + Reception) using America/New_York time.
- Optional manual segment picker outside event windows.
- 6 challenge cards at a time, shuffleable, with local seen/completed tracking.
- Filters for Type (photo/video/either) and Vibe (easy/medium/chaos).
- Accessible modal with prompt details and quick actions.
- Sticky “Upload now” button and backup link.

## GitHub Pages Deployment
1. Commit the project to a GitHub repository.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, set:
   - **Source**: Deploy from a branch
   - **Branch**: `main` (or your default branch)
   - **Folder**: `/ (root)`
4. Click **Save**. GitHub will provide a public URL once published.
5. Share the GitHub Pages URL or convert it into a QR code for guests.

## Local Preview
Open `index.html` directly or run a local server:

```bash
python -m http.server 8000
```

Then visit: `http://localhost:8000`
