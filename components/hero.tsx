import Link from "next/link";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orbit orbit-one" aria-hidden="true" />
      <div className="hero-orbit orbit-two" aria-hidden="true" />

      <a
        className="status-pill"
        href="https://www.enzo.health/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="pulse-dot" /> SR. FULL STACK ENGINEER @ ENZO HEALTH
        <span className="status-arrow">↗</span>
      </a>

      <p className="eyebrow reveal">
        HI, I&apos;M PRIYANK RAJAI <span>FULL-STACK DEVELOPER</span>
      </p>

      <h1 className="hero-title reveal reveal-delay-1">
        Crafting <em>beautiful</em>, <span className="nobreak">user-centric</span>{" "}
        experiences for the <span>modern web</span>.
      </h1>

      <p className="hero-copy reveal reveal-delay-2">
        I&apos;m a passionate Full Stack Developer from India, specializing in
        crafting high-performance web applications using modern JavaScript
        frameworks and scalable backend technologies. I also build AI-powered
        workflows and autonomous agents.
      </p>

      <div className="hero-actions reveal reveal-delay-3">
        <a
          className="button button-primary"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume <span>↗</span>
        </a>
        <Link className="text-button" href="/#contact">
          Let&apos;s talk <span>↓</span>
        </Link>
      </div>

      <div className="hero-meta reveal reveal-delay-3">
        <span>BASED IN INDIA</span>
        <span>FULL-STACK + AI AGENTS</span>
        <span className="scroll-cue">
          SCROLL TO EXPLORE <b>↓</b>
        </span>
      </div>
    </section>
  );
}
