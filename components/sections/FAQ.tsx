import { siteConfig } from "@/lib/site-config";

export function FAQ() {
  const { faq } = siteConfig;

  return (
    <section
      id="faq"
      className="w-full px-8 py-20 sm:px-12 lg:px-16 xl:px-20"
      style={{ backgroundColor: "#171219" }}
    >
      <div className="mx-auto max-w-3xl">
        <div
          className="mb-8 h-1 w-16 rounded-full"
          style={{ backgroundColor: "#edf060" }}
        />

        <div className="space-y-4">
          {faq.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-white/10"
              style={{ backgroundColor: "rgba(31, 85, 160, 0.08)" }}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-base font-semibold text-white sm:text-lg [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  className="shrink-0 text-xl transition-transform group-open:rotate-45"
                  style={{ color: "#edf060" }}
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="border-t border-white/10 px-6 pb-5 pt-4 text-sm leading-relaxed text-white/75 sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
