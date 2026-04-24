# Studio — Artist Shop

A light, minimal React storefront for selling art prints and apparel via Snipcart + Gelato, hosted free on Netlify.

---

## Setup Checklist

### 1. Add your Snipcart API key
In `public/index.html`, replace `YOUR_PUBLIC_API_KEY`:
```html
<div hidden id="snipcart" data-api-key="YOUR_PUBLIC_API_KEY" ...>
```

### 2. Customize your shop name
- In `public/index.html`: update the `<title>` tag
- In `src/components/Nav.js`: update "Studio" to your name
- In `src/components/Footer.js`: update "Studio" to your name
- In `src/pages/About.js`: fill in your artist statement

### 3. Add your artwork images
Replace the placeholder Unsplash URLs in `src/data/products.js` with your own images.
You can host images for free on:
- **Cloudinary** (free tier, great for artists)
- **GitHub** (upload to your repo, use the raw URL)
- **Netlify** (put images in `/public/images/` folder)

### 4. Update product info & prices
Edit `src/data/products.js` to match your actual products, sizes, and prices.

### 5. Update Gelato product IDs
In `src/data/products.js`, replace each `GELATO_PRINT_*_ID` and `GELATO_TSHIRT_*_ID`
with the actual product IDs from your Gelato catalog.
You can find these in your Gelato dashboard under Products.

### 6. Keep products.json in sync
`public/products.json` is what Snipcart uses to validate product prices.
When you add/change products or prices in `products.js`, update `products.json` to match.

---

## Deploy to Netlify

### Option A: Drag and drop (easiest)
1. Run `npm run build` in this folder
2. Go to netlify.com → drag the `build/` folder onto the Netlify dashboard

### Option B: Connect GitHub (recommended — auto-deploys on every push)
1. Push this folder to a GitHub repository
2. Go to netlify.com → "Add new site" → "Import from Git"
3. Select your repo
4. Build command: `npm run build`
5. Publish directory: `build`
6. Click Deploy

---

## Local Development

```bash
npm install
npm start
```

Open http://localhost:3000

---

## Snipcart Configuration (important!)

In your Snipcart dashboard:
1. Go to **Store configuration → Domains & URLs**
2. Add your Netlify URL (e.g. `https://your-shop.netlify.app`)
3. Set the **Crawl URL** to `https://your-shop.netlify.app/products.json`

This lets Snipcart verify product prices (security requirement).

---

## Connecting Gelato to Snipcart

To automatically send orders to Gelato when a Snipcart order is placed:
1. In Gelato dashboard → **Settings → Integrations → Snipcart**
2. Follow the connection wizard
3. Map your Snipcart product IDs to Gelato product IDs

---

## File Structure

```
artist-shop/
├── public/
│   ├── index.html        ← Snipcart script lives here
│   └── products.json     ← Snipcart price validation
├── src/
│   ├── components/
│   │   ├── Nav.js / Nav.css
│   │   ├── Footer.js / Footer.css
│   │   └── ProductCard.js / ProductCard.css
│   ├── data/
│   │   └── products.js   ← YOUR PRODUCTS GO HERE
│   ├── pages/
│   │   ├── Home.js / Home.css
│   │   ├── Prints.js
│   │   ├── Apparel.js
│   │   ├── CatalogPage.css
│   │   ├── ProductDetail.js / ProductDetail.css
│   │   └── About.js / About.css
│   ├── App.js            ← Routing
│   └── index.js
├── netlify.toml          ← Netlify config
└── package.json
```
