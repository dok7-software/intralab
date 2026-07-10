"use client";

import { SectionImage } from "@/components/ui/SectionImage";
import { assets } from "@/lib/assets";
import { useLanguage } from "@/lib/i18n/language-context";

export function TargetAudience() {
  const { t } = useLanguage();
  const { targetAudience } = t;

  return (
    <section
      id="dirigido-a"
      className="w-full text-white"
      style={{ backgroundColor: "#171219" }}
    >
      <div className="grid items-start lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 py-16 sm:px-12 lg:px-16 lg:py-24 xl:px-20">
          <div className="max-w-lg">
            <h2 className="font-anta text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {targetAudience.title}
            </h2>

            <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
              {targetAudience.intro}
            </p>

            <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-white/70">
              {targetAudience.subheading}
            </p>

            <ul className="mt-5 space-y-4">
              {targetAudience.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 h-3 w-3 shrink-0"
                    style={{ backgroundColor: "#1f55a0" }}
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-white/90 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <SectionImage
          src={assets.sections.targetAudience.src}
          alt={targetAudience.imageAlt}
          width={assets.sections.targetAudience.width}
          height={assets.sections.targetAudience.height}
          className="ml-auto"
        />
      </div>
    </section>
  );
}
