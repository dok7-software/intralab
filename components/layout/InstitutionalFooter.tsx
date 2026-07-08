"use client";

import Image from "next/image";

import { assets } from "@/lib/assets";
import { useLanguage } from "@/lib/i18n/language-context";

export function InstitutionalFooter() {
  const { t } = useLanguage();
  const { institutionalFooter } = t;

  return (
    <footer className="w-full border-t border-zinc-200 bg-brand-surface px-8 py-16 sm:px-12 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm leading-relaxed text-white sm:text-base">
          {institutionalFooter.legalText}
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-10 sm:gap-14">
          <Image
            src={assets.logos.generalitat}
            alt={institutionalFooter.altGeneralitat}
            width={250}
            height={70}
            className="h-[3.75rem] w-auto object-contain sm:h-[4.375rem]"
          />
          <Image
            src={assets.logos.eu}
            alt={institutionalFooter.altEu}
            width={250}
            height={70}
            className="h-[3.75rem] w-auto object-contain sm:h-[4.375rem]"
          />
          <Image
            src={assets.logos.network22}
            alt={institutionalFooter.altNetwork}
            width={200}
            height={56}
            className="h-12 w-auto object-contain sm:h-14"
          />
        </div>

        <p className="mt-12 text-center text-xs leading-relaxed text-white sm:text-sm">
          {institutionalFooter.fundingText}
        </p>
      </div>
    </footer>
  );
}
