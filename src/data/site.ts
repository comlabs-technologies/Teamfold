import { editorialImages } from "./images";

/* ============================================================
   Every string on the marketing page lives here so the brand,
   copy and structure can be replaced without touching markup.
   ============================================================ */

export type IconName =
  | "compass"
  | "users"
  | "gauge"
  | "scale"
  | "shield"
  | "sprout"
  | "heart"
  | "plug"
  | "clock"
  | "clipboard"
  | "alert";

export const brand = {
  name: "Peoplelayer",
  wordmark: "Peoplelayer",
  descriptor: "Fractional People Operations",
  email: "hello@peoplelayer.example",
  linkedin: "https://www.linkedin.com/",
  metaTitle: "Peoplelayer — Fractional People Operations for growing teams",
  metaDescription:
    "Peoplelayer gives startups and scaleups senior People Operations leadership on a fractional basis: hiring systems, performance rhythm, manager support and compliance groundwork.",
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#process" },
  { label: "About", href: "#leader" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
] as const;

export const primaryCta = {
  label: "Book a call",
  href: "#contact",
} as const;

/* ---------------------------------------------------------- Hero */

export const hero = {
  headingLines: ["Senior People leadership", "without the full-time overhead"],
  supporting:
    "Peoplelayer plugs an experienced People Operations lead into your company for the hours you actually need — building the hiring, performance and manager systems a growing team runs on.",
  cta: { label: "Book a 30-minute audit", href: "#contact" },
  ctaAnnotation: "It's free",
  trustStatement: "Trusted by founders and operators building their first People function.",
  avatars: [
    { initials: "AR", tone: "#fbd6a4" },
    { initials: "JM", tone: "#f8eadb" },
    { initials: "TK", tone: "#f5a331" },
    { initials: "SD", tone: "#e6e3dc" },
  ],
} as const;

export type RotatingQuote = {
  id: string;
  initials: string;
  tone: string;
  quote: string;
};

export const rotatingQuotes: RotatingQuote[] = [
  {
    id: "hiring",
    initials: "AR",
    tone: "#fbd6a4",
    quote: "We need hiring to stop depending on one person's calendar.",
  },
  {
    id: "reviews",
    initials: "JM",
    tone: "#f8eadb",
    quote: "Our review cycle needs a shape people can plan around.",
  },
  {
    id: "managers",
    initials: "TK",
    tone: "#f5a331",
    quote: "First-time managers need something better than instinct.",
  },
  {
    id: "policy",
    initials: "SD",
    tone: "#e6e3dc",
    quote: "Policy work keeps slipping to the bottom of the list.",
  },
];

/* ---------------------------------------------------------- Marquee + values */

export const valueStatements = [
  "Build repeatable hiring systems",
  "Make performance expectations clear",
  "Create onboarding people remember",
  "Give managers practical support",
  "Reduce People Ops risk",
] as const;

export const valueColumns = [
  {
    title: "Senior leadership, not junior administration",
    body: "You work directly with an operator who has built People functions before — not a coordinator learning on your team.",
  },
  {
    title: "A 90-day plan before heavy implementation",
    body: "We agree on sequencing and owners first, so effort goes to the two or three things that unblock the company.",
  },
  {
    title: "Human-first systems teams will actually use",
    body: "Every process is designed around how your managers already work, then documented so it survives without us.",
  },
] as const;

export const trustStrip = {
  label: "Trusted by teams at",
  companies: [
    { name: "Northbound Labs", style: "wide" },
    { name: "Ferrow Health", style: "serifish" },
    { name: "Quaystone", style: "tight" },
    { name: "Anvil & Oak", style: "wide" },
    { name: "Latitude Nine", style: "tight" },
  ],
} as const;

/* ---------------------------------------------------------- Audience paths */

export type AudienceScene = "problems" | "plan" | "call";

export type AudiencePath = {
  id: string;
  title: string;
  body: string;
  cta: { label: string; href: string };
  ctaStyle: "outline" | "dark";
  scene: AudienceScene;
};

export const audienceHeading = {
  title: "Start where you are — then choose the right next step",
  body: "Most teams arrive at one of three moments. Each one has a sensible first move.",
};

export const audiencePaths: AudiencePath[] = [
  {
    id: "chaotic",
    title: "People Ops feels chaotic",
    body: "Hiring, questions and admin all land in the same inbox, and nobody owns the system underneath them.",
    cta: { label: "See what we fix", href: "#pain-points" },
    ctaStyle: "outline",
    scene: "problems",
  },
  {
    id: "plan",
    title: "I need a practical operating plan",
    body: "You know roughly what is missing. You want a sequenced plan with owners, dates and a realistic scope.",
    cta: { label: "Explore services", href: "#services" },
    ctaStyle: "outline",
    scene: "plan",
  },
  {
    id: "ready",
    title: "I'm ready to fix this",
    body: "You want senior help in the building this quarter, working alongside your managers week to week.",
    cta: { label: "Book a call", href: "#contact" },
    ctaStyle: "dark",
    scene: "call",
  },
];

export const problemPills = [
  { label: "Slow hiring", rotate: -6, offset: 0 },
  { label: "Manager overload", rotate: 5, offset: 18 },
  { label: "Unclear expectations", rotate: -4, offset: 8 },
  { label: "Retention risk", rotate: 7, offset: 24 },
] as const;

export const callParticipants = [
  { name: "Discovery call", role: "30 minutes", active: true },
  { name: "Founder", role: "Speaking", active: false },
  { name: "People lead", role: "Listening", active: false },
] as const;

/* ---------------------------------------------------------- Pain points */

export const painPoints = {
  title: "People operations shouldn't become the founder's second job.",
  body: "As headcount grows, the informal habits that worked at ten people start costing time, consistency and good candidates. These are the three costs teams feel first.",
  items: [
    {
      icon: "clock" as IconName,
      title: "Hiring drains leadership time",
      body: "Without a scorecard, a loop and a shared bar, every open role pulls founders back into scheduling and second-guessing.",
    },
    {
      icon: "clipboard" as IconName,
      title: "Performance reviews lack consistency",
      body: "Feedback arrives at different depths from different managers, so promotion and pay decisions become hard to defend.",
    },
    {
      icon: "alert" as IconName,
      title: "Compliance stays on the backlog",
      body: "Handbooks, classifications and state-by-state requirements sit untouched until an incident forces the issue.",
    },
  ],
  ctas: {
    primary: { label: "Book a 30-minute audit", href: "#contact" },
    secondary: { label: "See how it works", href: "#process" },
  },
};

/* ---------------------------------------------------------- Services */

export type Service = {
  id: string;
  icon: IconName;
  title: string;
  body: string;
};

export const servicesHeading = {
  title: "What we help growing teams build",
  body: "Eight practical building blocks. Most engagements start with two or three and expand only when the team is ready.",
};

export const services: Service[] = [
  {
    id: "foundations",
    icon: "compass",
    title: "People Operations Foundations",
    body: "Employee lifecycle, documentation and the handful of policies a growing company genuinely needs in place.",
  },
  {
    id: "recruiting",
    icon: "users",
    title: "Recruiting and Onboarding",
    body: "Role scorecards, structured interview loops and a first-30-days plan that new hires remember for the right reasons.",
  },
  {
    id: "performance",
    icon: "gauge",
    title: "Performance Management",
    body: "A lightweight review rhythm, clear expectations by level and feedback managers can deliver without dread.",
  },
  {
    id: "compensation",
    icon: "scale",
    title: "Compensation and Leveling",
    body: "Job architecture, bands and a promotion process that holds up when candidates and employees ask how decisions are made.",
  },
  {
    id: "relations",
    icon: "shield",
    title: "Employee Relations and Risk",
    body: "Investigation practice, documentation standards and a calm escalation path before difficult moments arrive.",
  },
  {
    id: "managers",
    icon: "sprout",
    title: "Manager Development",
    body: "Practical coaching for first-time managers: one-to-ones, delegation, difficult conversations and performance follow-through.",
  },
  {
    id: "culture",
    icon: "heart",
    title: "Culture and Engagement",
    body: "Listening rhythms, onboarding rituals and internal communication that hold up across time zones and remote teams.",
  },
  {
    id: "tooling",
    icon: "plug",
    title: "HR Technology Enablement",
    body: "Selecting, configuring and connecting your HRIS, ATS and payroll so the data stays clean and reporting is trustworthy.",
  },
];

/* ---------------------------------------------------------- Process */

export type ProcessStep = {
  id: "discovery" | "plan" | "execution" | "optimise";
  title: string;
  body: string;
};

export const processHeading = {
  title: "A clear four-step path to stronger People Ops.",
  body: "No long discovery phase, no fifty-page deliverable nobody opens. Each step produces something your team can use that week.",
};

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    title: "Discovery Call",
    body: "Thirty minutes on your team shape, hiring plans and the moments that currently hurt.",
  },
  {
    id: "plan",
    title: "90-Day People Plan",
    body: "A sequenced plan with owners, dates and a scope your team can absorb alongside its real work.",
  },
  {
    id: "execution",
    title: "Execution and Coaching",
    body: "We build the systems with your managers, coaching them through the first live cycles.",
  },
  {
    id: "optimise",
    title: "Scale and Optimise",
    body: "Review what is working, tighten the rough edges and hand over documentation your team owns.",
  },
];

