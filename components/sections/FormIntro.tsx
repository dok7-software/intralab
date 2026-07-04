import { siteConfig } from "@/lib/site-config";

export function FormIntro() {
  const { formIntro } = siteConfig;

  return (
    <section
      id="formulario"
      className="w-full px-8 py-20 sm:px-12 lg:px-16 xl:px-20"
      style={{ backgroundColor: "#171219" }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <div
          className="mx-auto mb-8 h-1 w-16 rounded-full"
          style={{ backgroundColor: "#edf060" }}
        />

        <p className="text-lg leading-relaxed text-white/80 sm:text-xl">
          {formIntro.copy.slice(0, formIntro.copy.indexOf("IntraLab 22@"))}
          <span className="font-semibold" style={{ color: "#1f55a0" }}>
            IntraLab 22@
          </span>
          {formIntro.copy.slice(
            formIntro.copy.indexOf("IntraLab 22@") + "IntraLab 22@".length,
          )}
        </p>

        <a
          href="#formulario-admision"
          className="mt-10 inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#edf060", color: "#171219" }}
        >
          {formIntro.cta}
        </a>
      </div>
    </section>
  );
}
