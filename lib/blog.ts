export type InlineContent =
  | {
      type: "text";
      text: string;
    }
  | {
      type: "link";
      text: string;
      href: string;
    };

export type RichParagraph = InlineContent[];

export type BlogSection = {
  title: string;
  paragraphs: RichParagraph[];
  bullets?: RichParagraph[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category:
    | "accountability"
    | "habits"
    | "relationships"
    | "relationship pacing"
    | "emotional honesty"
    | "rebuilding trust";
  date: string;
  readTime: string;
  heroNote: string;
  keywords: string[];
  relatedSlugs: string[];
  featured?: boolean;
  content: BlogSection[];
};

const t = (text: string): InlineContent => ({ type: "text", text });
const l = (text: string, href: string): InlineContent => ({
  type: "link",
  text,
  href,
});

const blogPosts: BlogPost[] = [
  {
    slug: "why-avoidants-pull-away-after-emotional-closeness",
    title: "Why Avoidants Pull Away After Emotional Closeness",
    description:
      "Understand why avoidant partners pull away after intimacy and how to respond without creating more distance.",
    excerpt:
      "When closeness is followed by distance, it can feel deeply personal. For someone more avoidant, that pullback is often about overwhelm and regulation, not a lack of feeling.",
    category: "relationships",
    date: "2026-03-28",
    readTime: "5 min read",
    heroNote:
      "Distance after closeness does not always mean the connection was false. Sometimes it means the connection felt real enough to scare them.",
    keywords: [
      "why avoidants pull away after emotional closeness",
      "avoidant partner after intimacy",
      "why someone gets distant after closeness",
      "avoidant relationship patterns",
    ],
    relatedSlugs: [
      "why-consistency-matters-more-than-intensity",
      "how-to-build-trust-through-small-actions",
      "what-to-do-after-you-mess-up-in-a-relationship",
    ],
    featured: true,
    content: [
      {
        title: "The part that feels confusing is how fast the shift happens",
        paragraphs: [
          [
            t(
              "One day it feels open, warm, and easy. You talk more, share more, maybe even feel closer than you have in a while.",
            ),
          ],
          [
            t(
              "Then the tone changes. The texts thin out. The warmth cools. Nothing dramatic happens, but you can feel the distance arrive before you can explain it.",
            ),
          ],
          [
            t(
              "That kind of shift can make you question everything. Was the closeness real? Did you misread it? Did you say too much?",
            ),
          ],
          [
            t(
              "If you are dealing with someone more avoidant, the pullback is often less random than it looks. The connection may have felt good to them, and still felt like too much all at once.",
            ),
          ],
        ],
      },
      {
        title: "What is actually happening underneath the distance",
        paragraphs: [
          [
            t(
              "For someone with avoidant tendencies, emotional closeness does not just feel good. It can also feel exposing, fast, and hard to control.",
            ),
          ],
          [
            t(
              "The same moment that feels connecting to you can feel destabilizing to them. Closeness raises vulnerability, and vulnerability can bring up a quiet question: is this getting bigger than I can manage?",
            ),
          ],
          [
            t(
              "When closeness feels unsafe, space can feel like control. That does not automatically mean they do not care. It often means they are trying to regulate without having better tools in the moment.",
            ),
          ],
        ],
        bullets: [
          [t("Closeness can feel intense before it feels secure")],
          [t("Vulnerability can feel more exposing than connecting")],
          [t("Distance can become a way to lower emotional heat quickly")],
        ],
      },
      {
        title: "Why pulling away can feel safer than staying close",
        paragraphs: [
          [
            t(
              "Pulling back can help them regain a sense of independence, lower intensity, and feel less emotionally flooded. In that sense, distance often functions more like stabilization than rejection.",
            ),
          ],
          [
            t(
              "That does not make the experience easier on the receiving end. It still hurts. But it helps to name the pattern clearly: the distance may be about regulation, not indifference.",
            ),
          ],
          [
            t(
              "Intensity creates a lot of false signals in relationships. It can feel like depth when it is really just speed. That is one reason people often need something steadier after a close moment, not something bigger.",
            ),
          ],
          [
            t("This is one reason "),
            l(
              "why consistency matters more than intensity",
              "/blog/why-consistency-matters-more-than-intensity",
            ),
            t(
              " in relationships. Intensity can create closeness quickly, but consistency is what helps closeness feel safe enough to stay.",
            ),
          ],
        ],
      },
      {
        title: "A calmer response usually works better than chasing",
        paragraphs: [
          [
            t(
              "When someone pulls away, the natural urge is often to close the gap immediately. More texts. More reassurance. More trying to get back to the feeling from a few days ago.",
            ),
          ],
          [
            t(
              "But you usually cannot calm an avoidant dynamic by becoming more urgent. A steadier response works better: stay grounded, keep things clear, and resist the urge to force a resolution before the other person has regulated.",
            ),
          ],
          [
            t(
              "A calmer rhythm gives the connection room to breathe. It also protects you from confusing urgency with intimacy.",
            ),
          ],
        ],
      },
      {
        title: "A different way to build connection without pushing the pace",
        paragraphs: [
          [
            t(
              "If the goal is real connection, smaller forms of consistency often work better than emotionally loaded talks. Short commitments, light check-ins, and simple things done together create contact without forcing closeness past what the nervous system can hold.",
            ),
          ],
          [
            t(
              "People trust what repeats, not just what peaks. A small shared rhythm can say more than one long emotional night followed by distance.",
            ),
          ],
          [
            t("If you want a lighter place to begin, "),
            l(
              "daily habits couples can do together",
              "/blog/daily-habits-couples-can-do-together",
            ),
            t(
              " are often easier to hold than one big emotionally charged reset.",
            ),
          ],
        ],
      },
    ],
  },
  {
    slug: "why-small-shared-goals-feel-easier-to-keep",
    title: "Why Small Shared Goals Feel Easier to Keep",
    description:
      "Small goals are easier to keep when you do them with someone else. Here’s why shared momentum works.",
    excerpt:
      "When a goal is short, clear, and shared, it becomes easier to keep.",
    category: "accountability",
    date: "2026-03-27",
    readTime: "4 min read",
    heroNote:
      "A believable goal usually creates more momentum than an ambitious one.",
    keywords: [
      "why small shared goals feel easier to keep",
      "shared goals with partner",
      "accountability partner habits",
      "consistency with someone else",
    ],
    relatedSlugs: [
      "short-habits-to-do-with-a-partner",
      "why-consistency-matters-more-than-intensity",
      "daily-habits-couples-can-do-together",
    ],
    content: [
      {
        title: "Big goals create pressure",
        paragraphs: [
          [
            t(
              "Huge goals usually fail for reasons that have less to do with discipline than people think. They create emotional pressure before they create a rhythm.",
            ),
          ],
          [
            t(
              "When a commitment feels oversized, it becomes easy to postpone, easy to overthink, and hard to trust. The goal starts asking for a different version of you instead of meeting the version that exists today.",
            ),
          ],
        ],
      },
      {
        title: "Shared goals reduce friction",
        paragraphs: [
          [
            t(
              "A short shared goal lowers emotional resistance because you are not carrying the whole thing alone. Someone else knows what you are trying to do, which keeps the effort visible without making it feel heavy.",
            ),
          ],
          [
            t(
              "That quiet visibility matters. It can make the first day easier to start and the fourth day easier to return to.",
            ),
          ],
        ],
      },
      {
        title: "Why together changes follow-through",
        paragraphs: [
          [
            t(
              "Doing something together turns consistency into a relationship, not just a private standard. The goal becomes part of how you show up with someone else, which gives it more meaning and more staying power.",
            ),
          ],
          [
            t("That is also why "),
            l(
              "short habits to do with a partner",
              "/blog/short-habits-to-do-with-a-partner",
            ),
            t(
              " can feel easier to hold than solo routines. Shared momentum often matters more than perfect motivation.",
            ),
          ],
        ],
      },
      {
        title: "Start smaller than you think",
        paragraphs: [
          [
            t(
              "Small goals are easier to trust, easier to restart, and easier to repeat. That matters because trust in the process is usually what keeps a streak alive after the first wobble.",
            ),
          ],
          [
            t(
              "If you want to try this in real life, short shared streaks can be a simple place to begin. Keep the goal small enough that both people can still say yes to it tomorrow.",
            ),
          ],
        ],
      },
    ],
  },
  {
    slug: "what-honesty-does-for-accountability",
    title: "What Honesty Does for Accountability",
    description:
      "Honest check-ins create better accountability than perfection ever could.",
    excerpt: "Real accountability starts with honesty, not performance.",
    category: "emotional honesty",
    date: "2026-03-26",
    readTime: "4 min read",
    heroNote:
      "Accountability gets lighter when the truth is allowed to stay in the room.",
    keywords: [
      "what honesty does for accountability",
      "accountability honesty",
      "daily check-ins",
      "partner accountability",
    ],
    relatedSlugs: [
      "how-to-restart-after-breaking-a-streak",
      "how-to-build-trust-through-small-actions",
      "what-to-do-after-you-mess-up-in-a-relationship",
    ],
    content: [
      {
        title: "Why people hide when they slip",
        paragraphs: [
          [
            t(
              "People usually do not avoid accountability because they hate structure. They avoid it because it can start to feel like performance, and performance leaves very little room for a messy day.",
            ),
          ],
          [
            t(
              "Once the check-in feels like a test, people begin hiding the truth. That is often the exact moment accountability stops helping.",
            ),
          ],
        ],
      },
      {
        title: "Accountability works better without performance",
        paragraphs: [
          [
            t(
              "Real accountability is not about looking consistent. It is about staying connected to the truth of the effort, even when the answer is no.",
            ),
          ],
          [
            t(
              "That shift reduces shame. It makes the streak feel survivable, which is a big part of why people are more likely to return after a slip.",
            ),
          ],
        ],
      },
      {
        title: "Honest check-ins build trust",
        paragraphs: [
          [
            t(
              "When two people practice honest check-ins, trust grows on both sides. The relationship stops being about monitoring and starts becoming about truthful follow-through.",
            ),
          ],
          [
            t("That connects directly to "),
            l(
              "how to build trust through small actions",
              "/blog/how-to-build-trust-through-small-actions",
            ),
            t(
              ". Small acts of honesty are often the first actions that trust can actually believe.",
            ),
          ],
        ],
      },
      {
        title: "Progress gets easier when honesty is safe",
        paragraphs: [
          [
            t(
              "The more honesty feels safe, the easier consistency becomes. Slips stop being the end of the story and start becoming something you can acknowledge, repair, and move through.",
            ),
          ],
          [
            t("If that is where you are right now, "),
            l(
              "how to restart after breaking a streak",
              "/blog/how-to-restart-after-breaking-a-streak",
            ),
            t(" is often the practical next step."),
          ],
        ],
      },
    ],
  },
  {
    slug: "how-to-restart-after-breaking-a-streak",
    title: "How to Restart After Breaking a Streak (Without Losing Momentum)",
    description:
      "Learn how to recover quickly after breaking a streak and rebuild consistency without falling into all-or-nothing thinking.",
    excerpt:
      "Breaking a streak can feel bigger than the actual miss. The strongest recovery usually starts by making the restart simple, honest, and fast.",
    category: "habits",
    date: "2026-03-25",
    readTime: "4 min read",
    heroNote: "A quick restart protects momentum better than a guilty delay.",
    keywords: [
      "how to restart after breaking a streak",
      "recover after breaking a streak",
      "restart habits without losing momentum",
      "all or nothing thinking habits",
    ],
    relatedSlugs: [
      "the-power-of-a-3-day-reset",
      "what-honesty-does-for-accountability",
      "short-habits-to-do-with-a-partner",
    ],
    content: [
      {
        title: "Breaking a streak can feel heavier than the actual miss",
        paragraphs: [
          [
            t(
              "Most people do not just feel annoyed when they break a streak. They feel discouraged, embarrassed, and strangely far away from the version of themselves that had momentum yesterday.",
            ),
          ],
          [
            t(
              "That is why a small miss can create such a big emotional drop. The broken streak starts to feel like proof: proof that you failed, proof that the progress was fake, proof that you are back at zero.",
            ),
          ],
          [
            t(
              "A broken streak is a moment, not a verdict. But if you are tired or discouraged, it can be hard to feel that difference in real time.",
            ),
          ],
        ],
        bullets: [
          [t("This means I failed")],
          [t("I lost all my progress")],
          [t("Now I have to start over from scratch")],
        ],
      },
      {
        title: "The real problem is usually the story you tell after the slip",
        paragraphs: [
          [
            t(
              "Usually the hardest part is not the missed day itself. It is the meaning attached to it afterward. One miss becomes a whole narrative about who you are and how this always goes.",
            ),
          ],
          [
            t(
              "That story is what turns a single lapse into a longer collapse. The day after the miss matters more than the miss itself.",
            ),
          ],
          [
            t("That is why "),
            l(
              "what honesty does for accountability",
              "/blog/what-honesty-does-for-accountability",
            ),
            t(
              " matters so much. A truthful restart keeps the effort emotionally alive instead of turning it into a private failure you avoid looking at.",
            ),
          ],
        ],
      },
      {
        title: "The 24-hour rule",
        paragraphs: [
          [
            t(
              "Instead of saying, I will restart next week, try saying: I restart tomorrow. No drama.",
            ),
          ],
          [
            t(
              "That simple rule protects you from the spiral where one missed day quietly turns into five. Momentum is usually rebuilt by shortening the distance to your next honest step.",
            ),
          ],
          [
            t(
              "A fast restart keeps the miss from becoming an identity. It turns recovery into a practical next action instead of a major emotional event.",
            ),
          ],
        ],
      },
      {
        title: "Why shared consistency makes restarting easier",
        paragraphs: [
          [
            t(
              "Doing it with someone lowers shame because the effort does not disappear into silence the moment you slip. Someone else still knows what you were trying to do, which makes it easier to return instead of hiding.",
            ),
          ],
          [
            t(
              "The other person does not need to rescue you. They just help the streak stay close enough to touch again.",
            ),
          ],
          [
            t("If you need a smaller bridge back in, "),
            l(
              "the power of a 3-day reset",
              "/blog/the-power-of-a-3-day-reset",
            ),
            t(
              " is often the most useful next move. Short resets make it easier to restart before discouragement hardens.",
            ),
          ],
        ],
      },
    ],
  },
  {
    slug: "short-habits-to-do-with-a-partner",
    title: "Short Habits to Do With a Partner (That Actually Stick)",
    description:
      "Simple short habits you can do with a partner to build consistency, trust, and connection.",
    excerpt:
      "Most habits fail because they are too big. Shorter commitments are often the ones that people can actually repeat together.",
    category: "habits",
    date: "2026-03-24",
    readTime: "4 min read",
    heroNote:
      "The habit matters, but the trust built around it often matters even more.",
    keywords: [
      "short habits to do with a partner",
      "partner habits that actually stick",
      "shared habits for couples",
      "simple habits together",
    ],
    relatedSlugs: [
      "daily-habits-couples-can-do-together",
      "why-small-shared-goals-feel-easier-to-keep",
      "how-to-restart-after-breaking-a-streak",
    ],
    content: [
      {
        title: "Most habits fail because they are too big",
        paragraphs: [
          [
            t(
              "A lot of shared habits fall apart because they ask for too much, too fast. When a commitment feels oversized, it starts to create pressure before it creates rhythm.",
            ),
          ],
        ],
      },
      {
        title: "Why shorter works",
        paragraphs: [
          [
            t(
              "Short commitments feel doable, reduce pressure, and are easier to repeat. They give both people something realistic to say yes to.",
            ),
          ],
          [
            t("That is part of why "),
            l(
              "small shared goals feel easier to keep",
              "/blog/why-small-shared-goals-feel-easier-to-keep",
            ),
            t(
              ". A smaller promise is often more sustainable than a more impressive one.",
            ),
          ],
        ],
      },
      {
        title: "Five short habits",
        paragraphs: [[t("If you want a place to begin, try one of these:")]],
        bullets: [
          [t("No alcohol for 3 to 5 days")],
          [t("A daily check-in")],
          [t("A 10-minute walk")],
          [t("No eating out for a few days")],
          [t("Sleep before 11 pm")],
        ],
      },
      {
        title: "The real benefit",
        paragraphs: [
          [
            t(
              "It is not just the habit. It is also trust, consistency, and showing up in a way that another person can actually feel.",
            ),
          ],
          [
            t("If the shared rhythm breaks, "),
            l(
              "how to restart after breaking a streak",
              "/blog/how-to-restart-after-breaking-a-streak",
            ),
            t(" can help you get back into motion without turning the miss into a bigger story."),
          ],
        ],
      },
    ],
  },
  {
    slug: "the-power-of-a-3-day-reset",
    title: "The Power of a 3-Day Reset",
    description:
      "A 3-day reset is one of the simplest ways to rebuild momentum without overwhelming yourself.",
    excerpt:
      "When things feel off, a short reset can bring you back without the pressure of a big overhaul.",
    category: "habits",
    date: "2026-03-23",
    readTime: "4 min read",
    heroNote:
      "Small enough to begin, meaningful enough to feel.",
    keywords: [
      "3 day reset",
      "rebuild momentum",
      "restart habits",
      "small reset challenge",
    ],
    relatedSlugs: [
      "how-to-restart-after-breaking-a-streak",
      "short-habits-to-do-with-a-partner",
      "daily-habits-couples-can-do-together",
    ],
    content: [
      {
        title: "Why 3 days is a sweet spot",
        paragraphs: [
          [
            t(
              "Three days is short enough to start and long enough to matter. That combination is part of why it works psychologically.",
            ),
          ],
          [
            t(
              "A short reset lowers resistance because it does not ask for a total identity shift. At the same time, it gives you enough structure to actually feel momentum returning.",
            ),
          ],
        ],
      },
      {
        title: "Reset without making life heavier",
        paragraphs: [
          [
            t(
              "The point of a reset is not punishment. It is to create a lighter bridge back into motion after a slip, rough patch, or season of drift.",
            ),
          ],
          [
            t(
              "That is why a 3-day reset often works so well after a miss. It gives the nervous system something believable to say yes to.",
            ),
          ],
        ],
      },
      {
        title: "3 simple resets to try",
        paragraphs: [[t("You can keep the reset very small:")]],
        bullets: [
          [t("No alcohol for 3 days")],
          [t("Sleep before 11 for 3 days")],
          [t("A 10-minute walk for 3 days")],
        ],
      },
      {
        title: "Momentum starts smaller than people think",
        paragraphs: [
          [
            t(
              "The most useful reset is rarely the most impressive one. It is the one you can actually complete without making life feel heavier.",
            ),
          ],
          [
            t("If you want a practical next step after a miss, "),
            l(
              "how to restart after breaking a streak",
              "/blog/how-to-restart-after-breaking-a-streak",
            ),
            t(" is the natural companion to this kind of reset."),
          ],
        ],
      },
    ],
  },
  {
    slug: "why-consistency-matters-more-than-intensity",
    title: "Why Consistency Matters More Than Intensity",
    description:
      "Intensity can feel powerful, but consistency is what actually builds trust, momentum, and change.",
    excerpt:
      "Intensity can feel meaningful in the moment, but the progress people actually trust is usually built by steadier, repeatable effort.",
    category: "relationship pacing",
    date: "2026-03-22",
    readTime: "5 min read",
    heroNote:
      "What repeats quietly usually changes more than what arrives loudly.",
    keywords: [
      "consistency vs intensity",
      "build trust slowly",
      "sustainable habits",
      "relationship consistency",
    ],
    relatedSlugs: [
      "why-avoidants-pull-away-after-emotional-closeness",
      "how-to-build-trust-through-small-actions",
      "why-small-shared-goals-feel-easier-to-keep",
    ],
    content: [
      {
        title: "Why intensity is so easy to mistake for progress",
        paragraphs: [
          [
            t(
              "Intensity is loud. It feels meaningful because you can feel it happening. Big promises, long emotional talks, sudden motivation, dramatic effort. All of it can create the sense that something important has shifted.",
            ),
          ],
          [
            t(
              "Sometimes something important has shifted. But intensity is still a poor measure of what will last. It often outruns the pace that real trust, real habits, and real connection actually need.",
            ),
          ],
          [
            t(
              "A dramatic week can feel like change. A steady month usually is change.",
            ),
          ],
        ],
      },
      {
        title: "Consistency feels quieter, but it is what people can live inside",
        paragraphs: [
          [
            t(
              "Consistency can look unimpressive from the outside. A short walk most days. A calm check-in. A promise kept without fanfare. None of it looks especially dramatic, which is exactly why people underestimate it.",
            ),
          ],
          [
            t(
              "But consistency creates something intensity often cannot: a rhythm that people can actually live inside. It leaves room for a human week, not just an ideal one.",
            ),
          ],
          [
            t(
              "That matters in habits and in relationships. What repeats quietly usually changes more than what arrives loudly.",
            ),
          ],
        ],
      },
      {
        title: "What trust actually grows from",
        paragraphs: [
          [
            t(
              "Trust rarely grows from one emotional peak. It grows from what happens repeatedly, especially after the novelty of intention wears off.",
            ),
          ],
          [
            t(
              "People trust what repeats, not what peaks. They trust what shows up on ordinary days, not just on highly motivated ones.",
            ),
          ],
          [
            t("That is why "),
            l(
              "how to build trust through small actions",
              "/blog/how-to-build-trust-through-small-actions",
            ),
            t(
              " matters so much. Small repeated follow-through is usually easier to believe than one powerful moment.",
            ),
          ],
        ],
      },
      {
        title: "Small repeated effort beats dramatic effort",
        paragraphs: [
          [
            t(
              "In practice, this usually means shorter goals, calmer pacing, and smaller actions repeated over time. What compounds is often what looks least impressive on day one.",
            ),
          ],
          [
            t("Intensity can start a story. Consistency is what carries it."),
          ],
          [
            t("If you want a practical version of that idea, "),
            l(
              "small shared goals feel easier to keep",
              "/blog/why-small-shared-goals-feel-easier-to-keep",
            ),
            t(
              " for exactly this reason. Smaller promises create a steadier pace, and steadier pace is usually what makes progress believable.",
            ),
          ],
        ],
      },
    ],
  },
  {
    slug: "how-to-build-trust-through-small-actions",
    title: "How to Build Trust Through Small Actions",
    description:
      "Trust is often built through small repeated actions, not big emotional promises.",
    excerpt:
      "People trust what happens repeatedly, not just what gets said in emotional moments.",
    category: "rebuilding trust",
    date: "2026-03-21",
    readTime: "5 min read",
    heroNote:
      "Trust usually returns through proof points, not declarations.",
    keywords: [
      "build trust slowly",
      "trust through actions",
      "small actions in relationships",
      "consistency and trust",
    ],
    relatedSlugs: [
      "what-honesty-does-for-accountability",
      "why-consistency-matters-more-than-intensity",
      "what-to-do-after-you-mess-up-in-a-relationship",
    ],
    content: [
      {
        title: "Trust grows from what repeats",
        paragraphs: [
          [
            t(
              "People usually trust patterns more than promises. That is not cynicism. It is how emotional safety tends to work.",
            ),
          ],
          [
            t(
              "When something good happens once, it can feel hopeful. When it happens repeatedly, it starts to feel believable.",
            ),
          ],
        ],
      },
      {
        title: "Big promises are less powerful than follow-through",
        paragraphs: [
          [
            t(
              "After inconsistency or disappointment, a dramatic promise can actually feel emotionally expensive. It asks someone to trust a feeling they have not yet seen become a pattern.",
            ),
          ],
          [
            t(
              "Small actions are often more powerful because they can be witnessed. They ask for less faith and offer more proof.",
            ),
          ],
        ],
      },
      {
        title: "Small actions are easier to believe",
        paragraphs: [
          [
            t(
              "A daily check-in. A short streak. A simple promise kept. These are modest actions, but they are exactly the sort of things trust learns from.",
            ),
          ],
          [
            t("They also connect closely to "),
            l(
              "what honesty does for accountability",
              "/blog/what-honesty-does-for-accountability",
            ),
            t(
              ", because honesty is often the first small action that makes repair feel real.",
            ),
          ],
        ],
      },
      {
        title: "Trust becomes stronger when repair is possible",
        paragraphs: [
          [
            t(
              "Trust does not grow because people never slip. It grows because slips are met with repair, ownership, and repeated follow-through afterward.",
            ),
          ],
          [
            t("That is why "),
            l(
              "what to do after you mess up in a relationship",
              "/blog/what-to-do-after-you-mess-up-in-a-relationship",
            ),
            t(" matters so much. Repair needs a pace that trust can actually believe."),
          ],
        ],
      },
    ],
  },
  {
    slug: "daily-habits-couples-can-do-together",
    title: "Daily Habits Couples Can Do Together",
    description:
      "Simple daily habits couples can do together to build connection, trust, and consistency.",
    excerpt:
      "The best shared habits are simple enough to keep and meaningful enough to notice.",
    category: "habits",
    date: "2026-03-20",
    readTime: "4 min read",
    heroNote:
      "A habit becomes more useful when it is light enough to repeat and real enough to feel.",
    keywords: [
      "daily habits couples can do together",
      "partner habits",
      "relationship habits",
      "shared routines",
    ],
    relatedSlugs: [
      "short-habits-to-do-with-a-partner",
      "why-small-shared-goals-feel-easier-to-keep",
      "what-honesty-does-for-accountability",
    ],
    content: [
      {
        title: "What makes a shared habit actually stick",
        paragraphs: [
          [
            t(
              "The best shared habits are simple enough to repeat and gentle enough to survive normal life. When a routine becomes too ambitious, it usually becomes something people talk about more than something they do.",
            ),
          ],
        ],
      },
      {
        title: "Five to seven simple habits to try together",
        paragraphs: [[t("A few options that stay light enough to keep:")]],
        bullets: [
          [t("One honest daily check-in")],
          [t("A 10-minute walk")],
          [t("No alcohol for a few days")],
          [t("A shared bedtime goal")],
          [t("One home-cooked meal streak")],
          [t("Five minutes of stretching")],
        ],
      },
      {
        title: "Keep it light enough to repeat",
        paragraphs: [
          [
            t(
              "Simple habits outperform ambitious routines because they create less resistance. They ask for a realistic amount of energy and therefore remain easier to revisit after a complicated day.",
            ),
          ],
          [
            t("That is part of why "),
            l(
              "short habits to do with a partner",
              "/blog/short-habits-to-do-with-a-partner",
            ),
            t(" often work better than larger systems."),
          ],
        ],
      },
      {
        title: "The point is consistency, not perfection",
        paragraphs: [
          [
            t(
              "The benefit is not just the habit itself. It is the connection and momentum built around repeating something small together.",
            ),
          ],
          [
            t(
              "When the routine is simple, it becomes easier to tell the truth about it too. That is where consistency starts to feel more human.",
            ),
          ],
        ],
      },
    ],
  },
  {
    slug: "what-to-do-after-you-mess-up-in-a-relationship",
    title: "What to Do After You Mess Up in a Relationship",
    description:
      "After a mistake in a relationship, the goal is not perfection. It’s honest repair and small consistent follow-through.",
    excerpt:
      "Repair usually begins with honesty, steadiness, and small actions that match your words.",
    category: "relationships",
    date: "2026-03-19",
    readTime: "5 min read",
    heroNote:
      "Repair usually gets stronger when it is honest, paced, and repeatable.",
    keywords: [
      "what to do after you mess up in a relationship",
      "relationship repair",
      "rebuild trust after a mistake",
      "honest repair in relationships",
    ],
    relatedSlugs: [
      "how-to-build-trust-through-small-actions",
      "what-honesty-does-for-accountability",
      "why-consistency-matters-more-than-intensity",
    ],
    content: [
      {
        title: "The urge to fix everything at once",
        paragraphs: [
          [
            t(
              "After a mistake, a lot of people panic. They overexplain, overpromise, or try to create one emotionally powerful moment that makes the problem disappear.",
            ),
          ],
          [
            t(
              "That reaction makes sense, but it often asks for trust faster than trust can return.",
            ),
          ],
        ],
      },
      {
        title: "Honest ownership matters more than perfect wording",
        paragraphs: [
          [
            t(
              "Repair usually begins with honest ownership, not flawless language. People do not need a perfect speech as much as they need to feel that you see what happened clearly and are not hiding from it.",
            ),
          ],
          [
            t("That is why "),
            l(
              "what honesty does for accountability",
              "/blog/what-honesty-does-for-accountability",
            ),
            t(
              " applies here too. Honesty lowers defensiveness and creates a more believable starting point for repair.",
            ),
          ],
        ],
      },
      {
        title: "Repair happens through follow-through",
        paragraphs: [
          [
            t(
              "What happens after the apology usually matters more than the emotional intensity of the apology itself. Repair becomes real when your actions begin matching your words repeatedly.",
            ),
          ],
          [
            t(
              "That does not mean grand gestures. It usually means smaller, steadier proof points over time.",
            ),
          ],
        ],
      },
      {
        title: "Small consistency rebuilds safety",
        paragraphs: [
          [
            t(
              "Slips are survivable when honesty and follow-through exist. The goal is not instant relief. The goal is a pace of repair that helps safety grow again.",
            ),
          ],
          [
            t("If you want a clearer next step, "),
            l(
              "how to build trust through small actions",
              "/blog/how-to-build-trust-through-small-actions",
            ),
            t(" is the natural companion to this question."),
          ],
        ],
      },
    ],
  },
];

export function getAllBlogPosts() {
  return [...blogPosts].sort((left, right) => right.date.localeCompare(left.date));
}

export function getFeaturedBlogPost() {
  return getAllBlogPosts().find((post) => post.featured) ?? getAllBlogPosts()[0];
}

export function getNonFeaturedBlogPosts() {
  const featuredPost = getFeaturedBlogPost();

  return getAllBlogPosts().filter((post) => post.slug !== featuredPost.slug);
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogCategories() {
  return [...new Set(getAllBlogPosts().map((post) => post.category))];
}

export function getRelatedBlogPosts(post: BlogPost, limit = 3) {
  const orderedMatches = post.relatedSlugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter((candidate): candidate is BlogPost => Boolean(candidate));

  if (orderedMatches.length >= limit) {
    return orderedMatches.slice(0, limit);
  }

  const fallbackMatches = getAllBlogPosts().filter(
    (candidate) =>
      candidate.slug !== post.slug &&
      candidate.category === post.category &&
      !orderedMatches.some((match) => match.slug === candidate.slug),
  );

  return [...orderedMatches, ...fallbackMatches].slice(0, limit);
}

export function getBlogPostHref(slug: string) {
  return `/blog/${slug}`;
}
