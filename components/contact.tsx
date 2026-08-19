"use client";

import { useState } from "react";

import { SOCIAL_LINKS } from "@/config";

const EMAIL = "priyankcodez@gmail.com";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard?.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="contact-section" id="contact">
      <p className="eyebrow">05 / CONTACT</p>
      <h2>
        Have a<br />
        <i>question?</i>
      </h2>
      <p className="contact-copy">
        Wanna know more about my work? Got any questions? Or just want to say
        hi? Go ahead.
      </p>
      <button
        className="email-button"
        onClick={copyEmail}
        aria-label="Copy my email address"
      >
        {copied ? "EMAIL COPIED" : EMAIL} <span>{copied ? "✓" : "⧉"}</span>
      </button>
      <ul className="link-list" aria-label="Social and contact links">
        {SOCIAL_LINKS.map((link) => (
          <li key={link.name}>
            <a href={link.link} target="_blank" rel="noopener noreferrer">
              {link.name}
              <span>↗</span>
            </a>
          </li>
        ))}
        <li>
          <a href={`mailto:${EMAIL}`} aria-label="Contact me via email">
            Mail
            <span>→</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
