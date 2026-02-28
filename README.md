# Aditya Gupta: Single Page Proof-Led Portfolio

This is a premium, minimal, smooth-scrolling portfolio designed to present "Marketing + AI" artifacts as a Proof Gallery. Built with Next.js (App Router), Tailwind CSS, and TypeScript.

## 🚀 Getting Started

First, install the dependencies if you haven't recently (Note: avoid `sudo` if you hit cache errors, or override cache path; typically just `npm install` is fine).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ✏️ Editing Content (The Single Source of Truth)

All textual content, links, headings, and proof gallery data are driven from one single file:
👉 **`src/content/siteContent.ts`**

Open it to change the `Hero` copy, update emojis, add external links to the Proof Gallery items, or edit contact details. The site will globally reflect your changes instantly.

## 🖼️ Adding Real Images

Right now, the website uses generated paths that act as placeholders. When Next.js doesn't find the image, the `div` containers gracefully degrade to gray fallback blocks so the layout doesn't break. 

To add your real screenshot proof:
1. Navigate to `/public/tiles` or `/public/proof/...`
2. Drop your images into those folders with the matching names set in `siteContent.ts`.
   *(e.g., `gtm-01.png`, `copilots-03.png`, `content.png` etc.)*

*Note: For best performance, `next/image` is used under the hood, so images will be automatically optimized.*

## 🚢 Deployment

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com/) (the creators of Next.js).

1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com/new).
3. Import the GitHub repository.
4. Keep the default build settings (`npm run build`).
5. Click **Deploy**.

The site is entirely static-compatible and pre-renderable, so load times will be blazing fast out of the box.
