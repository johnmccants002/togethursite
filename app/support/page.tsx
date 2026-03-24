import { ActionLink, SiteShell } from "../_components/site-ui";
import { createMetadata } from "../../lib/seo";

export const metadata = createMetadata({
  title: "Support",
  description:
    "Get support for Togethur and reach the team at john@togethurapp.com.",
  pathname: "/support",
  keywords: ["togethur support", "togethur contact", "togethur help"],
});

export default function SupportPage() {
  return (
    <SiteShell mainClassName="max-w-5xl">
      <section className="flex min-h-[70vh] items-center pb-16 pt-10">
        <div className="surface-card reveal w-full overflow-hidden rounded-[32px] px-6 py-10 sm:px-8 sm:py-12">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(135deg,rgba(93,89,245,0.14),rgba(255,124,179,0.16),rgba(255,200,87,0.20))]"
          />
          <div className="relative max-w-3xl">
            <span className="inline-flex rounded-full border border-[var(--tog-border)] bg-white/82 px-4 py-2 text-sm font-semibold text-[var(--tog-text-secondary)] shadow-[0_14px_36px_rgba(42,26,74,0.07)]">
              Support
            </span>
            <h1 className="hero-title mt-6 text-[2.8rem] font-extrabold leading-[0.96] tracking-[-0.08em] text-[var(--tog-text-primary)] sm:text-[4rem]">
              Need help with Togethur?
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--tog-text-secondary)] sm:text-xl">
              Reach out anytime and we&apos;ll help however we can.
            </p>

            <div className="mt-8 rounded-[28px] border border-[var(--tog-border)] bg-white/86 p-5 shadow-[0_20px_48px_rgba(42,26,74,0.08)] sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--tog-text-secondary)]">
                Support email
              </p>
              <a
                className="mt-3 inline-block text-2xl font-extrabold tracking-[-0.04em] text-[var(--tog-primary)] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:rgba(93,89,245,0.18)] sm:text-3xl"
                href="mailto:john@togethurapp.com"
              >
                john@togethurapp.com
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionLink href="mailto:john@togethurapp.com">
                Email support
              </ActionLink>
              <ActionLink href="/" variant="secondary">
                Back to home
              </ActionLink>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
