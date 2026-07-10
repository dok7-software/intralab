"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { PixelPattern } from "@/components/ui/PixelPattern";

export function ValueProposition() {
  const { t } = useLanguage();
  const { whatIsIntralab } = t;

  return (
    <section
      id="que-es"
      className="relative w-full overflow-hidden px-8 py-20 text-white sm:px-12 lg:px-16 xl:px-20"
      style={{ backgroundColor: "#171219" }}
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-center">
        <div className="max-w-2xl">
          <h2 className="font-anta text-3xl leading-tight sm:text-4xl lg:text-5xl">
            {whatIsIntralab.title}
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-white/80 sm:text-lg">
            {whatIsIntralab.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <p className="mt-8 text-lg leading-snug text-white/90 sm:text-xl">
            {whatIsIntralab.highlightBefore}
          </p>
          <p className="mt-2 text-lg font-bold leading-snug sm:text-xl">
            {whatIsIntralab.highlightAfter}
          </p>
        </div>

        <div className="hidden justify-end lg:flex">
          <PixelPattern
            variant="corner"
            cellSize={11}
            gap={7}
            className="opacity-90"
          />
        </div>
      </div>
    </section>
  );
}
