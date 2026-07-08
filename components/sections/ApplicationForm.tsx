"use client";

import { FormEvent, useState } from "react";

import { useLanguage } from "@/lib/i18n/language-context";

const inputClassName =
  "w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors focus:border-[#1f55a0] focus:ring-1 focus:ring-[#1f55a0]";

const labelClassName = "mb-2 block text-center text-sm font-medium text-zinc-700";

function Field({
  id,
  label,
  type = "text",
  as = "input",
  rows,
}: {
  id: string;
  label: string;
  type?: string;
  as?: "input" | "textarea";
  rows?: number;
}) {
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
  const { t } = useLanguage();
  const { applicationForm } = t;
  const { fields } = applicationForm;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      companyName: formData.get("nombre-empresa") as string,
      sector: formData.get("sector") as string,
      address: formData.get("direccion") as string,
      partnerStatus: formData.get("empresa-socia") as string,
      contactName: formData.get("persona-contacto") as string,
      role: formData.get("cargo") as string,
      email: formData.get("mail") as string,
      phone: formData.get("telefono") as string,
    };

    setIsSubmitting(true);
    setStatus("idle");

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Request failed");
        setStatus("success");
        form.reset();
      })
      .catch(() => {
        setStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <section
      id="formulario-admision"
      className="w-full bg-white px-8 py-20 sm:px-12 lg:px-16 xl:px-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div
          className="mx-auto mb-8 h-1 w-16 rounded-full"
          style={{ backgroundColor: "#1f55a0" }}
        />

        <h2 className="font-anta text-2xl leading-tight text-[#5f93e6] sm:text-3xl lg:text-4xl">
          {applicationForm.title}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
          {applicationForm.notice}
        </p>

        <form onSubmit={handleSubmit} className="mt-12 space-y-8 text-left">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <Field id="nombre-empresa" label={fields.companyName} />
            </div>

            <fieldset className="sm:col-span-2">
              <legend className={labelClassName}>{fields.sector}</legend>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {Object.entries(fields.sectors).map(([value, label]) => (
                  <label
                    key={value}
                    className="flex cursor-pointer items-center gap-3 rounded-xl border border-zinc-200 bg-brand-surface px-4 py-3 text-sm text-zinc-700"
                  >
                    <input
                      type="radio"
                      name="sector"
                      value={value}
                      required
                      className="h-4 w-4 accent-[#1f55a0]"
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="sm:col-span-2">
              <Field id="direccion" label={fields.address} />
            </div>

            <fieldset className="sm:col-span-2">
              <legend className={labelClassName}>{fields.partnerStatus}</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-zinc-200 bg-brand-surface px-4 py-3 text-sm text-zinc-700">
                  <input
                    type="radio"
                    name="empresa-socia"
                    value="si"
                    required
                    className="h-4 w-4 accent-[#1f55a0]"
                  />
                  <span>{fields.partnerYes}</span>
                </label>
                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-zinc-200 bg-brand-surface px-4 py-3 text-sm text-zinc-700">
                  <input
                    type="radio"
                    name="empresa-socia"
                    value="no"
                    required
                    className="h-4 w-4 accent-[#1f55a0]"
                  />
                  <span>{fields.partnerNo}</span>
                </label>
              </div>
            </fieldset>

            <div className="sm:col-span-2">
              <Field id="persona-contacto" label={fields.contactName} />
            </div>
            <Field id="cargo" label={fields.role} />
            <Field id="mail" label={fields.email} type="email" />
            <Field id="telefono" label={fields.phone} type="tel" />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wide transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              style={{ backgroundColor: "#1f55a0", color: "#ffffff" }}
            >
              {isSubmitting ? "Enviando..." : applicationForm.cta}
            </button>
          </div>

          {status === "success" && (
            <p className="mt-4 text-center text-sm text-emerald-600">
              Hemos recibido tu inscripción. Nos pondremos en contacto contigo
              en breve.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-center text-sm text-red-600">
              Ha ocurrido un error al enviar el formulario. Por favor, inténtalo
              de nuevo más tarde.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
