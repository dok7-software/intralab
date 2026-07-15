"use client";

import Image from "next/image";

import { assets } from "@/lib/assets";
import { useLanguage } from "@/lib/i18n/language-context";
import { PixelPattern } from "@/components/ui/PixelPattern";

export function FormIntro() {
  const { t } = useLanguage();
  const { ctaFinal, header } = t;

  return (
    <section
      id="formulario"
      className="relative w-full overflow-hidden px-8 py-20 text-center text-white sm:px-12 lg:px-16 xl:px-20"
      style={{ backgroundColor: "#171219" }}
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl leading-tight sm:text-4xl lg:text-5xl">
          {ctaFinal.title}
        </h2>

        <p className="mt-6 text-[calc(2rem-4pt)] leading-snug whitespace-nowrap text-white/80 sm:text-[calc(2.25rem-4pt)]">
          {ctaFinal.subtitle}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#formulario-admision"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#1f55a0" }}
          >
            {ctaFinal.primaryCta}
          </a>
          <a
            href={ctaFinal.secondaryHref}
            className="inline-flex items-center justify-center border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/60"
          >
            {ctaFinal.secondaryCta}
          </a>
        </div>

        <div className="mt-14 flex flex-wrap items-start justify-center gap-x-12 gap-y-6">
          <div className="text-left">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">
              {header.programOf}
            </p>
            <Image
              src={assets.logos.network22}
              alt="22@Network Barcelona"
              width={160}
              height={40}
              className="h-8 w-auto object-contain object-left"
            />
          </div>
          <div className="text-left">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">
              {header.fundedBy}
            </p>
            <div className="flex flex-wrap items-center justify-start gap-4">
              <Image
                src={assets.logos.eu}
                alt="Cofinançat per la Unió Europea"
                width={160}
                height={44}
                className="h-8 w-auto object-contain"
              />
              <Image
                src={assets.logos.generalitat}
                alt="Generalitat de Catalunya"
                width={160}
                height={44}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="mt-3 max-w-md text-[10px] italic leading-snug text-white sm:text-[11px]">
              <span className="block">{ctaFinal.fundingDisclaimerLine1}</span>
              <span className="block">{ctaFinal.fundingDisclaimerLine2}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-4xl items-center justify-between opacity-60">
        <PixelPattern variant="band" className="hidden sm:block" />
        <PixelPattern variant="band" className="hidden sm:block" />
        <PixelPattern variant="band" className="hidden sm:block" />
      </div>
    </section>
  );
}
