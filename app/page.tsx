import type { ReactNode } from "react";
import Link from "next/link";

type Step = {
  number: string;
  title: string;
  description: string;
};

type StatusChip = {
  label: string;
  tone: "primary" | "success" | "accent";
};

const steps: Step[] = [
  {
    number: "01",
    title: "Pick one small promise",
    description:
      "Choose a short streak that feels doable, from drinking more water to taking a break from alcohol.",
  },
  {
    number: "02",
    title: "Invite your person",
    description:
      "Start with a friend, partner, or accountability buddy so every check-in feels shared, not solo.",
  },
  {
    number: "03",
    title: "Keep the streak warm",
    description:
      "Show up for quick daily check-ins, celebrate progress, and let the small wins stack up together.",
  },
];

const statusChips: StatusChip[] = [
  { label: "You checked in", tone: "success" },
  { label: "Kellie checked in", tone: "primary" },
  { label: "Momentum is building", tone: "accent" },
];

const stepRevealClasses = [
  "reveal-delay-1",
  "reveal-delay-2",
  "reveal-delay-3",
] as const;

function ActionLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const sharedClasses =
    "button-soft inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold sm:text-base focus-visible:outline-none focus-visible:ring-4";

  const variantClasses =
    variant === "primary"
      ? "bg-[var(--tog-primary)] text-white shadow-[0_18px_40px_rgba(93,89,245,0.26)] hover:bg-[#504ceb] focus-visible:ring-[color:rgba(93,89,245,0.24)]"
      : "border border-[var(--tog-border)] bg-white/80 text-[var(--tog-text-primary)] shadow-[0_18px_44px_rgba(42,26,74,0.08)] hover:border-[var(--tog-primary-soft)] hover:bg-[var(--tog-primary-soft)] focus-visible:ring-[color:rgba(255,124,179,0.22)]";

  return (
    <a className={`${sharedClasses} ${variantClasses}`} href={href}>
      {children}
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
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

function ProductPreviewCard() {
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
                  className={`h-3 flex-1 rounded-full ${
                    isComplete
                      ? "bg-[linear-gradient(90deg,#FFC857,#FFB342)]"
                      : "bg-[var(--tog-primary-soft)]"
                  }`}
                />
              );
            })}
          </div>
          <p className="mt-4 text-sm leading-6 text-[var(--tog-text-secondary)]">
            A quick check-in keeps both people in sync and makes each day feel
            lighter to finish.
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
                className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold ${chipStyles}`}
              >
                {chip.label}
              </span>
            );
          })}
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-[24px] border border-[var(--tog-border)] bg-white/74 p-4">
            <p className="text-sm font-semibold text-[var(--tog-text-primary)]">
              Gentle reminders
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--tog-text-secondary)]">
              Helpful nudges when one of you has not checked in yet.
            </p>
          </div>
          <div className="rounded-[24px] border border-[var(--tog-border)] bg-white/74 p-4">
            <p className="text-sm font-semibold text-[var(--tog-text-primary)]">
              Shared encouragement
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--tog-text-secondary)]">
              Tiny celebrations that make consistency feel more human.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <div aria-hidden="true" className="blob blob-lilac left-[-9rem] top-[-5rem]" />
      <div aria-hidden="true" className="blob blob-pink right-[-6rem] top-28" />
      <div aria-hidden="true" className="blob blob-amber bottom-20 left-[12%]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),transparent_45%),linear-gradient(180deg,rgba(247,244,255,0.28),rgba(247,244,255,0))]"
      />

      <header className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-6 sm:px-8 lg:px-10">
        <nav className="surface-card reveal flex items-center justify-between rounded-full px-5 py-4 sm:px-6">
          <a
            className="text-xl font-extrabold tracking-[-0.08em] text-[var(--tog-text-primary)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:rgba(93,89,245,0.18)]"
            href="#top"
          >
            togethur
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-[var(--tog-text-secondary)] md:flex">
            <a
              className="transition-colors hover:text-[var(--tog-primary)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:rgba(93,89,245,0.18)]"
              href="#preview"
            >
              Preview
            </a>
            <a
              className="transition-colors hover:text-[var(--tog-primary)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:rgba(93,89,245,0.18)]"
              href="#how-it-works"
            >
              How it works
            </a>
          </div>
          <ActionLink href="#cta">Get Started</ActionLink>
        </nav>
      </header>

      <main
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-5 pb-12 pt-8 sm:px-8 sm:pt-10 lg:px-10"
        id="top"
      >
        <section className="grid items-center gap-12 pb-20 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24">
          <div className="max-w-2xl">
            <span className="reveal inline-flex rounded-full border border-[var(--tog-border)] bg-white/82 px-4 py-2 text-sm font-semibold text-[var(--tog-text-secondary)] shadow-[0_16px_36px_rgba(42,26,74,0.07)]">
              Small commitments. Completed together.
            </span>
            <h1 className="hero-title reveal reveal-delay-1 mt-6 max-w-xl text-[2.9rem] font-extrabold leading-[0.96] tracking-[-0.08em] text-[var(--tog-text-primary)] sm:text-[4rem] lg:text-[4.65rem]">
              Build small wins, togethur.
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-xl text-lg leading-8 text-[var(--tog-text-secondary)] sm:text-xl">
              Start short streaks with a friend, partner, or accountability
              buddy.
            </p>
            <div className="reveal reveal-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionLink href="#cta">Get Started</ActionLink>
              <ActionLink href="#cta" variant="secondary">
                I already have an account
              </ActionLink>
            </div>
            <div className="reveal reveal-delay-4 mt-10 grid gap-3 sm:grid-cols-3">
              <div className="surface-card rounded-[24px] px-5 py-4">
                <p className="text-sm font-semibold text-[var(--tog-text-primary)]">
                  Short streaks
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--tog-text-secondary)]">
                  Built for goals that feel realistic to begin today.
                </p>
              </div>
              <div className="surface-card rounded-[24px] px-5 py-4">
                <p className="text-sm font-semibold text-[var(--tog-text-primary)]">
                  Shared check-ins
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--tog-text-secondary)]">
                  A small daily signal that someone is doing this with you.
                </p>
              </div>
              <div className="surface-card rounded-[24px] px-5 py-4">
                <p className="text-sm font-semibold text-[var(--tog-text-primary)]">
                  Gentle momentum
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--tog-text-secondary)]">
                  Progress that stays warm, supportive, and encouraging.
                </p>
              </div>
            </div>
          </div>

          <div className="relative reveal reveal-delay-2">
            <div className="pointer-events-none absolute -left-6 top-10 hidden rounded-full border border-white/70 bg-white/78 px-4 py-3 text-sm font-semibold text-[var(--tog-primary)] shadow-[0_20px_48px_rgba(42,26,74,0.12)] backdrop-blur md:block">
              7-day streaks feel lighter together
            </div>
            <div className="pointer-events-none absolute -right-3 bottom-10 hidden rounded-full border border-white/70 bg-white/88 px-4 py-3 text-sm font-semibold text-[var(--tog-success)] shadow-[0_20px_48px_rgba(42,26,74,0.12)] backdrop-blur md:block">
              Daily wins, shared
            </div>
            <ProductPreviewCard />
          </div>
        </section>

        <section className="pb-20 lg:pb-24" id="preview">
          <SectionHeading
            eyebrow="Product preview"
            title="A calm space for shared follow-through"
            description="togethur turns a simple promise into something easier to keep by making progress visible, gentle, and shared."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="surface-card reveal rounded-[32px] p-6 sm:p-7">
              <h3 className="text-2xl font-extrabold tracking-[-0.04em] text-[var(--tog-text-primary)]">
                Made for tiny, real-life follow-through
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--tog-text-secondary)]">
                The app keeps the experience light: choose a short streak, check
                in fast, and let the shared momentum do the heavy lifting.
              </p>
              <div className="mt-6 space-y-3 text-sm text-[var(--tog-text-secondary)]">
                <div className="rounded-[24px] border border-[var(--tog-border)] bg-[rgba(232,230,255,0.55)] px-4 py-4">
                  Warm reminders instead of pressure-heavy notifications.
                </div>
                <div className="rounded-[24px] border border-[var(--tog-border)] bg-[rgba(255,232,242,0.62)] px-4 py-4">
                  Shared visibility so both people know the streak is alive.
                </div>
                <div className="rounded-[24px] border border-[var(--tog-border)] bg-[rgba(255,200,87,0.16)] px-4 py-4">
                  Clear progress that makes a 7-day goal feel close and possible.
                </div>
              </div>
            </div>
            <div className="reveal reveal-delay-1">
              <ProductPreviewCard />
            </div>
          </div>
        </section>

        <section className="pb-20 lg:pb-24" id="how-it-works">
          <SectionHeading
            eyebrow="How it works"
            title="Small steps, shared on purpose"
            description="A simple rhythm keeps the product approachable, even when motivation is low."
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

        <section className="pb-10" id="cta">
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
                  Start one short streak and make today easier to finish.
                </h2>
                <p className="mt-4 text-base leading-7 text-[var(--tog-text-secondary)] sm:text-lg">
                  togethur is built for simple follow-through with the person
                  you trust to keep showing up with you.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <ActionLink href="#top">Get Started</ActionLink>
                <ActionLink href="#top" variant="secondary">
                  I already have an account
                </ActionLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 pb-10 text-sm text-[var(--tog-text-secondary)] sm:px-8 lg:px-10"
        id="footer"
      >
        <p className="font-extrabold tracking-[-0.06em] text-[var(--tog-text-primary)]">
          togethur
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>Small wins together.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              className="font-semibold text-[var(--tog-primary)] underline-offset-4 transition-colors hover:text-[#504ceb] hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:rgba(93,89,245,0.18)]"
              href="/privacy"
            >
              Privacy Policy
            </Link>
            <Link
              className="font-semibold text-[var(--tog-primary)] underline-offset-4 transition-colors hover:text-[#504ceb] hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:rgba(93,89,245,0.18)]"
              href="/terms"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
