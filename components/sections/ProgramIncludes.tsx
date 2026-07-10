"use client";

import { useLanguage } from "@/lib/i18n/language-context";

function BlockIcon({ index }: { index: number }) {
  const iconClassName = "h-7 w-7 text-white";

  if (index === 0) {
    // Training: head with a gear, matching the "formación" pictogram.
    return (
      <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
        <path
          d="M9 20v-2a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="13" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M9 8H6.5a2 2 0 0 0 0 4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="13" cy="8" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  if (index === 1) {
    // Mentoring: lightbulb, matching the "mentoría" pictogram.
    return (
      <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
        <path
          d="M12 3a5.5 5.5 0 0 0-3 10.1V15h6v-1.9A5.5 5.5 0 0 0 12 3z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M9.5 17.5h5M10 20h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 1.2v1.2M4.8 5l1 .8M19.2 5l-1 .8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (index === 2) {
    // Real challenge: target with flag/arrow.
    return (
      <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M12 6V3m0 0h2.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="1.2" fill="currentColor" />
      </svg>
    );
  }

  if (index === 3) {
    // Ecosystem 22@: the district's "@" mark.
    return (
      <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M15.5 12a3.5 3.5 0 1 1-3.5-3.5c1.6 0 2.9 1 3.4 2.4.2.6.1 1.9-.6 2.4-.7.5-1.7.2-1.7-.9v-2.3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // Demo Day: presenter with idea board.
  return (
    <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
      <circle cx="8" cy="6.5" r="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4.5 18v-2a3.5 3.5 0 0 1 3.5-3.5h0a3.5 3.5 0 0 1 3.2 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect x="13" y="6" width="8" height="6.5" rx="0.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M15 15.5l-1.5 3M19 15.5l1.5 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M15 9.5l2-1.5 1.5 1 1.5-2" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

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
        <h2 className="font-anta text-center text-3xl leading-tight sm:text-4xl lg:text-5xl">
          {programIncludes.title}
        </h2>

        <ol className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {programIncludes.blocks.map((block, index) => (
            <li key={block.title} className="flex items-start gap-4">
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center"
                style={{ backgroundColor: "#1f55a0" }}
              >
                <BlockIcon index={index} />
              </div>
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
