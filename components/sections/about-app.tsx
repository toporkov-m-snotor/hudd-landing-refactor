"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn, StaggerChildren, fadeItem } from "@/components/ui/fade-in";

export function AboutApp() {
  const t = useTranslations("aboutApp");
  const [activeCard, setActiveCard] = useState(0);

  const features = [
    {
      id: 1,
      icon: "🏘️",
      title: t("feature1Title"),
      text: t("feature1Text"),
      screen: "/dark/iphone-simulator-map-no.webp",
      color: "bg-brand-accent/10 text-brand-accent",
    },
    {
      id: 2,
      icon: "📅",
      title: t("feature2Title"),
      text: t("feature2Text"),
      screen: "/dark/iphone-simulator-event-no.webp",
      color: "bg-brand-yellow/10 text-brand-yellow",
    },
    {
      id: 3,
      icon: "📰",
      title: t("feature3Title"),
      text: t("feature3Text"),
      screen: "/dark/iphone-simulator-home-page-no.webp",
      color: "bg-blue-500/10 text-blue-400",
    },
    {
      id: 4,
      icon: "🛡️",
      title: t("feature4Title"),
      text: t("feature4Text"),
      screen: "/dark/iphone-simulator-chats-no.webp",
      color: "bg-purple-500/10 text-purple-400",
    },
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label={t("sectionLabel")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <StaggerChildren className="flex flex-col gap-4">
            {features.map((f, i) => (
              <motion.button
                key={f.id}
                variants={fadeItem}
                onClick={() => setActiveCard(i)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activeCard === i
                    ? "bg-brand-surface-hover border-brand-border-strong"
                    : "bg-brand-surface border-brand-border hover:bg-brand-surface-hover"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg ${f.color}`}>
                    {f.icon}
                  </span>
                  <div>
                    <h3 className="font-semibold text-brand-text mb-1">{f.title}</h3>
                    <AnimatePresence>
                      {activeCard === i && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-sm text-brand-muted leading-relaxed"
                        >
                          {f.text}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.button>
            ))}
          </StaggerChildren>

          <FadeIn direction="right">
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-brand-accent/8 blur-3xl" />
              </div>

              <div className="relative z-10">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={features[activeCard].id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={features[activeCard].screen}
                        alt={features[activeCard].title}
                        width={300}
                        height={600}
                        className="object-contain drop-shadow-2xl"
                      />
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
