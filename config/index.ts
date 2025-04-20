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

export const EXPERIENCES = [
  {
    companyName: "Enzo Health",
    companyImageUrl: "/company/enzo_health_logo.jpeg",
    companyLink: "https://www.enzo.health/",
    designation: "Sr. Full Stack Engineer",
    startDate: "Aug 2024",
    endDate: "Present",
  },
  {
    companyName: "Speed ⚡️",
    companyImageUrl: "/company/speed_logo.jpeg",
    companyLink: "https://www.tryspeed.com/",
    designation: "Software Engineer",
    startDate: "Mar 2024",
    endDate: "Aug 2024",
  },
  {
    companyName: "JobTatkal",
    companyImageUrl: "/company/jobtatkal_logo.jpeg",
    companyLink: "https://www.jobtatkal.com/",
    designation: "Software Engineer",
    startDate: "Mar 2023",
    endDate: "Aug 2024",
  },
  {
    companyName: "OpenXcell",
    companyImageUrl: "/company/openxcell_logo.jpeg",
    companyLink: "https://www.openxcell.com/",
    designation: "Software Engineer",
    startDate: "Dec 2021",
    endDate: "Aug 2024",
  },
  {
    companyName: "Mobifly",
    companyImageUrl: "/company/mobifly_logo.jpeg",
    companyLink: "https://www.mobifly.com/",
    designation: "Software Engineer",
    startDate: "Aug 2020",
    endDate: "Aug 2021",
  },
];