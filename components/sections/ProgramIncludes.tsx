"use client";

import { useLanguage } from "@/lib/i18n/language-context";

function BlockIcon({ index }: { index: number }) {
  const iconClassName = "h-5 w-5 text-[#1f55a0]";

  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
        <path
          d="M4 7h16M4 12h10M4 17h7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="17.5" cy="16.5" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
        <circle cx="11" cy="11" r="6" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M20 20l-4.2-4.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
        <path
          d="M4 18h16M7 18V8h10v10M10 8V5h4v3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
      <path
        d="M5 16l4-4 3 3 7-7M14 8h5v5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProgramIncludes() {
  const { t } = useLanguage();
  const { programIncludes } = t;

  return (
    <section
      id="programa"
      className="w-full bg-white px-8 py-20 sm:px-12 lg:px-16 xl:px-20"
    >
      <div className="mx-auto max-w-6xl text-center">
        <div
          className="mx-auto mb-8 h-1 w-16 rounded-full"
          style={{ backgroundColor: "#1f55a0" }}
        />

        <h2 className="font-anta text-3xl leading-tight text-[#5f93e6] sm:text-4xl lg:text-5xl">
          {programIncludes.title}
        </h2>

        <div className="mt-12">
          <p className="text-lg font-semibold text-[#5f93e6] sm:text-xl">
            <span style={{ color: "#1f55a0" }}>
              {programIncludes.trainingHours}
            </span>{" "}
            {programIncludes.trainingHeadline}
          </p>

          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:gap-6">
            {programIncludes.blocks.map((block, index) => (
              <li
                key={block}
                className="flex flex-col items-center gap-3 rounded-2xl border border-zinc-200 bg-brand-surface p-6 text-center"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10">
                    <BlockIcon index={index} />
                  </div>
                  <span
                    className="shrink-0 font-anta text-2xl leading-none"
                    style={{ color: "#1f55a0" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-zinc-600 sm:text-base">
                  {block}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 space-y-6">
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            <span className="font-semibold" style={{ color: "#1f55a0" }}>
              {programIncludes.mentoringHours}
            </span>{" "}
            {programIncludes.mentoring}
          </p>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            {programIncludes.communityPrefix}{" "}
            <span className="font-semibold text-brand-dark">
              {programIncludes.communityHighlight}
            </span>{" "}
            {programIncludes.communitySuffix}
          </p>
        </div>
      </div>
    </section>
  );
}
