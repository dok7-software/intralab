"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { assets } from "@/lib/assets";
import { useLanguage } from "@/lib/i18n/language-context";

const INTERVAL_MS = 4000;
const BRAND_BLUE = "#1f55a0";

export function Hero() {
  const { t } = useLanguage();
  const { hero } = t;
  const slides = assets.heroSlides;

  const [current, setCurrent] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden text-white"
      style={{ backgroundColor: "#171219" }}
    >
      <div className="flex flex-col lg:hidden">
        <div className="px-6 pt-8 pb-2">
          <h1
            className="font-anta text-[clamp(1.75rem,8vw,3rem)] leading-none whitespace-nowrap"
            style={{ color: BRAND_BLUE }}
          >
            {hero.title}
          </h1>
          <p className="mt-3 text-sm leading-snug text-white/80">{hero.kicker}</p>
        </div>

        <div className="px-6 pt-4 pb-2">
          <p className="text-base leading-snug text-white">{hero.tagline}</p>
          <p className="mt-4 text-sm font-bold uppercase tracking-wide text-white/90">
            {hero.applicationDeadline}
          </p>
          <p className="mt-2 text-sm font-bold uppercase tracking-wide text-white/90">
            {hero.duration}
          </p>
        </div>

        <div className="relative h-72 w-full">
          {slides.map((src, i) => (
            <Image
              key={`hero-slide-mobile-${i}`}
              src={src}
              alt=""
              fill
              priority={i === 0}
              className={`object-contain object-center transition-opacity duration-700 ease-in-out ${
                i === current ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              sizes="100vw"
              aria-hidden={i !== current}
            />
          ))}
          <div className="absolute bottom-4 right-4 z-10 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`${hero.slideLabel} ${i + 1}`}
                aria-current={i === current ? "true" : undefined}
                onClick={() => goToSlide(i)}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "24px" : "6px",
                  backgroundColor: i === current ? BRAND_BLUE : "rgba(255,255,255,0.4)",
                }}
              />
            ))}
          </div>
        </div>

        <div className="space-y-5 px-6 pt-8 pb-8">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
              {hero.coordinatesLabel}
            </p>
            <Image
              src={assets.logos.network22}
              alt="22@Network Barcelona"
              width={140}
              height={36}
              className="h-8 w-auto object-contain"
            />
          </div>
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
              {hero.fundedByLabel}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Image
                src={assets.logos.eu}
                alt="Cofinançat per la Unió Europea"
                width={130}
                height={36}
                className="h-[2.1rem] w-auto object-contain"
              />
              <Image
                src={assets.logos.generalitat}
                alt="Generalitat de Catalunya"
                width={130}
                height={36}
                className="h-[2.1rem] w-auto object-contain"
              />
            </div>
          </div>
          <p className="text-[9px] leading-relaxed text-white/50">
            {hero.fundingDisclaimer}
          </p>
        </div>
      </div>

      <div className="hidden lg:grid lg:grid-cols-2 lg:min-h-[640px] xl:min-h-[700px]">
        <div className="relative flex flex-col justify-between px-16 py-14 xl:px-20">
          <div>
            <h1
              className="font-anta leading-none whitespace-nowrap text-[clamp(3rem,8vw,6rem)]"
              style={{ color: BRAND_BLUE }}
            >
              {hero.title}
            </h1>
            <p className="mt-3 max-w-sm text-lg leading-snug text-white/80 xl:text-xl">
              {hero.kicker}
            </p>
          </div>

          <div>
            <p className="max-w-md text-xl leading-snug text-white xl:text-2xl">
              {hero.tagline}
            </p>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.15em] text-white/90">
              {hero.applicationDeadline}
            </p>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.15em] text-white/90">
              {hero.duration}
            </p>
          </div>

          <div>
            <div className="mb-5 space-y-6">
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                  {hero.coordinatesLabel}
                </p>
                <Image
                  src={assets.logos.network22}
                  alt="22@Network Barcelona"
                  width={180}
                  height={44}
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                  {hero.fundedByLabel}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Image
                    src={assets.logos.eu}
                    alt="Cofinançat per la Unió Europea"
                    width={200}
                    height={55}
                    className="h-[2.8125rem] w-auto object-contain"
                  />
                  <Image
                    src={assets.logos.generalitat}
                    alt="Generalitat de Catalunya"
                    width={200}
                    height={55}
                    className="h-[2.8125rem] w-auto object-contain"
                  />
                </div>
              </div>
            </div>
            <p className="max-w-md text-[10px] leading-relaxed text-white/50">
              {hero.fundingDisclaimer}
            </p>
          </div>
        </div>

        <div className="relative">
          {slides.map((src, i) => (
            <Image
              key={`hero-slide-desktop-${i}`}
              src={src}
              alt=""
              fill
              priority={i === 0}
              className={`object-contain object-right transition-opacity duration-700 ease-in-out ${
                i === current ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              sizes="50vw"
              aria-hidden={i !== current}
            />
          ))}
          <div className="absolute bottom-4 right-4 z-10 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`${hero.slideLabel} ${i + 1}`}
                aria-current={i === current ? "true" : undefined}
                onClick={() => goToSlide(i)}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "24px" : "6px",
                  backgroundColor: i === current ? BRAND_BLUE : "rgba(255,255,255,0.4)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