export const processStepDuration = 5500;

/* ---------------------------------------------------------- Audit CTA */

export const auditCta = {
  title: "Book a free 30-minute People Ops audit",
  body: "A short, direct conversation about where your People function is under strain — and what would actually help first. No deck, no pressure.",
  outcomesLabel: "What you'll leave with",
  outcomes: [
    "An honest read on your two biggest People Ops gaps",
    "A sensible first move you can make without outside help",
    "A view of what a fractional engagement would cover",
  ],
  cta: { label: "Book your audit", href: "#contact" },
  reassurance: "Thirty minutes, one call, no obligation to continue.",
};

/* ---------------------------------------------------------- Proof / insights */

export const proofSection = {
  title: "What teams need from a People partner",
  body: "These are the patterns we see across the companies we work with — written as principles, not as client quotes.",
};

export type ProofCard = {
  id: string;
  context: string;
  initials: string;
  tone: string;
  statement: string;
};

export const proofCards: ProofCard[] = [
  {
    id: "seed",
    context: "Founder, seed-stage software company",
    initials: "SS",
    tone: "#fbd6a4",
    statement:
      "At this stage the win is a hiring loop that runs without the founder in every session — a scorecard, a fixed panel and a decision meeting on the calendar.",
  },
  {
    id: "fintech",
    context: "COO, financial technology company",
    initials: "FT",
    tone: "#f8eadb",
    statement:
      "Regulated environments need documentation before scale, not after. Classifications, handbooks and records should be settled while the team is still small enough to fix them quickly.",
  },
  {
    id: "distributed",
    context: "Operations lead, distributed team",
    initials: "DT",
    tone: "#f5a331",
    statement:
      "Distributed teams do not need more meetings. They need written expectations, predictable rhythms and onboarding that works the same way in every time zone.",
  },
  {
    id: "growth",
    context: "Engineering founder, growth-stage startup",
    initials: "GS",
    tone: "#e6e3dc",
    statement:
      "Levels and bands are a communication tool. Once people can see what the next level asks for, most performance conversations get considerably easier.",
  },
  {
    id: "services",
    context: "Executive, professional-services firm",
    initials: "PS",
    tone: "#f8eadb",
    statement:
      "Manager capability compounds faster than any policy. Coaching the first line of managers changes retention more than another engagement survey ever will.",
  },
];

