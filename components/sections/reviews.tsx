"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";

const reviews = [
  {
    id: "solvi",
    name: "Sølvi R. Haugland",
    date: "25/05/2025",
    rating: 5,
    title: "+ Lokale bedrifter",
    text: "Supert at appen utvikler seg. Og superbra at man nå kan finne bedrifter i nabolaget! Det er bare superkjekt for både brukere og de som driver smått. Jo bedre appen blir, jo flere vil bruke den.",
  },
  {
    id: "moplemaisen",
    name: "Moplemaisen",
    date: "04/06/2025",
    rating: 5,
    title: "Moplemaisen",
    text: "Fin plattform som oppdateres i hurtig tempo. Dette blir bra!",
  },
  {
    id: "rune",
    name: "Rune J. Svendsen",
    date: "28/12/2024",
    rating: 5,
    title: "Endelig en sosial plattform med bra personvern",
    text: "Liker at det ikke er noen annonser og ingen algoritmer på plattformen. Samt et bra fokus på ditt nærmeste nabolag. Spennende tanke!",
  },
  {
    id: "torstein",
    name: "Torstein H. Vik",
    date: "15/03/2025",
    rating: 5,
    title: "Det beste alternativet til Facebook",
    text: "Hvis du også er lei av Facebook og deres falske profiler og reklamer, er dette klart det beste alternativet. Gi det litt tid og hjelp med å bygge opp grupper.",
  },
  {
    id: "kjell",
    name: "Kjell A. Nilsen",
    date: "22/07/2025",
    rating: 5,
    title: "Har virkelig trua! 💪",
    text: "Har virkelig trua! Flott og oversiktlig app med kjempestort potensial!",
  },
];

type StarRatingProps = { rating: number };

function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          className={`w-4 h-4 ${s <= rating ? "text-brand-yellow" : "text-brand-border"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

type ReviewCardProps = { review: (typeof reviews)[0] };

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="glass-border bg-brand-surface rounded-2xl p-6 w-72 sm:w-80 shrink-0">
      <StarRating rating={review.rating} />
      <h3 className="font-semibold text-brand-text mt-3 mb-2 text-sm leading-snug">{review.title}</h3>
      <p className="text-brand-muted text-sm leading-relaxed mb-4">{review.text}</p>
      <div className="flex items-center gap-3 pt-4 border-t border-brand-border">
        <div className="w-8 h-8 rounded-full bg-brand-avatar flex items-center justify-center text-xs font-semibold text-brand-text">
          {review.name.charAt(0)}
        </div>
        <div>
          <p className="text-xs font-semibold text-brand-text">{review.name}</p>
          <p className="text-xs text-brand-subtle">{review.date}</p>
        </div>
      </div>
    </div>
  );
}

export function Reviews() {
  const t = useTranslations("reviews");

  return (
    <section className="py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <FadeIn>
          <SectionHeader label={t("sectionLabel")} title={t("title")} />
        </FadeIn>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-brand-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-brand-bg to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden mb-4">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear", repeatType: "loop" }}
          >
            {[...reviews, ...reviews].map((review, i) => (
              <ReviewCard key={`${review.id}-${i}`} review={review} />
            ))}
          </motion.div>
        </div>

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear", repeatType: "loop" }}
          >
            {[...reviews.slice(2), ...reviews, ...reviews.slice(0, 3)].map((review, i) => (
              <ReviewCard key={`${review.id}-r2-${i}`} review={review} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
