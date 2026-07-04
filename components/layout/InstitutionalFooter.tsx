import Image from "next/image";

import { assets } from "@/lib/assets";
import { siteConfig } from "@/lib/site-config";

export function InstitutionalFooter() {
  const { institutionalFooter } = siteConfig;

  return (
    <footer
      className="w-full border-t border-white/10 px-8 py-16 sm:px-12 lg:px-16 xl:px-20"
      style={{ backgroundColor: "#171219" }}
    >
      <div className="mx-auto max-w-5xl">
        <p className="text-sm leading-relaxed text-white/70 sm:text-base">
          {institutionalFooter.legalText}
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-10 sm:gap-14 lg:justify-between">
          <Image
            src={assets.logos.generalitat}
            alt="Logotipo oficial del Departament d'Empresa i Treball (PIV Generalitat de Catalunya)"
            width={250}
            height={70}
            className="h-[3.75rem] w-auto object-contain sm:h-[4.375rem]"
          />
          <Image
            src={assets.logos.eu}
            alt='Emblema UE + "Cofinançat per la Unió Europea"'
            width={250}
            height={70}
            className="h-[3.75rem] w-auto object-contain sm:h-[4.375rem]"
          />
          <Image
            src={assets.logos.network22}
            alt="Logotipo de 22@Network Barcelona"
            width={200}
            height={56}
            className="h-12 w-auto object-contain sm:h-14"
          />
        </div>

        <p className="mt-12 text-center text-xs leading-relaxed text-white/60 sm:text-sm">
          {institutionalFooter.fundingText}
        </p>
      </div>
    </footer>
  );
}
