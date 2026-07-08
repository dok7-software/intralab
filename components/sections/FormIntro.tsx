"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export function FormIntro() {
  const { t } = useLanguage();
  const { formIntro } = t;

  return (
    <section
      id="formulario"
      className="w-full bg-white px-8 py-20 sm:px-12 lg:px-16 xl:px-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div
          className="mx-auto mb-8 h-1 w-16 rounded-full"
          style={{ backgroundColor: "#1f55a0" }}
        />

        <p className="text-lg leading-relaxed text-zinc-600 sm:text-xl">
          {formIntro.copyBefore}
          <span className="font-semibold" style={{ color: "#1f55a0" }}>
            IntraLab 22@
          </span>
          {formIntro.copyAfter}
        </p>

        <a
          href="#formulario-admision"
          className="mt-10 inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#1f55a0", color: "#ffffff" }}
        >
          {formIntro.cta}
        </a>
      </div>
    </section>
  );
}
