"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-neutral-950 text-white antialiased">
        <div className="flex min-h-svh flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl font-bold tracking-tight">
            Something went wrong
          </h1>
          <p className="mt-4 text-neutral-400">
            An unexpected error occurred.
          </p>
          <button
            onClick={reset}
            className="mt-8 inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium transition-colors duration-200 hover:bg-white/10"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
