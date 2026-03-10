"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Why ClawCube", href: "/why-clawcube" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight text-white">
          ClawCube
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-lg bg-[#3b82f6] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2563eb]"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-400 transition-colors hover:text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-72 transform bg-[#111] transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-end px-6">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-400 transition-colors hover:text-white"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-2 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-3 text-base text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 rounded-lg bg-[#3b82f6] px-4 py-3 text-center text-base font-medium text-white transition-colors hover:bg-[#2563eb]"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </Link>
        </nav>
      </div>

      {/* Backdrop overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}
