import Link from "next/link";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { FileText, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center text-center">
      <BlurFade delay={0.25} inView>
        <h1 className="text-9xl font-bold tracking-tighter text-foreground">
          404
        </h1>
      </BlurFade>
      <BlurFade delay={0.35} inView>
        <h2 className="mt-4 text-2xl font-medium text-muted-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-muted-foreground">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
      </BlurFade>
      <BlurFade delay={0.45} inView>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/">
            <Button variant="default" size="lg" className="group">
              <Home className="mr-2 size-4 transition-transform duration-200 ease-out group-hover:scale-125 group-active:scale-95" />
              Go Home
            </Button>
          </Link>
          <Link href="/blog">
            <Button variant="ghost" size="lg" className="group">
              <FileText className="mr-2 size-4 transition-transform group-hover:rotate-12" />
              Read Blog
            </Button>
          </Link>
        </div>
      </BlurFade>
    </section>
  );
}
