# DESIGN.md - Catree Design System

## Identity & Mood
Catree is an ultra-fast, distilled personal link hub and Discord connection showcase for Christian (@DaLonelyCat). It blends dark obsidian glassy aesthetics with authentic social connections and featured work.

## antislop Dials
- **ENERGY**: 2 (Balanced: confident, polished, personal hub)
- **RHYTHM**: 2 (Structured linear flow: Profile Header -> Featured Projects -> Connected Accounts -> Minimal Footer)
- **MOTION**: 1 (Fast micro-interactions: 150ms transitions on interactive cards, GPU-accelerated ambient light)

## Color Palette & Design Tokens
### Dark Theme (Default)
- Page Background (`obsidian`): `#090a0f`
- Card Surface (`obsidian-card`): `#12141c` (rendered at 60-65% opacity with `backdrop-blur-xl`)
- Card Surface Hover (`obsidian-hover`): `#181b26` (rendered at 75% opacity)
- Card Border: `rgba(255, 255, 255, 0.08)`
- Text Primary: `#f3f4f6` (Contrast > 14:1 against `#090a0f`, passes WCAG AAA)
- Text Secondary / Muted: `#9ca3af` (Contrast > 5.8:1 against `#090a0f`, passes WCAG AA)
- Accent Primary (`blurple`): `#5865f2`
- Accent Hover: `#4752c4`

### Light Theme
- Page Background (`surface-light`): `#f6f8fa`
- Card Surface: `rgba(255, 255, 255, 0.70)` with `backdrop-blur-xl`
- Card Surface Hover: `rgba(255, 255, 255, 0.90)`
- Card Border: `rgba(0, 0, 0, 0.06)`
- Text Primary: `#111827` (Contrast > 14:1, passes WCAG AAA)
- Text Secondary: `#6b7280` (Contrast > 4.5:1, passes WCAG AA)
- Accent Primary: `#5865f2`

## Typography
- Font Family: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` (zero-latency native system font stack)
- Hierarchy:
  - Display Name: 1.5rem (24px) / 1.875rem (30px), font-bold, tracking-tight
  - Section Headings: 0.75rem (12px), font-semibold, uppercase, tracking-wider
  - Card Titles: 0.875rem (14px), font-semibold
  - Handles & Subtitles: 0.75rem (12px), font-normal

## Component Architecture
1. **Header Banner**: Cover photo with preloaded high-priority LCP delivery, circular portrait avatar, location badge, pronouns tag, handle pill, and bio.
2. **Featured Projects (LinkTreeSection)**: Highlighted destination card for the personal portfolio (`https://portofolio.dalonelycat.site/`).
3. **Connected Accounts (DiscordConnections)**: 2-column responsive grid displaying verified platforms (GitHub, Steam, Spotify, LinkedIn, Instagram, X, Reddit) without duplicate listings.
4. **Theme Switcher & Footer**: Accessible light/dark toggle and minimal branding.

## Accessibility (WCAG AA Compliance)
- Minimum tap target size: 44px x 44px for all mobile interactive elements.
- Clear `:focus-visible` outline rings for keyboard navigation.
- No dead controls or redundant repeated link strips.
- Zero em dashes (`—`) in UI copy: use colons, commas, or parentheses instead.
