# Yugal Koju — Portfolio Website

This folder has everything you need to host your portfolio.

## Files

- `index.html` — the site
- `styles.css` — all styling
- `script.js` — nav menu, scroll animation, contact form
- `assets/Yugal-Koju-Resume.pdf` — powers the "Download Résumé" button

Open `index.html` directly in a browser to preview it before hosting.

## 1. Get your contact form emailing you (2 minutes)

Right now, submitting the contact form just opens the visitor's own email
app. To have messages land straight in your inbox instead:

1. Go to **https://formspree.io** and sign up free using
   `yugalkoju108@gmail.com`.
2. Click **New Form**, name it anything (e.g. "Portfolio Contact"), and
   copy the endpoint it gives you — it looks like:
   `https://formspree.io/f/abcdwxyz`
3. Open `script.js`, find this line near the top of the contact form section:
   ```js
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
   ```
   Replace `YOUR_FORM_ID` with your real endpoint from step 2.
4. Save the file. Formspree will send one confirmation email the first
   time someone submits — click the link in it to activate the form.
   After that, every message sent through the site emails you directly.

Until you do this, the form will keep working via the email-client
fallback, so nothing is ever broken either way.

## 2. Host it — pick one (all free)

### Option A: Netlify (easiest, drag-and-drop)
1. Go to **https://app.netlify.com/drop**
2. Drag this whole folder onto the page.
3. Netlify gives you a live URL in seconds (e.g. `yugal-koju.netlify.app`).
4. Optional: in Site settings → Domain management, you can add a custom
   domain or change the free subdomain name.

### Option B: Vercel
1. Go to **https://vercel.com/new**
2. Sign in, then drag-and-drop this folder or connect a GitHub repo
   containing these files.
3. Deploy — Vercel gives you a live URL.

### Option C: GitHub Pages (free, good if you already use GitHub)
1. Create a new GitHub repository, e.g. `portfolio`.
2. Upload all files in this folder (keeping the `assets/` folder structure).
3. Go to Settings → Pages → set the source to the `main` branch, root folder.
4. Your site goes live at `https://<your-username>.github.io/portfolio/`.

Any of these three works well and costs nothing. Netlify is the fastest
if you just want it live today.

## 3. After it's live

- Update the `<link rel="canonical">` and Open Graph URLs in `index.html`
  (search for `yugalkoju.dev`) to match your real hosted URL, for better
  SEO and link previews.
- Test the contact form once live to confirm the Formspree emails arrive.
