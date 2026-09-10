import { editorialImages } from "./images";

/* ============================================================
   Every user-facing string lives here so brand, copy and
   structure can be changed without touching any markup.
   ============================================================ */

/**
 * Booking destination. Set this to a real scheduling URL (Cal.com,
 * SavvyCal, HubSpot, …) to send every primary CTA straight there.
 * While it is "#", the CTAs open the built-in contact modal instead.
 */
export const BOOKING_URL: string = "#";

export const isBookingConfigured = BOOKING_URL !== "#" && BOOKING_URL.length > 0;

/**
 * Contact addresses. Replace CONTACT_EMAIL once the mailbox is live —
 * it is the single source of truth for every mailto link on the site.
 */
export const CONTACT_EMAIL: string = "hello@teamfold.co";

/**
 * Set this to the company LinkedIn URL to reveal the footer icon.
 * While it is null the link stays hidden rather than pointing nowhere.
 */
export const LINKEDIN_URL: string | null = null;

export const SITE_URL = "https://teamfold-eight.vercel.app";

export type IconName =
  | "compass"
  | "users"
  | "gauge"
  | "scale"
  | "shield"
  | "sprout"
  | "clock"
  | "clipboard"
  | "alert";

export const brand = {
  name: "Teamfold",
  wordmark: "Teamfold",
  tagline: "People systems built to scale with you.",
  positioning: "Senior People leadership, folded into your team.",
  descriptor: "Fractional People Operations",
  email: CONTACT_EMAIL,
  metaTitle: "Teamfold — Senior People leadership, folded into your team",
  metaDescription:
    "Teamfold gives growing companies experienced People Operations leadership for the hours they actually need — stronger hiring, performance and manager systems without the full-time overhead.",
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
] as const;

export const primaryCta = { label: "Book a call" } as const;

/* ---------------------------------------------------------- Hero */

export const hero = {
  headingLines: ["Senior People leadership", "folded into your team."],
  supporting:
    "Teamfold gives growing companies experienced People Operations leadership for the hours they actually need—building stronger hiring, performance and manager systems without the full-time overhead.",
  ctaLabel: "Book a 30-minute audit",
  reassurance: "Free, practical and pressure-free.",
} as const;

/**
 * The rotating line above the heading. These are the problems founders
 * describe to us, written as prompts — not attributed to any customer.
 */
export type FounderPrompt = { id: string; message: string };

export const founderPrompts: FounderPrompt[] = [
  { id: "hiring", message: "Hiring shouldn't depend on one person's calendar." },
  { id: "reviews", message: "Our review cycle needs a shape people can plan around." },
  { id: "managers", message: "First-time managers need more than instinct to lead well." },
  { id: "policy", message: "Policy work keeps slipping to the bottom of the list." },
];

/* ---------------------------------------------------------- Trust / benefit strip */

export const valueStatements = [
  "Build repeatable hiring systems",
  "Make performance expectations clear",
  "Create onboarding people remember",
  "Give managers practical support",
  "Reduce People Ops risk",
] as const;

export const trustStrip = {
  headline: "Built for founders creating their first People function.",
  points: [
    {
      title: "Senior operator involvement",
      body: "You work directly with an experienced People lead — not a coordinator learning on your team.",
    },
    {
      title: "A practical 90-day plan",
      body: "Sequencing and owners are agreed before implementation, so effort lands on what unblocks the company.",
    },
    {
      title: "Documentation your team owns",
      body: "Every system is written down as it is built, so it keeps running once the engagement ends.",
    },
  ],
} as const;

/* ---------------------------------------------------------- Audience paths */

export type AudienceScene = "problems" | "plan" | "call";

export type AudiencePath = {
  id: string;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref?: string;
  ctaStyle: "outline" | "booking";
  scene: AudienceScene;
};

export const audienceHeading = {
  title: "Start where you are",
  body: "Most teams arrive at one of three moments. Each one has a sensible first move.",
};

