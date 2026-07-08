import { notFound } from "next/navigation";

import { Header } from "@/components/layout/Header";
import { InstitutionalFooter } from "@/components/layout/InstitutionalFooter";
import { ApplicationForm } from "@/components/sections/ApplicationForm";
import { Calendar } from "@/components/sections/Calendar";
import { FAQ } from "@/components/sections/FAQ";
import { FormIntro } from "@/components/sections/FormIntro";
import { Hero } from "@/components/sections/Hero";
import { ProgramIncludes } from "@/components/sections/ProgramIncludes";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { ValueProposition } from "@/components/sections/ValueProposition";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "ca" }];
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;
  if (locale !== "es" && locale !== "ca") {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-[3.25rem]">
        <Hero />
        <ValueProposition />
        <TargetAudience />
        <ProgramIncludes />
        <Calendar />
        <FormIntro />
        <FAQ />
      </main>
      <InstitutionalFooter />
      <ApplicationForm />
    </>
  );
}
