"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { assets } from "@/lib/assets";
import { siteConfig } from "@/lib/site-config";

const INTERVAL_MS = 4000;

export function Hero() {
  const { hero } = siteConfig;
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
      {/* ── MOBILE: stack vertical ── */}
      <div className="flex flex-col lg:hidden">
        {/* 1. Logos */}
        <div className="px-6 pt-8 pb-4">
          <div className="grid grid-cols-2 items-start gap-4">
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                Programa de:
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
                Finançat per:
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
          </div>
          <p className="mt-3 text-[9px] leading-relaxed text-white/50">
            {hero.fundingDisclaimer}
          </p>
        </div>

        {/* 2. Título + subtítulo */}
        <div className="px-6 pt-4 pb-2">
          <h1
            className="font-anta text-5xl leading-none"
            style={{ color: "#1f55a0" }}
          >
            {hero.title}
          </h1>
          <p className="mt-3 text-base leading-snug text-white">
            {hero.subtitle}
          </p>
        </div>

        {/* 3. Fechas */}
        <div className="px-6 pt-4 pb-2 space-y-1">
          <p className="text-xs uppercase tracking-[0.18em] text-white/80">
            {hero.deadline}
          </p>
          <p className="text-sm font-bold uppercase tracking-wide">
            {hero.startDate}
          </p>
        </div>

        {/* 4. Imagen carrusel */}
        <div className="relative h-80 w-full">
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
                aria-label={`Slide ${i + 1}`}
                aria-current={i === current ? "true" : undefined}
                onClick={() => goToSlide(i)}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "24px" : "6px",
                  backgroundColor:
                    i === current ? "#1f55a0" : "rgba(255,255,255,0.4)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP: dos columnas ── */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:min-h-[600px] xl:min-h-[680px]">
        {/* Columna izquierda */}
        <div className="flex flex-col justify-between px-16 py-16 xl:px-20">
          {/* Fechas */}
          <div className="space-y-1">
            <p className="text-sm uppercase tracking-[0.18em] text-white/80">
              {hero.deadline}
            </p>
            <p className="text-base font-bold uppercase tracking-wide">
              {hero.startDate}
            </p>
          </div>

          {/* Título + subtítulo */}
          <div>
            <h1
              className="font-anta leading-none text-[clamp(3rem,8vw,6rem)]"
              style={{ color: "#1f55a0" }}
            >
              {hero.title}
            </h1>
            <p className="mt-4 max-w-sm text-lg leading-snug text-white xl:text-xl">
              {hero.subtitle}
            </p>
          </div>

          {/* Logos */}
          <div>
            <div className="mb-5 flex flex-wrap gap-12">
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                  Finançat per:
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
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                  Programa de:
                </p>
                <Image
                  src={assets.logos.network22}
                  alt="22@Network Barcelona"
                  width={180}
                  height={44}
                  className="h-9 w-auto object-contain"
                />
              </div>
            </div>
            <p className="max-w-md text-[10px] leading-relaxed text-white/50">
              {hero.fundingDisclaimer}
            </p>
          </div>
        </div>

        {/* Columna derecha: carrusel */}
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
                aria-label={`Slide ${i + 1}`}
                aria-current={i === current ? "true" : undefined}
                onClick={() => goToSlide(i)}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "24px" : "6px",
                  backgroundColor:
                    i === current ? "#1f55a0" : "rgba(255,255,255,0.4)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