export const audiencePaths: AudiencePath[] = [
  {
    id: "chaotic",
    title: "People Ops feels chaotic",
    body: "Hiring, questions and admin land in the same inbox, and nobody owns the system underneath them.",
    ctaLabel: "See what we fix",
    ctaHref: "#problems",
    ctaStyle: "outline",
    scene: "problems",
  },
  {
    id: "plan",
    title: "I need a practical operating plan",
    body: "You know roughly what is missing and want a sequenced plan with owners, dates and a realistic scope.",
    ctaLabel: "Explore services",
    ctaHref: "#services",
    ctaStyle: "outline",
    scene: "plan",
  },
  {
    id: "ready",
    title: "I'm ready to fix this",
    body: "You want senior help in the building this quarter, working alongside your managers week to week.",
    ctaLabel: "Book a call",
    ctaStyle: "booking",
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
  { name: "Discovery call", role: "30 min", active: true },
  { name: "Founder", role: "Speaking", active: false },
  { name: "People lead", role: "Listening", active: false },
] as const;

/* ---------------------------------------------------------- Problems + consequences */

export const painPoints = {
  title: "People operations shouldn't become the founder's second job.",
  body: "The informal habits that work at ten people start costing time, consistency and good candidates. Each of these has a downstream cost that compounds quietly.",
  items: [
    {
      icon: "clock" as IconName,
      title: "Hiring drains leadership time",
      body: "Without a scorecard, a fixed loop and a shared bar, every open role pulls founders back into scheduling and second-guessing.",
      consequence: "Roles stay open longer and strong candidates accept elsewhere.",
    },
    {
      icon: "clipboard" as IconName,
      title: "Performance reviews lack consistency",
      body: "Feedback arrives at different depths from different managers, so the same behaviour is rated differently across teams.",
      consequence: "Pay and promotion decisions become difficult to explain or defend.",
    },
    {
      icon: "alert" as IconName,
      title: "Compliance stays on the backlog",
      body: "Handbooks, classifications and state-by-state requirements sit untouched while more urgent work takes priority.",
      consequence: "Small gaps surface at the worst moment, usually during an exit or a raise.",
    },
  ],
  ctas: {
    primaryLabel: "See how we work",
    primaryHref: "#process",
    secondaryLabel: "Explore services",
    secondaryHref: "#services",
  },
};

/* ---------------------------------------------------------- Services */

export type Service = { id: string; icon: IconName; title: string; body: string };

export const servicesHeading = {
  title: "What we help growing teams build",
  body: "Six practical building blocks. Most engagements start with two or three and expand only when the team is ready.",
};

export const services: Service[] = [
  {
    id: "foundations",
    icon: "compass",
    title: "People Operations Foundations",
    body: "The employee lifecycle, core policies and the HR tooling underneath them — configured so your data stays clean and reporting is trustworthy.",
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
    title: "Performance and Development",
    body: "A lightweight review rhythm, clear expectations by level, and growth conversations managers can hold without dread.",
  },
  {
    id: "compensation",
    icon: "scale",
    title: "Compensation and Leveling",
    body: "Job architecture, salary bands and a promotion process that holds up when candidates and employees ask how decisions get made.",
  },
  {
    id: "managers",
    icon: "sprout",
    title: "Manager Enablement",
    body: "Practical coaching for first-time managers: one-to-ones, delegation, difficult conversations and performance follow-through.",
  },
  {
    id: "relations",
    icon: "shield",
    title: "Employee Relations and Risk",
    body: "Investigation practice, documentation standards and a calm escalation path established before difficult moments arrive.",
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
  body: "No long discovery phase and no fifty-page deliverable nobody opens. Each step produces something your team can use that week.",
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
    body: "We build the systems with your managers and coach them through the first live cycles.",
  },
  {
    id: "optimise",
    title: "Scale and Optimise",
    body: "Review what is working, tighten the rough edges and hand over documentation your team owns.",
  },
];

export const processStepDuration = 5500;

/* ---------------------------------------------------------- Founder + principles

   DEMO CONTENT — replace `founder` with real details before launch.
   Deliberately contains no employers, certifications, client results
   or years of experience, so nothing here is an unverifiable claim.
   ------------------------------------------------------------ */

export const founder = {
  name: "Amara Whitfield",
  role: "Founder and Principal, Teamfold",
  image: editorialImages.founderPortrait,
  imageAlt: "Portrait of the Teamfold founder and principal People Operations consultant",
  linkedin: LINKEDIN_URL,
  bio: "I build People functions for companies going through their fastest growth — writing the first handbook, running the first review cycle, and coaching managers into roles they have never held before. Teamfold exists so smaller teams can reach that level of judgement without hiring for it full time.",
  ctaLabel: "Start a conversation",
} as const;

export const aboutSection = {
  eyebrow: "Who you'll be working with",
  title: "Senior judgement, folded into your team",
  principlesTitle: "How we work",
  principles: [
    {
      title: "Design for the managers you have",
      body: "Systems are built around how your team already works, not around a process that assumes a People department you do not have yet.",
    },
    {
      title: "Sequence before scale",
      body: "We agree the order of work first. Two or three things done properly beat a dozen half-finished initiatives every time.",
    },
    {
      title: "Leave it written down",
      body: "Everything is documented as it is built and handed to an internal owner, so the engagement ends without the systems ending with it.",
    },
  ],
  coverageNote:
    "We work remotely with distributed teams across the United States, and stay close to the state-by-state requirements that come with a distributed payroll.",
};

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
  ctaLabel: "Book your audit",
  reassurance: "Thirty minutes, one call, no obligation to continue.",
};

