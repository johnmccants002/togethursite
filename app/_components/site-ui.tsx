import Link from "next/link";
import type { ReactNode } from "react";

const navLinks = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Blog", href: "/blog" },
  { label: "Guides", href: "/guides" },
] as const;

const footerLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Guides", href: "/guides" },
  { label: "Support", href: "/support" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Newsletter", href: "/#newsletter" },
] as const;

const statusChips = [
  { label: "You checked in", tone: "success" },
  { label: "Kellie checked in", tone: "primary" },
  { label: "One missed day, still recoverable", tone: "accent" },
] as const;

function cx(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function ActionLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const sharedClasses =
    "button-soft inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold sm:text-base focus-visible:outline-none focus-visible:ring-4";

  const variantClasses =
    variant === "primary"
      ? "bg-[var(--tog-primary)] text-white shadow-[0_18px_40px_rgba(93,89,245,0.26)] hover:bg-[#504ceb] focus-visible:ring-[color:rgba(93,89,245,0.24)]"
      : "border border-[var(--tog-border)] bg-white/82 text-[var(--tog-text-primary)] shadow-[0_18px_44px_rgba(42,26,74,0.08)] hover:border-[var(--tog-primary-soft)] hover:bg-[var(--tog-primary-soft)] focus-visible:ring-[color:rgba(255,124,179,0.22)]";

  return (
    <Link className={cx(sharedClasses, variantClasses, className)} href={href}>
      {children}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cx("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      <span className="inline-flex rounded-full border border-[var(--tog-border)] bg-white/80 px-4 py-2 text-sm font-semibold text-[var(--tog-text-secondary)] shadow-[0_14px_36px_rgba(42,26,74,0.07)]">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.05em] text-[var(--tog-text-primary)] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[var(--tog-text-secondary)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export function BrandBackdrop() {
  return (
    <>
      <div aria-hidden="true" className="blob blob-lilac left-[-9rem] top-[-5rem]" />
      <div aria-hidden="true" className="blob blob-pink right-[-6rem] top-28" />
      <div aria-hidden="true" className="blob blob-amber bottom-20 left-[12%]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),transparent_45%),linear-gradient(180deg,rgba(247,244,255,0.28),rgba(247,244,255,0))]"
      />
    </>
  );
}

export function SiteHeader() {
  return (
    <header className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-6 sm:px-8 lg:px-10">
      <nav className="surface-card reveal flex flex-col gap-4 rounded-[32px] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:rounded-full sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            className="text-xl font-extrabold tracking-[-0.08em] text-[var(--tog-text-primary)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:rgba(93,89,245,0.18)]"
            href="/"
          >
            togethur
          </Link>
          <ActionLink className="sm:hidden" href="/#newsletter">
            Get Started
          </ActionLink>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm font-medium text-[var(--tog-text-secondary)]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              className="transition-colors hover:text-[var(--tog-primary)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:rgba(93,89,245,0.18)]"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <ActionLink className="hidden sm:inline-flex" href="/#newsletter">
          Get Started
        </ActionLink>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 pb-10 text-sm text-[var(--tog-text-secondary)] sm:px-8 lg:px-10">
      <div className="surface-card rounded-[32px] px-5 py-5 sm:px-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-extrabold tracking-[-0.06em] text-[var(--tog-text-primary)]">
              togethur
            </p>
            <p className="mt-2 max-w-md leading-6">
              Small wins together, with room for honest progress, thoughtful
              content, and short streaks that fit real life.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                className="font-semibold text-[var(--tog-primary)] underline-offset-4 transition-colors hover:text-[#504ceb] hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:rgba(93,89,245,0.18)]"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({
  children,
  mainClassName,
}: {
  children: ReactNode;
  mainClassName?: string;
}) {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <BrandBackdrop />
      <SiteHeader />
      <main
        className={cx(
          "relative z-10 mx-auto flex w-full max-w-7xl flex-col px-5 pb-12 pt-8 sm:px-8 sm:pt-10 lg:px-10",
          mainClassName,
        )}
      >
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

export function ProductPreviewCard({ compact = false }: { compact?: boolean }) {
  return (
    <article className="surface-card relative overflow-hidden rounded-[32px] p-6 sm:p-7">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(135deg,rgba(232,230,255,0.95),rgba(255,232,242,0.85),rgba(255,200,87,0.18))]"
      />
      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[var(--tog-text-secondary)]">
              Example streak
            </p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.04em] text-[var(--tog-text-primary)]">
              No Alcohol
            </h3>
          </div>
          <div className="inline-flex items-center rounded-full border border-white/60 bg-white/88 px-4 py-2 text-sm font-semibold text-[var(--tog-primary)] shadow-[0_10px_30px_rgba(93,89,245,0.14)]">
            Day 3 of 7
          </div>
        </div>

        <div className="mt-6 rounded-[24px] border border-white/60 bg-white/72 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-[var(--tog-text-primary)]">
              Shared progress
            </p>
            <p className="text-sm text-[var(--tog-text-secondary)]">3/7 days</p>
          </div>
          <div
            aria-label="Example streak progress: day 3 of 7"
            aria-valuemax={7}
            aria-valuemin={0}
            aria-valuenow={3}
            className="mt-4 flex gap-2"
            role="progressbar"
          >
            {[0, 1, 2, 3, 4, 5, 6].map((day) => {
              const isComplete = day < 3;

              return (
                <span
                  key={day}
                  className={cx(
                    "h-3 flex-1 rounded-full",
                    isComplete
                      ? "bg-[linear-gradient(90deg,#FFC857,#FFB342)]"
                      : "bg-[var(--tog-primary-soft)]",
                  )}
                />
              );
            })}
          </div>
          <p className="mt-4 text-sm leading-6 text-[var(--tog-text-secondary)]">
            Short streaks feel lighter when someone&apos;s doing it with you.
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {statusChips.map((chip) => {
            const chipStyles = {
              success:
                "border-[rgba(46,203,118,0.24)] bg-[rgba(46,203,118,0.12)] text-[var(--tog-success)]",
              primary:
                "border-[rgba(93,89,245,0.18)] bg-[rgba(93,89,245,0.10)] text-[var(--tog-primary)]",
              accent:
                "border-[rgba(255,200,87,0.28)] bg-[rgba(255,200,87,0.18)] text-[#A56B00]",
            }[chip.tone];

            return (
              <span
                key={chip.label}
                className={cx(
                  "inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold",
                  chipStyles,
                )}
              >
                {chip.label}
              </span>
            );
          })}
        </div>

        {!compact ? (
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[24px] border border-[var(--tog-border)] bg-white/74 p-4">
              <p className="text-sm font-semibold text-[var(--tog-text-primary)]">
                Daily honesty
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--tog-text-secondary)]">
                A fast check-in keeps the streak human, even when the day was
                not perfect.
              </p>
            </div>
            <div className="rounded-[24px] border border-[var(--tog-border)] bg-white/74 p-4">
              <p className="text-sm font-semibold text-[var(--tog-text-primary)]">
                Slips are survivable
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--tog-text-secondary)]">
                Missing once does not end the story. It just gives you a softer
                place to restart.
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}

export function EditorialCard({
  href,
  title,
  excerpt,
  category,
  readTime,
  eyebrow,
  revealClassName,
  featured = false,
  label,
}: {
  href: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  eyebrow: string;
  revealClassName?: string;
  featured?: boolean;
  label?: string;
}) {
  return (
    <Link
      className={cx(
        "surface-card editorial-card group block rounded-[32px] p-6 sm:p-7",
        featured ? "lg:min-h-[20rem] lg:p-8" : undefined,
        revealClassName,
      )}
      href={href}
    >
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--tog-text-secondary)]">
        {label ? (
          <span className="rounded-full border border-[rgba(255,200,87,0.38)] bg-[rgba(255,200,87,0.18)] px-3 py-1 text-[#A56B00]">
            {label}
          </span>
        ) : null}
        <span className="rounded-full bg-[rgba(93,89,245,0.10)] px-3 py-1 text-[var(--tog-primary)]">
          {category}
        </span>
        <span>{readTime}</span>
      </div>
      <h3
        className={cx(
          "mt-5 font-extrabold tracking-[-0.04em] text-[var(--tog-text-primary)] transition-colors group-hover:text-[var(--tog-primary)]",
          featured ? "text-[2rem] leading-[1.02] sm:text-[2.35rem]" : "text-2xl",
        )}
      >
        {title}
      </h3>
      <p
        className={cx(
          "mt-4 text-[var(--tog-text-secondary)]",
          featured ? "max-w-2xl text-lg leading-8" : "text-base leading-7",
        )}
      >
        {excerpt}
      </p>
      <div className="mt-6 flex items-center justify-between gap-4">
        <span className="text-sm font-semibold text-[var(--tog-text-secondary)]">
          {eyebrow}
        </span>
        <span className="text-sm font-semibold text-[var(--tog-primary)]">
          Read more
        </span>
      </div>
    </Link>
  );
}

