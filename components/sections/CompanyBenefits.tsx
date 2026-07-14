"use client";

import Image from "next/image";

import { PixelBullet } from "@/components/ui/PixelBullet";

import { assets } from "@/lib/assets";
import { useLanguage } from "@/lib/i18n/language-context";

export function CompanyBenefits() {
  const { t } = useLanguage();
  const { companyBenefits } = t;
  const image = assets.sections.companyBenefits;

  return (
    <section className="w-full text-white" style={{ backgroundColor: "#171219" }}>
      <div className="grid lg:grid-cols-2">
        <div className="flex min-h-[38rem] flex-col justify-center py-16 pl-10 pr-3 sm:py-20 sm:pl-14 sm:pr-4 lg:py-24 lg:pl-20 lg:pr-6 xl:pl-24 xl:pr-8">
          <div className="max-w-[21rem] sm:max-w-[24rem] lg:max-w-[26rem]">
            <h2 className="text-[clamp(2.125rem,3.6vw,3.25rem)] leading-[1.02] tracking-tight">
              <span className="block">{companyBenefits.titleLine1}</span>
              <span className="block">{companyBenefits.titleLine2}</span>
            </h2>

            <ul className="mt-10 space-y-6 sm:mt-11 sm:space-y-[1.6rem] lg:mt-12 lg:space-y-7">
              {companyBenefits.items.map((item) => (
                <li key={item.title} className="flex items-start gap-3.5">
                  <PixelBullet className="mt-0.5" />
                  <div>
                    <h3 className="text-[1.05rem] font-bold leading-snug sm:text-[1.125rem] lg:text-[1.1875rem]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-white/80 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative h-full min-h-[20rem] aspect-[1652/1959] sm:min-h-[24rem] lg:aspect-auto lg:min-h-[38rem]">
          <Image
            src={image.src}
            alt={companyBenefits.imageAlt}
            width={image.width}
            height={image.height}
            className="h-full w-full object-contain object-center"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
