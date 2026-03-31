import { SectionShell } from "./section-shell";
import { SectionReveal } from "./ui/section-reveal";

export function About() {
  return (
    <SectionShell className="flex flex-col gap-4 overflow-hidden">
      <SectionReveal>
        <h2 className="mb-2 font-heading text-xl font-bold tracking-tight text-white lg:text-2xl">
          About&nbsp;me
        </h2>
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <p className="text-neutral-400 leading-relaxed">
          I&apos;m a dedicated software engineer driven by curiosity, detail-oriented
          precision, and a passion for innovation. I thrive at the intersection of
          modern web technologies and Generative AI, constantly experimenting with
          new ideas to solve real-world problems by automating processes using
          artificial intelligence. Throughout my career, I&apos;ve developed
          high-quality, performant, accessible, and scalable software solutions.
        </p>
      </SectionReveal>

      <SectionReveal delay={0.15}>
        <p className="text-neutral-400 leading-relaxed">
          While my core expertise lies in frontend development—ensuring
          accessibility, scalability, and performance—I also have substantial
          experience in backend systems, databases like PostgreSQL and MySQL, and
          frameworks such as NestJS. Recently, my work has expanded into creating
          intelligent agents and automating workflows with Generative AI tools
          like GPT models, LangChain, and LlamaIndex. In my free time, I enjoy
          contributing to open-source projects, further exploring the
          possibilities of AI-driven applications.
        </p>
      </SectionReveal>
    </SectionShell>
  );
}
