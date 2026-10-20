// ============================================================
// CV — timeline entries for cv.html's interactive, expandable resume.
// Pulled from a LinkedIn "Save to PDF" export — LinkedIn didn't include
// a description for the two Trail Appliances entries, so their bullets
// are empty; add your own if you want more than the summary line.
//
// Fields:
//   type      "work" | "education" — which section the entry renders in
//   role      string — job title / degree
//   org       string — company / school
//   start     string — e.g. "2024" (omit/"" if there's no start date)
//   end       string — e.g. "Present" (omit/"" if there's no end date)
//   summary   string — one line, always visible (shown collapsed)
//   bullets   string[] — detail bullets, revealed when expanded
//   tags      string[] — skill/tech chips, revealed when expanded
// ============================================================
const CV = [
  {
    type: "work",
    role: "Customer Service Representative",
    org: "Trail Appliances AB/SK",
    start: "April 2025",
    end: "Present",
    summary: "Customer service for appliance sales and support, Edmonton, Alberta.",
    bullets: [],
    tags: ["Customer Service"]
  },
  {
    type: "work",
    role: "Customer Service Representative",
    org: "Trail Appliances AB/SK",
    start: "June 2024",
    end: "September 2024",
    summary: "An earlier four-month stint in the same role before returning in 2025.",
    bullets: [],
    tags: ["Customer Service"]
  },
  {
    type: "education",
    role: "Bachelor's Degree, Liberal Arts and Sciences/Liberal Studies",
    org: "University of Alberta",
    start: "",
    end: "2023",
    summary: "Political Science & Psychology — Edmonton, Alberta, Canada.",
    bullets: [
      "Started in Computer Science before transitioning to Political Science and Psychology, focusing on governance, human behavior, and public discourse.",
      "Awarded the Alexander Rutherford Scholarship."
    ],
    tags: ["Political Science", "Psychology"]
  },
  {
    type: "education",
    role: "Speech & Debate Training",
    org: "The Speech Studio Edmonton",
    start: "2016",
    end: "2023",
    summary: "Communication skills training — debate and argumentation.",
    bullets: [
      "Level 3 Communication Skills Award, with Distinction.",
      "Level 2 Communication Skills Award."
    ],
    tags: ["Debate", "Argumentation"]
  },
  {
    type: "education",
    role: "High School Diploma",
    org: "Lillian Osborne High School",
    start: "",
    end: "",
    summary: "",
    bullets: [],
    tags: []
  }
];
