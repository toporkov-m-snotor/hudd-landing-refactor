"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";

const downloadLinks = [
  {
    href: "https://apps.apple.com/app/hudd",
    src: "/new/app-promo/app_store.png",
    alt: "Download on the App Store",
  },
  {
    href: "https://play.google.com/store/apps/details?id=com.hudd",
    src: "/new/app-promo/google_play.png",
    alt: "Get it on Google Play",
  },
];

const features = [
  { icon: "📍", label: "Lokalt fokus" },
  { icon: "🔔", label: "Sanntidsvarsler" },
  { icon: "🔍", label: "Finn naboer" },
];

export function AppPromo() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left card – CTA */}
          <FadeIn direction="left">
            <div className="glass-border rounded-3xl bg-brand-surface p-8 sm:p-10 flex flex-col justify-between h-full min-h-[320px]">
              {/* Feature pills */}
              <div className="flex gap-3 mb-6">
                {features.map((f) => (
                  <span
                    key={f.label}
                    className="px-3 py-1.5 text-sm rounded-xl bg-brand-surface-hover text-brand-muted flex items-center gap-1.5"
                  >
                    <span>{f.icon}</span>
                    {f.label}
                  </span>
                ))}
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-brand-text mb-4 leading-tight">
                  Gjenoppdag hva et sosialt medium kan gjøre.
                </h2>
                <p className="text-brand-muted text-lg mb-8 leading-relaxed">
                  Hudd er en norsklaget sosial plattform med ett enkelt mål — å
                  gjøre sosiale medier sosiale igjen.
                </p>

                <div className="flex flex-wrap gap-3">
                  {downloadLinks.map(({ href, src, alt }) => (
                    <Link
                      key={alt}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:scale-105 active:scale-95 transition-transform duration-200"
                    >
                      <Image
                        src={src}
                        alt={alt}
                        width={140}
                        height={46}
                        className="h-12 w-auto"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right card – visual */}
          <FadeIn direction="right">
            <div className="glass-border rounded-3xl bg-brand-surface overflow-hidden h-full min-h-[320px] relative flex items-center justify-center">
              {/* Animated background circles */}
              <motion.div
                className="absolute w-64 h-64 rounded-full bg-brand-accent/8 blur-3xl"
                animate={{
                  x: [-20, 20, -20],
                  y: [-30, 30, -30],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute w-48 h-48 rounded-full bg-brand-yellow/6 blur-3xl"
                animate={{
                  x: [20, -20, 20],
                  y: [20, -20, 20],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />

              {/* Decorative image */}
              <motion.div
                className="relative z-10"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/new/app-promo/decor.png"
                  alt="Hudd app illustration"
                  width={320}
                  height={320}
                  className="object-contain drop-shadow-2xl max-h-72"
                />
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
