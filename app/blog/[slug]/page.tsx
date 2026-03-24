import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ActionLink,
  BlogCtaPanel,
  EditorialCard,
  SiteShell,
} from "../../_components/site-ui";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getBlogPostHref,
  getRelatedBlogPosts,
  type RichParagraph,
} from "../../../lib/blog";
import { createArticleJsonLd, createMetadata } from "../../../lib/seo";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

const flagshipPostSlugs = new Set([
  "why-avoidants-pull-away-after-emotional-closeness",
  "why-consistency-matters-more-than-intensity",
  "how-to-restart-after-breaking-a-streak",
]);

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

function renderRichParagraph(paragraph: RichParagraph, key: string) {
  return (
    <p key={key}>
      {paragraph.map((part, index) => {
        if (part.type === "link") {
          return (
            <Link
              key={`${key}-${index}`}
              className="font-semibold text-[var(--tog-primary)] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:rgba(93,89,245,0.18)]"
              href={part.href}
            >
              {part.text}
            </Link>
          );
        }

        return <span key={`${key}-${index}`}>{part.text}</span>;
      })}
    </p>
  );
}

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return createMetadata({
      title: "Blog",
      description:
        "Read essays from Togethur on accountability, shared consistency, and small wins together.",
      pathname: "/blog",
    });
  }

  return createMetadata({
    title: post.title,
    description: post.description,
    pathname: getBlogPostHref(post.slug),
    type: "article",
    publishedTime: post.date,
    category: post.category,
    keywords: post.keywords,
  });
}

export default async function BlogArticlePage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post);
  const articleJsonLd = createArticleJsonLd({
    title: post.title,
    description: post.description,
    pathname: getBlogPostHref(post.slug),
    datePublished: post.date,
  });
  const midCtaIndex =
    post.content.length > 3 ? 1 : Math.max(0, post.content.length - 2);

  return (
    <SiteShell mainClassName="max-w-6xl">
      <article className="pb-12 pt-8">
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
          type="application/ld+json"
        />

        <div className="max-w-4xl">
          <ActionLink href="/blog" variant="secondary">
            Back to blog
          </ActionLink>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-[var(--tog-text-secondary)]">
            <span className="rounded-full bg-[rgba(93,89,245,0.10)] px-4 py-2 text-[var(--tog-primary)] capitalize">
              {post.category}
            </span>
            <span>{formatDate(post.date)}</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="hero-title mt-6 text-[2.9rem] font-extrabold leading-[0.96] tracking-[-0.08em] text-[var(--tog-text-primary)] sm:text-[4.2rem]">
            {post.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--tog-text-secondary)] sm:text-xl">
            {post.excerpt}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="surface-card rounded-[32px] p-6 sm:p-8">
            <div className="space-y-10">
              {post.content.map((section, index) => (
                <section key={section.title}>
                  <h2 className="text-2xl font-extrabold tracking-[-0.04em] text-[var(--tog-text-primary)] sm:text-[2rem]">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-4 text-base leading-8 text-[var(--tog-text-secondary)]">
                    {section.paragraphs.map((paragraph, index) =>
                      renderRichParagraph(
                        paragraph,
                        `${section.title}-paragraph-${index}`,
                      ),
                    )}
                  </div>
                  {section.bullets ? (
                    <ul className="mt-5 space-y-3">
                      {section.bullets.map((bullet, index) => (
                        <li
                          key={`${section.title}-bullet-${index}`}
                          className="flex gap-3 text-base leading-7 text-[var(--tog-text-secondary)]"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--tog-secondary)]"
                          />
                          <span>
                            {bullet.map((part, bulletIndex) => {
                              if (part.type === "link") {
                                return (
                                  <Link
                                    key={`${section.title}-bullet-link-${bulletIndex}`}
                                    className="font-semibold text-[var(--tog-primary)] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:rgba(93,89,245,0.18)]"
                                    href={part.href}
                                  >
                                    {part.text}
                                  </Link>
                                );
                              }

                              return (
                                <span
                                  key={`${section.title}-bullet-text-${bulletIndex}`}
                                >
                                  {part.text}
                                </span>
                              );
                            })}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {index === midCtaIndex ? (
                    <div className="mt-8">
                      <BlogCtaPanel
                        compact
                        eyebrow={
                          flagshipPostSlugs.has(post.slug)
                            ? "Try it together"
                            : "Put it into practice"
                        }
                        title="Small consistency works better when it's shared."
                        description="Togethur helps friends, partners, and accountability buddies start short streaks and check in honestly, without the pressure of having to be perfect."
                        primaryHref="/#newsletter"
                        primaryLabel="Get Started"
                        secondaryHref="/guides"
                        secondaryLabel="Read a guide first"
                      />
                    </div>
                  ) : null}
                </section>
              ))}
            </div>
          </div>

          <aside className="space-y-5">
            <div className="surface-card rounded-[32px] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--tog-text-secondary)]">
                A quiet reminder
              </p>
              <p className="mt-4 text-lg font-semibold leading-8 text-[var(--tog-text-primary)]">
                {post.heroNote}
              </p>
            </div>
            <div className="surface-card rounded-[32px] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--tog-text-secondary)]">
                Keep reading
              </p>
              <p className="mt-4 text-base leading-7 text-[var(--tog-text-secondary)]">
                If you want a gentler next step, browse the guides or head back
                to the journal and keep following the thread.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <ActionLink href="/guides">Read a guide first</ActionLink>
                <ActionLink href="/blog" variant="secondary">
                  Browse all posts
                </ActionLink>
              </div>
            </div>
          </aside>
        </div>
      </article>

      <section className="pb-8">
        <BlogCtaPanel
          eyebrow="Start small"
          title="Start something small with someone who matters."
          description="You do not need a full life overhaul. Just a small commitment, done together, with enough honesty to keep going after a wobble."
          primaryHref="/#newsletter"
          primaryLabel="Get Started"
          secondaryHref="/guides"
          secondaryLabel="Read a guide first"
        />
      </section>

      <section className="pb-20">
        <div className="surface-card overflow-hidden rounded-[32px] px-6 py-8 sm:px-8 sm:py-10">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(135deg,rgba(93,89,245,0.12),rgba(255,124,179,0.14),rgba(255,200,87,0.18))]"
          />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--tog-text-secondary)]">
                Related posts
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.05em] text-[var(--tog-text-primary)]">
                Keep following the thread
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--tog-text-secondary)]">
                A few more pieces that stay close to this question and point
                back toward shared consistency.
              </p>
            </div>
            <ActionLink href="/blog" variant="secondary">
              Back to all posts
            </ActionLink>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {relatedPosts.map((relatedPost, index) => (
              <EditorialCard
                key={relatedPost.slug}
                href={getBlogPostHref(relatedPost.slug)}
                title={relatedPost.title}
                excerpt={relatedPost.excerpt}
                category={relatedPost.category}
                readTime={relatedPost.readTime}
                eyebrow={formatDate(relatedPost.date)}
                revealClassName={`reveal reveal-delay-${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