/* ---------------------------------------------------------- Leader */

export const leader = {
  eyebrow: "Who you'll be working with",
  name: "Amara Whitfield",
  role: "Founder and Principal, Peoplelayer",
  imageUrl: editorialImages.peopleLeader,
  imageAlt: "Portrait of the Peoplelayer founder and principal People Operations consultant",
  body: "I've spent my career building People functions inside companies going through their fastest growth — writing the first handbook, running the first review cycle, and coaching managers into roles they had never held before. Peoplelayer exists so smaller teams can get that same level of judgement without hiring for it full time.",
  credentials: [
    "People leadership across software, health and professional-services teams",
    "Built hiring, performance and leveling systems from a blank page",
    "Coaches first-time managers through their first full performance cycle",
  ],
  cta: { label: "Start a conversation", href: "#contact" },
};

/* ---------------------------------------------------------- Coverage */

export const coverage = {
  title: "Supporting distributed teams across the United States",
  body: "We work remotely with teams in every time zone, and stay close to the state-by-state requirements that come with a distributed payroll.",
  cta: { label: "Check availability", href: "#contact" },
};

/* ---------------------------------------------------------- Articles */

export type Article = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  href: string;
};

export const articlesHeading = {
  title: "Latest insights",
  cta: { label: "All insights", href: "#insights" },
};

export const articles: Article[] = [
  {
    id: "policies",
    category: "Foundations",
    title: "What People Policies Should a Startup Establish First?",
    excerpt:
      "A short list of policies worth writing before headcount reaches thirty — and the ones that can safely wait.",
    image: editorialImages.teamCollaboration,
    imageAlt: "A small team working together around a table in a bright office",
    href: "#insights",
  },
  {
    id: "remote-culture",
    category: "Culture",
    title: "Building Remote Culture Without Leaving It to Chance",
    excerpt:
      "Rituals, written norms and onboarding choices that make a distributed team feel deliberate rather than accidental.",
    image: editorialImages.remoteMeeting,
    imageAlt: "A remote team meeting displayed on a laptop screen in an office",
    href: "#insights",
  },
  {
    id: "employee-relations",
    category: "Risk",
    title: "When a Growing Team Needs an Employee Relations Process",
    excerpt:
      "The signals that tell you informal handling has run out of road, and what a proportionate process looks like.",
    image: editorialImages.teamCulture,
    imageAlt: "Colleagues in conversation during an informal team gathering",
    href: "#insights",
  },
];

