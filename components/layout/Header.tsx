"use client";

import { useState } from "react";

import { useLanguage } from "@/lib/i18n/language-context";
import { Locale } from "@/lib/i18n/translations";

const locales: { code: Locale; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "ca", label: "CA" },
];

function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className="flex overflow-hidden rounded-full border border-white/20"
      role="group"
      aria-label={
        locale === "es" ? "Selector de idioma" : "Selector d'idioma"
      }
    >
      {locales.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className="px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors"
          style={{
            backgroundColor: locale === code ? "#1f55a0" : "transparent",
            color: locale === code ? "#ffffff" : "rgba(255,255,255,0.75)",
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const { locale } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const registrationLabel = locale === "es" ? "Inscripción" : "Inscripció";
  const menuLabel = locale === "es" ? "Abrir menú" : "Obrir menú";
  const sectionLinks =
    locale === "es"
      ? [
          { href: "#propuesta", label: "Propuesta" },
          { href: "#programa", label: "Programa" },
          { href: "#calendario", label: "Calendario" },
          { href: "#faq", label: "FAQ" },
        ]
      : [
          { href: "#propuesta", label: "Proposta" },
          { href: "#programa", label: "Programa" },
          { href: "#calendario", label: "Calendari" },
          { href: "#faq", label: "FAQ" },
        ];

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#171219]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <a
          href="#inicio"
          className="font-anta text-lg leading-none sm:text-xl lg:col-start-1"
          style={{ color: "#5f93e6" }}
        >
          IntraLab 22@
        </a>

        <nav className="hidden items-center justify-center gap-6 lg:col-start-2 lg:flex">
          {sectionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-3 lg:col-start-3 lg:flex">
          <LanguageToggle />
          <a
            href="#formulario-admision"
            className="inline-flex items-center justify-center rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#1f55a0" }}
          >
            {registrationLabel}
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuLabel}
        >
          <span className="sr-only">{menuLabel}</span>
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#171219] px-4 py-6 sm:px-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {sectionLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-6 flex flex-col items-center gap-4">
            <LanguageToggle />
            <a
              href="#formulario-admision"
              onClick={closeMenu}
              className="inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#1f55a0" }}
            >
              {registrationLabel}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
