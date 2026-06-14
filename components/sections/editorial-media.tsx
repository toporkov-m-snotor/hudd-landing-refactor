"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { FadeIn } from "@/components/ui/fade-in";

export function EditorialMedia() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-brand-accent/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-border rounded-3xl bg-brand-surface overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Text side */}
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <FadeIn>
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-brand-accent bg-brand-accent-dim rounded-full border border-brand-accent/20 mb-6">
                  Redaksjonelle medier
                </span>
              </FadeIn>

              <FadeIn delay={0.05}>
                <h2 className="text-3xl sm:text-4xl font-bold text-brand-text mb-6 leading-tight">
                  Vi ønsker redaksjonelle medier velkommen.
                </h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="text-brand-muted text-lg leading-relaxed mb-8">
                  Hudd åpner plattformen for redaksjonelle medier som ønsker å nå
                  ut til lokale lesere. Del lokale nyheter, arrangementer og
                  viktige saker direkte til de som bor i nærmiljøet.
                </p>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-brand-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                    Lokalt fokus
                  </div>
                  <div className="flex items-center gap-2 text-sm text-brand-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                    Ekte brukere
                  </div>
                  <div className="flex items-center gap-2 text-sm text-brand-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                    Ingen algoritmer
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Image side */}
            <FadeIn direction="right" className="relative min-h-80 lg:min-h-0">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-l from-transparent to-brand-surface/50 z-10 lg:block hidden" />

                <div className="flex h-full gap-4 p-6">
                  {/* Two phones stacked/offset */}
                  <motion.div
                    className="flex-1 relative"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Image
                      src="/new/editorial-media/phone_1.png"
                      alt="Hudd-app, visning én"
                      fill
                      className="object-contain object-center drop-shadow-2xl"
                    />
                  </motion.div>
                  <motion.div
                    className="flex-1 relative mt-8"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <Image
                      src="/new/editorial-media/phone_2.png"
                      alt="Hudd-app, visning to"
                      fill
                      className="object-contain object-center drop-shadow-2xl"
                    />
                  </motion.div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
