import { Hero } from "@/components/sections/Hero";
import { ProgramIncludes } from "@/components/sections/ProgramIncludes";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { ValueProposition } from "@/components/sections/ValueProposition";

export default function Home() {
  return (
    <main>
      <Hero />
      <ValueProposition />
      <TargetAudience />
      <ProgramIncludes />
    </main>
  );
}
