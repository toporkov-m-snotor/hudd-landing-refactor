"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

import { FadeIn, StaggerChildren, fadeItem } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";

type CountUpProps = {
  target: number;
  suffix?: string;
};

function CountUp(props: CountUpProps) {
  const { target, suffix = "" } = props;
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 2000, bounce: 0 });

  useEffect(() => {
    if (inView) {
      motionValue.set(target);
    }
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

const stats = [
  {
    key: "groups",
    value: 18000,
    suffix: "+",
    label: "Nabolagsgrupper",
    desc: "Grupper hvor naboer deler nyheter, organiserer arrangementer og kommuniserer",
    color: "text-brand-accent",
    glow: "bg-brand-accent/5",
    border: "border-brand-accent/10",
  },
  {
    key: "users",
    value: 210000,
    suffix: "+",
    label: "Aktive brukere",
    desc: "Folk som allerede bruker plattformen for å koble seg til naboer",
    color: "text-brand-yellow",
    glow: "bg-brand-yellow/5",
    border: "border-brand-yellow/10",
  },
  {
    key: "municipalities",
    value: 30,
    suffix: "+",
    label: "Aktive kommuner",
    desc: "Kommuner som deler lokale nyheter og arrangementer",
    color: "text-brand-orange",
    glow: "bg-brand-orange/5",
    border: "border-brand-orange/10",
  },
];

const reviewStars = [1, 2, 3, 4, 5];

export function Statistics() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div className="lg:w-5/12 shrink-0">
            <SectionHeader
              label="Fellesskap"
              title="Vårt fellesskap vokser hver dag."
            />

            <FadeIn delay={0.2} className="mt-8">
              <div className="glass-border rounded-2xl bg-brand-surface p-6 inline-flex flex-col gap-3">
                <div className="flex items-center gap-1">
                  {reviewStars.map((s) => (
                    <svg key={s} className="w-5 h-5 text-brand-yellow" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-brand-muted font-medium">Folk stoler på vår plattform</p>
                <p className="text-xs text-brand-subtle">5.0 gjennomsnittlig vurdering</p>
              </div>
            </FadeIn>
          </div>

          {/* Right – stat cards */}
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

        {/* Hudd Finland banner */}
        <FadeIn delay={0.3} className="mt-12">
          <div className="glass-border rounded-2xl bg-brand-surface p-6 flex items-center gap-6">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-accent-dim flex items-center justify-center">
              <span className="text-2xl">🇫🇮</span>
            </div>
            <div>
              <p className="font-semibold text-brand-text">
                Hudd lanseres i Finland{" "}
                <span className="text-brand-accent">2026</span>
              </p>
              <p className="text-sm text-brand-muted">
                Tilgjengelig i Norge, Danmark og snart Sverige — nå også Finland på vei.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
