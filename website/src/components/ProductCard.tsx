import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  name: Product["name"];
  tagline: Product["tagline"];
  image: Product["image"];
  slug: Product["slug"];
  badge?: Product["badge"];
  specs: Product["specs"];
  locale: string;
  learnMoreText: string;
}

export default function ProductCard({
  name,
  tagline,
  image,
  slug,
  badge,
  specs,
  locale,
  learnMoreText,
}: ProductCardProps) {
  const displaySpecs = specs.slice(0, 3);

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111] transition-all duration-300 hover:border-[#3b82f6]/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)]">
      {/* Badge */}
      {badge && (
        <div className="absolute right-4 top-4 z-10 rounded-full bg-[#3b82f6] px-3 py-1 text-xs font-semibold text-white">
          {badge}
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1a1a1a]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-white">{name}</h3>
        <p className="mt-1 text-sm text-gray-400">{tagline}</p>

        {/* Specs */}
        <ul className="mt-4 flex flex-col gap-2">
          {displaySpecs.map((spec) => (
            <li
              key={spec.label}
              className="flex items-center justify-between text-sm"
            >
              <span className="text-gray-500">{spec.label}</span>
              <span className="font-medium text-gray-300">{spec.value}</span>
            </li>
          ))}
        </ul>

        {/* Link */}
        <Link
          href={`/${locale}/products/${slug}`}
          className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[#3b82f6] transition-colors hover:text-[#60a5fa]"
        >
          {learnMoreText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
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
  );
}
