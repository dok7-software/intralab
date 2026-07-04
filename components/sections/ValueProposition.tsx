import { siteConfig } from "@/lib/site-config";

export function ValueProposition() {
  const { valueProposition } = siteConfig;

  return (
    <section
      id="propuesta"
      className="w-full px-8 py-20 sm:px-12 lg:px-16 xl:px-20"
      style={{ backgroundColor: "#171219" }}
    >
      <div className="mx-auto max-w-4xl">
        <div
          className="mb-8 h-1 w-16 rounded-full"
          style={{ backgroundColor: "#1f55a0" }}
        />

        <h2 className="font-anta text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
          {valueProposition.title}
        </h2>

        <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg lg:text-xl">
          <span className="font-semibold" style={{ color: "#1f55a0" }}>
            IntraLab 22@
          </span>
          {valueProposition.copy.slice("IntraLab 22@".length)}
        </p>

        <a
          href="#formulario"
          className="mt-10 inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#1f55a0", color: "#ffffff" }}
        >
          {valueProposition.cta}
        </a>
      </div>
    </section>
  );
}
