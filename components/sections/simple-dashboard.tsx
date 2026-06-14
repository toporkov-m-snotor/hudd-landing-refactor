"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";

export function SimpleDashboard() {
  const t = useTranslations("simpleDashboard");

  const features = [
    { icon: "🗺️", label: t("map") },
    { icon: "📝", label: t("feed") },
    { icon: "👥", label: t("groups") },
    { icon: "📅", label: t("events") },
    { icon: "💬", label: t("messages") },
  ];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-brand-accent/4 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionHeader label={t("sectionLabel")} title={t("title")} centered />
        </div>

        <FadeIn direction="up" delay={0.1}>
          <div className="relative rounded-3xl overflow-hidden glass-border bg-brand-surface group">
            <div className="absolute top-0 left-0 right-0 h-8 bg-linear-to-b from-brand-surface to-transparent z-10 pointer-events-none" />

            <motion.div
              className="relative"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src="/new/simple-dashboard/dashboard.png"
                alt="Hudd-dashbord"
                width={1280}
                height={720}
                className="w-full h-auto object-contain"
              />
              <motion.div className="absolute inset-0 bg-linear-to-br from-white/4 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-brand-bg/90 to-transparent z-10">
              <div className="flex flex-wrap gap-6 items-center justify-center">
                {features.map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-sm text-brand-muted">
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
