import { SOCIAL_LINKS } from "@/config";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-left">
        <span>CRAFTED BY PRIYANK RAJAI © {new Date().getFullYear()}</span>
        <iframe
          src="https://status.priyankrajai.com/badge?theme=dark"
          title="Site status"
          width="185"
          height="30"
          scrolling="no"
          style={{ colorScheme: "light" }}
        />
      </div>
      <div className="footer-links">
        <a href="#top">BACK TO TOP ↑</a>
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name.toUpperCase()} ↗
          </a>
        ))}
      </div>
    </footer>
  );
}
