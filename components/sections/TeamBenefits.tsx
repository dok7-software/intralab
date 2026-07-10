"use client";

import { SectionImage } from "@/components/ui/SectionImage";
import { assets } from "@/lib/assets";
import { useLanguage } from "@/lib/i18n/language-context";
import { PixelPattern } from "@/components/ui/PixelPattern";

export function TeamBenefits() {
  const { t } = useLanguage();
  const { teamBenefits } = t;

  return (
    <section className="w-full text-white" style={{ backgroundColor: "#171219" }}>
      <div className="grid items-stretch lg:grid-cols-2">
        <SectionImage
          src={assets.sections.teamBenefits.src}
          alt={teamBenefits.imageAlt}
          width={assets.sections.teamBenefits.width}
          height={assets.sections.teamBenefits.height}
          widthClass="w-full"
          className="order-2 lg:order-1"
        />

        <div className="relative order-1 flex min-h-[28rem] flex-col justify-center overflow-hidden px-8 py-16 sm:px-12 lg:order-2 lg:px-16 lg:py-20 xl:px-20">
          <PixelPattern
            variant="corner"
            cellSize={18}
            gap={10}
            className="pointer-events-none absolute right-0 top-6 hidden lg:block"
          />
          <PixelPattern
            variant="edgeBottomRight"
            cellSize={18}
            gap={10}
            className="pointer-events-none absolute bottom-0 right-0 hidden lg:block"
          />

          <div className="relative z-10 max-w-md pr-4 sm:max-w-lg sm:pr-16">
            <h2 className="font-anta text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {teamBenefits.title}
            </h2>

            <ul className="mt-8 space-y-4">
              {teamBenefits.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-2 size-3 shrink-0"
                    style={{ backgroundColor: "#1f55a0" }}
                    aria-hidden="true"
                  />
                  <span className="text-base font-semibold leading-snug sm:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
