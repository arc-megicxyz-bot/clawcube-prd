import type { Metadata } from "next";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Contact & Waitlist | ClawCube",
  description:
    "Join the ClawCube waitlist, ask a question, or explore partnership opportunities. Be first to know when ClawCube ships.",
};

const infoCards = [
  {
    title: "Join the Waitlist",
    description:
      "Be the first to know when ClawCube ships. No commitment, no spam\u2014just a heads-up when your AI box is ready.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 17H2a3 3 0 003 3h14a3 3 0 003-3z" />
        <path d="M2 17V7a3 3 0 013-3h14a3 3 0 013 3v10" />
        <path d="M12 8v4l3 2" />
      </svg>
    ),
  },
  {
    title: "Business Inquiries",
    description:
      "Interested in partnerships, bulk orders, or custom builds? Let\u2019s talk about how ClawCube can work for your organization.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
  },
  {
    title: "Community",
    description:
      "Join the conversation. Connect with other ClawCube users, share your setup, and get help from the community.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    links: [
      { label: "Discord", href: "#" },
      { label: "GitHub", href: "#" },
      { label: "Twitter / X", href: "#" },
    ],
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* ── Header ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-32 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
          Join the waitlist, ask a question, or explore partnership
          opportunities.
        </p>
      </section>

      {/* ── Two-column layout ──────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left: Waitlist Form */}
          <div>
            <h2 className="mb-6 text-xl font-semibold text-white">
              Join the Waitlist
            </h2>
            <WaitlistForm />
          </div>

          {/* Right: Info Cards */}
          <div className="flex flex-col gap-6">
            {infoCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-white/10 bg-[#111] p-6 transition-colors hover:border-[#3b82f6]/30"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#3b82f6]/10 text-[#3b82f6]">
                  {card.icon}
                </div>
                <h3 className="text-base font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {card.description}
                </p>
                {card.links && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {card.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#1a1a1a] px-3.5 py-2 text-xs font-medium text-gray-300 transition-colors hover:border-[#3b82f6]/30 hover:text-white"
                      >
                        {link.label}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
