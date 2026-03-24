import {
  ActionLink,
  EditorialCard,
  NewsletterPanel,
  ProductPreviewCard,
  SectionHeading,
  SiteShell,
} from "./_components/site-ui";
import { guideEntries, philosophyCards, steps } from "./_data/site-content";
import { getAllBlogPosts, getBlogPostHref, getFeaturedBlogPost } from "../lib/blog";
import { createMetadata } from "../lib/seo";

const stepRevealClasses = [
  "reveal-delay-1",
  "reveal-delay-2",
  "reveal-delay-3",
] as const;

const homeSignals = [
  {
    title: "Short shared streaks",
    description:
      "Designed for 3-day resets, 7-day experiments, and realistic promises you can actually keep.",
  },
  {
    title: "Honest daily check-ins",
    description:
      "A soft rhythm that makes room for slips, restarts, and the truth about how the day really went.",
  },
  {
    title: "A brand with depth",
    description:
      "Part app, part journal, part quiet guide for connection, consistency, and doing hard things together.",
  },
] as const;

const featuredBlogPost = getFeaturedBlogPost();
const secondaryBlogPosts = getAllBlogPosts()
  .filter((post) => post.slug !== featuredBlogPost.slug)
  .slice(0, 2);

const secondaryReadingCards = [
  ...secondaryBlogPosts.map((post) => ({
    href: getBlogPostHref(post.slug),
    title: post.title,
    excerpt: post.excerpt,
    category: "Blog",
    readTime: post.readTime,
    eyebrow: post.category,
  })),
  {
    href: `/guides/${guideEntries[1].slug}`,
    title: guideEntries[1].title,
    excerpt: guideEntries[1].excerpt,
    category: "Guide",
    readTime: guideEntries[1].readTime,
    eyebrow: guideEntries[1].eyebrow,
  },
].filter(
  (
    entry,
  ): entry is {
    href: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    eyebrow: string;
  } => Boolean(entry),
);

export const metadata = createMetadata({
  title: "Small wins together",
  description:
    "Togethur helps friends, partners, and accountability buddies build momentum through short shared streaks, honest check-ins, and small wins that actually stick.",
  pathname: "/",
  keywords: [
    "shared accountability app",
    "small wins together",
    "short shared streaks",
    "relationship accountability",
  ],
});

