# DESIGN.md - Catree Design System

## Identity & Mood
Catree is an ultra-fast, modern personal link hub and Discord connection showcase. It blends the clean, recognizable aesthetic of Discord's user profile with the focused utility of Linktree.

## antislop Dials
- **ENERGY**: 2 (Balanced: confident, polished, focused personal hub)
- **RHYTHM**: 2 (Structured rhythm: Profile Banner -> Discord Status & Activity -> Connections Grid -> Categorized Link Tree -> Theme Toggle Footer)
- **MOTION**: 2 (Smooth transitions: micro-interactions on hover, real-time presence pulse, subtle accordion/toggle)

## Color Palette
### Dark Theme (Default)
- Page Background: `#1e1f22` (Discord dark primary)
- Card Surface: `#2b2d31` (Discord container dark)
- Card Surface Hover: `#313338` (Discord interactive dark)
- Card Border: `#383a40` (Subtle boundary definition)
- Text Primary: `#f2f3f5` (Contrast 11.2:1 against `#1e1f22`, passes WCAG AAA)
- Text Secondary / Muted: `#949ba4` (Contrast 5.1:1 against `#1e1f22`, passes WCAG AA)
- Accent Primary: `#5865f2` (Discord Blurple)
- Accent Hover: `#4752c4`

### Light Theme
- Page Background: `#f2f3f5` (Clean light grey)
- Card Surface: `#ffffff` (Pure white card)
- Card Surface Hover: `#f8f9fa` (Subtle warm hover)
- Card Border: `#e3e5e8` (Refined border)
- Text Primary: `#2e3338` (Contrast 10.8:1 against `#f2f3f5`, passes WCAG AAA)
- Text Secondary: `#5c6370` (Contrast 4.8:1 against `#ffffff`, passes WCAG AA)
- Accent Primary: `#5865f2` (Blurple)

### Status & Presence Indicators
- Online: `#23a55a`
- Idle: `#f0b232`
- Do Not Disturb: `#f23f43`
- Offline: `#80848e`
- Spotify Listening: `#1db954`

## Typography
- Font Family: `Inter`, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
- Hierarchy:
  - Display Name: 1.5rem (24px), font-bold, tracking-tight
  - Section Headings: 0.875rem (14px), font-semibold, uppercase, tracking-wider
  - Link Titles: 1rem (16px), font-medium
  - Descriptions & Subtitles: 0.875rem (14px), font-normal

## Component Architecture
1. **Header Banner**: Atmospheric header with custom banner gradient or image, user avatar, and live Discord status ring.
2. **Live Discord Presence**: Real-time presence via Lanyard API showing online status, custom status emoji, and active Spotify or Game details.
3. **Discord Connections**: Authentic connected accounts grid (Steam, GitHub, Spotify, Twitch, YouTube, etc.) with official icons and verified checkmarks.
4. **Link Groups**: Clean, responsive link cards grouped by category with custom badges, icons, and descriptions.
5. **Theme Switcher & Footer**: Accessible light/dark toggle and minimal footer.

## Accessibility (WCAG AA Compliance)
- Minimum tap target size: 44px x 44px for all mobile interactive elements.
- Clear `:focus-visible` outline rings for keyboard navigation.
- No dead controls: every link has a destination; toggles actively change states.
- Zero em dashes (`—`) in UI copy: use colons, commas, or parentheses instead.
