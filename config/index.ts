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

// Updated interface to support nested experiences
export interface Experience {
  companyName: string;
  companyImageUrl: string;
  companyLink?: string;
  designation: string;
  startDate: string;
  endDate: string;
  subExperiences?: Experience[];
  subLabel?: string;
}

// Updated EXPERIENCES data structure
export const EXPERIENCES: Experience[] = [
  {
    companyName: "Enzo Health",
    companyImageUrl: "/company/enzo_health_logo.jpeg",
    companyLink: "https://www.enzo.health/",
    designation: "Sr. Full Stack Engineer",
    startDate: "Aug 2024",
    endDate: "Present",
  },
  {
    companyName: "OpenXcell",
    companyImageUrl: "/company/openxcell_logo.jpeg",
    companyLink: "https://www.openxcell.com/",
    designation: "Software Engineer",
    startDate: "Dec 2021",
    endDate: "Aug 2024",
    subExperiences: [
      {
        companyName: "Speed ⚡️",
        companyImageUrl: "/company/speed_logo.jpeg",
        companyLink: "https://www.tryspeed.com/",
        designation: "Software Engineer",
        startDate: "Mar 2024",
        endDate: "Aug 2024",
        subLabel: "Product of OpenXcell",
      },
      {
        companyName: "JobTatkal",
        companyImageUrl: "/company/jobtatkal_logo.jpeg",
        companyLink: "https://www.jobtatkal.com/",
        designation: "Software Engineer",
        startDate: "Mar 2023",
        endDate: "Aug 2024",
        subLabel: "Product of OpenXcell",
      },
    ],
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

export const PROJECTS = [
  {
    id: 1,
    name: "Magic Table",
    description:
      "A data table application built with Tanstack Table and nuqs, featuring filtering functionalities for efficient data management and state handling.",
    github_url: "https://github.com/Ipriyankrajai/magic-table",
    stargazers_count: 1,
    forks_count: 0,
    tags: [
      "Next.js",
      "TailwindCSS",
      "Tanstack Table",
      "shadcn/ui",
      "nuqs",
      "cmdk",
    ],
    demo_url: "https://magic-table.priyankrajai.com",
  },
  {
    id: 2,
    name: "Portfolio Website",
    description:
      "A modern, responsive personal portfolio showcasing my projects and skills, built with Next.js, TailwindCSS, and shadcn/ui. Features smooth animations powered by Framer Motion, optimized performance, and a clean, minimalist design for an exceptional user experience.",
    github_url: "https://github.com/Ipriyankrajai/portfolio-v4",
    stargazers_count: 0,
    forks_count: 0,
    tags: ["Next.js", "TailwindCSS", "shadcn/ui", "framer-motion"],
    demo_url: "https://priyankrajai.com",
  },
];
