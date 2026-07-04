"use client";

import { FormEvent } from "react";

import { siteConfig } from "@/lib/site-config";

const inputClassName =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-[#1f55a0] focus:ring-1 focus:ring-[#1f55a0]";

const labelClassName = "mb-2 block text-sm font-medium text-white/80";

const fieldIds: Record<string, string> = {
  "Nombre y apellidos": "nombre-apellidos",
  "NIF-NIE": "nif-nie",
  Género: "genero",
  Edad: "edad",
  Población: "poblacion",
  Comarca: "comarca",
  "Nivel de formación": "nivel-formacion",
  "Situación laboral": "situacion-laboral",
  Email: "email",
  Teléfono: "telefono",
  Empresa: "empresa",
  Cargo: "cargo",
  "Descripción del reto a resolver": "descripcion-reto",
  "Política de privacidad (RGPD)": "privacidad-rgpd",
  "Consentimiento tratamiento de datos FSE+": "consentimiento-fse",
};

function Field({
  label,
  type = "text",
  as = "input",
  rows,
}: {
  label: string;
  type?: string;
  as?: "input" | "textarea";
  rows?: number;
}) {
  const id = fieldIds[label] ?? label;

  return (
    <div>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={id}
          required
          rows={rows ?? 5}
          className={`${inputClassName} resize-y`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required
          className={inputClassName}
        />
      )}
    </div>
  );
}

export function ApplicationForm() {
  const { applicationForm } = siteConfig;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section
      id="formulario-admision"
      className="w-full px-8 py-20 sm:px-12 lg:px-16 xl:px-20"
      style={{ backgroundColor: "#171219" }}
    >
      <div className="mx-auto max-w-3xl">
        <div
          className="mb-8 h-1 w-16 rounded-full"
          style={{ backgroundColor: "#1f55a0" }}
        />

        <h2 className="font-anta text-2xl leading-tight text-white sm:text-3xl lg:text-4xl">
          {applicationForm.title}
        </h2>

        <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
          {applicationForm.notice}
        </p>

        <form onSubmit={handleSubmit} className="mt-12 space-y-12">
          <fieldset className="space-y-6">
            <legend
              className="mb-6 text-lg font-semibold"
              style={{ color: "#1f55a0" }}
            >
              {applicationForm.sections.fse}:
            </legend>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Field label="Nombre y apellidos" />
              </div>
              <Field label="NIF-NIE" />
              <Field label="Género" />
              <Field label="Edad" type="number" />
              <Field label="Población" />
              <Field label="Comarca" />
              <Field label="Nivel de formación" />
              <Field label="Situación laboral" />
            </div>
          </fieldset>

          <fieldset className="space-y-6">
            <legend
              className="mb-6 text-lg font-semibold"
              style={{ color: "#1f55a0" }}
            >
              {applicationForm.sections.corporate}:
            </legend>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Email" type="email" />
              <Field label="Teléfono" type="tel" />
              <Field label="Empresa" />
              <Field label="Cargo" />
              <div className="sm:col-span-2">
                <Field
                  label="Descripción del reto a resolver"
                  as="textarea"
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="space-y-4">
            <legend
              className="mb-6 text-lg font-semibold"
              style={{ color: "#1f55a0" }}
            >
              {applicationForm.sections.clauses}:
            </legend>

            {applicationForm.fields.clauses.map((clause) => {
              const id = fieldIds[clause] ?? clause;

              return (
                <label
                  key={clause}
                  htmlFor={id}
                  className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4"
                  style={{ backgroundColor: "rgba(31, 85, 160, 0.08)" }}
                >
                  <input
                    id={id}
                    name={id}
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 shrink-0 accent-[#1f55a0]"
                  />
                  <span className="text-sm text-white/80 sm:text-base">
                    {clause}
                  </span>
                </label>
              );
            })}
          </fieldset>

          <button
            type="submit"
            className="w-full rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wide transition-opacity hover:opacity-90 sm:w-auto"
            style={{ backgroundColor: "#1f55a0", color: "#ffffff" }}
          >
            {applicationForm.cta}
          </button>
        </form>
      </div>
    </section>
  );
}
