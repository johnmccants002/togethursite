import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

const serviceItems = [
  "Create and track personal or shared streaks",
  "Invite others to participate in goals or habits",
  "Engage in light social interaction around progress",
];

const eligibilityItems = [
  "You meet this requirement",
  "You are capable of entering a legally binding agreement",
];

const accountItems = [
  "Maintaining the confidentiality of your account",
  "All activity under your account",
];

const accountAgreements = [
  "Provide accurate information",
  "Not impersonate others",
  "Not create multiple accounts for abuse",
];

const userContentItems = [
  "Streaks (for example, habits or commitments)",
  "Messages or notes",
  "Invitations to other users",
];

const licenseItems = ["Store", "Display", "Process your content"];

const acceptableUseItems = [
  "Harass, abuse, or harm other users",
  "Share offensive, illegal, or harmful content",
  "Use the app for spam or solicitation",
  "Attempt to hack, disrupt, or reverse-engineer the app",
];

const disclaimersItems = [
  "Continuous availability",
  "Error-free performance",
  "Specific outcomes, including habit success or relationship outcomes",
];

const professionalAdviceItems = [
  "Medical advice",
  "Mental health support",
  "Professional counseling",
];

const liabilityItems = [
  "Indirect or incidental damages",
  "Loss of data",
  "Emotional or interpersonal outcomes resulting from app usage",
];

const indemnificationItems = [
  "Your use of the app",
  "Your content",
  "Your interactions with other users",
];

function LegalSection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      aria-labelledby={`${id}-heading`}
      className="surface-card rounded-[32px] px-6 py-7 sm:px-8 sm:py-8"
      id={id}
    >
      <span className="inline-flex rounded-full bg-[rgba(255,124,179,0.12)] px-3 py-1 text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--tog-secondary)]">
        Section {number}
      </span>
      <h2
        className="mt-4 text-2xl font-extrabold tracking-[-0.05em] text-[var(--tog-text-primary)] sm:text-[2rem]"
        id={`${id}-heading`}
      >
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-base leading-7 text-[var(--tog-text-secondary)]">
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--tog-primary)]"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export const metadata: Metadata = {
  title: "Terms and Conditions | togethur",
  description:
    "Read the Terms and Conditions for togethur, including eligibility, acceptable use, disclaimers, and legal terms.",
};

