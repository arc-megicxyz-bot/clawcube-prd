import Link from "next/link";

const productLinks = [
  { label: "ClawCube Lite", href: "/products/lite" },
  { label: "ClawCube Core", href: "/products/core" },
  { label: "ClawCube NAS", href: "/products/nas" },
  { label: "ClawCube Ultra", href: "/products/ultra" },
];

const companyLinks = [
  { label: "Use Cases", href: "/use-cases" },
  { label: "Why ClawCube", href: "/why-clawcube" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-white"
            >
              ClawCube
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Purpose-built hardware for OpenClaw
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Products
            </h3>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} ClawCube. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
