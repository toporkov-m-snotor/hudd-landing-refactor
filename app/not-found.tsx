import "./globals.css";
import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-brand-bg text-brand-text font-sans antialiased">
        <main className="relative flex min-h-dvh items-center justify-center [overflow:clip]">
          <div className="dot-grid absolute inset-0 opacity-40" />
          <div className="absolute inset-0 bg-linear-to-b from-brand-bg via-brand-bg/80 to-brand-bg" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent/5 blur-3xl" />

          <div className="pointer-events-none absolute inset-0 select-none [overflow:clip]">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[28vw] font-bold leading-none text-white/[0.025]">
              404
            </span>
          </div>

          <div className="relative z-10 mx-auto max-w-lg px-4 py-20 text-center sm:px-6">
            <div className="glass-border mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-surface">
              <svg
                className="h-9 w-9 text-brand-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
            </div>

            <span className="mb-6 inline-block rounded-full border border-brand-accent/20 bg-brand-accent-dim px-3 py-1 text-xs font-medium text-brand-accent">
              404
            </span>

            <h1 className="gradient-text mb-4 text-4xl font-bold sm:text-5xl">
              Page not found
            </h1>
            <p className="mb-10 text-lg leading-relaxed text-brand-muted">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-2xl bg-brand-btn px-6 py-3.5 font-semibold text-brand-bg transition-all duration-200 hover:scale-[1.02] hover:bg-brand-btn-hover active:scale-[0.98]"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to home
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
