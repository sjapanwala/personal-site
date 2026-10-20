// ============================================================
// main.js — tab switching + card rendering.
// Reads from the global PROJECTS / WRITING / PHOTOGRAPHY arrays
// (defined in content/*.js, loaded before this file) and builds the
// bento grids on load. No build step, no fetch() — so this works when
// index.html is opened directly as a file:// URL.
// ============================================================

// "" | "wide" | "big" -> bento grid-span class. Every card is the same
// fixed height (see grid-auto-rows on .bento-grid in css/style.css) —
// these only change how many columns wide a card is.
function spanClass(span) {
  switch (span) {
    case "wide": return "card-span-wide"; // 2 columns
    case "big":  return "card-span-big";  // 3 columns
    default:     return "";               // 1 column
  }
}

// Every card shares the same header row: an eyebrow label top-left and
// an external-link arrow top-right (see .card-header in css/style.css).
function cardHeader(category) {
  return `
    <div class="card-header">
      <span class="card-eyebrow">${category}</span>
      <span class="card-arrow" aria-hidden="true">&#8599;</span>
    </div>`;
}

// ---- card templates -----------------------------------------

function renderProjectCard(p) {
  // Use a real screenshot (p.image) when there is one; otherwise fall
  // back to the abstract placeholder shape (p.gradient).
  const art = p.image
    ? `<img class="card-art" src="${p.image}" alt="${p.title} screenshot">`
    : `<div class="card-art art-${p.gradient.replace('grad-', '')}" aria-hidden="true"></div>`;
  return `
    <a class="card card--project ${spanClass(p.span)}" href="${p.link}" target="_blank" rel="noopener">
      ${cardHeader(`${p.category} · ${p.title}`)}
      <div class="card-project-art">${art}</div>
    </a>`;
}

function renderPostCard(w) {
  return `
    <a class="card card--post" href="${w.link}">
      ${cardHeader("Writing · Blog")}
      <div class="card-body">
        <div class="card-title">${w.title}</div>
        <div class="post-date">${w.date}</div>
        <p class="post-excerpt">${w.excerpt}</p>
      </div>
    </a>`;
}

function renderPhotoCard(ph) {
  // Use a real photo (ph.image) when there is one; otherwise fall back
  // to the abstract placeholder shape (ph.gradient). ph.link is where
  // the card goes on click — point it at the full-resolution image
  // (or wherever you'd like) once you have a real photo.
  const art = ph.image
    ? `<img class="card-art" src="${ph.image}" alt="${ph.caption}">`
    : `<div class="card-art art-${ph.gradient.replace('grad-', '')}" aria-hidden="true"></div>`;
  return `
    <a class="card card--image ${spanClass(ph.span)}" href="${ph.link || '#'}" target="_blank" rel="noopener">
      ${art}
      ${cardHeader(ph.category)}
      <div class="card-body">${ph.caption}</div>
    </a>`;
}

// ---- tab switching --------------------------------------------

function initTabs() {
  const tabLinks = document.querySelectorAll('.tab-link');
  const panels = document.querySelectorAll('.tab-panel');

  function activate(tabName) {
    tabLinks.forEach(link => {
      const isActive = link.dataset.tab === tabName;
      link.classList.toggle('active', isActive);
      link.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
    panels.forEach(panel => {
      panel.classList.toggle('active', panel.dataset.tabPanel === tabName);
    });
  }

  tabLinks.forEach(link => {
    link.addEventListener('click', () => {
      activate(link.dataset.tab);
      history.replaceState(null, '', '#' + link.dataset.tab);
    });
  });

  // Bolded words in the intro paragraph (see .word-link in css/style.css)
  // jump to the tab they name, same as clicking the nav — e.g. "software"
  // -> Projects. href="#projects" is just a hash fallback; this is what
  // actually drives the switch.
  document.querySelectorAll('[data-tab-link]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      activate(link.dataset.tabLink);
      history.replaceState(null, '', '#' + link.dataset.tabLink);
    });
  });

  // Deep-link support: opening index.html#writing lands on that tab.
  const initial = window.location.hash.replace('#', '');
  if (initial && document.querySelector(`.tab-link[data-tab="${initial}"]`)) {
    activate(initial);
  }
}

// A single gray box that slides to whichever tab is hovered (see
// .nav-hover in css/style.css), instead of each tab fading its own
// background in independently. The active tab gets a colored
// underline instead — that's pure CSS, not handled here.
function initNavHover() {
  const pill = document.querySelector('.nav-pill');
  const indicator = pill.querySelector('.nav-hover');
  if (!indicator) return;

  pill.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
      indicator.style.width = link.offsetWidth + 'px';
      indicator.style.transform = `translateX(${link.offsetLeft}px)`;
      indicator.style.opacity = '1';
    });
  });
  pill.addEventListener('mouseleave', () => {
    indicator.style.opacity = '0';
  });
}

// ---- init -------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('projectsGrid').innerHTML = PROJECTS.map(renderProjectCard).join('');
  document.getElementById('writingGrid').innerHTML = WRITING.map(renderPostCard).join('');
  document.getElementById('photographyGrid').innerHTML = PHOTOGRAPHY.map(renderPhotoCard).join('');
  initTabs();
  initNavHover();
  initGreeting();
});

// ---- rotating home greeting ------------------------------------

// Add/reorder entries here to change which languages the header cycles
// through. `lang` sets the element's lang attribute (helps screen
// readers use the right pronunciation and lets you target :lang(xx)
// in CSS if a language ever needs its own font treatment).
const GREETINGS = [
  { lang: "en", text: "Hello!" },
  { lang: "fr", text: "Bonjour !" },
  { lang: "ja", text: "こんにちは!" },
  { lang: "de", text: "Hallo!" },
  { lang: "ar", text: "مرحبا!" }
];

function initGreeting() {
  const el = document.getElementById('greeting');
  if (!el || GREETINGS.length < 2) return;

  let i = 0;
  setInterval(() => {
    el.classList.add('is-swapping');
    setTimeout(() => {
      i = (i + 1) % GREETINGS.length;
      el.textContent = GREETINGS[i].text;
      el.lang = GREETINGS[i].lang;
      el.classList.remove('is-swapping');
    }, 250); // matches the .greeting transition duration in css/style.css
  }, 2600);
}
