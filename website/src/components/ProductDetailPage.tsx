import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import type { Dictionary } from "@/i18n/dictionaries/en";
import CTASection from "@/components/CTASection";

interface ProductDetailPageProps {
  product: Product;
  locale: string;
  dict: Dictionary;
  otherProducts: Product[];
}

export default function ProductDetailPage({
  product,
  locale,
  dict,
  otherProducts,
}: ProductDetailPageProps) {
  return (
    <main>
      {/* -- Hero ------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-24 lg:pt-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {product.badge && (
              <div className="absolute right-4 top-4 rounded-full bg-[#3b82f6] px-4 py-1.5 text-sm font-semibold text-white">
                {product.badge}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-4 text-xl text-[#3b82f6]">{product.tagline}</p>
            <p className="mt-6 text-lg leading-relaxed text-gray-400">
              {product.description}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex h-12 items-center justify-center rounded-lg bg-[#3b82f6] px-8 text-base font-medium text-white transition-colors hover:bg-[#2563eb]"
              >
                {dict.productDetail.joinWaitlist}
              </Link>
              <Link
                href={`/${locale}/products`}
                className="inline-flex h-12 items-center justify-center rounded-lg border border-white/20 px-8 text-base font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                {dict.productDetail.otherModels}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* -- Specs ------------------------------------------------ */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {dict.productDetail.specifications}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {product.specs.map((spec) => (
            <div
              key={spec.label}
              className="rounded-xl border border-white/10 bg-[#111] p-5 transition-colors hover:border-[#3b82f6]/30"
            >
              <p className="text-sm font-medium text-gray-500">{spec.label}</p>
              <p className="mt-1 text-lg font-semibold text-white">
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* -- Best For --------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {dict.productDetail.bestFor}
        </h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {product.bestFor.map((item) => (
            <li key={item} className="flex items-start gap-3">
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
                className="mt-0.5 shrink-0 text-[#3b82f6]"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* -- Use Cases -------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {dict.productDetail.useCases}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {product.useCases.map((useCase) => (
            <div
              key={useCase}
              className="rounded-xl border border-white/10 bg-[#111] p-6 transition-colors hover:border-[#3b82f6]/30 hover:bg-[#161616]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#3b82f6]/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#3b82f6]"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <p className="text-gray-300">{useCase}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* -- Other Models ----------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {dict.productDetail.otherModels}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {otherProducts.map((p) => (
            <Link
              key={p.slug}
              href={`/${locale}/products/${p.slug}`}
              className="group rounded-xl border border-white/10 bg-[#111] p-6 transition-all duration-300 hover:border-[#3b82f6]/30 hover:bg-[#161616]"
            >
              <div className="flex items-center gap-3">
                <h3 className="text-base font-semibold text-white transition-colors group-hover:text-[#3b82f6]">
                  {p.name}
                </h3>
                {p.badge && (
                  <span className="rounded-full bg-[#3b82f6]/10 px-2.5 py-0.5 text-xs font-medium text-[#3b82f6]">
                    {p.badge}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-gray-500">{p.tagline}</p>
              <div className="mt-4 flex flex-col gap-1.5">
                {p.specs.slice(0, 3).map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between text-xs"
                  >
                    <span className="text-gray-600">{spec.label}</span>
                    <span className="text-gray-400">{spec.value}</span>
                  </div>
                ))}
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-[#3b82f6] opacity-0 transition-opacity group-hover:opacity-100">
                View details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
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
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* -- CTA -------------------------------------------------- */}
      <CTASection
        title={dict.productDetail.cta.title}
        description={dict.productDetail.cta.description}
        buttonText={dict.productDetail.cta.button}
        buttonHref={`/${locale}/contact`}
      />
    </main>
  );
}
