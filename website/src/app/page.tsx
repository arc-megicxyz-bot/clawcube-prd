import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import { products } from "@/lib/products";

const useCases = [
  {
    title: "Personal AI Assistant",
    description:
      "Run your own always-on AI assistant that respects your privacy and works offline.",
    href: "/use-cases",
  },
  {
    title: "Self-Hosted Automation",
    description:
      "Automate workflows, messaging, and tasks with OpenClaw agents running 24/7.",
    href: "/use-cases",
  },
  {
    title: "Homelab AI",
    description:
      "Add a dedicated AI node to your homelab for local inference and experimentation.",
    href: "/use-cases",
  },
  {
    title: "Team AI Infrastructure",
    description:
      "Deploy private AI infrastructure for your team without cloud dependencies.",
    href: "/use-cases",
  },
];

const whyFeatures = [
  {
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
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "No Hardware Guesswork",
    description:
      "Every ClawCube is curated, tested, and validated for AI workloads. No compatibility headaches, no driver issues - just plug in and go.",
  },
  {
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
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "OpenClaw Native",
    description:
      "Preconfigured for OpenClaw workflows out of the box. Your agents, tools, and automations work from the moment you power on.",
  },
  {
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
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Start Small, Scale Up",
    description:
      "From the Lite to the Ultra, ClawCube grows with you. Start with a simple agent box and scale to a full AI workstation as your needs evolve.",
  },
];

export default function Home() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
        {/* Background gradient layers */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0c1020] to-[#0a0a0a]" />
          <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3b82f6]/[0.07] blur-[120px]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Your AI Box,{" "}
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">
              Ready to Run
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl">
            Purpose-built hardware for OpenClaw and self-hosted AI. From
            personal agent box to local AI powerhouse.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/products"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-[#3b82f6] px-8 text-base font-medium text-white transition-colors hover:bg-[#2563eb]"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-white/20 px-8 text-base font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              Join Waitlist
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-500"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* ── What is ClawCube ─────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          What is ClawCube?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
          ClawCube is the first line of purpose-built hardware for OpenClaw and
          self-hosted AI. Each device is curated, tested, and preconfigured so
          you can skip the setup headaches and go straight to running your own AI
          agents, automations, and local models - privately and on your terms.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {["OpenClaw-Ready", "Self-Hosted", "Private & Secure"].map(
            (label) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/10 px-5 py-2 text-sm font-medium text-[#60a5fa]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
                {label}
              </span>
            ),
          )}
        </div>
      </section>

      {/* ── Product Lineup ───────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          The Lineup
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              name={product.name}
              tagline={product.tagline}
              image={product.image}
              slug={product.slug}
              badge={product.badge}
              specs={product.specs}
            />
          ))}
        </div>
      </section>

      {/* ── Why ClawCube ─────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Why ClawCube
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {whyFeatures.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-white/10 bg-[#111] p-8 transition-all duration-300 hover:border-[#3b82f6]/30 hover:bg-[#111]/80"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#3b82f6]/10 text-[#3b82f6] transition-colors group-hover:bg-[#3b82f6]/20">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Use Cases Preview ────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Built For
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase) => (
            <Link
              key={useCase.title}
              href={useCase.href}
              className="group rounded-2xl border border-white/10 bg-[#111] p-6 transition-all duration-300 hover:border-[#3b82f6]/30 hover:bg-[#161616]"
            >
              <h3 className="text-base font-semibold text-white transition-colors group-hover:text-[#3b82f6]">
                {useCase.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {useCase.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-[#3b82f6] opacity-0 transition-opacity group-hover:opacity-100">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <CTASection
        title="Ready to run your own AI?"
        description="Join the waitlist to be first in line when ClawCube ships. No commitment, no spam - just a heads-up when your AI box is ready."
        buttonText="Join the Waitlist"
        buttonHref="/contact"
      />
    </main>
  );
}