/* ---------------------------------------------------------- Insights */

export type Article = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  /** Set once a real article route exists; until then the card is not a link. */
  href?: string;
};

export const articlesHeading = {
  title: "Latest insights",
  body: "Short, practical notes on the questions founders ask us most often.",
};

export const articles: Article[] = [
  {
    id: "policies",
    category: "Foundations",
    title: "What People policies should a startup establish first?",
    excerpt:
      "A short list of policies worth writing before headcount reaches thirty — and the ones that can safely wait.",
    image: editorialImages.workingSession,
    imageAlt: "Colleagues reviewing work together during a planning session",
  },
  {
    id: "manager-support",
    category: "Managers",
    title: "Supporting first-time managers without a training budget",
    excerpt:
      "The handful of habits that carry a new manager through their first year, and how to coach them week to week.",
    image: editorialImages.managerCoaching,
    imageAlt: "A manager and team member talking during a one-to-one conversation",
  },
  {
    id: "remote-culture",
    category: "Culture",
    title: "Building remote culture without leaving it to chance",
    excerpt:
      "Rituals, written norms and onboarding choices that make a distributed team feel deliberate rather than accidental.",
    image: editorialImages.teamCulture,
    imageAlt: "A distributed team collaborating during an informal working session",
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
    question: "What is included in the 90-Day People Plan?",
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
      "Yes. We start with what you already pay for and make it work properly. If a change is genuinely needed we help you scope the selection and run the migration, rather than recommending tools by default.",
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
      "Usually within two weeks of the first call. Discovery and the plan take the opening fortnight, and hands-on work begins immediately afterwards.",
  },
];

/* ---------------------------------------------------------- Final CTA + footer */

export const finalCta = {
  title: "Let's build the People systems your team deserves",
  body: "Start with a short call. We'll tell you plainly whether we can help — and what to do first if we can't.",
  primaryLabel: "Book a 30-minute audit",
  secondaryLabel: "Email us directly",
};

export const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "Services", href: "#services" },
      { label: "How it works", href: "#process" },
      { label: "About", href: "#about" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Insights", href: "#insights" },
      { label: "FAQ", href: "#faq" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
] as const;

export const footerMeta = {
  connectTitle: "Connect",
  legalLinks: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

/* ---------------------------------------------------------- Contact modal */

export const contactModal = {
  title: "Book your audit call",
  body: "Tell us where your team is today and we'll come back within one working day with times.",
  submitLabel: "Request a time",
  successTitle: "Thanks — that's with us.",
  successBody:
    "This demo form isn't connected to a mailbox yet, so please email us directly and we'll pick it up straight away.",
  fields: {
    name: { label: "Name", placeholder: "Your name" },
    email: { label: "Work email", placeholder: "you@company.com" },
    company: { label: "Company", placeholder: "Company name" },
    teamSize: { label: "Team size", placeholder: "Select a range" },
    message: { label: "What's prompting this?", placeholder: "A sentence or two is plenty." },
  },
  teamSizeOptions: ["1–15 people", "16–50 people", "51–120 people", "120+ people"],
};

/* ---------------------------------------------------------- Legal routes */

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
    updated: "How the Teamfold website handles visitor information.",
    intro:
      "Teamfold keeps this simple: the marketing site collects as little as possible, and anything you send us is used only to reply to you.",
    sections: [
      {
        heading: "What the site collects",
        body: "These pages are static. We do not run advertising trackers and we do not build visitor profiles. Standard server logs may record request data such as IP address and user agent for security and reliability purposes.",
      },
      {
        heading: "What you send us",
        body: "If you email us or request a call, we hold your message and contact details so we can respond and prepare for the conversation. We do not sell that information or share it with third parties for their own marketing.",
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
    updated: "These terms cover use of the Teamfold website, not any consulting engagement.",
    intro:
      "Consulting work is governed by a separate written agreement. These terms apply only to browsing this website.",
    sections: [
      {
        heading: "Use of the site",
        body: "You are welcome to read, quote and link to the material here. Please do not republish substantial portions as your own work, or use the site in a way that interferes with its availability for others.",
      },
      {
        heading: "Nothing here is advice",
        body: "The articles and descriptions on this site are general information about People Operations practice. They are not legal, tax or employment advice for your situation, and are not a substitute for professional counsel.",
      },
      {
        heading: "Engagements",
        body: "Scope, fees, confidentiality and liability for any consulting work are set out in the engagement agreement signed by both parties. Where those terms and this page differ, the engagement agreement governs.",
      },
    ],
  },
];
