# Table of Contents

This file provides a quick reference to common files in the repository that you might want to customize for your own use.

## Global Site Settings

This file contains the main configuration for your site. You can change the site title, description, social media links, and navigation menu here.

- **File:** [`src/data/global_settings.json`](./src/data/global_settings.json)

## Branding

This section covers the visual identity of your site.

### Logo

The main logo for the site is an SVG file. You can replace this with your own logo.

- **File:** [`src/assets/theme-images/logo.svg`](./src/assets/theme-images/logo.svg)

### Theme Colors & Fonts

The site's colors, fonts, and other base styles can be found in the global CSS files.

- **Colors & Fonts:** [`src/assets/css/base.css`](./src/assets/css/base.css)
- **Global Styles:** [`src/assets/css/global.css`](./src/assets/css/global.css)

## Homepage Content

The content for the main landing page is split across a few files.

### Hero Section

The main image and text for the hero section on the landing page.

- **Hero Image:** [`src/assets/theme-images/hero-screens.png`](./src/assets/theme-images/hero-screens.png)
- **Hero Text:** The `hero_title` and `hero_content` in [`src/data/home.json`](./src/data/home.json)

### Quote Section

The content for the quote section on the landing page.

- **Quote Image:** [`public/content-images/quote-man.avif`](./public/content-images/quote-man.avif)
- **Quote Text:** The `quote_content`, `quote_cite`, and `quote_role` in [`src/data/home.json`](./src/data/home.json)

## Other Images

Here are some other prominent images used on the site.

- **Social Media Preview Image:** [`public/1200x630.jpg`](./public/1200x630.jpg)
- **Content Wallpapers:** The images in [`public/content-images/`](./public/content-images/)
- **Theme Preview Images:** The images in [`public/theme-preview/`](./public/theme-preview/)

## Data Files

The content for various sections of the site is stored in JSON files in the `src/data` directory. You can edit these files to change the content of the corresponding sections.

- **Case Studies:** [`src/data/case_studies.json`](./src/data/case_studies.json)
- **Clients:** [`src/data/clients.json`](./src/data/clients.json)
- **FAQ:** [`src/data/faq.json`](./src/data/faq.json)
- **Newsletter:** [`src/data/newsletter.json`](./src/data/newsletter.json)
- **Pricing:** [`src/data/pricing.json`](./src/data/pricing.json)
- **Services:** [`src/data/services.json`](./src/data/services.json)
- **Testimonials:** [`src/data/testimonials.json`](./src/data/testimonials.json)
