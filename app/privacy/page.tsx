import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { createMetadata } from "../../lib/seo";

const informationCollected = [
  {
    title: "Account Information",
    items: [
      "Name (first and/or last name)",
      "Email address",
      "Phone number (if used for login or invites)",
      "Profile details (optional)",
    ],
  },
  {
    title: "User Content",
    items: [
      "Streaks you create, including goals, habits, and shared commitments",
      "Messages or notes within the app",
      "Invitations sent to other users",
    ],
  },
  {
    title: "Usage Data",
    items: [
      "App interactions, including features used and streak activity",
      "Device information such as device type, operating system, and app version",
      "Log data including timestamps and actions taken",
    ],
  },
  {
    title: "Optional Data",
    items: [
      "Contacts, only if you choose to invite others",
      "Notification preferences",
    ],
  },
];

const usageItems = [
  "Provide and operate the app",
  "Enable shared streaks and social features",
  "Send notifications, including reminders and invites",
  "Improve product experience and performance",
  "Prevent abuse and help ensure safety",
  "Communicate updates or support messages",
];

const sharingItems = [
  {
    title: "With other users",
    description:
      "When you create or join a shared streak, relevant information such as your name and streak activity is visible to participants. Users can choose whether a streak is private or shared.",
  },
  {
    title: "With service providers",
    description:
      "We may work with providers that support hosting, analytics, authentication, messaging, or communications, including providers such as Twilio.",
  },
  {
    title: "For legal reasons",
    description:
      "We may disclose information if required by law or when reasonably necessary to protect users, our services, or the platform.",
  },
];

const rightsItems = [
  "Update or delete your account information",
  "Opt out of notifications",
  "Request account deletion",
];

const securityItems = [
  "Encrypted data transmission (HTTPS)",
  "Secure authentication practices",
  "Limited access to user data",
];

const thirdPartyItems = [
  "Analytics providers",
  "Cloud hosting services",
  "Messaging services, including SMS providers",
];

