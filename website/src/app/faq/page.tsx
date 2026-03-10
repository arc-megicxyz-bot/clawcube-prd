import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import FAQAccordion from "./FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ | ClawCube",
  description:
    "Frequently asked questions about ClawCube hardware and OpenClaw integration. Learn about models, setup, remote access, and more.",
};

const faqItems = [
  {
    question: "Who is ClawCube for?",
    answer:
      "AI enthusiasts, developers, self-hosters, indie hackers, small teams, and anyone who wants private AI hardware that works out of the box.",
  },
  {
    question: "Which model should I buy?",
    answer:
      "Start with Core if unsure\u2014it\u2019s our default recommendation. Lite for basic automation, NAS if you need storage, Ultra for serious GPU workloads.",
  },
  {
    question: "Does it come preconfigured?",
    answer:
      "Yes. Every ClawCube ships with OpenClaw preinstalled and ready to run. Just plug in, connect to your network, and start.",
  },
  {
    question: "Can I run local AI models?",
    answer:
      "Absolutely. Core handles lightweight models well. Ultra can run 70B+ parameter models locally with its 48GB VRAM.",
  },
  {
    question: "Is remote access supported?",
    answer:
      "Yes. OpenClaw includes secure remote access so you can manage your ClawCube from anywhere.",
  },
  {
    question: "What\u2019s the difference between ClawCube and a regular NAS?",
    answer:
      "ClawCube NAS combines storage with AI compute. It\u2019s not just a file server\u2014it\u2019s an AI-powered personal cloud.",
  },
  {
    question: "Do I need technical experience?",
    answer:
      "No. ClawCube is designed to be turnkey. Power users can customize everything, but it works great out of the box.",
  },
  {
    question: "Can I use ClawCube without OpenClaw?",
    answer:
      "Yes, it\u2019s standard hardware. But the magic is in the OpenClaw integration\u2014that\u2019s what makes it special.",
  },
];

export default function FAQPage() {
  return (
    <main>
      {/* ── Header ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-6 pb-8 pt-32">
        <h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Frequently Asked Questions
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-gray-400">
          Everything you need to know about ClawCube and OpenClaw.
        </p>
      </section>

      {/* ── FAQ Accordion ──────────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-6 pb-24 pt-8">
        <FAQAccordion items={faqItems} />
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <CTASection
        title="Still have questions?"
        description="Reach out to us directly and we&apos;ll get back to you as soon as we can."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </main>
  );
}
