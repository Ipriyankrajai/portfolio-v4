import { SOCIAL_LINKS } from "@/config";

export function About() {
  return (
    <section className="intro-band" id="about">
      <p className="eyebrow">01 / ABOUT ME</p>
      <div className="intro-layout">
        <h2>
          Curious.
          <br />
          <span>Precise.</span>
          <br />
          <i>Driven.</i>
        </h2>
        <div>
          <p className="large-copy">
            I&apos;m a dedicated software engineer driven by curiosity,
            detail-oriented precision, and a passion for innovation.
          </p>
          <p className="muted-copy">
            I thrive at the intersection of modern web technologies and
            Generative AI, constantly experimenting with new ideas to solve
            real-world problems by automating processes using artificial
            intelligence. Throughout my career, I&apos;ve developed
            high-quality, performant, accessible, and scalable software
            solutions.
          </p>
          <p className="muted-copy">
            While my core expertise lies in frontend development—ensuring
            accessibility, scalability, and performance—I also have substantial
            experience in backend systems, databases like PostgreSQL and MySQL,
            and frameworks such as NestJS. Recently, my work has expanded into
            creating intelligent agents and automating workflows with
            Generative AI tools like GPT models, LangChain, and LlamaIndex. In
            my free time, I enjoy contributing to open-source projects, further
            exploring the possibilities of AI-driven applications.
          </p>
          <p className="muted-copy">You can find me on:</p>
          <ul className="link-list" aria-label="Social and contact links">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.name}>
                <a href={link.link} target="_blank" rel="noopener noreferrer">
                  {link.name}
                  <span>↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
