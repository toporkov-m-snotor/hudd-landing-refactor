"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn, StaggerChildren, fadeItem } from "@/components/ui/fade-in";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

type CountUpProps = { target: number; suffix?: string };

function CountUp({ target, suffix = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 2000, bounce: 0 });

  useEffect(() => {
    if (inView) motionValue.set(target);
  }, [inView, motionValue, target]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(v).toLocaleString("nb-NO") + suffix;
      }
    });
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const reviewStars = [1, 2, 3, 4, 5];

export function Statistics() {
  const t = useTranslations("statistics");

  const stats = [
    {
      key: "groups",
      value: 18000,
      suffix: "+",
      label: t("groupsLabel"),
      desc: t("groupsDesc"),
      color: "text-brand-accent",
      glow: "bg-brand-accent/5",
      border: "border-brand-accent/10",
    },
    {
      key: "users",
      value: 210000,
      suffix: "+",
      label: t("usersLabel"),
      desc: t("usersDesc"),
      color: "text-brand-yellow",
      glow: "bg-brand-yellow/5",
      border: "border-brand-yellow/10",
    },
    {
      key: "municipalities",
      value: 30,
      suffix: "+",
      label: t("municipalitiesLabel"),
      desc: t("municipalitiesDesc"),
      color: "text-brand-orange",
      glow: "bg-brand-orange/5",
      border: "border-brand-orange/10",
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <div className="lg:w-5/12 shrink-0">
            <SectionHeader label={t("sectionLabel")} title={t("title")} />

            <FadeIn delay={0.2} className="mt-8">
              <div className="glass-border rounded-2xl bg-brand-surface p-6 inline-flex flex-col gap-3">
                <div className="flex items-center gap-1">
                  {reviewStars.map((s) => (
                    <svg key={s} className="w-5 h-5 text-brand-yellow" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-brand-muted font-medium">{t("trustText")}</p>
                <p className="text-xs text-brand-subtle">{t("ratingText")}</p>
              </div>
            </FadeIn>
          </div>

          <StaggerChildren className="flex-1 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.key}
                variants={fadeItem}
                className={`glass-border rounded-2xl bg-brand-surface p-6 border ${stat.border} relative overflow-hidden group hover:bg-brand-surface-hover transition-colors duration-300`}
              >
                <div className={`absolute inset-0 ${stat.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <p className={`text-4xl font-bold ${stat.color} mb-2 tabular-nums`}>
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="font-semibold text-brand-text mb-1">{stat.label}</p>
                  <p className="text-sm text-brand-muted leading-relaxed">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>

        <FadeIn delay={0.3} className="mt-12">
          <div className="glass-border rounded-2xl bg-brand-surface p-6 flex items-center gap-6">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-accent-dim flex items-center justify-center">
              <span className="text-2xl">🇫🇮</span>
            </div>
            <div>
              <p className="font-semibold text-brand-text">
                {t("finlandTitle")}{" "}
                <span className="text-brand-accent">{t("finlandYear")}</span>
              </p>
              <p className="text-sm text-brand-muted">{t("finlandDesc")}</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
