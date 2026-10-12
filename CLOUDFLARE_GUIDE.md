# Cloudflare Pages & Custom Domain Setup Guide for Catree

This guide explains how to host your Catree link tree on **Cloudflare Pages** completely free, and how to connect your **own custom domain**.

---

## Method 1: Git Integration via GitHub (Recommended)

This method automatically rebuilds and updates your site whenever you push changes to your GitHub repository.

### Step 1: Push your code to GitHub
1. Initialize git in your local project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial Catree commit"
   ```
2. Create a new repository on [GitHub](https://github.com/new).
3. Push your repository:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Connect to Cloudflare Pages
1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left navigation, click **Compute (Workers & Pages)** -> **Create** -> **Pages** -> **Connect to Git**.
3. Select your GitHub account and pick your Catree repository.
4. Configure your build settings:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: In **Environment variables**, optionally add `NODE_VERSION` with value `20` or `22`.
5. Click **Save and Deploy**. Cloudflare will build and host your site on a free `*.pages.dev` subdomain in under a minute!

---

## Method 2: Direct Terminal Deployment with Wrangler CLI

If you prefer deploying directly from your computer without GitHub:

1. Build your static site:
   ```bash
   npm run build
   ```
2. Deploy the `dist` directory to Cloudflare Pages:
   ```bash
   npx wrangler pages deploy dist --project-name catree
   ```
3. Follow the one-time Cloudflare login prompt in your browser.

---

## Adding Your Own Custom Domain

Once your site is deployed on Cloudflare Pages:

### Step 1: Open Custom Domains in Cloudflare Pages
1. Go to your Cloudflare Dashboard -> **Workers & Pages** -> Click your **catree** project.
2. Click the **Custom domains** tab.
3. Click **Set up a custom domain**.
4. Enter your domain (for example, `links.yourdomain.com` or `yourdomain.com`).
5. Click **Continue**.

### Step 2: DNS Configuration
- **If your domain is already managed by Cloudflare**:
  Cloudflare automatically creates the necessary `CNAME` record for you. Click **Activate domain**.
- **If your domain is registered at an external registrar (Namecheap, GoDaddy, Porkbun, etc.)**:
  1. Open your DNS provider's control panel.
  2. Add a `CNAME` record:
     - **Name / Host**: `@` (for root domain) or `links` (for subdomain like `links.yourdomain.com`).
     - **Target / Value**: `<your-project-name>.pages.dev` (e.g., `catree.pages.dev`).
     - **TTL**: Automatic or 300.
  3. Return to Cloudflare Pages and click **Check DNS**.

Cloudflare will automatically provision a free SSL/TLS certificate (HTTPS) within a few minutes.

---

## How to Set Up Live Discord Status (Lanyard)

Catree includes live Discord status integration powered by [Lanyard](https://github.com/Phineas/lanyard):

1. **Join the Lanyard Discord Server**:
   Join [discord.gg/lanyard](https://discord.gg/lanyard) once with your Discord account. This authorizes Lanyard to monitor your presence.
2. **Copy your Discord Snowflake User ID**:
   - In Discord, open **User Settings** -> **Advanced** -> Enable **Developer Mode**.
   - Right click your profile avatar / name -> Click **Copy User ID**.
3. **Add your Discord ID to `src/config/profile.ts`**:
   ```typescript
   discord: {
     userId: "YOUR_18_DIGIT_DISCORD_USER_ID",
     enableLanyard: true,
     ...
   }
   ```
4. Now your Catree page will display your real-time Discord avatar, online/idle/dnd status, custom status emoji, and what you are listening to on Spotify or playing in real time!
