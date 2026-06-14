"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn, StaggerChildren, fadeItem } from "@/components/ui/fade-in";

const features = [
  {
    id: 1,
    icon: "🏘️",
    title: "Bli kjent med naboene",
    text: "Finn og knytt kontakt med folk som bor i nærheten, og bygg gode relasjoner i nabolaget ditt.",
    screen: "/dark/iphone-simulator-map-no.webp",
    color: "bg-brand-accent/10 text-brand-accent",
  },
  {
    id: 2,
    icon: "📅",
    title: "Finn lokale arrangementer",
    text: "Følg naboer hvis innlegg du liker, og hold deg oppdatert på det de deler.",
    screen: "/dark/iphone-simulator-event-no.webp",
    color: "bg-brand-yellow/10 text-brand-yellow",
  },
  {
    id: 3,
    icon: "📰",
    title: "Trygt sosialt medium for lokalsamfunnet",
    text: "Les innlegg fra naboene dine, del oppdateringer, anbefalinger og lokale nyheter.",
    screen: "/dark/iphone-simulator-home-page-no.webp",
    color: "bg-blue-500/10 text-blue-400",
  },
  {
    id: 4,
    icon: "🛡️",
    title: "Trygt sosialt medium, for deg og din familie",
    text: "Nyt et trygt miljø med verifiserte medlemmer – en trygg og positiv opplevelse for hele familien.",
    screen: "/dark/iphone-simulator-chats-no.webp",
    color: "bg-purple-500/10 text-purple-400",
  },
];

export function AboutApp() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Våre fordeler"
          title="Hva gjør plattformen spesiell."
          description="Hudd er designet for å gjøre hverdagen din rikere gjennom ekte, lokale forbindelser."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Feature cards */}
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
                  <span
                    className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg ${f.color}`}
                  >
                    {f.icon}
                  </span>
                  <div>
                    <h3 className="font-semibold text-brand-text mb-1">
                      {f.title}
                    </h3>
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

          {/* Phone with screen */}
          <FadeIn direction="right">
            <div className="relative flex justify-center lg:justify-end">
              {/* Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-brand-accent/8 blur-3xl" />
              </div>

              <div className="relative z-10">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
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
