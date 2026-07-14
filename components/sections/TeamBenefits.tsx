"use client";

import Image from "next/image";

import { PixelBullet } from "@/components/ui/PixelBullet";

import { assets } from "@/lib/assets";
import { useLanguage } from "@/lib/i18n/language-context";
import { TeamBenefitsPixelDecor } from "@/components/ui/TeamBenefitsPixelDecor";

export function TeamBenefits() {
  const { t } = useLanguage();
  const { teamBenefits } = t;
  const image = assets.sections.teamBenefits;

  return (
    <section className="w-full text-white" style={{ backgroundColor: "#171219" }}>
      <div className="grid lg:grid-cols-[42fr_58fr]">
        <div className="relative order-2 h-full min-h-[20rem] aspect-square sm:min-h-[24rem] lg:order-1 lg:aspect-auto lg:min-h-[38rem]">
          <Image
            src={image.src}
            alt={teamBenefits.imageAlt}
            width={image.width}
            height={image.height}
            className="h-full w-full object-contain object-center"
            sizes="(min-width: 1024px) 42vw, 100vw"
            priority={false}
          />
        </div>

        <div className="relative order-1 flex min-h-[38rem] flex-col justify-center overflow-hidden py-14 pl-8 pr-0 sm:py-16 sm:pl-10 lg:order-2 lg:py-16 lg:pl-14 xl:pl-16">
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden items-center overflow-hidden lg:flex">
            <TeamBenefitsPixelDecor className="translate-x-3 shrink-0" />
          </div>

          <div className="relative z-10 max-w-[19rem] sm:max-w-[22rem] lg:max-w-[24rem]">
            <h2 className="text-[clamp(2.125rem,3.6vw,3.25rem)] leading-[1.02] tracking-tight">
              <span className="block">{teamBenefits.titleLine1}</span>
              <span className="block">{teamBenefits.titleLine2}</span>
            </h2>

            <ul className="mt-10 space-y-5 sm:mt-11 sm:space-y-[1.35rem] lg:mt-12 lg:space-y-6">
              {teamBenefits.items.map((item) => (
                <li key={item} className="flex items-start gap-3.5">
                  <PixelBullet className="mt-1" />
                  <span className="text-[1.05rem] font-bold leading-snug sm:text-[1.125rem] lg:text-[1.1875rem]">
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
