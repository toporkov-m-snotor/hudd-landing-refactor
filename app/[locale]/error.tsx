"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  const t = useTranslations("error");
  const locale = useLocale();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Header />
      <main className="relative flex min-h-[calc(100dvh-80px)] items-center justify-center [overflow:clip]">
        <div className="dot-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-linear-to-b from-brand-bg via-brand-bg/80 to-brand-bg" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/5 blur-3xl" />

        <div className="pointer-events-none absolute inset-0 select-none [overflow:clip]">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[28vw] font-bold leading-none text-white/[0.025]">
            500
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-lg px-4 py-20 text-center sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="glass-border mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-surface"
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, -6, 6, -4, 4, 0] }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <svg
                className="h-9 w-9 text-brand-orange"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </motion.div>

            <span className="mb-6 inline-block rounded-full border border-brand-orange/20 bg-orange-500/10 px-3 py-1 text-xs font-medium text-brand-orange">
              500
            </span>

            <h1 className="gradient-text mb-4 text-4xl font-bold sm:text-5xl">
              {t("title")}
            </h1>
            <p className="mb-10 text-lg leading-relaxed text-brand-muted">
              {t("description")}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                onClick={reset}
                className="inline-flex items-center gap-2 rounded-2xl bg-brand-btn px-6 py-3.5 font-semibold text-brand-bg transition-all duration-200 hover:bg-brand-btn-hover"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
                {t("tryAgain")}
              </motion.button>

              <Link
                href={`/${locale}`}
                className="glass-border inline-flex items-center gap-2 rounded-2xl bg-brand-surface px-6 py-3.5 font-semibold transition-all duration-200 hover:scale-[1.02] hover:bg-brand-surface-hover active:scale-[0.98]"
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
                {t("backHome")}
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
