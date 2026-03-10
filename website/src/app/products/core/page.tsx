import type { Metadata } from "next";
import { getProduct } from "@/lib/products";
import ProductDetailPage from "@/components/ProductDetailPage";
import { notFound } from "next/navigation";

const product = getProduct("core");

export const metadata: Metadata = {
  title: "ClawCube Core — The Default Choice for OpenClaw",
  description:
    "The best-value general-purpose OpenClaw device. Enough power for most developers, self-hosters, and AI enthusiasts who want a reliable always-on AI box.",
};

export default function CorePage() {
  if (!product) return notFound();

  return <ProductDetailPage product={product} />;
}
