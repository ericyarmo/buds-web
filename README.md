# Buds Web

> Landing page for Buds - Share memories with your closest friends

A fast, modern landing page built with Astro, Tailwind CSS, and deployed on Cloudflare Pages.

## Tech Stack

- **Framework**: [Astro](https://astro.build) - Zero-JS static site generation
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- **Language**: TypeScript
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com)
- **Domain**: budbuddy.app

## Features

- Fast, optimized static site generation
- Platform-specific CTAs (iOS/Android/Desktop)
- Responsive design (mobile-first)
- SEO optimized with meta tags
- End-to-end type safety with TypeScript
- Minimal JavaScript for optimal performance

## Project Structure

```
buds-web/
├── src/
│   ├── components/        # Reusable Astro components
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── CTAButton.astro
│   │   └── Footer.astro
│   ├── layouts/          # Page layouts
│   │   └── Layout.astro
│   ├── pages/            # Route pages
│   │   ├── index.astro   # Homepage
│   │   ├── privacy.astro # Privacy policy
│   │   └── terms.astro   # Terms of service
│   └── utils/            # Utility functions
│       └── platform.ts   # Device detection
├── public/               # Static assets
│   ├── favicon.svg
│   ├── og-image.svg
│   ├── robots.txt
│   └── sitemap.xml
├── astro.config.mjs      # Astro configuration
├── tailwind.config.mjs   # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── wrangler.toml         # Cloudflare Pages config
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Local Development

1. **Clone the repository** (or you're already here!)

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Build and deploy to Cloudflare Pages

## Deployment

### First-Time Setup on Cloudflare Pages

1. **Install Wrangler CLI** (if not already installed)
   ```bash
   npm install -g wrangler
   ```

2. **Authenticate with Cloudflare**
   ```bash
   wrangler login
   ```

3. **Create a new Pages project**
   ```bash
   wrangler pages project create buds-web
   ```

4. **Deploy the site**
   ```bash
   npm run build
   wrangler pages deploy dist
   ```

### Subsequent Deployments

After the initial setup, deploying is simple:

```bash
npm run deploy
```

Or manually:
```bash
npm run build
wrangler pages deploy dist
```

### Automatic Deployments with Git

For automatic deployments on every push:

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect GitHub to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to Pages
   - Click "Create a project"
   - Connect your GitHub repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
     - **Root directory**: `/`

3. **Automatic deployments**
   Every push to `main` will trigger a new deployment automatically.

### Connecting Your Custom Domain

1. **In Cloudflare Pages Dashboard**
   - Select your `buds-web` project
   - Go to "Custom domains" tab
   - Click "Set up a custom domain"
   - Enter `budbuddy.app`

2. **DNS Configuration**
   Since you purchased the domain through Cloudflare, DNS should auto-configure. Verify:
   - `budbuddy.app` has a CNAME record pointing to your Pages project
   - `www.budbuddy.app` (optional) redirects to the apex domain

3. **SSL/TLS**
   Cloudflare automatically provisions SSL certificates. Ensure:
   - SSL/TLS mode is set to "Full" or "Full (strict)"
   - Always Use HTTPS is enabled

## Customization

### Update TestFlight URL

Replace the placeholder in `/src/components/CTAButton.astro`:

```typescript
const TESTFLIGHT_URL = 'https://testflight.apple.com/join/YOUR_CODE';
```

### Color Scheme

Edit the color palette in `tailwind.config.mjs`:

```javascript
colors: {
  primary: { /* your colors */ },
  secondary: { /* your colors */ },
}
```

### Copy & Content

- **Homepage**: Edit `/src/pages/index.astro` and `/src/components/Hero.astro`
- **Features**: Edit `/src/components/Features.astro`
- **Footer**: Edit `/src/components/Footer.astro`

### Images

Replace placeholder images in `/public/images/`:
- Add app screenshots
- Add mockups
- Consider adding a QR code for TestFlight download

### Social Preview Image

Convert `/public/og-image.svg` to a PNG (1200x630px) for better social media compatibility:

```bash
# Using ImageMagick or similar
convert og-image.svg -resize 1200x630 og-image.png
```

Then update `Layout.astro` to use the PNG.

## Performance Optimization

### Current Optimizations

- Static site generation (zero JS by default)
- Inline critical CSS
- Lazy loading for images
- Minimal dependencies
- Cloudflare CDN for fast global delivery

### Recommendations

1. **Add real images** - Currently using SVG placeholders
2. **Convert images to WebP** - For better compression
3. **Add Cloudflare Web Analytics** - Privacy-friendly, free analytics
4. **Consider adding a service worker** - For offline support (optional)

## Analytics Setup (Optional)

### Cloudflare Web Analytics

1. Go to Cloudflare Dashboard → Web Analytics
2. Add `budbuddy.app` as a site
3. Copy the provided script tag
4. Add to `Layout.astro` in the `<head>` section

No cookies, no tracking, privacy-friendly.

## SEO Checklist

- [x] Meta tags configured (title, description, OG tags)
- [x] Sitemap.xml generated
- [x] Robots.txt configured
- [x] Canonical URLs set
- [x] Favicon added
- [x] Mobile-responsive
- [ ] Submit sitemap to Google Search Console (after deployment)
- [ ] Test with Lighthouse (aim for 100 score)

## Troubleshooting

### Build fails on Cloudflare Pages

Check that:
- Node version is 18+ (set in Pages settings if needed)
- All dependencies are in `package.json`
- `npm run build` works locally

### Platform detection not working

Platform detection runs client-side. Test in different browsers and devices:
- iOS Safari
- Android Chrome
- Desktop Chrome

### Custom domain not working

1. Check DNS propagation: `dig budbuddy.app`
2. Verify CNAME record in Cloudflare DNS
3. Check SSL/TLS settings
4. Wait up to 24 hours for DNS propagation

## Future Enhancements

- [ ] Add email waitlist for Android users
- [ ] Create app screenshots/mockups
- [ ] Add QR code for easy TestFlight access
- [ ] Implement dark mode
- [ ] Add animations using View Transitions API
- [ ] A/B test different headlines/CTAs
- [ ] Add Cloudflare Web Analytics
- [ ] Create a blog section (optional)

## Development Notes

- This is a v1 landing page - iterate based on user feedback
- Keep dependencies minimal for fast load times
- All routes are statically generated at build time
- Platform detection happens client-side for flexibility

## License

Private project for Buds app.

## Support

For questions or issues, please open an issue in this repository.

---

Made with ❤️ for Buds
