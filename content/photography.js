// ============================================================
// PHOTOGRAPHY — one object per photo card in the "photography." grid.
// Add, remove, or edit entries freely; the grid re-renders from this
// array automatically (see js/main.js -> renderPhotoCard()). The Home
// tab preview shows whichever entries are FIRST in this array (top 2).
//
// Fields:
//   category  string — eyebrow label, format "Photography · <sub-area>"
//   caption   string — white caption over the bottom scrim
//   image     string — optional path to a real photo (e.g.
//             "assets/your-file.jpg"); used instead of the gradient
//             placeholder when present
//   gradient  string — placeholder art style: grad-1..grad-8, used
//             when there's no `image` yet
//   span      string — "" (1 col) | "wide" (2 cols) | "big" (3 cols)
//             — every card is the same height; only width varies
//   link      string — optional; where the card goes on click (point
//             it at the full-resolution photo once you have a real
//             one). Omit or use "#" for a non-clickable photo.
// ============================================================
const PHOTOGRAPHY = [
  {
    category: "Photography · Tokyo",
    caption: "📍 Tokyo, Japan",
    image: "assets/tokyo-tower.jpg",
    gradient: "grad-6",
    span: "",
    link: "#"
  },
  {
    category: "Photography · Osaka",
    caption: "📍 Osaka, Japan",
    image: "assets/dotonbori-signs.jpg",
    gradient: "grad-1",
    span: "wide",
    link: "#"
  },
  {
    category: "Photography · Kyoto",
    caption: "📍 Kyoto, Japan",
    image: "assets/fushimi-inari.jpg",
    gradient: "grad-3",
    span: "",
    link: "#"
  },
  {
    category: "Photography · Canadian Rockies",
    caption: "📍 Kananaskis, Canada",
    image: "assets/rockies-mist.jpg",
    gradient: "grad-2",
    span: "wide",
    link: "#"
  },
  {
    category: "Photography · Canadian Rockies",
    caption: "📍 Kananaskis, Canada",
    image: "assets/rockies-overlook.jpg",
    gradient: "grad-4",
    span: "",
    link: "#"
  },
  {
    category: "Photography · Canadian Rockies",
    caption: "📍 Kananaskis, Canada",
    image: "assets/rockies-mirror.jpg",
    gradient: "grad-7",
    span: "",
    link: "#"
  },
  {
    category: "Photography · Calgary Tower",
    caption: "📍 Calgary, Canada",
    image: "assets/calgary-tower.jpg",
    gradient: "grad-7",
    span: "",
    link: "#"
  },
  {
    category: "Photography · Moon",
    caption: "📍 The Moon",
    image: "assets/half-moon.jpg",
    gradient: "grad-7",
    span: "",
    link: "#"
  },
    {
    category: "Photography · Moon",
    caption: "📍 The Moon",
    image: "assets/cheese-moon.jpg",
    gradient: "grad-7",
    span: "wide",
    link: "#"
  },

];
