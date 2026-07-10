"use client";

import Image from "next/image";

import { PixelBullet } from "@/components/ui/PixelBullet";

import { assets } from "@/lib/assets";
import { useLanguage } from "@/lib/i18n/language-context";

export function TargetAudience() {
  const { t } = useLanguage();
  const { targetAudience } = t;
  const image = assets.sections.targetAudience;

  return (
    <section
      id="dirigido-a"
      className="w-full text-white"
      style={{ backgroundColor: "#171219" }}
    >
      <div className="grid lg:grid-cols-2">
        <div className="flex min-h-[38rem] flex-col justify-start py-16 pl-10 pr-2 sm:py-20 sm:pl-14 sm:pr-3 lg:py-20 lg:pl-20 lg:pr-4 xl:pl-24">
          <div className="w-[90%]">
            <h2 className="text-[clamp(2.125rem,3.6vw,3.25rem)] leading-[1.08] tracking-tight">
              {targetAudience.title}
            </h2>

            <p className="mt-8 text-[1.05rem] leading-relaxed text-white/85 sm:text-lg">
              {targetAudience.intro}
            </p>

            <p className="mt-8 text-[1.05rem] font-semibold leading-snug text-white sm:text-lg">
              {targetAudience.subheading}
            </p>

            <ul className="mt-5 space-y-4 sm:mt-6 sm:space-y-[1.2rem] lg:space-y-5">
              {targetAudience.items.map((item) => (
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

        <div className="relative min-h-[22rem] sm:min-h-[28rem] lg:min-h-[38rem]">
          <Image
            src={image.src}
            alt={targetAudience.imageAlt}
            fill
            className="object-cover object-center"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
