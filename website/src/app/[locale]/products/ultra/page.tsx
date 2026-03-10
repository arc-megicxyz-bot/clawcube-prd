import type { Metadata } from "next";
import { getDictionary } from "@/i18n/getDictionary";
import { locales, type Locale } from "@/i18n/config";
import ProductDetailPage from "@/components/ProductDetailPage";
import type { Product } from "@/lib/products";

const SLUG = "ultra";

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
  const p = dict.productData[SLUG];
  return {
    title: `${p.name} — ${p.tagline}`,
    description: p.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const pd = dict.productData[SLUG];

  const product: Product = {
    slug: SLUG,
    name: pd.name,
    tagline: pd.tagline,
    description: pd.description,
    image: `/images/clawcube-${SLUG}.jpg`,
    badge: (pd as any).badge,
    specs: pd.specs as Product["specs"],
    bestFor: pd.bestFor as string[],
    useCases: pd.useCases as string[],
  };

  const otherSlugs = (["lite", "core", "nas", "ultra"] as const).filter(
    (s) => s !== SLUG
  );
  const otherProducts: Product[] = otherSlugs.map((s) => {
    const d = dict.productData[s];
    return {
      slug: s,
      name: d.name,
      tagline: d.tagline,
      description: d.description,
      image: `/images/clawcube-${s}.jpg`,
      badge: (d as any).badge,
      specs: d.specs as Product["specs"],
      bestFor: d.bestFor as string[],
      useCases: d.useCases as string[],
    };
  });

  return (
    <ProductDetailPage
      product={product}
      locale={locale}
      dict={dict}
      otherProducts={otherProducts}
    />
  );
}
