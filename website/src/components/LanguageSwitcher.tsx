"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { locales, type Locale } from "@/i18n/config";

const labels: Record<Locale, string> = {
  en: "EN",
  ko: "KO",
};

export default function LanguageSwitcher() {
  const pathname = usePathname();

  // Extract the current locale from the pathname
  const segments = pathname.split("/");
  const currentLocale = (locales as readonly string[]).includes(segments[1])
    ? (segments[1] as Locale)
    : "en";

  // Build the path without the locale prefix
  const pathWithoutLocale = (locales as readonly string[]).includes(segments[1])
    ? "/" + segments.slice(2).join("/")
    : pathname;

  return (
    <div className="flex items-center gap-1 rounded-lg border border-white/10 p-0.5">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`}
          className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
            locale === currentLocale
              ? "bg-white/10 text-white"
              : "text-gray-500 hover:text-gray-300"
          }`}
        >
          {labels[locale]}
        </Link>
      ))}
    </div>
  );
}
