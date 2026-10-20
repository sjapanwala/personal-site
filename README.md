# Saaim's digital garden

A minimalist, editorial personal site with a bento-grid card layout. Plain
HTML/CSS/JS — no framework, no build step, no server required.

```
index.html            single page, all four SPA tabs, tab-switching JS
cv.html                separate page — interactive CV (see below)
css/style.css          all styles (colors, type, bento grid, cards, articles, cv)
js/main.js             tab switching + renders cards from content/*.js
js/cv.js                renders + expand/collapse for cv.html, from content/cv.js
content/
  projects.js           "projects." tab data
  writing.js             "writing." tab data — each entry links to writing/*.html
  photography.js         "photography." tab data
  cv.js                  cv.html's timeline data (placeholder — see below)
writing/
  *.html                 one static page per blog post (see below)
assets/
  favicon.svg
  og-image.svg
  main-page-web.jpg     home intro photo (see the Home section below)
```

## Preview locally

Just open `index.html` in a browser — no server, no build step. Double-click
it, or drag it into a browser tab.

(If you'd rather serve it — e.g. to test the `#projects`-style deep links —
any static server works: `python3 -m http.server` or `npx serve`.)

## Adding / editing content

Each tab's cards come from a plain JS file in `content/`, not a build
pipeline. Open the relevant file and add, remove, or edit an object in the
array — the grid re-renders automatically, no other code to touch:

- **Projects** → `content/projects.js`
- **Writing** → `content/writing.js`
- **Photography** → `content/photography.js`

The CV is a genuine standalone page (`cv.html`), not another SPA tab — it's
a plain text link next to GitHub/LinkedIn (top-right `.nav-links`, not the
nav pill), same as the writing article pages, rather than being switched
via `js/main.js`. Its content still comes from a data file though,
`content/cv.js`, so editing it is the same motion as everything else: open
the file, add/edit/remove an entry, no HTML to touch. Every
entry currently in there is placeholder text — replace `role`/`org`/
`start`/`end`/`summary`/`bullets`/`tags` with your real experience and
education before this page goes live, and swap the intro line and skill
chips near the top of `cv.html` too. Clicking a role expands it to reveal
`bullets`/`tags`; "Expand all" toggles every entry at once.

Every array entry is commented with what each field does. A few notes:

- `gradient` (`"grad-1"`...`"grad-8"`) picks one of eight abstract shape
  fills (a circle, triangle, rings, blob, dot-grid, etc. — each a distinct
  silhouette, defined in `css/style.css` under `.art-1`...`.art-8`) standing
  in for a real photo/screenshot.
  Same mechanism in both **Projects** and **Photography**: add
  `image: "assets/your-file.jpg"` to an entry in `content/projects.js` or
  `content/photography.js` and it's used automatically instead of the
  gradient (see the Soritch entry in `projects.js` for an example). For
  Photography, `link` is a good place to point at the full-resolution
  version of the photo once you have one.
- `span` (`""` 1 col, `"wide"` 2 cols, `"big"` 3 cols) controls how wide a
  card is — every card is the same height, so this is the only variation.
  Use `"big"`/`"wide"` sparingly for hero content.
- The Home tab's preview grid always shows whichever entries are FIRST in
  `projects.js`/`writing.js`/`photography.js` (top 2 from each) — reorder
  an array to change what shows up there.

Why plain `.js` files instead of `.json`? Opening a page directly via a
`file://` URL blocks `fetch()`/XHR requests for local JSON in most browsers
(a CORS restriction), which would break the "just open index.html" preview
promise. A `<script src="content/projects.js">` tag has no such restriction,
and it lets each entry carry an inline comment — which plain JSON can't do.

### Writing a new post

Unlike the other tabs, a Writing card's `link` points to a real page — a
full article, not just a preview. Each post is its own plain static file
under `writing/`, sharing the site's nav/fonts/colors but with its own
reading-column styling (`.article-page`, `.article-body`, `.article-note`,
etc. in `css/style.css`). To add one:

1. Copy an existing file in `writing/` (e.g. `writing/alberta-seperation.html`)
   as a starting point — it has the full markup pattern: kicker, title, meta
   line, `<h2>` section headings, `<p>` paragraphs, `.article-note` callouts
   for citations/asides, `.article-rule` for a section divider, and
   `.article-image` for a captioned image.
2. Edit the `<title>`/meta description and the content itself.
3. Add a matching entry to `content/writing.js` with `link:
   "writing/your-file.html"`.

No JS is loaded on these pages — they're plain HTML/CSS, so there's nothing
else to wire up.

### Swapping the placeholder photos for real ones

The `og-image.svg` and card `.art-*` blob-art placeholders are throwaway. For a
real link-preview image, replace `assets/og-image.svg` with a real
**1200×630 PNG or JPG** and update the two `og:image`/`twitter:image` `<meta>`
tags in `index.html` — SVG has spotty support in Twitter/Facebook/Slack
unfurlers.

## Deploying

This is a static site: any of the following works with zero configuration.

### GitHub Pages

1. Push this folder to a GitHub repo (root of the repo, or a `docs/` folder).
2. Repo → **Settings → Pages** → set the source branch/folder.
3. Your site is live at `https://<user>.github.io/<repo>/`.

### Netlify / Vercel / Cloudflare Pages (drag-and-drop)

- **Netlify**: drag the project folder onto the Netlify dashboard's deploy
  target, or run `netlify deploy` from inside it. No build command needed —
  set the publish directory to `.` (the folder containing `index.html`).
- **Vercel**: `vercel` from inside the folder, or import the repo in the
  dashboard with **Framework Preset: Other** and no build command.
- **Cloudflare Pages**: connect the repo (or drag-and-drop upload) with
  **build command empty** and **output directory** set to `.`.

### Statically CDN (serving raw files off a GitHub repo)

1. Push this folder to a **public** GitHub repo, e.g. `sjapanwala/site`.
2. Reference any file directly through Statically's CDN, no deploy step:
   ```
   https://cdn.statically.io/gh/sjapanwala/site/main/index.html
   https://cdn.statically.io/gh/sjapanwala/site/main/css/style.css
   ```
3. Because this build only ever loads its own CSS/JS with relative paths
   (`css/style.css`, `js/main.js`, `content/*.js`), the whole site works
   unmodified through the CDN — just swap `sjapanwala/site/main` for your own
   `<user>/<repo>/<branch>`.

## Home tab: intro photo + sticky note

The Home tab pairs the intro text with a Polaroid-style photo (where the
card grid preview used to sit — that grid now lives below, full-width) and
a handwritten-style caption "taped" over one corner. To change it:

- Swap the `<img>` in `index.html` (`.intro-photo`) for your own photo, and
  update its `alt` text.
- Edit the `<figcaption class="sticky-note">` text for the note.
- The note's handwriting font is Google's **Caveat**, already loaded in
  `<head>`.

## What's committed vs. what to replace

`content/photography.js` is currently empty and `content/projects.js` has
your real Soritch/CarbonScript projects — swap or add to either freely.
**Writing is your real content**: the 5 posts in `content/writing.js` and
their full pages under `writing/` were transferred from your existing
sjapanwala.github.io articles (text and citations carried over as-is; the
audio player and Giscus comments from the old site were left out, since
those depend on infrastructure this static site doesn't have — ask if you
want either added back).

The previous, simpler one-page version of this site (hero/about/projects/
writing/contact) was backed up to `_legacy-site-backup/` before this rebuild
— safe to delete once you're happy with the new layout.

**`content/cv.js` is entirely placeholder** — company names, dates, and
bullets are all fake. Replace them with your real experience/education
before linking `cv.html` anywhere real.