/* ---------------------------------------------------------- FAQ */

export type Faq = { id: string; question: string; answer: string };

export const faqs: Faq[] = [
  {
    id: "audit",
    question: "What happens in the 30-minute audit?",
    answer:
      "We spend the time on your team: how you hire, how managers give feedback, what is written down and what only lives in someone's head. You leave with an honest read on the two gaps worth addressing first, whether or not you work with us.",
  },
  {
    id: "plan",
    question: "What is included in the 90-day People Plan?",
    answer:
      "A sequenced plan covering the systems to build, the order to build them in, who owns each piece internally, and what we will run together. It is scoped to fit alongside your team's existing workload rather than replacing it.",
  },
  {
    id: "size",
    question: "What size of company is this built for?",
    answer:
      "Most engagements sit between roughly fifteen and two hundred people — past the point where informal habits stop scaling, but before a full in-house People team is the right investment.",
  },
  {
    id: "hris",
    question: "Do you work with our existing HR tools?",
    answer:
      "Yes. We start with what you already pay for and make it work properly. If a change is genuinely needed, we help you scope the selection and run the migration rather than recommending tools by default.",
  },
  {
    id: "hours",
    question: "How much time each month does this take?",
    answer:
      "Engagements typically run between one and three days a month, adjusted around live cycles such as hiring pushes or review season. The plan sets the shape before anything is committed.",
  },
  {
    id: "handover",
    question: "What happens when the engagement ends?",
    answer:
      "Everything is documented as it is built, and the final weeks are spent handing over to whoever owns it internally. The goal is a People function that keeps running without us.",
  },
  {
    id: "existing-team",
    question: "Can you support an existing HR person?",
    answer:
      "Often that is the best use of a fractional lead. Your in-house person keeps day-to-day ownership while we add senior judgement on structure, escalations and the harder design decisions.",
  },
  {
    id: "start",
    question: "How quickly can we start?",
    answer:
      "Usually within two weeks of the audit call. Discovery and the plan take the first fortnight; hands-on work begins immediately afterwards.",
  },
];

/* ---------------------------------------------------------- Final CTA + footer */

export const finalCta = {
  title: "Let's build the People systems your team deserves",
  body: "Start with a short audit call. We'll tell you plainly whether we can help — and what to do first if we can't.",
  primary: { label: "Book a 30-minute audit", href: "#contact" },
  secondary: { label: "Email us directly", href: `mailto:${brand.email}` },
};

export const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "Services", href: "#services" },
      { label: "How it works", href: "#process" },
      { label: "About", href: "#leader" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Insights", href: "#insights" },
      { label: "FAQ", href: "#faq" },
      { label: "Coverage", href: "#coverage" },
    ],
  },
] as const;

export type LegalPage = {
  slug: "privacy" | "terms";
  title: string;
  updated: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

export const legalPages: LegalPage[] = [
  {
    slug: "privacy",
    title: "Privacy",
    updated: "This page describes how the Peoplelayer website handles visitor information.",
    intro:
      "Peoplelayer keeps this simple: the marketing site collects as little as possible, and anything you send us is used only to reply to you.",
    sections: [
      {
        heading: "What the site collects",
        body: "The pages on this site are static. We do not run advertising trackers, and we do not build visitor profiles. Standard server logs may record request data such as IP address and user agent for security and reliability purposes.",
      },
      {
        heading: "What you send us",
        body: "If you email us or book a call, we hold your message and contact details so we can respond and, where relevant, prepare for the conversation. We do not sell or share that information with third parties for their own marketing.",
      },
      {
        heading: "Retention and removal",
        body: "Correspondence is kept while it is useful to an active or prospective engagement. You can ask us to delete your details at any time by emailing us, and we will confirm once it is done.",
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms",
    updated: "These terms cover use of the Peoplelayer website, not any consulting engagement.",
    intro:
      "Consulting work is governed by a separate written agreement. These terms apply only to browsing this website.",
    sections: [
      {
        heading: "Use of the site",
        body: "You are welcome to read, quote and link to the material here. Please do not republish substantial portions as your own work, or use the site in a way that interferes with its availability for others.",
      },
      {
        heading: "Nothing here is advice",
        body: "The articles and descriptions on this site are general information about People Operations practice. They are not legal, tax or employment advice for your specific situation, and should not be relied on as a substitute for professional counsel.",
      },
      {
        heading: "Engagements",
        body: "Scope, fees, confidentiality and liability for any consulting work are set out in the engagement agreement signed by both parties. Where those terms and this page differ, the engagement agreement governs.",
      },
    ],
  },
];

export const footerMeta = {
  connectTitle: "Connect",
  copyright: `© ${new Date().getFullYear()} ${brand.name}. All rights reserved.`,
  legalLinks: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};