export default function TermsPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-10">
      <div aria-hidden="true" className="blob blob-lilac left-[-9rem] top-[-5rem]" />
      <div aria-hidden="true" className="blob blob-pink right-[-6rem] top-28" />
      <div aria-hidden="true" className="blob blob-amber bottom-16 left-[12%]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <header className="surface-card rounded-[32px] px-6 py-6 sm:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Link
                className="text-xl font-extrabold tracking-[-0.08em] text-[var(--tog-text-primary)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:rgba(93,89,245,0.18)]"
                href="/"
              >
                togethur
              </Link>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--tog-text-secondary)]">
                Terms and Conditions
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                className="button-soft inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--tog-border)] bg-white/85 px-5 py-3 text-sm font-semibold text-[var(--tog-text-primary)] shadow-[0_18px_44px_rgba(42,26,74,0.08)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:rgba(93,89,245,0.18)]"
                href="/privacy"
              >
                Privacy Policy
              </Link>
              <Link
                className="button-soft inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--tog-border)] bg-white/85 px-5 py-3 text-sm font-semibold text-[var(--tog-text-primary)] shadow-[0_18px_44px_rgba(42,26,74,0.08)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:rgba(93,89,245,0.18)]"
                href="/"
              >
                Back to home
              </Link>
            </div>
          </div>
        </header>

        <section className="px-1 py-10 sm:py-14">
          <span className="inline-flex rounded-full border border-[var(--tog-border)] bg-white/82 px-4 py-2 text-sm font-semibold text-[var(--tog-text-secondary)] shadow-[0_16px_36px_rgba(42,26,74,0.07)]">
            Clear expectations, gentle product
          </span>
          <h1 className="hero-title mt-6 max-w-3xl text-[2.8rem] font-extrabold leading-[0.96] tracking-[-0.08em] text-[var(--tog-text-primary)] sm:text-[4rem]">
            Terms and Conditions for togethur
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--tog-text-secondary)] sm:text-xl">
            These terms explain the rules for using Togethur, including
            eligibility, acceptable use, content ownership, social features,
            disclaimers, and legal limits.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-[var(--tog-text-secondary)]">
            <span className="rounded-full bg-white/80 px-4 py-2 shadow-[0_14px_36px_rgba(42,26,74,0.07)]">
              Effective Date: March 17, 2026
            </span>
            <span className="rounded-full bg-[rgba(255,200,87,0.22)] px-4 py-2 text-[#8A6100] shadow-[0_14px_36px_rgba(42,26,74,0.06)]">
              Replace bracketed legal placeholders before publishing
            </span>
          </div>
        </section>

        <article className="space-y-6 pb-10">
          <LegalSection id="agreement" number="1" title="Agreement to Terms">
            <p>
              By accessing or using <strong className="text-[var(--tog-text-primary)]">Togethur</strong>
              {" "}(&ldquo;the App&rdquo;), you agree to be bound by these Terms
              and Conditions (&ldquo;Terms&rdquo;).
            </p>
            <p>If you do not agree, please do not use the App.</p>
          </LegalSection>

          <LegalSection
            id="description-of-service"
            number="2"
            title="Description of Service"
          >
            <p>Togethur is a social accountability platform that allows users to:</p>
            <BulletList items={serviceItems} />
            <p>We reserve the right to modify or discontinue features at any time.</p>
          </LegalSection>

          <LegalSection id="eligibility" number="3" title="Eligibility">
            <p>
              You must be at least <strong className="text-[var(--tog-text-primary)]">13 years old</strong>
              {" "}or the minimum legal age in your region to use Togethur.
            </p>
            <p>By using the App, you confirm that:</p>
            <BulletList items={eligibilityItems} />
          </LegalSection>

          <LegalSection id="user-accounts" number="4" title="User Accounts">
            <p>You are responsible for:</p>
            <BulletList items={accountItems} />
            <p>You agree to:</p>
            <BulletList items={accountAgreements} />
          </LegalSection>

          <LegalSection id="user-content" number="5" title="User Content">
            <p>You may create and share content such as:</p>
            <BulletList items={userContentItems} />
            <div className="rounded-[24px] border border-[var(--tog-border)] bg-white/60 p-5">
              <h3 className="text-lg font-extrabold tracking-[-0.03em] text-[var(--tog-text-primary)]">
                Ownership
              </h3>
              <p className="mt-3">You retain ownership of your content.</p>
            </div>
            <div className="rounded-[24px] border border-[var(--tog-border)] bg-[rgba(232,230,255,0.55)] p-5">
              <h3 className="text-lg font-extrabold tracking-[-0.03em] text-[var(--tog-text-primary)]">
                License to Us
              </h3>
              <p className="mt-3">
                By using Togethur, you grant us a limited license to:
              </p>
              <div className="mt-4">
                <BulletList items={licenseItems} />
              </div>
              <p className="mt-4">This is only to operate and improve the App.</p>
            </div>
          </LegalSection>

          <LegalSection
            id="shared-streaks"
            number="6"
            title="Shared Streaks & Social Features"
          >
            <p>When you participate in shared streaks:</p>
            <BulletList
              items={[
                "Your activity, including completion status, may be visible to others in the streak",
                "You are responsible for what you share",
              ]}
            />
            <div className="rounded-[24px] border border-[var(--tog-border)] bg-[rgba(255,232,242,0.58)] p-5">
              <p>
                We are <strong className="text-[var(--tog-text-primary)]">not responsible for interpersonal dynamics or outcomes</strong> between users.
              </p>
              <p className="mt-3">
                Participation in streaks is voluntary. Users are not obligated
                to complete streaks or respond to other participants.
              </p>
              <p className="mt-3">
                If you experience harmful or inappropriate behavior, please
                discontinue interaction and report the user.
              </p>
            </div>
          </LegalSection>

          <LegalSection id="acceptable-use" number="7" title="Acceptable Use">
            <p>You agree not to:</p>
            <BulletList items={acceptableUseItems} />
            <p>
              We may suspend or terminate accounts that violate these rules.
            </p>
          </LegalSection>

          <LegalSection id="termination" number="8" title="Termination">
            <p>We reserve the right to:</p>
            <BulletList
              items={[
                "Suspend or terminate your account at any time",
                "Remove content that violates these Terms",
              ]}
            />
            <p>You may also delete your account at any time.</p>
          </LegalSection>

          <LegalSection id="privacy" number="9" title="Privacy">
            <p>
              Your use of Togethur is also governed by our{" "}
              <Link
                className="font-semibold text-[var(--tog-primary)] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:rgba(93,89,245,0.18)]"
                href="/privacy"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </LegalSection>

          <LegalSection id="disclaimers" number="10" title="Disclaimers">
            <p>Togethur is provided &ldquo;as is.&rdquo;</p>
            <p>We do not guarantee:</p>
            <BulletList items={disclaimersItems} />
            <div className="rounded-[24px] border border-[var(--tog-border)] bg-[rgba(255,200,87,0.16)] p-5">
              <p>
                Togethur is designed to support positive habits and connection,
                but it does not guarantee emotional outcomes. Users are
                responsible for setting and maintaining their own personal and
                relational boundaries.
              </p>
            </div>
          </LegalSection>

          <LegalSection
            id="no-professional-advice"
            number="11"
            title="No Professional Advice"
          >
            <p>Togethur is not a substitute for:</p>
            <BulletList items={professionalAdviceItems} />
            <p>If you need support, please seek a qualified professional.</p>
          </LegalSection>

          <LegalSection
            id="limitation-of-liability"
            number="12"
            title="Limitation of Liability"
          >
            <p>To the fullest extent permitted by law:</p>
            <p>
              Togethur and its operators will not be liable for:
            </p>
            <BulletList items={liabilityItems} />
          </LegalSection>

          <LegalSection id="indemnification" number="13" title="Indemnification">
            <p>
              You agree to defend and hold harmless Togethur from any claims
              resulting from:
            </p>
            <BulletList items={indemnificationItems} />
          </LegalSection>

          <LegalSection id="changes-to-terms" number="14" title="Changes to Terms">
            <p>We may update these Terms from time to time.</p>
            <p>
              Continued use of the App means you accept the updated Terms.
            </p>
          </LegalSection>

          <LegalSection id="governing-law" number="15" title="Governing Law">
            <p>These Terms are governed by the laws of:</p>
            <p>
              <strong className="text-[var(--tog-text-primary)]">
                [Insert State/Country — e.g., California, USA]
              </strong>
            </p>
          </LegalSection>

          <LegalSection id="contact" number="16" title="Contact">
            <p>For questions:</p>
            <div className="rounded-[24px] border border-[var(--tog-border)] bg-white/60 p-5">
              <p>
                <strong className="text-[var(--tog-text-primary)]">Email:</strong>{" "}
                [Insert Email]
              </p>
              <p className="mt-2">
                <strong className="text-[var(--tog-text-primary)]">Company:</strong>{" "}
                Victory Labs (optional)
              </p>
            </div>
          </LegalSection>
        </article>
      </div>
    </main>
  );
}
