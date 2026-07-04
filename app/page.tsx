import { ApplicationForm } from "@/components/sections/ApplicationForm";
import { Calendar } from "@/components/sections/Calendar";
import { FAQ } from "@/components/sections/FAQ";
import { FormIntro } from "@/components/sections/FormIntro";
import { Hero } from "@/components/sections/Hero";
import { ProgramIncludes } from "@/components/sections/ProgramIncludes";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { InstitutionalFooter } from "@/components/layout/InstitutionalFooter";

export default function Home() {
  return (
    <>
      <main>
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
