"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { WhatIsIntralabPixelDecor } from "@/components/ui/WhatIsIntralabPixelDecor";

export function ValueProposition() {
  const { t } = useLanguage();
  const { whatIsIntralab } = t;

  return (
    <section
      id="que-es"
      className="relative w-full overflow-hidden py-16 pl-10 pr-8 text-white sm:py-20 sm:pl-14 sm:pr-10 lg:py-24 lg:pl-20 lg:pr-16 xl:pl-24 xl:pr-20"
      style={{ backgroundColor: "#171219" }}
    >
      <div className="pointer-events-none absolute top-0 right-0 bottom-0 hidden overflow-hidden lg:block">
        <WhatIsIntralabPixelDecor className="translate-x-3" />
      </div>

      <div className="relative z-10 max-w-3xl">
        <h2 className="text-[clamp(2.125rem,3.6vw,3.25rem)] leading-[1.08] tracking-tight">
          {whatIsIntralab.title}
        </h2>

        <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-white/85 sm:text-lg">
          {whatIsIntralab.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <p className="mt-8 text-[1.55rem] leading-snug text-white/90 sm:text-[1.625rem]">
          {whatIsIntralab.highlightBefore}
        </p>
        <p className="mt-2 text-[1.55rem] font-bold leading-snug sm:text-[1.625rem]">
          {whatIsIntralab.highlightAfter}
        </p>
      </div>
    </section>
  );
}
