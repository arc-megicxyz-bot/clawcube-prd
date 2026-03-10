export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  badge?: string;
  specs: { label: string; value: string }[];
  bestFor: string[];
  useCases: string[];
}

export const products: Product[] = [
  {
    slug: "lite",
    name: "ClawCube Lite",
    tagline: "The simplest way to start with OpenClaw",
    description:
      "A compact, entry-level OpenClaw box for lightweight personal automation, messaging agents, and getting started with self-hosted AI without complexity.",
    image: "/images/clawcube-lite.jpg",
    specs: [
      { label: "CPU", value: "Intel J4125 (4C/4T)" },
      { label: "RAM", value: "8 GB DDR4" },
      { label: "Storage", value: "256 GB SSD" },
      { label: "Connectivity", value: "USB 3.0, HDMI, Wi-Fi" },
      { label: "Power", value: "~10W TDP" },
      { label: "Form Factor", value: "Ultra-compact cube" },
    ],
    bestFor: [
      "Beginners exploring AI agents",
      "Lightweight personal automation",
      "Messaging bots and simple workflows",
      "Always-on low-power home server",
    ],
    useCases: [
      "Run a personal OpenClaw assistant 24/7",
      "Automate messaging and notifications",
      "Set up basic home automation with AI",
      "Learn self-hosted AI without a big investment",
    ],
  },
  {
    slug: "core",
    name: "ClawCube Core",
    tagline: "The default choice for OpenClaw",
    description:
      "The best-value general-purpose OpenClaw device. Enough power for most developers, self-hosters, and AI enthusiasts who want a reliable always-on AI box.",
    image: "/images/clawcube-core.jpg",
    badge: "Most Popular",
    specs: [
      { label: "CPU", value: "Intel N100 (4C/4T)" },
      { label: "RAM", value: "16 GB DDR5" },
      { label: "Storage", value: "512 GB NVMe SSD" },
      { label: "Connectivity", value: "2x LAN 2.5G, USB 3.2, HDMI, DP, Type-C" },
      { label: "Power", value: "~6W TDP" },
      { label: "Form Factor", value: "Compact mini PC" },
    ],
    bestFor: [
      "Developers building with OpenClaw",
      "Self-hosters running multiple services",
      "AI enthusiasts running local agents",
      "Homelab users wanting a dedicated AI node",
    ],
    useCases: [
      "Run OpenClaw with multiple concurrent agents",
      "Host private AI assistants for your household",
      "Development and testing of AI workflows",
      "Self-hosted productivity and automation stack",
    ],
  },
  {
    slug: "nas",
    name: "ClawCube NAS",
    tagline: "Your private AI box plus personal cloud",
    description:
      "A NAS-focused model that combines AI capabilities with expandable storage. Perfect for families, creators, and anyone who wants their AI and data in one place.",
    image: "/images/clawcube-nas.jpg",
    specs: [
      { label: "Storage Bays", value: "4/6/8-bay options (3.5\" HDD)" },
      { label: "CPU", value: "AI-optimized processor" },
      { label: "RAM", value: "16 GB+" },
      { label: "Connectivity", value: "2.5GbE, USB 3.2" },
      { label: "Max Storage", value: "Up to 128 TB raw" },
      { label: "Form Factor", value: "Desktop NAS cube" },
    ],
    bestFor: [
      "Families wanting private cloud + AI",
      "Creators with large media libraries",
      "Self-hosters who need storage and compute",
      "Backup-conscious users wanting AI features",
    ],
    useCases: [
      "AI-powered personal cloud for your family",
      "Smart media server with local AI indexing",
      "Backup hub with intelligent automation",
      "Combined NAS + OpenClaw deployment",
    ],
  },
  {
    slug: "ultra",
    name: "ClawCube Ultra",
    tagline: "Local AI beast for advanced workloads",
    description:
      "High-performance AI workstation powered by RTX 4090-class GPU with 48GB VRAM. Run large language models locally, fine-tune models, and handle the most demanding AI workloads.",
    image: "/images/clawcube-ultra.jpg",
    badge: "Most Powerful",
    specs: [
      { label: "GPU", value: "RTX 4090 48GB-class" },
      { label: "CPU", value: "Intel LGA 1700" },
      { label: "RAM", value: "64 GB DDR5" },
      { label: "Storage", value: "2 TB NVMe SSD" },
      { label: "VRAM", value: "48 GB GDDR6X" },
      { label: "Form Factor", value: "Workstation tower" },
    ],
    bestFor: [
      "Researchers running large models locally",
      "Teams needing private AI infrastructure",
      "Power users fine-tuning models",
      "Developers building GPU-intensive AI apps",
    ],
    useCases: [
      "Run 70B+ parameter models locally",
      "Fine-tune and train custom models",
      "GPU-accelerated AI inference at scale",
      "Private team AI server with full control",
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
