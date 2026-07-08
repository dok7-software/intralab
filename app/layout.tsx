import type { Metadata } from "next";

import { AppProviders } from "@/components/providers/AppProviders";
import { anta, garet } from "@/lib/fonts";
import { siteConfig } from "@/lib/site-config";
import { translations } from "@/lib/i18n/translations";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: translations.es.meta.description,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${anta.variable} ${garet.variable} scroll-smooth antialiased`}
    >
      <body className={`${garet.className} min-h-screen`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
