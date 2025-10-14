// Types and data for coaches
export type Coach = {
  slug: string;
  name: string;
  title: string;
  image: string; // Path under public/
  email?: string; // Optional email for contact
  bio: string[]; // Paragraphs
  timeline: { year: number; role: string; org?: string }[];
  credentials: { name: string; issuer?: string; year?: number }[];
  specializations: string[];
};

export const coaches: Coach[] = [
  {
    slug: "keith-tay",
    name: "Keith Tay",
    title: "Founder | Thought Leader | Leadership Coach",
    image: "/coaches/Keith/1.jpg",
    email: "keith.echtventure@gmail.com",
    bio: [
      "Keith Tay is a leadership coach and thought leader whose work sits at the intersection of purpose, performance, and people. Trained in Mechanical Engineering and Theological Studies, he integrates systems thinking with a deep understanding of human formation to help leaders and teams grow with clarity and conviction.",
      "Across startups, social enterprises, and education, Keith has coached founders, executives, and emerging leaders to design healthier cultures, align strategy with purpose, and build habits that scale impact sustainably.",
      "He is passionate about bridging leadership, work, and spirituality—helping individuals lead from the inside out and organizations flourish with integrity and excellence.",
    ],
    timeline: [
      { year: 2004, role: "Co-Founder", org: "Collective Global" },
      { year: 2019, role: "Founder", org: "ECHTVENTURE" },
      { year: 2019, role: "Co-Founder", org: "Autrui Global" },
      { year: 2022, role: "Managing Director", org: "New Orange Sdn Bhd" },
      {
        year: 2024,
        role: "Director & Co-Founder",
        org: "Zera International School",
      },
    ],
    credentials: [
      { name: "Certified Scrum Master", issuer: "Scrum Alliance", year: 2025 },
      {
        name: "Design Thinking Practitioner",
        issuer: "Monash University",
        year: 2023,
      },
      {
        name: "Certified Coach Model",
        issuer: "Optimyze Asia Plt",
        year: 2022,
      },
    ],
    specializations: [
      "Leadership Development",
      "Purposeful Living",
      "Team Dynamics",
      "Enneagram Profiling",
      "Public Speaking",
    ],
  },
];

export function getCoachBySlug(slug: string) {
  return coaches.find((c) => c.slug === slug);
}
