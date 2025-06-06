import Link from "next/link";

import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import BlurFade from "./ui/blur-fade";
import { motion } from "framer-motion";
import { buttonVariants } from "./ui/button";
import { Spotlight } from "./ui/spotlight";

const BLUR_FADE_DELAY = 0.04;

export function Hero() {
  return (
    <section id="about" className="relative overflow-hidden">
      <Spotlight className="md:-top-20 md:left-20 lg:-top-0 lg:left-[50] xl:-top-20 xl:left-60" />

      <div className="mx-auto max-w-screen-lg overflow-x-hidden px-6 sm:px-16">
        <div className="flex h-svh w-full flex-col justify-center">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h1 className="text-center text-xl font-bold text-neutral-200 sm:text-left lg:text-2xl">
              Hi, I&apos;m Priyank Rajai.
            </h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4} className="mb-8 mt-4">
            <motion.h2
              className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent sm:text-left md:text-6xl lg:text-7xl"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.05 },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              {"Crafting Beautiful, User-Centric Experiences for the Modern Web"
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={word + index}
                    variants={{
                      hidden: { opacity: 0, y: "0.25em" },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, ease: "easeOut" },
                      },
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
            </motion.h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <p className="text-center text-base font-medium text-neutral-200 sm:text-left">
              I&apos;m a passionate Full Stack Developer from India,
              specializing in crafting high-performance web applications using
              modern JavaScript frameworks and scalable backend technologies. I
              also build AI-powered workflows and autonomous agents.
            </p>
          </BlurFade>

          <BlurFade
            delay={BLUR_FADE_DELAY * 6}
            className="self-center sm:self-start"
          >
            <Link
              href={`${siteConfig.url}/resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants(), "mt-8 rounded-full")}
            >
              Resume
            </Link>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
