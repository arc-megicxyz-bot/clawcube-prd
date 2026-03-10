"use client";

import { useState } from "react";
import { useDictionary } from "@/i18n/DictionaryProvider";

export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const dict = useDictionary();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-white/10 bg-[#111] p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#3b82f6]/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white">
          {dict.form.successTitle}
        </h3>
        <p className="mt-2 text-sm text-gray-400">
          {dict.form.successMessage}
        </p>
      </div>
    );
  }

  const productOptions = [
    { value: "", label: dict.form.productPlaceholder },
    { value: "lite", label: dict.form.options.lite },
    { value: "core", label: dict.form.options.core },
    { value: "nas", label: dict.form.options.nas },
    { value: "ultra", label: dict.form.options.ultra },
  ];

  const inputClasses =
    "w-full rounded-lg border border-white/10 bg-[#1a1a1a] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-[#111] p-8"
    >
      <div className="flex flex-col gap-5">
        {/* Name */}
        <div>
          <label
            htmlFor="waitlist-name"
            className="mb-1.5 block text-sm font-medium text-gray-300"
          >
            {dict.form.name}
          </label>
          <input
            id="waitlist-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={dict.form.namePlaceholder}
            className={inputClasses}
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="waitlist-email"
            className="mb-1.5 block text-sm font-medium text-gray-300"
          >
            {dict.form.email}
          </label>
          <input
            id="waitlist-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={dict.form.emailPlaceholder}
            className={inputClasses}
          />
        </div>

        {/* Product select */}
        <div>
          <label
            htmlFor="waitlist-product"
            className="mb-1.5 block text-sm font-medium text-gray-300"
          >
            {dict.form.product}
          </label>
          <select
            id="waitlist-product"
            required
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className={inputClasses}
          >
            {productOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="waitlist-message"
            className="mb-1.5 block text-sm font-medium text-gray-300"
          >
            {dict.form.message}
          </label>
          <textarea
            id="waitlist-message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={dict.form.messagePlaceholder}
            className={inputClasses}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-2 w-full rounded-lg bg-[#3b82f6] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2563eb]"
        >
          {dict.form.submit}
        </button>
      </div>
    </form>
  );
}
