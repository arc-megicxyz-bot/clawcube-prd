import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Why ClawCube? — ClawCube",
  description:
    "AI hardware without the guesswork. Learn why ClawCube is the best way to run self-hosted AI — purpose-built, OpenClaw-ready, and supported.",
};

const reasons = [
  {
    id: "not-generic",
    title: "Why not generic mini PCs?",
    description:
      "Generic hardware wasn't designed with AI in mind. You end up researching compatibility, fighting driver issues, troubleshooting thermal throttling, and hoping your chosen components actually work together for inference workloads.",
    highlight:
      "ClawCube is purpose-built and preconfigured for AI. Every component is selected, tested, and validated for OpenClaw and local model workloads — so you skip the trial-and-error and go straight to running.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      </svg>
    ),
  },
  {
    id: "openclaw-ready",
    title: "Why OpenClaw-ready matters",
    description:
      "OpenClaw is the foundation for self-hosted AI agents — but getting hardware properly configured for it takes time and expertise. Wrong drivers, insufficient memory, unsupported chipsets, and misconfigured networking can turn a weekend project into weeks of frustration.",
    highlight:
      "ClawCube ships OpenClaw-ready out of the box. The OS, runtime, networking, and agent framework are preconfigured and tested. Power on, connect, and your agents are running within minutes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    id: "simplicity",
    title: "Simplicity & Curation",
    description:
      "The AI hardware landscape is overwhelming. Hundreds of mini PCs, SBCs, and GPUs — all with different specs, trade-offs, and gotchas. Figuring out what actually works for your use case shouldn't require a PhD in hardware engineering.",
    highlight:
      "We do the research so you don't have to. We pick the right components, test them under real AI workloads, and ship a box that just works. Four models, each designed for a specific tier of use — no analysis paralysis.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    id: "trust-support",
    title: "Trust & Support",
    description:
      "When you buy a random mini PC off Amazon, you're on your own. No dedicated support channel, no firmware updates tailored for AI, no community of people running the same hardware for the same purpose.",
    highlight:
      "ClawCube is a dedicated hardware brand with dedicated support. You get firmware updates optimized for AI workloads, a community of fellow self-hosters, and a team that understands exactly what you're building.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const progression = [
  {
    name: "Lite",
    slug: "lite",
    label: "Get started",
    description: "Lightweight agents & automation",
  },
  {
    name: "Core",
    slug: "core",
    label: "Most popular",
    description: "Full OpenClaw experience",
  },
  {
    name: "NAS",
    slug: "nas",
    label: "Storage + AI",
    description: "AI meets personal cloud",
  },
  {
    name: "Ultra",
    slug: "ultra",
    label: "Maximum power",
    description: "Large models & GPU workloads",
  },
];

export default function WhyClawCubePage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 pb-16 pt-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#3b82f6]/[0.06] blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Why{" "}
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">
              ClawCube
            </span>
            ?
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
            AI hardware, without the guesswork
          </p>
        </div>
      </section>

      {/* ── Reason Cards ────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="flex flex-col gap-10">
          {reasons.map((reason, index) => (
            <div
              key={reason.id}
              id={reason.id}
              className={`group relative rounded-2xl border border-white/10 bg-[#111] transition-all duration-300 hover:border-[#3b82f6]/30 ${
                index % 2 === 0 ? "" : "md:ml-12"
              }`}
            >
              {/* Subtle side accent */}
              <div className="absolute left-0 top-8 h-12 w-1 rounded-r-full bg-[#3b82f6]/40 transition-all duration-300 group-hover:h-20 group-hover:bg-[#3b82f6]/70" />

              <div className="p-8 sm:p-10">
                {/* Header */}
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#3b82f6]/10 text-[#3b82f6] transition-colors group-hover:bg-[#3b82f6]/20">
                    {reason.icon}
                  </div>
                  <h2 className="pt-2 text-2xl font-bold text-white">
                    {reason.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="ml-[4.5rem] leading-relaxed text-gray-400">
                  {reason.description}
                </p>

                {/* Highlight box */}
                <div className="ml-[4.5rem] mt-6 rounded-xl border border-[#3b82f6]/20 bg-[#3b82f6]/[0.05] p-5">
                  <p className="text-sm leading-relaxed text-gray-300">
                    {reason.highlight}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Start Small, Scale Up ───────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start Small,{" "}
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">
              Scale Up
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-gray-400">
            ClawCube grows with you. Pick the tier that matches where you are
            today — and upgrade when you&apos;re ready for more.
          </p>
        </div>

        {/* Progression timeline */}
        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#3b82f6]/30 to-transparent md:block" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {progression.map((step, index) => (
              <Link
                key={step.slug}
                href={`/products/${step.slug}`}
                className="group relative flex flex-col items-center rounded-2xl border border-white/10 bg-[#111] p-6 text-center transition-all duration-300 hover:border-[#3b82f6]/40 hover:bg-[#161616]"
              >
                {/* Step number */}
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#3b82f6]/10 text-sm font-bold text-[#3b82f6] transition-colors group-hover:bg-[#3b82f6]/20">
                  {index + 1}
                </div>

                <h3 className="text-lg font-bold text-white transition-colors group-hover:text-[#3b82f6]">
                  {step.name}
                </h3>

                <span className="mt-1 text-xs font-medium uppercase tracking-wider text-[#3b82f6]/70">
                  {step.label}
                </span>

                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {step.description}
                </p>

                {/* Arrow between cards (hidden on last) */}
                {index < progression.length - 1 && (
                  <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-[#3b82f6]/40 md:block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <CTASection
        title="Ready to skip the guesswork?"
        description="Join the waitlist and be the first to get a ClawCube — purpose-built hardware for your AI workflows."
        buttonText="Join the Waitlist"
        buttonHref="/contact"
      />
    </main>
  );
}
