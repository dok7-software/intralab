"use client";

import Image from "next/image";

import { PixelBullet } from "@/components/ui/PixelBullet";

import { assets } from "@/lib/assets";
import { useLanguage } from "@/lib/i18n/language-context";

export function Calendar() {
  const { t } = useLanguage();
  const { calendar } = t;

  return (
    <section
      id="calendario"
      className="w-full text-white"
      style={{ backgroundColor: "#171219" }}
    >
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-10 px-8 py-16 sm:px-12 lg:px-16 lg:py-24 xl:px-20">
          <div>
            <h2 className="text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {calendar.title}
            </h2>

            <ul className="mt-8 space-y-5">
              {calendar.milestones.map((item) => (
                <li key={item.date} className="flex items-start gap-3">
                  <PixelBullet className="mt-1" />
                  <div>
                    <p className="text-base font-bold leading-snug sm:text-lg">
                      {item.date}
                    </p>
                    <p className="text-sm leading-relaxed text-white/75 sm:text-base">
                      {item.milestone}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-lg">
            <p className="text-[calc(1.25rem+4pt)] leading-tight sm:text-[calc(1.5rem+4pt)]">
              {calendar.quote}
            </p>
            <p className="mt-4 text-[calc(0.875rem+4pt)] leading-relaxed text-white/75 sm:text-[calc(1rem+4pt)]">
              {calendar.quoteBody}
            </p>
          </div>
        </div>

        <div className="relative min-h-[320px] lg:min-h-full">
          <Image
            src={assets.heroSlides[1]}
            alt=""
            fill
            className="object-contain object-center lg:object-right"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
