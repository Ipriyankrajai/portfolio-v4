import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="hero-grid" aria-hidden="true" />
      <p className="eyebrow reveal">ERROR 404 / PAGE NOT FOUND</p>
      <h1 className="reveal reveal-delay-1">
        4<i>0</i>4
      </h1>
      <p className="contact-copy reveal reveal-delay-2">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <div className="hero-actions reveal reveal-delay-3">
        <Link className="button button-primary" href="/">
          Go home <span>↘</span>
        </Link>
        <Link className="text-button" href="/blog">
          Read blog <span>→</span>
        </Link>
      </div>
    </section>
  );
}
