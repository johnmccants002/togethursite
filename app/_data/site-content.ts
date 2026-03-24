export type GuideSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type GuideEntry = {
  slug: string;
  category: "Guide";
  title: string;
  excerpt: string;
  description: string;
  readTime: string;
  eyebrow: string;
  heroNote: string;
  body: GuideSection[];
};

export const philosophyCards = [
  {
    title: "Built for real life, not perfection",
    description:
      "Togethur is not about endless self-optimization. It is about short promises that fit into a real week and still matter when life gets messy.",
    tone:
      "bg-[rgba(232,230,255,0.58)] text-[var(--tog-primary)] border-[rgba(93,89,245,0.14)]",
  },
  {
    title: "Slips are survivable",
    description:
      "A missed day does not erase the story. Honest progress leaves room to reset, repair, and keep going without streak shame.",
    tone:
      "bg-[rgba(255,232,242,0.62)] text-[var(--tog-secondary)] border-[rgba(255,124,179,0.18)]",
  },
  {
    title: "Shared consistency feels lighter",
    description:
      "Small wins land differently when someone else is beside you. A simple check-in can turn effort into connection.",
    tone:
      "bg-[rgba(255,200,87,0.16)] text-[#A56B00] border-[rgba(255,200,87,0.26)]",
  },
  {
    title: "Short commitments are easier to start",
    description:
      "A three-day reset or seven-day promise creates enough structure to begin, while staying gentle enough to try again.",
    tone:
      "bg-[rgba(46,203,118,0.12)] text-[var(--tog-success)] border-[rgba(46,203,118,0.24)]",
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "Start a short streak",
    description:
      "Pick one small commitment that feels honest for right now, not a grand reinvention of yourself.",
  },
  {
    number: "02",
    title: "Invite someone you trust",
    description:
      "Bring in a partner, friend, or accountability buddy so the streak feels shared instead of solitary.",
  },
  {
    number: "03",
    title: "Check in honestly each day",
    description:
      "Keep the rhythm simple. Show up, tell the truth about the day, and let the small wins keep their shape.",
  },
] as const;

export const guideEntries: GuideEntry[] = [
  {
    slug: "starting-a-shared-streak-with-a-partner",
    category: "Guide",
    title: "Starting a shared streak with a partner",
    excerpt:
      "A simple guide to choosing a streak that feels supportive, realistic, and easy to begin together.",
    description:
      "How to choose, frame, and start a shared streak with a partner without turning it into pressure.",
    readTime: "7 min read",
    eyebrow: "Getting started",
    heroNote: "The best shared streaks feel like an invitation, not an assignment.",
    body: [
      {
        heading: "Choose something small enough to be kind",
        paragraphs: [
          "The first streak should feel easy to say yes to. A seven-day experiment is often better than an open-ended challenge.",
        ],
        bullets: [
          "Pick one behavior, not three",
          "Set a short timeline",
          "Make the check-in easy to complete",
        ],
      },
      {
        heading: "Talk about what the streak means",
        paragraphs: [
          "A shared streak is not just a task. It is a small agreement about how you want to show up for each other.",
          "Clarify whether the tone should feel playful, supportive, structured, or quiet.",
        ],
      },
      {
        heading: "Define what counts as a good check-in",
        paragraphs: [
          "A useful streak is clear enough that both people know what honest participation looks like.",
        ],
      },
    ],
  },
  {
    slug: "how-to-recover-after-a-slip",
    category: "Guide",
    title: "How to recover after a slip",
    excerpt:
      "A missed day does not need to become a vanished week. Here is a simple way back into the rhythm.",
    description:
      "A practical guide for recovering after a missed day without turning it into guilt or avoidance.",
    readTime: "6 min read",
    eyebrow: "Recovery",
    heroNote: "The goal after a slip is not punishment. It is re-entry.",
    body: [
      {
        heading: "Name what happened without drama",
        paragraphs: [
          "The fastest path back is usually simple honesty. You do not need a perfect explanation. You need a truthful one.",
        ],
      },
      {
        heading: "Restart smaller if needed",
        paragraphs: [
          "If the original streak now feels heavy, shorten the commitment. A three-day reset can restore movement without adding pressure.",
        ],
      },
      {
        heading: "Use the relationship well",
        paragraphs: [
          "The other person does not need to fix the moment. They can simply help keep the door open so the streak still feels safe to return to.",
        ],
      },
    ],
  },
  {
    slug: "choosing-the-right-short-commitment",
    category: "Guide",
    title: "Choosing the right short commitment",
    excerpt:
      "The most useful streak is not the most ambitious one. It is the one you can actually hold for a short season.",
    description:
      "A guide to choosing a short commitment that is specific, humane, and likely to stick.",
    readTime: "5 min read",
    eyebrow: "Streak design",
    heroNote: "A believable commitment creates better momentum than an impressive one.",
    body: [
      {
        heading: "Start with friction, not fantasy",
        paragraphs: [
          "Look for the place where you keep losing momentum. That is usually a better starting point than the version of you that feels idealized.",
        ],
      },
      {
        heading: "Keep the streak concrete",
        paragraphs: [
          "Clear actions are easier to check in on. The streak should be simple enough to answer with honesty at the end of the day.",
        ],
        bullets: [
          "One behavior",
          "One short duration",
          "One clear daily question",
        ],
      },
    ],
  },
  {
    slug: "turning-a-friendship-into-gentle-accountability",
    category: "Guide",
    title: "Turning a friendship into gentle accountability",
    excerpt:
      "Not every friend needs to be an accountability partner, but the right dynamic can make consistency feel lighter.",
    description:
      "How to invite a friend into accountability in a way that still feels warm, mutual, and low-pressure.",
    readTime: "6 min read",
    eyebrow: "Shared support",
    heroNote: "The right accountability partner feels steady, not supervisory.",
    body: [
      {
        heading: "Choose warmth over intensity",
        paragraphs: [
          "A good accountability friendship is built on trust and ease. It should feel like support, not surveillance.",
        ],
      },
      {
        heading: "Make the expectation explicit",
        paragraphs: [
          "Talk about how often you will check in, how honest you want to be, and what you want to happen after a missed day.",
        ],
      },
      {
        heading: "Keep the relationship bigger than the streak",
        paragraphs: [
          "The streak should support the friendship, not flatten it. Leave room for encouragement, humor, and normal life.",
        ],
      },
    ],
  },
];

export function getGuideBySlug(slug: string) {
  return guideEntries.find((guide) => guide.slug === slug);
}
