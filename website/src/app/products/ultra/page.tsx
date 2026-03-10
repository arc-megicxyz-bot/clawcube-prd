import type { Metadata } from "next";
import { getProduct } from "@/lib/products";
import ProductDetailPage from "@/components/ProductDetailPage";
import { notFound } from "next/navigation";

const product = getProduct("ultra");

export const metadata: Metadata = {
  title: "ClawCube Ultra — Local AI Beast for Advanced Workloads",
  description:
    "High-performance AI workstation powered by RTX 4090-class GPU with 48GB VRAM. Run large language models locally, fine-tune models, and handle the most demanding AI workloads.",
};

export default function UltraPage() {
  if (!product) return notFound();

  return <ProductDetailPage product={product} />;
}
