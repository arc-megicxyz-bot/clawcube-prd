"use client";

import { useState } from "react";

interface FAQItemData {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemData) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#1a1a1a] text-gray-400 transition-all duration-300 ${
            isOpen ? "rotate-45 border-[#3b82f6]/30 text-[#3b82f6]" : ""
          }`}
        >
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
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-base leading-relaxed text-gray-400">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQAccordion({ items }: { items: FAQItemData[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111] px-8">
      {items.map((item) => (
        <FAQItem
          key={item.question}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}
