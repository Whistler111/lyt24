# LYT24 Technologies Website

This is the official LYT24 Technologies website. It is a Vite, React, and Tailwind CSS project for presenting the company, services, portfolio, team, contact details, and SEO-focused company information.

## Project Process

The website was built and improved through these main steps:

1. Removed external backend dependencies and kept the website running as a local/static marketing site.
2. Organized the main pages for Home, About, Portfolio, Team, Contact, and Project Case Studies.
3. Improved the UI and mobile responsiveness across key sections.
4. Cleaned image loading by using proper public asset paths, lazy loading, async decoding, and fallbacks for team images.
5. Improved SEO with page titles, meta descriptions, canonical links, Open Graph tags, Twitter tags, sitemap, robots file, manifest, and structured data.
6. Added a dedicated About page so search engines can better understand the company description.
7. Verified changes with linting, type checking, and production builds.

## Local Setup

Install dependencies:

```bash
npm.cmd install
```

Run the development server:

```bash
npm.cmd run dev
```

Build for production:

```bash
npm.cmd run build
```

Preview the production build:

```bash
npm.cmd run preview
```

## Quality Checks

Run lint checks:

```bash
npm.cmd run lint
```

Run type checks:

```bash
npm.cmd run typecheck
```

## SEO Procedure

The SEO process used for this site:

1. Write clear page titles and descriptions for each important route.
2. Use a strong company description on the About page.
3. Keep important pages crawlable with normal URLs like `/about`, `/portfolio`, `/team`, and `/contact`.
4. Add structured data for the company, website, local business details, breadcrumbs, and page type.
5. Keep `robots.txt` and `sitemap.xml` updated.
6. Submit the sitemap in Google Search Console after deployment.
7. Request indexing for the homepage, About page, Portfolio page, and key case-study pages.

## Image Procedure

The image loading process used for this site:

1. Store static assets in `public`.
2. Reference public assets with leading slashes, for example `/LOGO.png`.
3. Use `loading="lazy"` for non-critical images.
4. Use `decoding="async"` to keep rendering smooth.
5. Use eager loading only for high-priority hero or first-view images.
6. Add fallbacks where missing images could affect the UI.

## Notes

On Windows, use `npm.cmd` instead of `npm` if PowerShell blocks npm scripts.

If the Vite build reports `Cannot read directory "../..": Access is denied` inside a restricted environment, rerun the build in a normal terminal or approved shell. This is usually an environment permission issue, not a source-code issue.
