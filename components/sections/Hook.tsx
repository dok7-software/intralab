"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { PixelPattern } from "@/components/ui/PixelPattern";

export function Hook() {
  const { t } = useLanguage();
  const { hook } = t;

  return (
    <section
      className="relative w-full overflow-hidden py-20 text-white"
      style={{ backgroundColor: "#171219" }}
    >
      <div className="mx-auto max-w-4xl px-8 text-center sm:px-12 lg:px-16 xl:px-20">
        <h2 className="text-2xl leading-tight sm:text-3xl lg:text-4xl">
          <span className="block">{hook.titleLine1}</span>
          <span className="block">{hook.titleLine2}</span>
        </h2>

        <div className="mx-auto mt-10 max-w-2xl space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
          {hook.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {hook.reasons.map((reason) => (
            <p key={reason}>{reason}</p>
          ))}
          <p>{hook.explanation}</p>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-lg font-bold leading-snug sm:text-xl">
          {hook.closingBefore}
        </p>
      </div>

      <div
        className="mt-16 hidden w-full items-center justify-evenly opacity-70 sm:flex"
        aria-hidden="true"
      >
        {Array.from({ length: 5 }, (_, index) => (
          <PixelPattern key={index} variant="band" />
        ))}
      </div>
    </section>
  );
}
