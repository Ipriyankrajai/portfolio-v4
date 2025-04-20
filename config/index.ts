import { GitHubIcon } from "@/components/icons/github-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { XLogoIcon } from "@/components/icons/x-logo-icon";


export const siteConfig = {
  title: "Priyank Rajai | Full-Stack Developer | Open Source Steward",
  description:
    "I'm a passionate Full Stack Developer from India with expertise in building web applications using React.js, Next.js, Node.js, PostgreSQL, MongoDB, Langchain, OpenAI, LLMs, and Web3.js.",
  url:
    process.env.NODE_ENV === "production"
      ? "https://priyankrajai.com"
      : "http://localhost:3000",
};

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    link: "https://github.com/Ipriyankrajai",
    icon: GitHubIcon,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/priyank-rajai/",
    icon: LinkedinIcon,
  },
  { name: "X", link: "https://x.com/Ipriyankrajai", icon: XLogoIcon },
];
