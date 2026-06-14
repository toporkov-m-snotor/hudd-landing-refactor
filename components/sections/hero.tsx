"use client";

import {
  motion,
  useSpring,
  useTransform,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

function RotatingWord() {
  const t = useTranslations("hero");
  const words = [t("word0"), t("word1"), t("word2"), t("word3")];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <span className="relative block overflow-hidden h-[1.3em]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={index}
          className="gradient-text-accent block leading-[1.3]"
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-110%", opacity: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Spotlight() {
  const spotRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const background = useTransform(
    [springX, springY],
    ([x, y]) =>
      `radial-gradient(600px circle at ${x}px ${y}px, rgba(85,205,171,0.10) 0%, transparent 70%)`,
  );

  useEffect(() => {
    const el = spotRef.current?.parentElement;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };
    el.addEventListener("mousemove", handler);
    return () => el.removeEventListener("mousemove", handler);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={spotRef}
      className="pointer-events-none absolute inset-0 z-0"
      style={{ background }}
    />
  );
}

type HeroCardProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

function HeroCard({ children, delay, className = "" }: HeroCardProps) {
  return (
    <motion.div
      className={`glass-border rounded-2xl bg-brand-surface p-5 ${className}`}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: delay ?? 0, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  const t = useTranslations("hero");
  const labels = [t("label0"), t("label1"), t("label2")];
  const tags = [
    { label: t("tag0"), color: "bg-orange-500/10 text-orange-400" },
    { label: t("tag1"), color: "bg-blue-500/10 text-blue-400" },
    { label: t("tag2"), color: "bg-brand-accent/10 text-brand-accent" },
    { label: t("tag3"), color: "bg-purple-500/10 text-purple-400" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-20">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-brand-bg/80 to-brand-bg" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/4 blur-3xl pointer-events-none" />

      <Spotlight />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center py-16 sm:py-24">
        {/* Labels */}
        <motion.div
          className="flex flex-wrap gap-2 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {labels.map((label, i) => (
            <motion.span
              key={label}
              className="px-3 py-1 text-xs font-medium text-brand-accent bg-brand-accent-dim border border-brand-accent/20 rounded-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
            >
              {label}
            </motion.span>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 max-w-4xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block">{t("headline")}</span>
          <RotatingWord />
        </motion.h1>

        <motion.p
          className="text-brand-muted text-lg sm:text-xl max-w-xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {t("description")}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap gap-4 mb-16"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <Link
            href="https://apps.apple.com/app/hudd"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 px-6 py-3.5 bg-brand-btn text-brand-bg font-semibold rounded-2xl hover:bg-brand-btn-hover transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            App Store
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.hudd"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 px-6 py-3.5 glass-border bg-brand-surface font-semibold rounded-2xl hover:bg-brand-surface-hover transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.72c.28.16.6.18.9.06l.06-.04 11.62-6.66-2.54-2.54-10.04 9.18zM.5 1.3C.19 1.62 0 2.12 0 2.78v18.44c0 .66.19 1.16.5 1.48l.08.07L11.09 12 .58 1.22.5 1.3zM20.13 9.72l-2.34-1.34-2.83 2.82 2.83 2.84 2.36-1.35c.67-.39.67-1.18 0-1.57l-.02-.4zM4.08.22l.06.04 11.62 6.66-2.54 2.54L3.18.28C3.48.16 3.8.06 4.08.22z" />
            </svg>
            Google Play
          </Link>
        </motion.div>

        {/* Phone + cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Phone mockup */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute -inset-8 rounded-full bg-brand-accent/8 blur-2xl" />
              <Image
                src="/new/hero/phone.png"
                alt="Hudd-app på mobil"
                width={280}
                height={560}
                className="relative z-10 drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Feature cards */}
          <div className="flex flex-col gap-4">
            <HeroCard delay={0.5}>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-brand-accent-dim flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-brand-muted mb-1">
                    {t("card1PublishedIn")}{" "}
                    <span className="text-brand-accent">{t("card1LocalGroup")}</span>
                  </p>
                  <h3 className="font-semibold text-brand-text mb-1">{t("card1Title")}</h3>
                  <p className="text-sm text-brand-muted">{t("card1Description")}</p>
                </div>
              </div>
            </HeroCard>

            <HeroCard delay={0.6}>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-brand-yellow/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-text mb-1">{t("card2Title")}</h3>
                  <p className="text-sm text-brand-muted">{t("card2Description")}</p>
                </div>
              </div>

              <div className="flex gap-2 mt-4 flex-wrap">
                {tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`px-2.5 py-1 text-xs font-medium rounded-lg ${tag.color}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </HeroCard>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-bg to-transparent pointer-events-none" />
    </section>
  );
}
