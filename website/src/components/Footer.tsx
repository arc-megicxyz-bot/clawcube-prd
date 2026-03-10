"use client";

import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { useDictionary } from "@/i18n/DictionaryProvider";

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const dict = useDictionary();

  const productSlugs = ["lite", "core", "nas", "ultra"] as const;

  const productLinks = productSlugs.map((slug) => ({
    label: dict.productData[slug].name,
    href: `/${locale}/products/${slug}`,
  }));

  const companyLinks = [
    { label: dict.nav.useCases, href: `/${locale}/use-cases` },
    { label: dict.nav.whyClawcube, href: `/${locale}/why-clawcube` },
    { label: dict.nav.faq, href: `/${locale}/faq` },
    { label: dict.footer.contact, href: `/${locale}/contact` },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href={`/${locale}`}
              className="text-xl font-bold tracking-tight text-white"
            >
              ClawCube
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              {dict.footer.tagline}
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              {dict.footer.productsTitle}
            </h3>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              {dict.footer.companyTitle}
            </h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {dict.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
