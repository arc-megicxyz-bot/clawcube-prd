import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getDictionary } from "@/i18n/getDictionary";
import { locales, type Locale } from "@/i18n/config";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";

const SLUGS = ["lite", "core", "nas", "ultra"] as const;

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.meta.siteTitle,
    description: dict.meta.siteDescription,
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3b82f6]/10 via-transparent to-transparent" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-[500px] w-[800px] rounded-full bg-[#3b82f6]/5 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 pb-16 pt-32 text-center lg:pt-44">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {dict.home.hero.title}{" "}
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">
              {dict.home.hero.titleAccent}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl">
            {dict.home.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={`/${locale}/products`}
              className="inline-flex h-12 items-center justify-center rounded-lg bg-[#3b82f6] px-8 text-base font-medium text-white transition-colors hover:bg-[#2563eb]"
            >
              {dict.home.hero.exploreCta}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex h-12 items-center justify-center rounded-lg border border-white/20 px-8 text-base font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              {dict.home.hero.waitlistCta}
            </Link>
          </div>
        </div>
      </section>

      {/* ── What is ClawCube ─────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {dict.home.whatIs.title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
          {dict.home.whatIs.description}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {[dict.home.whatIs.pill1, dict.home.whatIs.pill2, dict.home.whatIs.pill3].map(
            (pill) => (
              <span
                key={pill}
                className="rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/10 px-4 py-1.5 text-sm font-medium text-[#60a5fa]"
              >
                {pill}
              </span>
            )
          )}
        </div>
      </section>

      {/* ── Product Lineup ───────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {dict.home.lineup.title}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SLUGS.map((slug) => {
            const pd = dict.productData[slug];
            return (
              <ProductCard
                key={slug}
                name={pd.name}
                tagline={pd.tagline}
                image={`/images/clawcube-${slug}.jpg`}
                slug={slug}
                badge={(pd as any).badge}
                specs={pd.specs as { label: string; value: string }[]}
                locale={locale}
                learnMoreText={dict.products.learnMore}
              />
            );
          })}
        </div>
      </section>

      {/* ── Why ClawCube ─────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {dict.home.why.title}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="rounded-2xl border border-white/10 bg-[#111] p-8 transition-colors hover:border-[#3b82f6]/30">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#3b82f6]/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#3b82f6]"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white">
              {dict.home.why.feature1Title}
            </h3>
            <p className="mt-2 text-gray-400">{dict.home.why.feature1Desc}</p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-2xl border border-white/10 bg-[#111] p-8 transition-colors hover:border-[#3b82f6]/30">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#3b82f6]/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#3b82f6]"
              >
                <path d="M12 2v8" />
                <circle cx="12" cy="14" r="4" />
                <path d="M12 18v4" />
                <path d="M4.93 4.93l4.24 4.24" />
                <path d="M14.83 14.83l4.24 4.24" />
                <path d="M2 12h8" />
                <path d="M14 12h8" />
                <path d="M4.93 19.07l4.24-4.24" />
                <path d="M14.83 9.17l4.24-4.24" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white">
              {dict.home.why.feature2Title}
            </h3>
            <p className="mt-2 text-gray-400">{dict.home.why.feature2Desc}</p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-2xl border border-white/10 bg-[#111] p-8 transition-colors hover:border-[#3b82f6]/30">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#3b82f6]/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#3b82f6]"
              >
                <path d="M3 3v18h18" />
                <path d="m7 16 4-8 4 4 4-8" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white">
              {dict.home.why.feature3Title}
            </h3>
            <p className="mt-2 text-gray-400">{dict.home.why.feature3Desc}</p>
          </div>
        </div>
      </section>

      {/* ── Built For ────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {dict.home.builtFor.title}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Case 1 */}
          <div className="rounded-2xl border border-white/10 bg-[#111] p-8 transition-colors hover:border-[#3b82f6]/30">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#3b82f6]/10">
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
                className="text-[#3b82f6]"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white">
              {dict.home.builtFor.case1Title}
            </h3>
            <p className="mt-2 text-gray-400">{dict.home.builtFor.case1Desc}</p>
            <Link
              href={`/${locale}/use-cases`}
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#3b82f6] transition-colors hover:text-[#60a5fa]"
            >
              {dict.home.builtFor.learnMore}
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

          {/* Case 2 */}
          <div className="rounded-2xl border border-white/10 bg-[#111] p-8 transition-colors hover:border-[#3b82f6]/30">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#3b82f6]/10">
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
                className="text-[#3b82f6]"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white">
              {dict.home.builtFor.case2Title}
            </h3>
            <p className="mt-2 text-gray-400">{dict.home.builtFor.case2Desc}</p>
            <Link
              href={`/${locale}/use-cases`}
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#3b82f6] transition-colors hover:text-[#60a5fa]"
            >
              {dict.home.builtFor.learnMore}
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

          {/* Case 3 */}
          <div className="rounded-2xl border border-white/10 bg-[#111] p-8 transition-colors hover:border-[#3b82f6]/30">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#3b82f6]/10">
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
                className="text-[#3b82f6]"
              >
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white">
              {dict.home.builtFor.case3Title}
            </h3>
            <p className="mt-2 text-gray-400">{dict.home.builtFor.case3Desc}</p>
            <Link
              href={`/${locale}/use-cases`}
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#3b82f6] transition-colors hover:text-[#60a5fa]"
            >
              {dict.home.builtFor.learnMore}
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

          {/* Case 4 */}
          <div className="rounded-2xl border border-white/10 bg-[#111] p-8 transition-colors hover:border-[#3b82f6]/30">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#3b82f6]/10">
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
                className="text-[#3b82f6]"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white">
              {dict.home.builtFor.case4Title}
            </h3>
            <p className="mt-2 text-gray-400">{dict.home.builtFor.case4Desc}</p>
            <Link
              href={`/${locale}/use-cases`}
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#3b82f6] transition-colors hover:text-[#60a5fa]"
            >
              {dict.home.builtFor.learnMore}
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
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <CTASection
        title={dict.products.cta.title}
        description={dict.products.cta.description}
        buttonText={dict.products.cta.button}
        buttonHref={`/${locale}/contact`}
      />
    </main>
  );
}
