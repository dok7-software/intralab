"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { PixelPattern } from "@/components/ui/PixelPattern";

export function Hook() {
  const { t } = useLanguage();
  const { hook } = t;

  return (
    <section
      className="relative w-full overflow-hidden px-8 py-20 text-white sm:px-12 lg:px-16 xl:px-20"
      style={{ backgroundColor: "#171219" }}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-anta text-2xl leading-tight sm:text-3xl lg:text-4xl">
          {hook.title}
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

      <div className="mx-auto mt-16 flex max-w-4xl items-center justify-between gap-6 opacity-70">
        <PixelPattern variant="band" cellSize={8} gap={5} className="hidden sm:block" />
        <PixelPattern variant="band" cellSize={8} gap={5} className="hidden sm:block" />
        <PixelPattern variant="band" cellSize={8} gap={5} className="hidden sm:block" />
      </div>
    </section>
  );
}
