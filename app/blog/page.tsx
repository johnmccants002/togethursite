import type { Metadata } from "next";
import Link from "next/link";

import {
  ActionLink,
  EditorialCard,
  NewsletterPanel,
  SiteShell,
} from "../_components/site-ui";
import {
  getBlogCategories,
  getBlogPostHref,
  getFeaturedBlogPost,
  getNonFeaturedBlogPosts,
} from "../../lib/blog";
import { createMetadata } from "../../lib/seo";

const revealClasses = [
  "reveal-delay-1",
  "reveal-delay-2",
  "reveal-delay-3",
  "reveal-delay-4",
] as const;

const featuredPost = getFeaturedBlogPost();
const otherPosts = getNonFeaturedBlogPosts();
const categories = getBlogCategories();

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description:
    "Read essays from Togethur on accountability, shared consistency, relationship pacing, emotional honesty, and small wins together.",
  pathname: "/blog",
  keywords: [
    "relationship blog",
    "accountability blog",
    "shared habits",
    "small wins together",
    "consistency with a partner",
  ],
});

export default function BlogPage() {
  return (
    <SiteShell>
      <section className="pb-14 pt-8 sm:pb-16 lg:pb-20">
        <span className="reveal inline-flex rounded-full border border-[var(--tog-border)] bg-white/82 px-4 py-2 text-sm font-semibold text-[var(--tog-text-secondary)] shadow-[0_16px_36px_rgba(42,26,74,0.07)]">
          Blog
        </span>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <h1 className="hero-title reveal reveal-delay-1 max-w-3xl text-[2.9rem] font-extrabold leading-[0.96] tracking-[-0.08em] text-[var(--tog-text-primary)] sm:text-[4.2rem]">
              Thoughts on connection, accountability, and slow progress.
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-lg leading-8 text-[var(--tog-text-secondary)] sm:text-xl">
              The journal side of Togethur is built for search, trust, and real
              usefulness: honest accountability, rebuilding consistency, and
              small shared habits that feel human enough to keep.
            </p>
          </div>
          <div className="surface-card reveal reveal-delay-3 rounded-[32px] p-6 sm:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--tog-text-secondary)]">
              Explore by theme
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-[var(--tog-border)] bg-white/72 px-4 py-2 text-sm font-semibold capitalize text-[var(--tog-text-primary)]"
                >
                  {category}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <ActionLink href="/guides" variant="secondary">
                Browse guides
              </ActionLink>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="surface-card reveal rounded-[32px] p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--tog-text-secondary)]">
                <span className="rounded-full bg-[rgba(93,89,245,0.10)] px-3 py-1 text-[var(--tog-primary)]">
                  Featured post
                </span>
                <span className="capitalize">{featuredPost.category}</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.05em] text-[var(--tog-text-primary)] sm:text-[3rem]">
                {featuredPost.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--tog-text-secondary)] sm:text-lg">
                {featuredPost.excerpt}
              </p>
              <p className="mt-5 text-sm font-semibold text-[var(--tog-text-secondary)]">
                Published {formatDate(featuredPost.date)}
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <p className="text-base leading-7 text-[var(--tog-text-secondary)]">
                {featuredPost.description}
              </p>
              <ActionLink href={getBlogPostHref(featuredPost.slug)}>
                Read featured post
              </ActionLink>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-extrabold tracking-[-0.05em] text-[var(--tog-text-primary)]">
              More to read
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--tog-text-secondary)]">
              Keyword-aware, human-first essays designed to answer real search
              intent without sounding like generic SEO filler.
            </p>
          </div>
        </div>
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {otherPosts.map((post, index) => (
            <EditorialCard
              key={post.slug}
              href={getBlogPostHref(post.slug)}
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              readTime={post.readTime}
              eyebrow={formatDate(post.date)}
              revealClassName={`reveal ${revealClasses[index % revealClasses.length]}`}
            />
          ))}
        </div>
      </section>

      <section className="pb-12">
        <div className="surface-card reveal rounded-[32px] p-6 sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--tog-text-secondary)]">
                From reading to practice
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.05em] text-[var(--tog-text-primary)]">
                Want to try this with someone?
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--tog-text-secondary)]">
                Start a short streak on Togethur and bring the ideas from the
                journal into something small, shared, and real.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ActionLink href="/#newsletter">Get Started</ActionLink>
              <Link
                className="font-semibold text-[var(--tog-primary)] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:rgba(93,89,245,0.18)]"
                href="/guides"
              >
                Read a guide first
              </Link>
            </div>
          </div>
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