function PolicySection({
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
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <span className="inline-flex rounded-full bg-[rgba(93,89,245,0.10)] px-3 py-1 text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--tog-primary)]">
            Section {number}
          </span>
          <h2
            className="mt-4 text-2xl font-extrabold tracking-[-0.05em] text-[var(--tog-text-primary)] sm:text-[2rem]"
            id={`${id}-heading`}
          >
            {title}
          </h2>
        </div>
      </div>
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
            className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--tog-secondary)]"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Read the privacy policy for togethur, including what information is collected, how it is used, and your choices.",
  pathname: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-10">
      <div aria-hidden="true" className="blob blob-lilac left-[-8rem] top-[-5rem]" />
      <div aria-hidden="true" className="blob blob-pink right-[-7rem] top-36" />
      <div aria-hidden="true" className="blob blob-amber bottom-10 left-[10%]" />

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
                Privacy Policy
              </p>
            </div>
            <Link
              className="button-soft inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--tog-border)] bg-white/85 px-5 py-3 text-sm font-semibold text-[var(--tog-text-primary)] shadow-[0_18px_44px_rgba(42,26,74,0.08)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:rgba(93,89,245,0.18)]"
              href="/"
            >
              Back to home
            </Link>
          </div>
        </header>

        <section className="px-1 py-10 sm:py-14">
          <span className="inline-flex rounded-full border border-[var(--tog-border)] bg-white/82 px-4 py-2 text-sm font-semibold text-[var(--tog-text-secondary)] shadow-[0_16px_36px_rgba(42,26,74,0.07)]">
            Your privacy matters here
          </span>
          <h1 className="hero-title mt-6 max-w-3xl text-[2.8rem] font-extrabold leading-[0.96] tracking-[-0.08em] text-[var(--tog-text-primary)] sm:text-[4rem]">
            Privacy Policy for togethur
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--tog-text-secondary)] sm:text-xl">
            Togethur is a social accountability and streak-based application
            designed to help users build habits, strengthen relationships, and
            stay consistent through shared goals. This page explains how we
            collect, use, share, and protect information.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-[var(--tog-text-secondary)]">
            <span className="rounded-full bg-white/80 px-4 py-2 shadow-[0_14px_36px_rgba(42,26,74,0.07)]">
              Effective Date: March 17, 2026
            </span>
            <span className="rounded-full bg-[rgba(255,200,87,0.22)] px-4 py-2 text-[#8A6100] shadow-[0_14px_36px_rgba(42,26,74,0.06)]">
              Replace bracketed contact placeholders before publishing
            </span>
          </div>
        </section>

        <article className="space-y-6 pb-10">
          <PolicySection id="introduction" number="1" title="Introduction">
            <p>
              Welcome to <strong className="text-[var(--tog-text-primary)]">Togethur</strong>
              {" "}(&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;).
            </p>
            <p>
              Your privacy is important to us, and we want this policy to be
              simple and clear about how your information is handled.
            </p>
          </PolicySection>

          <PolicySection
            id="information-we-collect"
            number="2"
            title="Information We Collect"
          >
            <p>We collect the following types of information:</p>
            <div className="space-y-5">
              {informationCollected.map((group) => (
                <div key={group.title} className="rounded-[24px] border border-[var(--tog-border)] bg-white/60 p-5">
                  <h3 className="text-lg font-extrabold tracking-[-0.03em] text-[var(--tog-text-primary)]">
                    {group.title}
                  </h3>
                  <div className="mt-4">
                    <BulletList items={group.items} />
                  </div>
                </div>
              ))}
            </div>
          </PolicySection>

          <PolicySection
            id="how-we-use-information"
            number="3"
            title="How We Use Your Information"
          >
            <p>We use your information to:</p>
            <BulletList items={usageItems} />
            <div className="rounded-[24px] border border-[var(--tog-border)] bg-[rgba(232,230,255,0.55)] p-5">
              <p className="font-semibold text-[var(--tog-text-primary)]">
                We do not sell your personal data.
              </p>
              <p className="mt-3">
                We also do not analyze or use your personal messages for
                advertising or profiling.
              </p>
              <p className="mt-3">
                We may use anonymized data to improve features, but never to
                identify individuals.
              </p>
            </div>
          </PolicySection>

          <PolicySection
            id="how-we-share-information"
            number="4"
            title="How We Share Information"
          >
            <p>We only share information in the following cases:</p>
            <div className="space-y-4">
              {sharingItems.map((item) => (
                <div key={item.title} className="rounded-[24px] border border-[var(--tog-border)] bg-white/60 p-5">
                  <h3 className="text-lg font-extrabold tracking-[-0.03em] text-[var(--tog-text-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-3">{item.description}</p>
                </div>
              ))}
            </div>
          </PolicySection>

          <PolicySection id="data-retention" number="5" title="Data Retention">
            <p>
              We retain your data as long as your account is active or as
              needed to provide services.
            </p>
            <p>You may request deletion of your data at any time.</p>
          </PolicySection>

          <PolicySection
            id="rights-and-choices"
            number="6"
            title="Your Rights & Choices"
          >
            <p>You can:</p>
            <BulletList items={rightsItems} />
            <p>
              To request deletion, contact:{" "}
              <strong className="text-[var(--tog-text-primary)]">
                [Insert Email]
              </strong>
            </p>
          </PolicySection>

          <PolicySection id="security" number="7" title="Security">
            <p>
              We implement reasonable security measures to protect your data,
              including:
            </p>
            <BulletList items={securityItems} />
            <p>However, no system is 100% secure.</p>
          </PolicySection>

          <PolicySection
            id="childrens-privacy"
            number="8"
            title="Children&apos;s Privacy"
          >
            <p>
              Togethur is not intended for users under 13, or the applicable
              age in your region. We do not knowingly collect data from
              children.
            </p>
          </PolicySection>

          <PolicySection
            id="third-party-services"
            number="9"
            title="Third-Party Services"
          >
            <p>We may use third-party tools such as:</p>
            <BulletList items={thirdPartyItems} />
            <p>These services have their own privacy policies.</p>
          </PolicySection>

          <PolicySection
            id="changes-to-this-policy"
            number="10"
            title="Changes to This Policy"
          >
            <p>
              We may update this Privacy Policy from time to time. We will
              notify users of significant changes when appropriate.
            </p>
          </PolicySection>

          <PolicySection id="contact-us" number="11" title="Contact Us">
            <p>If you have questions, contact us at:</p>
            <div className="rounded-[24px] border border-[var(--tog-border)] bg-[rgba(255,232,242,0.58)] p-5">
              <p>
                <strong className="text-[var(--tog-text-primary)]">Email:</strong>{" "}
                [Insert Email]
              </p>
              <p className="mt-2">
                <strong className="text-[var(--tog-text-primary)]">Company:</strong>{" "}
                Victory Labs (optional)
              </p>
              <p className="mt-2">
                <strong className="text-[var(--tog-text-primary)]">Location:</strong>{" "}
                [Optional]
              </p>
            </div>
          </PolicySection>
        </article>
      </div>
    </main>
  );
}
