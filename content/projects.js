// ============================================================
// PROJECTS — one object per card in the "projects." bento grid.
// Add, remove, or edit entries freely; the grid re-renders from
// this array automatically (see js/main.js -> renderProjects()).
// The Home tab preview shows whichever entries are FIRST in this
// array (top 2), so put whatever you want featured up top.
//
// Fields:
//   title       string   — project name; also folded into the eyebrow as
//                          "<category> · <title>" (e.g. "Projects · Soritch"),
//                          card shows no other text — just that + the screenshot
//   category    string   — usually just "Projects" (see title above)
//   description string   — not shown on the card (this style has no room for
//                          it); kept here for your own reference/future use
//   link        string   — where the card should go on click
//   image       string   — optional path to a real screenshot (e.g.
//                          "assets/your-file.jpg"); used instead of the
//                          gradient placeholder when present
//   imagePosition string — optional CSS object-position for the image
//                          (default "top"); e.g. "center 90%" to show the
//                          lower part of a tall screenshot instead
//   portrait    bool     — optional; set true for a tall image (e.g. a phone
//                          mockup) so it sits in a narrow, centered frame
//                          instead of being stretched across the card
//   gradient    string   — placeholder "screenshot" style: grad-1..grad-8,
//                          used when there's no `image` yet
//   span        string   — "" (1 col) | "wide" (2 cols) | "big" (3 cols)
//                          — every card is the same height; only width varies
// ============================================================
const PROJECTS = [
  {
    title: "Soritch",
    category: "Software",
    description: "Portfolio intelligence for macOS and Windows — an AI-scored portfolio tracker with watchlists and predictive analytics, built for individual investors who want more than a spreadsheet.",
    link: "https://soritch.com",
    image: "assets/soritch-web.webp",
    gradient: "grad-1",
    span: "wide"
  },
  {
    title: "Tameru",
    category: "Software",
    description: "An opensource budgeting app for IOS and Android.",
    link: "https://tameru.cc",
    image: "assets/tameru-iphone-mockup.png",
    portrait: true,
    gradient: "grad-1",
    span: "wide"
  },
  {
    title: "CarbonScript",
    category: "Software",
    description: "A toy interpreter built in Python, made to understand how programming languages actually work under the hood.",
    link: "https://sjapanwala.github.io/carbonscript/",
    image: "assets/carbonscript-logo.png",
    gradient: "grad-2",
    span: "wide"
  },
  {
    title: "Whoopity",
    category: "Software",
    description: "",
    link: "https://whoopity.sjapanwala.com",
    image: "assets/whoopity.png",
    imagePosition: "center 90%",
    gradient: "grad-2",
    span: "wide"
  }
];
