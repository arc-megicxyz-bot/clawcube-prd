import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/i18n/getDictionary";
import { locales, type Locale } from "@/i18n/config";
import ProductCard from "@/components/ProductCard";
import ComparisonTable from "@/components/ComparisonTable";
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
    title: `${dict.products.title} — ClawCube`,
    description: dict.products.subtitle,
  };
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const comparisonProducts = SLUGS.map((slug) => {
    const pd = dict.productData[slug];
    return {
      slug,
      name: pd.name,
      badge: (pd as any).badge as string | undefined,
      specs: pd.specs as { label: string; value: string }[],
    };
  });

  return (
    <main>
      {/* ── Header ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-24 text-center lg:pt-32">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {dict.products.title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
          {dict.products.subtitle}
        </p>
      </section>

      {/* ── Product Grid ─────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-12">
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

      {/* ── Comparison Table ──────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {dict.products.comparison}
        </h2>
        <div className="rounded-2xl border border-white/10 bg-[#111] p-6">
          <ComparisonTable
            products={comparisonProducts}
            specLabel={dict.products.spec}
          />
        </div>
      </section>

      {/* ── Not Sure Section ──────────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <div className="rounded-2xl border border-white/10 bg-[#111] p-10">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            {dict.products.notSure.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            {dict.products.notSure.description}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-[#3b82f6] px-8 text-base font-medium text-white transition-colors hover:bg-[#2563eb]"
          >
            {dict.products.notSure.cta}
          </Link>
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
