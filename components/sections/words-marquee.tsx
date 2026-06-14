"use client";

import { motion } from "framer-motion";

const words = [
  { no: "Nabolag", sv: "Lokalsamhälle", dk: "Lokalsamfund" },
  { no: "Naboer", sv: "Grannar", dk: "Naboer" },
  { no: "Nyheter", sv: "Nyheter", dk: "Nyheder" },
  { no: "Vennskap", sv: "Vänskap", dk: "Venskab" },
  { no: "Arrangementer", sv: "Evenemang", dk: "Arrangementer" },
];

const flatWords = words.flatMap((w) => [
  { text: w.no, lang: "NO" },
  { text: w.sv, lang: "SV" },
  { text: w.dk, lang: "DK" },
]);

export function WordsMarquee() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-border-strong to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-border-strong to-transparent" />

      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-brand-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-brand-bg to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden">
        <motion.div
          className="flex items-center gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 160,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...flatWords, ...flatWords].map((word, i) => (
            <div key={`${word.text}-${i}`} className="flex items-center gap-8 shrink-0">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-5xl font-bold text-brand-text/10 select-none">
                  {word.text}
                </span>
                <span className="text-xs font-semibold text-brand-subtle/40 tracking-widest">
                  {word.lang}
                </span>
              </div>
              <span className="text-brand-border-strong text-2xl select-none">·</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
