"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export function Calendar() {
  const { t } = useLanguage();
  const { calendar } = t;

  return (
    <section
      id="calendario"
      className="w-full bg-brand-surface px-8 py-20 sm:px-12 lg:px-16 xl:px-20"
    >
      <div className="mx-auto max-w-4xl text-center">
        <div
          className="mx-auto mb-8 h-1 w-16 rounded-full"
          style={{ backgroundColor: "#1f55a0" }}
        />

        <h2 className="font-anta text-3xl leading-tight text-[#5f93e6] sm:text-4xl lg:text-5xl">
          {calendar.title}
        </h2>

        <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 bg-white text-center">
          <div className="hidden grid-cols-[1fr_2fr] border-b border-zinc-200 bg-brand-blue/10 px-6 py-4 sm:grid">
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
              {calendar.dateColumn}
            </p>
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
              {calendar.milestoneColumn}
            </p>
          </div>

          <ul>
            {calendar.milestones.map((item, index) => (
              <li
                key={item.date}
                className={`grid grid-cols-1 gap-2 border-b border-zinc-200 px-6 py-5 text-center last:border-b-0 sm:grid-cols-[1fr_2fr] sm:items-center sm:gap-6 ${
                  index % 2 === 0 ? "bg-brand-surface" : "bg-white"
                }`}
              >
                <p
                  className="text-sm font-semibold sm:text-base"
                  style={{ color: "#1f55a0" }}
                >
                  {item.date}
                </p>
                <p className="text-sm leading-relaxed text-zinc-700 sm:text-base">
                  {item.milestone}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
