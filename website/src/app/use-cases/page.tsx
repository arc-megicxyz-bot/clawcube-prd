import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Use Cases — ClawCube",
  description:
    "Discover how ClawCube fits into your AI workflow — from personal assistants to team infrastructure and local GPU inference.",
};

const useCases = [
  {
    id: "personal-ai-assistant",
    title: "Personal AI Assistant",
    description:
      "Run your own AI assistant that's always on, always private, and completely under your control. No cloud subscriptions, no data leaving your home — just a dedicated box handling your questions, scheduling, drafts, and daily workflows.",
    tasks: [
      "Chat with a private LLM for research and brainstorming",
      "Summarize articles, emails, and documents on demand",
      "Draft messages, blog posts, and replies with local AI",
      "Voice-controlled assistant running entirely on your hardware",
    ],
    recommended: "ClawCube Core",
    recommendedSlug: "core",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    id: "self-hosted-automation",
    title: "Self-Hosted Automation",
    description:
      "Automate your digital life without relying on cloud services. ClawCube runs your OpenClaw agents 24/7 — handling messaging, notifications, scheduling, and custom workflows while you focus on what matters.",
    tasks: [
      "Automate messaging across Slack, Discord, Telegram, and email",
      "Schedule and trigger workflows based on events or time",
      "Monitor RSS feeds, news, and data sources with AI filtering",
      "Run n8n, Home Assistant, or custom automation pipelines",
    ],
    recommended: "ClawCube Lite or Core",
    recommendedSlug: "lite",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 3 21 3 21 8" />
        <line x1="4" y1="20" x2="21" y2="3" />
        <polyline points="21 16 21 21 16 21" />
        <line x1="15" y1="15" x2="21" y2="21" />
        <line x1="4" y1="4" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    id: "homelab-ai",
    title: "Homelab AI",
    description:
      "Add a dedicated AI node to your homelab stack. ClawCube integrates seamlessly alongside your existing servers, NAS, and networking gear — giving you local inference capabilities without repurposing your other machines.",
    tasks: [
      "Run Ollama, LocalAI, or vLLM as a dedicated inference server",
      "Add AI-powered search and indexing to your media library",
      "Integrate with Home Assistant for smart home intelligence",
      "Experiment with new models without disrupting other services",
    ],
    recommended: "ClawCube Core or NAS",
    recommendedSlug: "core",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    id: "team-private-ai",
    title: "Team / Private AI Infrastructure",
    description:
      "Deploy AI infrastructure for your team without sending data to third-party clouds. ClawCube Ultra gives your organization a private, high-performance AI server that stays on your network and under your control.",
    tasks: [
      "Host a shared AI assistant for your entire team",
      "Run private code generation and review tools",
      "Deploy internal knowledge base with RAG pipelines",
      "Provide GPU-accelerated inference for multiple concurrent users",
    ],
    recommended: "ClawCube Ultra",
    recommendedSlug: "ultra",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "local-inference-gpu",
    title: "Local Inference & GPU Workflows",
    description:
      "Run large language models, fine-tune on your own data, and train custom models — all locally. ClawCube Ultra's workstation-grade GPU gives you the raw power to handle the most demanding AI workloads without cloud costs.",
    tasks: [
      "Run 70B+ parameter models with full GPU acceleration",
      "Fine-tune open-source models on your proprietary data",
      "Train custom LoRA adapters and experiment with architectures",
      "Batch process thousands of inference requests locally",
    ],
    recommended: "ClawCube Ultra",
    recommendedSlug: "ultra",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

export default function UseCasesPage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 pb-16 pt-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#3b82f6]/[0.06] blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Built For{" "}
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">
              Real AI Workflows
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
            See how ClawCube fits into your setup
          </p>
        </div>
      </section>

      {/* ── Use Case Cards ──────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="flex flex-col gap-10">
          {useCases.map((uc) => (
            <div
              key={uc.id}
              id={uc.id}
              className="group rounded-2xl border border-white/10 bg-[#111] p-8 transition-all duration-300 hover:border-[#3b82f6]/30 sm:p-10"
            >
              {/* Header */}
              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#3b82f6]/10 text-[#3b82f6] transition-colors group-hover:bg-[#3b82f6]/20">
                  {uc.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{uc.title}</h2>
                  <p className="mt-2 leading-relaxed text-gray-400">
                    {uc.description}
                  </p>
                </div>
              </div>

              {/* Task list */}
              <ul className="mb-8 ml-[4.5rem] grid grid-cols-1 gap-3 sm:grid-cols-2">
                {uc.tasks.map((task) => (
                  <li
                    key={task}
                    className="flex items-start gap-2 text-sm text-gray-300"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3b82f6]" />
                    {task}
                  </li>
                ))}
              </ul>

              {/* Recommended pill */}
              <div className="ml-[4.5rem]">
                <Link
                  href={`/products/${uc.recommendedSlug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/10 px-5 py-2 text-sm font-medium text-[#60a5fa] transition-all hover:border-[#3b82f6]/50 hover:bg-[#3b82f6]/20"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
                  Recommended: {uc.recommended}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
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
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <CTASection
        title="Find the right ClawCube for you"
        description="Not sure which model fits your workflow? Explore the full lineup or reach out — we're happy to help."
        buttonText="Explore Products"
        buttonHref="/products"
      />
    </main>
  );
}
