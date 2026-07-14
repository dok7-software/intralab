"use client";

import Image from "next/image";

import { useLanguage } from "@/lib/i18n/language-context";

const PROGRAM_BLOCK_ICONS = [
  "/imagenes/programa/formacion.png",
  "/imagenes/programa/mentoria.png",
  "/imagenes/programa/reto-real.png",
  "/imagenes/programa/ecosistema-22.png",
  "/imagenes/programa/demo-day.png",
] as const;

const GRID_PLACEMENT = [
  "sm:col-start-1 sm:row-start-1",
  "sm:col-start-1 sm:row-start-2",
  "sm:col-start-1 sm:row-start-3",
  "sm:col-start-2 sm:row-start-1",
  "sm:col-start-2 sm:row-start-2",
] as const;

export function ProgramIncludes() {
  const { t } = useLanguage();
  const { programIncludes } = t;

  return (
    <section
      id="programa"
      className="w-full px-8 py-20 text-white sm:px-12 lg:px-16 xl:px-20"
      style={{ backgroundColor: "#171219" }}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl leading-tight sm:text-4xl lg:text-5xl">
          {programIncludes.title}
        </h2>

        <ol className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 sm:grid-rows-3">
          {programIncludes.blocks.map((block, index) => (
            <li
              key={block.title}
              className={`flex items-start gap-4 ${GRID_PLACEMENT[index]}`}
            >
              <Image
                src={PROGRAM_BLOCK_ICONS[index]}
                alt=""
                width={126}
                height={126}
                unoptimized
                className="h-[84px] w-[84px] shrink-0"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-base font-bold leading-snug sm:text-lg">{block.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/75 sm:text-base">
                  {block.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
