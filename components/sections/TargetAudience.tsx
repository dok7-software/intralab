"use client";

import { useLanguage } from "@/lib/i18n/language-context";

function AudienceIcon({ index }: { index: number }) {
  const iconClassName = "h-6 w-6 text-[#1f55a0]";

  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
        <path
          d="M12 3l8 4v5c0 5.2-3.4 8.7-8 10-4.6-1.3-8-4.8-8-10V7l8-4z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.3 12.2l1.8 1.8 3.8-3.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
        <path
          d="M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M5 20a7 7 0 0 1 14 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M18.5 6.5l1.5 1.5 2.5-2.5"
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
        d="M4 15.5h16M6 15.5V19h12v-3.5M7.5 15.5V9.5a4.5 4.5 0 0 1 9 0v6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function TargetAudience() {
  const { t } = useLanguage();
  const { targetAudience } = t;

  return (
    <section
      id="dirigido-a"
      className="w-full bg-brand-surface px-8 py-20 sm:px-12 lg:px-16 xl:px-20"
    >
      <div className="mx-auto max-w-6xl text-center">
        <div
          className="mx-auto mb-8 h-1 w-16 rounded-full"
          style={{ backgroundColor: "#1f55a0" }}
        />

        <h2 className="font-anta text-3xl leading-tight text-[#5f93e6] sm:text-4xl lg:text-5xl">
          {targetAudience.title}
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {targetAudience.audiences.map((audience, index) => (
            <article
              key={audience.label}
              className="rounded-2xl border border-zinc-200 bg-white p-8 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10">
                <AudienceIcon index={index} />
              </div>
              <h3
                className="text-lg font-semibold leading-snug sm:text-xl"
                style={{ color: "#1f55a0" }}
              >
                {audience.label}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
                {audience.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
