"use client";

import { SectionImage } from "@/components/ui/SectionImage";
import { assets } from "@/lib/assets";
import { useLanguage } from "@/lib/i18n/language-context";

export function CompanyBenefits() {
  const { t } = useLanguage();
  const { companyBenefits } = t;

  return (
    <section className="w-full text-white" style={{ backgroundColor: "#171219" }}>
      <div className="grid items-start lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 py-16 sm:px-12 lg:px-16 lg:py-24 xl:px-20">
          <div className="max-w-lg">
            <h2 className="font-anta text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {companyBenefits.title}
            </h2>

            <ul className="mt-8 space-y-6">
              {companyBenefits.items.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 h-3 w-3 shrink-0"
                    style={{ backgroundColor: "#1f55a0" }}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-base font-bold leading-snug sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/75 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <SectionImage
          src={assets.sections.companyBenefits.src}
          alt={companyBenefits.imageAlt}
          width={assets.sections.companyBenefits.width}
          height={assets.sections.companyBenefits.height}
          className="ml-auto"
        />
      </div>
    </section>
  );
}
