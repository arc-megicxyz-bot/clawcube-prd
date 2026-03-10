import type { Metadata } from "next";
import { getProduct } from "@/lib/products";
import ProductDetailPage from "@/components/ProductDetailPage";
import { notFound } from "next/navigation";

const product = getProduct("nas");

export const metadata: Metadata = {
  title: "ClawCube NAS — Your Private AI Box Plus Personal Cloud",
  description:
    "A NAS-focused model that combines AI capabilities with expandable storage. Perfect for families, creators, and anyone who wants their AI and data in one place.",
};

export default function NASPage() {
  if (!product) return notFound();

  return <ProductDetailPage product={product} />;
}
