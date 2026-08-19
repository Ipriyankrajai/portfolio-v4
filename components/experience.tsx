import { EXPERIENCES } from "@/config";

export function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 / WORK EXPERIENCE</p>
          <h2>
            The <i>path.</i>
          </h2>
        </div>
        <span className="section-index">2020 — PRESENT</span>
      </div>

      <div className="timeline">
        <div className="timeline-progress" aria-hidden="true" />
        {EXPERIENCES.map((experience, index) => (
          <div className="timeline-item" key={experience.companyName}>
            <span>
              {experience.startDate} — {experience.endDate}
            </span>
            <div>
              <h3>
                {experience.companyLink ? (
                  <a
                    href={experience.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {experience.companyName}
                    <span>↗</span>
                  </a>
                ) : (
                  experience.companyName
                )}
              </h3>
              <p>{experience.designation}</p>

              {experience.subExperiences &&
                experience.subExperiences.length > 0 && (
                  <div className="timeline-subs">
                    {experience.subExperiences.map((sub) => (
                      <div className="timeline-sub" key={sub.companyName}>
                        {sub.subLabel && (
                          <p className="sub-label">{sub.subLabel}</p>
                        )}
                        <h4>
                          {sub.companyLink ? (
                            <a
                              href={sub.companyLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {sub.companyName}
                              <span>↗</span>
                            </a>
                          ) : (
                            sub.companyName
                          )}
                        </h4>
                        <p>
                          {sub.designation}{" "}
                          <span className="sub-dates">
                            · {sub.startDate} — {sub.endDate}
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
                )}
            </div>
            <b>{String(index + 1).padStart(2, "0")}</b>
          </div>
        ))}
      </div>
    </section>
  );
}
