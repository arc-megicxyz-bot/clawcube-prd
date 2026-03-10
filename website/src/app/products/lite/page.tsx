import type { Metadata } from "next";
import { getProduct } from "@/lib/products";
import ProductDetailPage from "@/components/ProductDetailPage";
import { notFound } from "next/navigation";

const product = getProduct("lite");

export const metadata: Metadata = {
  title: "ClawCube Lite — The Simplest Way to Start with OpenClaw",
  description:
    "A compact, entry-level OpenClaw box for lightweight personal automation, messaging agents, and getting started with self-hosted AI without complexity.",
};

export default function LitePage() {
  if (!product) return notFound();

  return <ProductDetailPage product={product} />;
}
