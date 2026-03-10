import type { Metadata } from "next";
import { getDictionary } from "@/i18n/getDictionary";
import { locales, type Locale } from "@/i18n/config";
import CTASection from "@/components/CTASection";
import FAQAccordion from "./FAQAccordion";

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
    title: `${dict.faq.title} | ClawCube`,
    description: dict.faq.subtitle,
  };
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <main>
      {/* ── Header ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-6 pb-8 pt-32">
        <h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {dict.faq.title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-gray-400">
          {dict.faq.subtitle}
        </p>
      </section>

      {/* ── FAQ Accordion ──────────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-6 pb-24 pt-8">
        <FAQAccordion items={dict.faq.items} />
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <CTASection
        title={dict.faq.cta.title}
        description={dict.faq.cta.description}
        buttonText={dict.faq.cta.button}
        buttonHref={`/${locale}/contact`}
      />
    </main>
  );
}
