"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export function FAQ() {
  const { t } = useLanguage();
  const { faqTitle, faq } = t;

  return (
    <section
      id="faq"
      className="w-full bg-brand-surface px-8 py-20 sm:px-12 lg:px-16 xl:px-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div
          className="mx-auto mb-8 h-1 w-16 rounded-full"
          style={{ backgroundColor: "#1f55a0" }}
        />

        <h2 className="mb-10 text-3xl leading-tight text-[#1f55a0] sm:text-4xl lg:text-5xl">
          {faqTitle}
        </h2>

        <div className="space-y-4">
          {faq.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-zinc-200 bg-white text-left"
            >
              <summary className="relative flex cursor-pointer list-none items-center justify-center px-12 py-5 text-center text-base font-semibold text-brand-dark sm:text-lg [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  className="absolute right-6 shrink-0 text-xl transition-transform group-open:rotate-45"
                  style={{ color: "#1f55a0" }}
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="border-t border-zinc-200 px-6 pb-5 pt-4 text-center text-sm leading-relaxed text-zinc-600 sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
