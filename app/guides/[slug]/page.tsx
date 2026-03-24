import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ActionLink, SiteShell } from "../../_components/site-ui";
import { getGuideBySlug, guideEntries } from "../../_data/site-content";
import { createMetadata } from "../../../lib/seo";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guideEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getGuideBySlug(slug);

  if (!entry) {
    return createMetadata({
      title: "Guides",
      description:
        "Explore practical guides from Togethur on shared streaks and honest recovery.",
      pathname: "/guides",
    });
  }

  return createMetadata({
    title: entry.title,
    description: entry.description,
    pathname: `/guides/${entry.slug}`,
    keywords: [entry.title, entry.eyebrow, "togethur guide"],
  });
}

export default async function GuideArticlePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const entry = getGuideBySlug(slug);

  if (!entry) {
    notFound();
  }

  return (
    <SiteShell mainClassName="max-w-6xl">
      <article className="pb-12 pt-8">
        <div className="max-w-4xl">
          <ActionLink href="/guides" variant="secondary">
            Back to guides
          </ActionLink>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-[var(--tog-text-secondary)]">
            <span className="rounded-full bg-[rgba(255,124,179,0.12)] px-4 py-2 text-[var(--tog-secondary)]">
              {entry.category}
            </span>
            <span>{entry.readTime}</span>
            <span>{entry.eyebrow}</span>
          </div>
          <h1 className="hero-title mt-6 text-[2.9rem] font-extrabold leading-[0.96] tracking-[-0.08em] text-[var(--tog-text-primary)] sm:text-[4.2rem]">
            {entry.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--tog-text-secondary)] sm:text-xl">
            {entry.excerpt}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="surface-card rounded-[32px] p-6 sm:p-8">
            <div className="space-y-10">
              {entry.body.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-extrabold tracking-[-0.04em] text-[var(--tog-text-primary)]">
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-7 text-[var(--tog-text-secondary)]">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <ul className="mt-5 space-y-3">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-base leading-7 text-[var(--tog-text-secondary)]">
                          <span
                            aria-hidden="true"
                            className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--tog-primary)]"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
          </div>

          <aside className="space-y-5">
            <div className="surface-card rounded-[32px] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--tog-text-secondary)]">
                A useful frame
              </p>
              <p className="mt-4 text-lg font-semibold leading-8 text-[var(--tog-text-primary)]">
                {entry.heroNote}
              </p>
            </div>
            <div className="surface-card rounded-[32px] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--tog-text-secondary)]">
                Put it into practice
              </p>
              <p className="mt-4 text-base leading-7 text-[var(--tog-text-secondary)]">
                The guide gives you the language and shape. The app helps you
                carry it into a real shared streak.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <ActionLink href="/blog" variant="secondary">
                  Read the journal
                </ActionLink>
                <ActionLink href="/#newsletter">Get Started</ActionLink>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </SiteShell>
  );
}
