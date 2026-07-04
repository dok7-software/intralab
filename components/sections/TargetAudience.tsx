import { siteConfig } from "@/lib/site-config";

export function TargetAudience() {
  const { targetAudience } = siteConfig;

  return (
    <section
      id="dirigido-a"
      className="w-full px-8 py-20 sm:px-12 lg:px-16 xl:px-20"
      style={{ backgroundColor: "#171219" }}
    >
      <div className="mx-auto max-w-6xl">
        <div
          className="mb-8 h-1 w-16 rounded-full"
          style={{ backgroundColor: "#1f55a0" }}
        />

        <h2 className="font-anta text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
          {targetAudience.title}
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {targetAudience.audiences.map((audience) => (
            <article
              key={audience.label}
              className="rounded-2xl border border-white/10 p-8"
              style={{ backgroundColor: "rgba(31, 85, 160, 0.08)" }}
            >
              <h3
                className="text-lg font-semibold leading-snug sm:text-xl"
                style={{ color: "#1f55a0" }}
              >
                {audience.label}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
                {audience.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
