"use client";

import { useEffect, useState } from "react";

import { PROJECTS } from "@/config";

type Project = (typeof PROJECTS)[number];

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section className="work-section" id="projects">
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / PROJECTS</p>
          <h2>
            Things I&apos;ve <i>shipped.</i>
          </h2>
        </div>
        <span className="section-index">
          {String(PROJECTS.length).padStart(2, "0")} /{" "}
          {String(PROJECTS.length).padStart(2, "0")}
        </span>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <article
            className={`project-card project-${project.color}`}
            key={project.id}
            onClick={() => setSelected(project)}
            tabIndex={0}
            onKeyDown={(event) => event.key === "Enter" && setSelected(project)}
            aria-label={`Open case study for ${project.name}`}
          >
            <div className="project-visual">
              <span className="project-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="visual-ui">
                <div className="visual-bar" />
                <div className="visual-lines">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="visual-orb" />
              </div>
              <span className="open-icon">↗</span>
            </div>
            <div className="project-info">
              <div>
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
              </div>
              <span className="project-arrow">↗</span>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-footer">
              <span className="project-links">
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                >
                  CODE ↗
                </a>
                <a
                  href={project.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                >
                  LIVE ↗
                </a>
              </span>
              <span className="project-stack">
                {project.tags.slice(0, 3).join(" · ")}
                {project.tags.length > 3 && ` +${project.tags.length - 3}`}
              </span>
            </div>
          </article>
        ))}
      </div>

      {selected && (
        <div
          className="case-backdrop"
          role="presentation"
          onClick={() => setSelected(null)}
        >
          <article
            className="case-study"
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.name} case study`}
            onClick={(event) => event.stopPropagation()}
          >
            <button className="close-case" onClick={() => setSelected(null)}>
              CLOSE ×
            </button>
            <p className="eyebrow">CASE STUDY / {selected.type}</p>
            <h2>{selected.name}</h2>
            <p className="case-lead">{selected.description}</p>
            <div className="case-stats">
              <div>
                <span>STARS</span>
                <b>★ {selected.stargazers_count}</b>
              </div>
              <div>
                <span>FORKS</span>
                <b>⑂ {selected.forks_count}</b>
              </div>
              <div>
                <span>STACK</span>
                <b>{selected.tags.length} TOOLS</b>
              </div>
            </div>
            <p className="case-stack">{selected.tags.join(" · ")}</p>
            <div className={`case-art case-${selected.color}`}>
              <span>PROJECT SYSTEM / LIVE</span>
              <div className="case-bars">
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="case-actions">
              <a
                className="button button-primary"
                href={selected.demo_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open live <span>↗</span>
              </a>
              <a
                className="text-button"
                href={selected.github_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View source <span>↗</span>
              </a>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
