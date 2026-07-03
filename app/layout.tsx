import type { Metadata } from "next";

import { anta, garet } from "@/lib/fonts";
import { siteConfig } from "@/lib/site-config";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ca"
      className={`${anta.variable} ${garet.variable} scroll-smooth antialiased`}
    >
      <body className={`${garet.className} min-h-screen`}>{children}</body>
    </html>
  );
}
