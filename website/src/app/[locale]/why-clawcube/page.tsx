import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/i18n/getDictionary";
import { locales, type Locale } from "@/i18n/config";
import CTASection from "@/components/CTASection";

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
    title: `${dict.whyClawcube.title} — ClawCube`,
    description: dict.whyClawcube.subtitle,
  };
}

const reasonIcons = [
  // Circle with diagonal line (not generic)
  <svg key="not-generic" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
  </svg>,
  // Checkmark (openclaw ready)
  <svg key="openclaw" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>,
  // Grid/layout icon (simplicity)
  <svg key="simplicity" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </svg>,
  // Shield icon (trust)
  <svg key="trust" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>,
];

const stepSlugs = ["lite", "core", "nas", "ultra"];

export default async function WhyClawCubePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 pb-16 pt-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#3b82f6]/[0.06] blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {dict.whyClawcube.title}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
            {dict.whyClawcube.subtitle}
          </p>
        </div>
      </section>

      {/* ── Reason Cards ────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="flex flex-col gap-10">
          {dict.whyClawcube.reasons.map((reason, index) => (
            <div
              key={index}
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
                    {reasonIcons[index]}
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
            {dict.whyClawcube.scaleTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-gray-400">
            {dict.whyClawcube.scaleSubtitle}
          </p>
        </div>

        {/* Progression timeline */}
        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#3b82f6]/30 to-transparent md:block" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {dict.whyClawcube.steps.map((step, index) => (
              <Link
                key={index}
                href={`/${locale}/products/${stepSlugs[index]}`}
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
                {index < dict.whyClawcube.steps.length - 1 && (
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
        title={dict.whyClawcube.cta.title}
        description={dict.whyClawcube.cta.description}
        buttonText={dict.whyClawcube.cta.button}
        buttonHref={`/${locale}/contact`}
      />
    </main>
  );
}
