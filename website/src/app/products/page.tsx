import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ComparisonTable from "@/components/ComparisonTable";
import CTASection from "@/components/CTASection";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products — The ClawCube Lineup",
  description:
    "Four purpose-built models for every stage of your AI journey. Compare ClawCube Lite, Core, NAS, and Ultra side by side.",
};

export default function ProductsPage() {
  return (
    <main>
      {/* ── Header ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-24 text-center lg:pt-32">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          The ClawCube Lineup
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
          Four purpose-built models for every stage of your AI journey
        </p>
      </section>

      {/* ── Product Grid ─────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-12">
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

      {/* ── Comparison Table ──────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Compare All Models
        </h2>
        <div className="rounded-2xl border border-white/10 bg-[#111] p-6">
          <ComparisonTable />
        </div>
      </section>

      {/* ── Not Sure Section ──────────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <div className="rounded-2xl border border-white/10 bg-[#111] p-10">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Not sure which to choose?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Every use case is different. Whether you need a quiet always-on agent
            box or a full GPU workstation, we can help you find the right fit.
            Reach out and we will guide you to the perfect ClawCube for your
            needs.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-[#3b82f6] px-8 text-base font-medium text-white transition-colors hover:bg-[#2563eb]"
          >
            Get in Touch
          </Link>
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
