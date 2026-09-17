# VPS Lab Website

A ready-to-launch website for VPS Lab (Watrap). Built with Next.js + Tailwind CSS.
No backend or Firebase needed — the booking form sends details straight to your
WhatsApp via a pre-filled message link.

## ⚠️ Before you launch — check this

`lib/site-config.js` has the phone number `807465380`, which is **9 digits**.
Indian mobile numbers are normally 10 digits, so double-check this and fix it
if a digit is missing — otherwise the "Call" and "WhatsApp" buttons won't work.

## Run it locally

You'll need [Node.js](https://nodejs.org) installed (version 18 or newer).

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Adding real photos (recommended before launch)

The site ships with tasteful placeholder frames (dashed borders + camera icon)
instead of stock photos — using a real business's site with fake stock photos
of strangers/other labs looks inauthentic and can be a copyright problem.
Real phone photos of the actual lab work much better and are completely free.

To add them:

1. Take photos of the lab front, reception, sample collection area, equipment
   — good lighting matters more than a fancy camera.
2. Put the image files in `public/images/` (e.g. `public/images/lab-front.jpg`).
3. Open `lib/site-config.js` and set:
   ```js
   heroImage: "/images/lab-front.jpg",
   galleryImages: [
     { src: "/images/reception.jpg", alt: "VPS Lab reception" },
     { src: "/images/sample-collection.jpg", alt: "Sample collection area" },
     { src: "/images/equipment.jpg", alt: "Testing equipment" },
   ],
   ```
4. Save — the placeholders are replaced by your real photos automatically,
   no other code changes needed.

Recommended sizes: hero image roughly 800×1000px (portrait), gallery images
roughly 800×600px (landscape) — anything close works fine, they're auto-cropped.

## What to edit

Everything content-related lives in two places, so you rarely need to touch
the component files:

- **`lib/site-config.js`** — lab name, phone number, address, hours.
- **`lib/tests.js`** — the list of tests, grouped by category. Add, remove, or
  rename tests/categories here and the Services section and booking form
  dropdown update automatically.
- **`components/About.js`** — the "About the lab" paragraph. Replace the
  placeholder text with real details (how long you've been running, any
  certifications you actually hold, etc.) — there's a comment marking exactly
  where to edit.

## How the booking form works

There's no backend or database. When someone submits the form, it builds a
WhatsApp message from their answers and opens `wa.me` with that message
pre-filled — they just tap send. You'll receive it as a normal WhatsApp
message on the lab's number.

This is the fastest way to launch. Later, if you want bookings to be saved
automatically (e.g. into a spreadsheet or database, or shown in your LabCare
app), that needs a small backend — a good next step once the site is live and
you've seen how people actually use it.

## Deploy it (free)

The easiest option is [Vercel](https://vercel.com), made by the creators of
Next.js:

1. Push this folder to a GitHub repository.
2. Go to vercel.com, sign in with GitHub, and click "New Project."
3. Select the repository — Vercel detects it's a Next.js app automatically.
4. Click Deploy. You'll get a live `.vercel.app` URL in about a minute.
5. Optionally, connect a custom domain (e.g. `vpslab.in`) from the Vercel
   project settings.

## Project structure

```
pages/
  _app.js       — loads fonts and global styles
  _document.js  — base HTML document, favicon
  index.js      — Home page (hero, quick service highlights, CTA)
  services.js   — full test list
  about.js      — about the lab + photo gallery
  contact.js    — booking form + address/phone/map
components/
  Layout.js     — shared Header + Footer wrapper used by every page
  Header.js     — nav bar linking to the pages above, call/WhatsApp buttons
  Hero.js       — home page banner
  ServicesTeaser.js — home page preview of a few test categories
  CtaBanner.js  — "Book or contact us" banner
  About.js      — about the lab (edit this with real details)
  Services.js   — full list of tests, pulled from lib/tests.js
  BookingForm.js— booking form → WhatsApp
  Contact.js    — address, phone, map
  Gallery.js    — photo gallery (placeholders until you add real photos)
  Footer.js
  icons.js      — small SVG icon set used next to each test category
lib/
  site-config.js — lab name, phone, address, hours, photos
  tests.js       — test categories and names
styles/
  globals.css
```

This is a proper multi-page site — Home, Services, About, and Contact are
separate pages linked from the nav bar, not sections on one long page.

## Next steps (optional, once this is live)

- Add real photos of the lab/staff to make it feel more personal.
- Swap the map embed's address in `components/Contact.js` if the pin isn't
  accurate — search the address on Google Maps and copy the exact text.
- If you later want the website and the LabCare Flutter app to share data
  (e.g. bookings appearing in the same place), that's a bigger step involving
  Firebase on the web side — worth doing once the site itself is stable.
