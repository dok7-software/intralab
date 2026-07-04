import { siteConfig } from "@/lib/site-config";

export function ProgramIncludes() {
  const { programIncludes } = siteConfig;

  return (
    <section
      id="programa"
      className="w-full px-8 py-20 sm:px-12 lg:px-16 xl:px-20"
      style={{ backgroundColor: "#171219" }}
    >
      <div className="mx-auto max-w-6xl">
        <div
          className="mb-8 h-1 w-16 rounded-full"
          style={{ backgroundColor: "#1f55a0" }}
        />

        <h2 className="font-anta text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
          {programIncludes.title}
        </h2>

        <div className="mt-12">
          <p className="text-lg font-semibold text-white sm:text-xl">
            <span style={{ color: "#1f55a0" }}>100 horas</span> de formación
            práctica, en cuatro bloques:
          </p>

          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:gap-6">
            {programIncludes.training.blocks.map((block, index) => (
              <li
                key={block}
                className="flex gap-4 rounded-2xl border border-white/10 p-6"
                style={{ backgroundColor: "rgba(31, 85, 160, 0.08)" }}
              >
                <span
                  className="shrink-0 font-anta text-2xl leading-none"
                  style={{ color: "#1f55a0" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-white/75 sm:text-base">
                  {block}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 space-y-6">
          <p className="max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            <span className="font-semibold" style={{ color: "#1f55a0" }}>
              80 horas
            </span>{" "}
            de mentoría personalizada con expertos del ecosistema 22@ que te
            acompañan en cada decisión.
          </p>

          <p className="max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            Al terminar, formas parte de una{" "}
            <span className="font-semibold text-white">comunidad</span> que te
            conecta con empresas, inversores y talento del 22@.
          </p>
        </div>
      </div>
    </section>
  );
}