export function BlogCtaPanel({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cx(
        "surface-card relative overflow-hidden rounded-[32px]",
        compact ? "px-5 py-6 sm:px-6 sm:py-7" : "px-6 py-8 sm:px-8 sm:py-10",
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(135deg,rgba(93,89,245,0.12),rgba(255,124,179,0.15),rgba(255,200,87,0.18))]"
      />
      <div className="relative">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--tog-text-secondary)]">
          {eyebrow}
        </p>
        <p
          className={cx(
            "mt-3 font-extrabold tracking-[-0.05em] text-[var(--tog-text-primary)]",
            compact ? "text-2xl sm:text-[2rem]" : "text-3xl sm:text-4xl",
          )}
        >
          {title}
        </p>
        <p
          className={cx(
            "mt-4 max-w-2xl text-[var(--tog-text-secondary)]",
            compact ? "text-base leading-7" : "text-base leading-7 sm:text-lg sm:leading-8",
          )}
        >
          {description}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <ActionLink href={primaryHref}>{primaryLabel}</ActionLink>
          {secondaryHref && secondaryLabel ? (
            <ActionLink href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </ActionLink>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function NewsletterPanel() {
  return (
    <div
      className="surface-card overflow-hidden rounded-[32px] px-6 py-8 sm:px-8 sm:py-10"
      id="newsletter"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(135deg,rgba(93,89,245,0.14),rgba(255,124,179,0.16),rgba(255,200,87,0.20))]"
      />
      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--tog-text-secondary)]">
            Join the Slow Progress letter
          </p>
          <h3 className="mt-3 text-3xl font-extrabold tracking-[-0.05em] text-[var(--tog-text-primary)] sm:text-4xl">
            Get thoughtful updates from Togethur
          </h3>
          <p className="mt-4 text-base leading-7 text-[var(--tog-text-secondary)] sm:text-lg">
            Gentle insights on connection, consistency, and small wins, plus
            occasional product updates when there is something worth sharing.
          </p>
        </div>
        <form className="w-full max-w-xl">
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              className="input-soft min-h-12 flex-1 rounded-full px-5 text-base text-[var(--tog-text-primary)] placeholder:text-[var(--tog-text-secondary)]"
              id="newsletter-email"
              name="email"
              placeholder="Enter your email"
              type="email"
            />
            <button
              className="button-soft min-h-12 rounded-full bg-[var(--tog-primary)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(93,89,245,0.26)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:rgba(93,89,245,0.24)] sm:text-base"
              type="button"
            >
              Join the letter
            </button>
          </div>
          <p className="mt-3 text-sm text-[var(--tog-text-secondary)]">
            No spam. Just thoughtful notes and product updates.
          </p>
        </form>
      </div>
    </div>
  );
}
