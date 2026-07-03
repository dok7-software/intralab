"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { assets } from "@/lib/assets";
import { siteConfig } from "@/lib/site-config";

const INTERVAL_MS = 4000;

export function Hero() {
  const { hero } = siteConfig;
  const slides = assets.heroSlides;

  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      // fade out → swap → fade in
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setVisible(true);
      }, 400);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden text-white"
      style={{ backgroundColor: "#171219" }}
    >
      <div className="grid min-h-[480px] grid-cols-1 lg:grid-cols-2 lg:min-h-[600px] xl:min-h-[680px]">

        {/* ── COLUMNA IZQUIERDA (estática) ── */}
        <div className="relative z-10 flex flex-col justify-between px-8 py-10 sm:px-12 lg:px-16 xl:px-20">

          {/* Fechas */}
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.18em] text-white/80 sm:text-sm">
              {hero.deadline}
            </p>
            <p className="text-sm font-bold uppercase tracking-wide sm:text-base">
              {hero.startDate}
            </p>
          </div>

          {/* Título + subtítulo */}
          <div className="py-6 lg:py-0">
            <h1
              className="font-anta leading-none text-[clamp(3rem,8vw,6rem)]"
              style={{ color: "#1f55a0" }}
            >
              {hero.title}
            </h1>
            <p className="mt-4 max-w-sm text-base leading-snug text-white sm:text-lg lg:text-xl">
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
                    width={160}
                    height={44}
                    className="h-9 w-auto object-contain"
                  />
                  <Image
                    src={assets.logos.generalitat}
                    alt="Generalitat de Catalunya"
                    width={160}
                    height={44}
                    className="h-9 w-auto object-contain"
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

        {/* ── COLUMNA DERECHA: carrusel de imágenes ── */}
        <div className="relative h-72 w-full lg:h-auto">
          {slides.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt=""
              fill
              priority={i === 0}
              className="object-contain object-right transition-opacity duration-400"
              style={{ opacity: i === current && visible ? 1 : 0 }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ))}

          {/* Indicadores */}
          <div className="absolute bottom-4 right-4 z-10 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                onClick={() => {
                  setVisible(false);
                  setTimeout(() => {
                    setCurrent(i);
                    setVisible(true);
                  }, 400);
                }}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "24px" : "6px",
                  backgroundColor: i === current ? "#1f55a0" : "rgba(255,255,255,0.4)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
