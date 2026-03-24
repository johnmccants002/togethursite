import type { Metadata } from "next";

import {
  ActionLink,
  EditorialCard,
  NewsletterPanel,
  SiteShell,
} from "../_components/site-ui";
import { guideEntries } from "../_data/site-content";
import { createMetadata } from "../../lib/seo";

const revealClasses = [
  "reveal-delay-1",
  "reveal-delay-2",
  "reveal-delay-3",
  "reveal-delay-4",
] as const;

export const metadata: Metadata = createMetadata({
  title: "Guides",
  description:
    "Explore practical guides from Togethur on shared streaks, honest recovery, and choosing small commitments that feel human.",
  pathname: "/guides",
  keywords: [
    "shared streak guide",
    "how to recover after a broken streak",
    "partner accountability guide",
    "short commitments",
  ],
});

export default function GuidesPage() {
  return (
    <SiteShell>
      <section className="pb-14 pt-8 sm:pb-16 lg:pb-20">
        <span className="reveal inline-flex rounded-full border border-[var(--tog-border)] bg-white/82 px-4 py-2 text-sm font-semibold text-[var(--tog-text-secondary)] shadow-[0_16px_36px_rgba(42,26,74,0.07)]">
          Guides
        </span>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <h1 className="hero-title reveal reveal-delay-1 max-w-3xl text-[2.9rem] font-extrabold leading-[0.96] tracking-[-0.08em] text-[var(--tog-text-primary)] sm:text-[4.2rem]">
              Calm guidance for building momentum together.
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-lg leading-8 text-[var(--tog-text-secondary)] sm:text-xl">
              These practical resources are for the in-between moments: picking
              the right short commitment, recovering after a slip, and finding
              an accountability rhythm that still feels human.
            </p>
          </div>
          <div className="surface-card reveal reveal-delay-3 rounded-[32px] p-6 sm:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--tog-text-secondary)]">
              Keep it gentle
            </p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-[-0.04em] text-[var(--tog-text-primary)]">
              Use the guide, then bring the rhythm into the app.
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--tog-text-secondary)]">
              The goal is not more pressure. It is a clearer next step and a
              softer way to stay connected to progress.
            </p>
            <div className="mt-6">
              <ActionLink href="/#newsletter" variant="secondary">
                Get Started
              </ActionLink>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="grid gap-5 lg:grid-cols-2">
          {guideEntries.map((entry, index) => (
            <EditorialCard
              key={entry.slug}
              href={`/guides/${entry.slug}`}
              title={entry.title}
              excerpt={entry.excerpt}
              category={entry.category}
              readTime={entry.readTime}
              eyebrow={entry.eyebrow}
              revealClassName={`reveal ${revealClasses[index % revealClasses.length]}`}
            />
          ))}
        </div>
      </section>

      <section className="pb-12">
        <div className="reveal">
          <NewsletterPanel />
        </div>
      </section>
    </SiteShell>
  );
}
