"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export function ValueProposition() {
  const { t } = useLanguage();
  const { valueProposition } = t;

  return (
    <section
      id="propuesta"
      className="w-full bg-white px-8 py-20 sm:px-12 lg:px-16 xl:px-20"
    >
      <div className="mx-auto max-w-4xl text-center">
        <div
          className="mx-auto mb-8 h-1 w-16 rounded-full"
          style={{ backgroundColor: "#1f55a0" }}
        />

        <h2 className="font-anta text-3xl leading-tight text-[#5f93e6] sm:text-4xl lg:text-5xl">
          {valueProposition.title}
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-zinc-600 sm:text-lg lg:text-xl">
          <span className="font-semibold" style={{ color: "#1f55a0" }}>
            IntraLab 22@
          </span>
          {valueProposition.copy}
        </p>

        <a
          href="#formulario-admision"
          className="mt-10 inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#1f55a0", color: "#ffffff" }}
        >
          {valueProposition.cta}
        </a>
      </div>
    </section>
  );
}
