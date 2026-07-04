import { siteConfig } from "@/lib/site-config";

export function Calendar() {
  const { calendar } = siteConfig;

  return (
    <section
      id="calendario"
      className="w-full px-8 py-20 sm:px-12 lg:px-16 xl:px-20"
      style={{ backgroundColor: "#171219" }}
    >
      <div className="mx-auto max-w-4xl">
        <div
          className="mb-8 h-1 w-16 rounded-full"
          style={{ backgroundColor: "#edf060" }}
        />

        <h2 className="font-anta text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
          {calendar.title}
        </h2>

        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
          <div
            className="hidden grid-cols-[1fr_2fr] border-b border-white/10 px-6 py-4 sm:grid"
            style={{ backgroundColor: "rgba(31, 85, 160, 0.15)" }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              Fecha
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              Hito
            </p>
          </div>

          <ul>
            {calendar.milestones.map((item, index) => (
              <li
                key={item.date}
                className="grid grid-cols-1 gap-2 border-b border-white/10 px-6 py-5 last:border-b-0 sm:grid-cols-[1fr_2fr] sm:items-center sm:gap-6"
                style={{
                  backgroundColor:
                    index % 2 === 0
                      ? "rgba(31, 85, 160, 0.05)"
                      : "transparent",
                }}
              >
                <p
                  className="text-sm font-semibold sm:text-base"
                  style={{ color: "#edf060" }}
                >
                  {item.date}
                </p>
                <p className="text-sm leading-relaxed text-white/80 sm:text-base">
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
