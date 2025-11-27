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

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "building-a-modern-portfolio",
    title: "Building a Modern Portfolio with Next.js and Tailwind CSS",
    description:
      "How I built my portfolio using the latest web technologies and best practices for performance and accessibility.",
    date: "Nov 27, 2025",
    tags: ["Next.js", "Tailwind CSS", "Web Development"],
    content: `
      <p>Building a portfolio is an essential step for any developer. It's not just about showcasing your work; it's about demonstrating your skills and personality.</p>
      
      <h2>Choosing the Stack</h2>
      <p>For this version of my portfolio, I chose Next.js for its powerful features like server-side rendering and static site generation. Tailwind CSS was a natural choice for styling, allowing for rapid development and consistent design.</p>

      <h2>Design Philosophy</h2>
      <p>I wanted a clean, minimalist design that puts the focus on the content. I used a dark theme to reduce eye strain and give the site a modern feel. Animations were added using Framer Motion to make the user experience more engaging.</p>

      <h2>Performance Optimization</h2>
      <p>Performance was a top priority. I optimized images using the Next.js Image component and used code splitting to ensure fast load times. Accessibility was also a key consideration, ensuring that the site is usable by everyone.</p>

      <h2>Conclusion</h2>
      <p>Building this portfolio was a rewarding experience. It allowed me to experiment with new technologies and refine my skills. I hope this post inspires you to build your own portfolio!</p>
    `,
  },
  {
    slug: "mastering-react-hooks",
    title: "Mastering React Hooks: A Comprehensive Guide",
    description:
      "Deep dive into React Hooks, from basics like useState to advanced custom hooks for complex state management.",
    date: "Oct 15, 2025",
    tags: ["React", "Hooks", "JavaScript"],
    content: `
      <p>React Hooks have revolutionized how we write React components. They allow us to use state and other React features without writing a class.</p>

      <h2>useState</h2>
      <p>The <code>useState</code> hook is the most basic hook. It allows you to add state to your functional components.</p>

      <h2>useEffect</h2>
      <p>The <code>useEffect</code> hook lets you perform side effects in functional components. It serves the same purpose as <code>componentDidMount</code>, <code>componentDidUpdate</code>, and <code>componentWillUnmount</code> in React classes.</p>

      <h2>Custom Hooks</h2>
      <p>One of the most powerful features of hooks is the ability to create your own. Custom hooks allow you to extract component logic into reusable functions.</p>

      <h2>Conclusion</h2>
      <p>Mastering hooks is essential for any modern React developer. They provide a cleaner and more concise way to write components and manage state.</p>
    `,
  },
  {
    slug: "understanding-typescript-generics",
    title: "Understanding TypeScript Generics",
    description:
      "A practical guide to using Generics in TypeScript to write reusable and type-safe code.",
    date: "Sep 01, 2025",
    tags: ["TypeScript", "Generics", "Programming"],
    content: `
      <p>Generics are one of the most powerful features of TypeScript. They allow you to create reusable components that work with a variety of types rather than a single one.</p>

      <h2>What are Generics?</h2>
      <p>Generics allow you to define a component that can work over a variety of types rather than a single one. This allows users to consume these components and use their own types.</p>

      <h2>Why use Generics?</h2>
      <p>Generics provide a way to create reusable code components. They also provide type safety without compromising on flexibility.</p>

      <h2>Example</h2>
      <p>Here is a simple example of a generic function:</p>
      <pre><code>function identity&lt;T&gt;(arg: T): T {
  return arg;
}</code></pre>

      <h2>Conclusion</h2>
      <p>Generics are a fundamental part of TypeScript. Understanding them will allow you to write more flexible and robust code.</p>
    `,
  },
];