export default function Home() {
  return (
    <SiteShell>
      <section className="grid items-center gap-12 pb-20 pt-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:pb-24">
        <div className="max-w-3xl">
          <span className="reveal inline-flex rounded-full border border-[var(--tog-border)] bg-white/82 px-4 py-2 text-sm font-semibold text-[var(--tog-text-secondary)] shadow-[0_16px_36px_rgba(42,26,74,0.07)]">
            Small commitments. Completed together.
          </span>
          <h1 className="hero-title reveal reveal-delay-1 mt-6 max-w-3xl text-[3rem] font-extrabold leading-[0.95] tracking-[-0.08em] text-[var(--tog-text-primary)] sm:text-[4.15rem] lg:text-[4.9rem]">
            Small commitments. Honest progress. Done together.
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-lg leading-8 text-[var(--tog-text-secondary)] sm:text-xl">
            Togethur helps friends, partners, and accountability buddies build
            momentum through short shared streaks, honest check-ins, and small
            wins that actually stick.
          </p>
          <div className="reveal reveal-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
            <ActionLink href="/#newsletter">Get Started</ActionLink>
            <ActionLink href="/#philosophy" variant="secondary">
              Read the philosophy
            </ActionLink>
          </div>
          <div className="reveal reveal-delay-4 mt-10 grid gap-3 sm:grid-cols-3">
            {homeSignals.map((signal) => (
              <div
                key={signal.title}
                className="surface-card rounded-[24px] px-5 py-4"
              >
                <p className="text-sm font-semibold text-[var(--tog-text-primary)]">
                  {signal.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--tog-text-secondary)]">
                  {signal.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative reveal reveal-delay-2">
          <div className="pointer-events-none absolute -left-4 top-8 hidden rounded-full border border-white/70 bg-white/86 px-4 py-3 text-sm font-semibold text-[var(--tog-primary)] shadow-[0_20px_48px_rgba(42,26,74,0.12)] backdrop-blur md:block">
            Shared consistency can feel calm, not intense
          </div>
          <div className="pointer-events-none absolute -right-4 bottom-6 hidden rounded-full border border-white/70 bg-white/88 px-4 py-3 text-sm font-semibold text-[var(--tog-success)] shadow-[0_20px_48px_rgba(42,26,74,0.12)] backdrop-blur md:block">
            Slips are part of progress
          </div>
          <ProductPreviewCard compact />
        </div>
      </section>

      <section className="pb-20 lg:pb-24" id="preview">
        <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="reveal">
            <SectionHeading
              align="left"
              eyebrow="Product preview"
              title="A streak app with a softer center"
              description="The product is simple on purpose: pick a short streak, invite someone you trust, and keep the rhythm alive with quick daily honesty."
            />
            <div className="mt-6 space-y-3 text-sm text-[var(--tog-text-secondary)] sm:text-base">
              <div className="rounded-[24px] border border-[var(--tog-border)] bg-[rgba(232,230,255,0.55)] px-4 py-4">
                Short streaks feel easier to begin because they ask for honesty,
                not a total life overhaul.
              </div>
              <div className="rounded-[24px] border border-[var(--tog-border)] bg-[rgba(255,232,242,0.62)] px-4 py-4">
                Daily check-ins build trust because the point is to tell the
                truth, even after a wobble.
              </div>
              <div className="rounded-[24px] border border-[var(--tog-border)] bg-[rgba(255,200,87,0.16)] px-4 py-4">
                Shared momentum makes recovery faster. Missing once does not
                have to become disappearing completely.
              </div>
            </div>
          </div>
          <div className="reveal reveal-delay-1">
            <ProductPreviewCard />
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-24" id="philosophy">
        <SectionHeading
          eyebrow="Why Togethur feels different"
          title="Built for real life, not perfection"
          description="Togethur is not a productivity app. It is a social accountability app for short shared streaks, honest progress, and connection that can survive a human week."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {philosophyCards.map((card, index) => (
            <article
              key={card.title}
              className={`surface-card reveal rounded-[32px] p-6 sm:p-7 ${stepRevealClasses[index % stepRevealClasses.length]}`}
            >
              <span
                className={`inline-flex rounded-full border px-3 py-1 text-xs font-extrabold uppercase tracking-[0.16em] ${card.tone}`}
              >
                Philosophy
              </span>
              <h3 className="mt-5 text-2xl font-extrabold tracking-[-0.04em] text-[var(--tog-text-primary)]">
                {card.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--tog-text-secondary)]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20 lg:pb-24" id="how-it-works">
        <SectionHeading
          eyebrow="How it works"
          title="A warm rhythm for shared consistency"
          description="The app stays simple so the emotional part can stay clear: start small, bring someone in, and show up honestly."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className={`surface-card reveal rounded-[32px] p-6 sm:p-7 ${stepRevealClasses[index]}`}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-[18px] bg-[linear-gradient(135deg,rgba(93,89,245,0.16),rgba(255,124,179,0.16))] text-sm font-extrabold text-[var(--tog-primary)]">
                {step.number}
              </div>
              <h3 className="mt-5 text-2xl font-extrabold tracking-[-0.04em] text-[var(--tog-text-primary)]">
                {step.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--tog-text-secondary)]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20 lg:pb-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Read the journal"
            title="Thoughts on connection, consistency, and slow progress"
            description="One strong article should be enough to pull you in. From there, the rest should feel like a calm path deeper into the ideas behind the app."
          />
          <div className="flex flex-col gap-3 sm:w-auto sm:flex-row">
            <ActionLink href="/blog" variant="secondary">
              Explore the blog
            </ActionLink>
            <ActionLink href="/guides" variant="secondary">
              Browse guides
            </ActionLink>
          </div>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.16fr_0.84fr]">
          <EditorialCard
            href={getBlogPostHref(featuredBlogPost.slug)}
            title={featuredBlogPost.title}
            excerpt={featuredBlogPost.excerpt}
            category="Blog"
            readTime={featuredBlogPost.readTime}
            eyebrow={featuredBlogPost.category}
            revealClassName="reveal reveal-delay-1"
            featured
            label="Featured"
          />
          <div className="grid gap-5">
            {secondaryReadingCards.map((entry, index) => (
              <EditorialCard
                key={entry.href}
                href={entry.href}
                title={entry.title}
                excerpt={entry.excerpt}
                category={entry.category}
                readTime={entry.readTime}
                eyebrow={entry.eyebrow}
                revealClassName={`reveal ${stepRevealClasses[(index + 1) % stepRevealClasses.length]}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-24">
        <div className="reveal">
          <NewsletterPanel />
        </div>
      </section>

      <section className="pb-12" id="cta">
        <div className="surface-card reveal overflow-hidden rounded-[32px] px-6 py-8 sm:px-8 sm:py-10">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(135deg,rgba(93,89,245,0.14),rgba(255,124,179,0.16),rgba(255,200,87,0.20))]"
          />
          <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--tog-text-secondary)]">
                Small wins together
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.05em] text-[var(--tog-text-primary)] sm:text-4xl">
                Start something small with someone who matters.
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--tog-text-secondary)] sm:text-lg">
                You do not need a life overhaul. Just a short commitment, honest
                check-ins, and a little shared consistency.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <ActionLink href="/#newsletter">Get Started</ActionLink>
              <ActionLink href="/guides" variant="secondary">
                Read a guide
              </ActionLink>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
