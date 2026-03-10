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
    title: `${dict.useCases.title} — ClawCube`,
    description: dict.useCases.subtitle,
  };
}

const icons = [
  // Person icon (personal AI)
  <svg key="person" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>,
  // Arrow icon (automation)
  <svg key="arrow" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 3 21 3 21 8" />
    <line x1="4" y1="20" x2="21" y2="3" />
    <polyline points="21 16 21 21 16 21" />
    <line x1="15" y1="15" x2="21" y2="21" />
    <line x1="4" y1="4" x2="9" y2="9" />
  </svg>,
  // Server stack icon (homelab)
  <svg key="server" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>,
  // Group icon (team)
  <svg key="group" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>,
  // Pulse/activity icon (GPU)
  <svg key="pulse" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>,
];

export default async function UseCasesPage({
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
            {dict.useCases.title}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
            {dict.useCases.subtitle}
          </p>
        </div>
      </section>

      {/* ── Use Case Cards ──────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="flex flex-col gap-10">
          {dict.useCases.cases.map((uc, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-[#111] p-8 transition-all duration-300 hover:border-[#3b82f6]/30 sm:p-10"
            >
              {/* Header */}
              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#3b82f6]/10 text-[#3b82f6] transition-colors group-hover:bg-[#3b82f6]/20">
                  {icons[index]}
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
                  href={`/${locale}/products/${uc.recommendedSlug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/10 px-5 py-2 text-sm font-medium text-[#60a5fa] transition-all hover:border-[#3b82f6]/50 hover:bg-[#3b82f6]/20"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
                  {dict.useCases.recommended}: {uc.recommendedProduct}
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
        title={dict.useCases.cta.title}
        description={dict.useCases.cta.description}
        buttonText={dict.useCases.cta.button}
        buttonHref={`/${locale}/products`}
      />
    </main>
  );
}
