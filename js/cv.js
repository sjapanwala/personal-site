// ============================================================
// cv.js — renders the timeline in cv.html from the global CV array
// (content/cv.js, loaded before this file) and wires up click-to-expand.
// Only loaded on cv.html — separate from js/main.js and the tab SPA.
// ============================================================

// Renders "start — end", just "end" (a single-year entry, no start given),
// or nothing at all (no dates given) — LinkedIn exports don't always
// include both, so this avoids a dangling "—" with an empty side.
function cvDateRange(entry) {
  if (entry.start && entry.end) return `${entry.start} — ${entry.end}`;
  return entry.end || entry.start || '';
}

function renderCvEntry(entry) {
  const dates = cvDateRange(entry);
  return `
    <div class="cv-entry">
      <button class="cv-entry-header" type="button" aria-expanded="false">
        <span>
          <span class="cv-entry-role">${entry.role}</span>
          <span class="cv-entry-org"> · ${entry.org}</span>
        </span>
        ${dates ? `<span class="cv-entry-dates">${dates}</span>` : ''}
      </button>
      ${entry.summary ? `<p class="cv-entry-summary">${entry.summary}</p>` : ''}
      <div class="cv-entry-detail-wrap">
        <div class="cv-entry-detail">
          ${entry.bullets.length ? `<ul class="cv-entry-bullets">${entry.bullets.map(b => `<li>${b}</li>`).join('')}</ul>` : ''}
          ${entry.tags.length ? `<div class="cv-entry-tags">${entry.tags.map(t => `<span class="cv-tag">${t}</span>`).join('')}</div>` : ''}
        </div>
      </div>
    </div>`;
}

function renderCvSection(title, entries) {
  if (!entries.length) return '';
  return `<h2 class="cv-section-title">${title}</h2><div class="cv-timeline">${entries.map(renderCvEntry).join('')}</div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  const work = CV.filter(e => e.type === 'work');
  const education = CV.filter(e => e.type === 'education');
  document.getElementById('cvContent').innerHTML =
    renderCvSection('Experience', work) + renderCvSection('Education', education);

  const entries = document.querySelectorAll('.cv-entry');
  entries.forEach(entry => {
    entry.querySelector('.cv-entry-header').addEventListener('click', () => {
      const expanded = entry.classList.toggle('expanded');
      entry.querySelector('.cv-entry-header').setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  });

  const toggleAll = document.getElementById('cvToggleAll');
  if (toggleAll) {
    toggleAll.addEventListener('click', () => {
      const anyCollapsed = Array.from(entries).some(e => !e.classList.contains('expanded'));
      entries.forEach(e => {
        e.classList.toggle('expanded', anyCollapsed);
        e.querySelector('.cv-entry-header').setAttribute('aria-expanded', anyCollapsed ? 'true' : 'false');
      });
      toggleAll.textContent = anyCollapsed ? 'Collapse all' : 'Expand all';
    });
  }
});
