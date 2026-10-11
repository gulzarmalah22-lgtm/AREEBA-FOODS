# Areeba Foods Website (HTML, CSS, JavaScript)

A beginner-friendly, responsive business website for Areeba Foods, Nawabshah, Pakistan.

## Files
- `index.html` — website content, SEO metadata, and sections
- `style.css` — colors, layout, responsive styles
- `script.js` — mobile menu, product inquiry buttons, and contact form to WhatsApp

## Run it on your computer or phone
1. Download and extract `areeba_foods_website.zip`.
2. Open the extracted folder.
3. Open `index.html` in a modern browser.
4. Internet access is required for the remote food photographs and Google Fonts. The core layout and interactions are local.

## Publish for free with GitHub Pages
1. Create or sign in to a GitHub account at https://github.com/.
2. Create a new **public** repository, for example `areeba-foods-website`.
3. Upload `index.html`, `style.css`, and `script.js` to the repository root (not inside an extra nested folder).
4. Open repository **Settings → Pages**.
5. Under build/deployment, select **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then save.
7. Wait for GitHub Pages to publish. The URL will usually resemble `https://YOUR-USERNAME.github.io/areeba-foods-website/`.
8. Open that URL on a phone and test the menu, product inquiry buttons, and contact form.

GitHub's interface and free-plan policies can change; consult https://pages.github.com/ if the menu names differ.

## WhatsApp number
The website uses the Pakistan WhatsApp link `923120326822`, based on the supplied local number `03120326822`.

If the number changes:
- Update `WHATSAPP_NUMBER` in `script.js`.
- Search `index.html` for `923120326822` and replace each matching number.

The contact form does not send email or store information. It validates the fields and opens WhatsApp with a prefilled message. The visitor must review and press Send in WhatsApp. This avoids pretending that a static HTML form has a backend.

## Update business details
- Prices and product descriptions are in `index.html`.
- Address and phone number are in `index.html`.
- Colors are defined near the top of `style.css` in the `:root` section.
- Real social media profile links can be added in the contact/footer sections after the business pages are known.
- Replace the illustrative food photographs with your own product photos for the most accurate representation. The current photos are remote Unsplash image URLs and require internet access.

## Before publishing
- Verify product prices and delivery offer are still correct.
- Verify the WhatsApp number opens the right business account.
- Replace illustrative photos with genuine business photos when available.
- Add real Facebook/Instagram/TikTok/YouTube links only after you have them.
- Add a business email only if you want to publish one.
- Confirm delivery area, hours, payment methods, and return/refund policies before adding specific claims.
- The page includes basic SEO metadata and FoodEstablishment structured data. A sitemap, robots.txt, and Search Console setup are more useful once you have a stable public URL. For a single-page site hosted in a subfolder, do not add a canonical URL until the final public URL is known.

## Note on free hosting
GitHub Pages is suitable for a static HTML/CSS/JS website and offers a free `github.io` URL for public projects. It does not run server-side code, so the contact form uses WhatsApp rather than server-side email processing. A custom domain and professional email are optional and may cost money.
