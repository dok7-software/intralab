"use client";

import Image from "next/image";

import { assets } from "@/lib/assets";
import { useLanguage } from "@/lib/i18n/language-context";

export function InstitutionalFooter() {
  const { t } = useLanguage();
  const { institutionalFooter } = t;

  return (
    <footer
      className="institutional-footer w-full border-t border-white/10 px-8 py-16 sm:px-12 lg:px-16 xl:px-20"
      style={{ backgroundColor: "#171219", color: "#ffffff" }}
    >
      <div className="mx-auto max-w-5xl text-center">
        <p
          className="text-sm leading-relaxed sm:text-base"
          style={{ color: "#ffffff" }}
        >
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

        <p
          className="mt-12 text-center text-xs leading-relaxed sm:text-sm"
          style={{ color: "#ffffff" }}
        >
          {institutionalFooter.fundingText}
        </p>
      </div>
    </footer>
  );
}
