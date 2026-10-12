# Catree

A fast, responsive Linktree alternative and Discord connections showcase built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), designed for hosting on [Cloudflare Pages](https://pages.cloudflare.com/) with your own custom domain.

## Features
- **Live Discord Presence**: Real-time avatar, online/idle/dnd status, custom status emoji, and active Spotify/game activity via Lanyard WebSocket API.
- **Discord Connections Showcase**: Authentic Discord-styled connected accounts grid (Steam, GitHub, Spotify, YouTube, Twitch, X/Twitter, Reddit, Bluesky) with verified checkmark badges.
- **Categorized Link Tree**: Highlight badges, clean cards, accessible tap targets, and smooth hover effects.
- **Working Light / Dark Mode Toggle**: Persistent theme switcher with zero flash of unstyled content.
- **Single Config File**: All personal links, connections, and metadata live in `src/config/profile.ts`.
- **Zero Cost Cloudflare Pages Hosting**: Static HTML generation (`dist/`) with 100 Lighthouse performance.

## Getting Started

### Local Development
```bash
npm install
npm run dev
```
Open `http://localhost:4321` to view your site.

### Customizing Your Links & Profile
Edit `src/config/profile.ts` to customize:
- Display name, handle, bio, pronouns, avatar, and banner gradient.
- Discord User ID for live status.
- Connected accounts (Steam, GitHub, Spotify, etc.).
- Categorized link groups and badges.

### Deploying to Cloudflare Pages
Follow the step-by-step instructions in [CLOUDFLARE_GUIDE.md](file:///d:/Projects/Catree/CLOUDFLARE_GUIDE.md).
