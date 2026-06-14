"use client";

import Image from "next/image";
import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";

const accountTypes = [
  {
    key: "privateIndividuals",
    label: "Private personer",
    icon: "👤",
    img: "/new/account-types/private_individuals.jpg",
    description:
      "Bli kjent med naboene, del lokale nyheter og bygg ekte relasjoner i nærmiljøet ditt.",
  },
  {
    key: "municipalities",
    label: "Kommuner",
    icon: "🏛️",
    img: "/new/account-types/municipalities.jpg",
    description:
      "Kommuniser direkte med innbyggerne, del lokale arrangementer og viktige varsler.",
  },
  {
    key: "companies",
    label: "Bedrifter",
    icon: "🏢",
    img: "/new/account-types/companies.jpg",
    description:
      "Synliggjør bedriften lokalt, nå potensielle kunder og bygg lokal tilstedeværelse.",
  },
  {
    key: "sportsTeams",
    label: "Idrettslag",
    icon: "⚽",
    img: "/new/account-types/sports_teams.jpg",
    description:
      "Organiser treninger, kunngjør resultater og bygg en sterk lokal idrettsfamilie.",
  },
  {
    key: "schoolsKindergartens",
    label: "Skoler og barnehager",
    icon: "🎒",
    img: "/new/account-types/schools_and_kindergartens.jpg",
    description:
      "Hold foreldre oppdatert, del arrangementer og skap trygg kommunikasjon.",
  },
  {
    key: "organizations",
    label: "Organisasjoner",
    icon: "🤝",
    img: "/new/account-types/organizations.jpg",
    description:
      "Nå ut til medlemmer og lokalsamfunnet med relevant informasjon og aktiviteter.",
  },
];

export function AccountTypes() {
  const [active, setActive] = useState(0);
  const current = accountTypes[active];

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="For alle"
          title="Ulike kontotyper på Hudd."
          description="Hudd er bygget for alle — fra privatpersoner til kommuner og bedrifter."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Tabs */}
          <FadeIn direction="left">
            <div className="flex flex-col gap-2">
              {accountTypes.map((type, i) => (
                <button
                  key={type.key}
                  onClick={() => setActive(i)}
                  className={`group flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-300 ${
                    active === i
                      ? "bg-brand-surface-hover border border-brand-border-strong"
                      : "hover:bg-brand-surface border border-transparent"
                  }`}
                >
                  <span className="text-2xl w-10 text-center shrink-0">
                    {type.icon}
                  </span>
                  <div className="flex-1">
                    <p
                      className={`font-semibold transition-colors ${active === i ? "text-brand-text" : "text-brand-muted"}`}
                    >
                      {type.label}
                    </p>
                    {active === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-sm text-brand-muted mt-1 leading-relaxed"
                      >
                        {type.description}
                      </motion.p>
                    )}
                  </div>
                  {active === i && (
                    <motion.div
                      layoutId="tab-indicator"
                      className="w-1.5 h-8 rounded-full bg-brand-accent shrink-0"
                    />
                  )}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Image */}
          <FadeIn direction="right">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.key}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={current.img}
                    alt={`${current.label} på Hudd`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Overlay label */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.key + "-label"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="glass-border bg-brand-surface/80 rounded-xl px-4 py-3 backdrop-blur-md inline-block"
                  >
                    <span className="text-sm font-semibold text-brand-text">
                      {current.icon} {current.label}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
