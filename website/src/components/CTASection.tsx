import Link from "next/link";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonHref,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#111] via-[#0a0a0a] to-[#111]">
      {/* Subtle background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-64 w-64 rounded-full bg-[#3b82f6]/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-gray-400">
          {description}
        </p>
        <Link
          href={buttonHref}
          className="mt-8 inline-block rounded-lg bg-[#3b82f6] px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-[#2563eb]"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
