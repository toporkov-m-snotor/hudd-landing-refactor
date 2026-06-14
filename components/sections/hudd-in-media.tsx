"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { FadeIn, StaggerChildren, fadeItem } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";

const featuredArticle = {
  id: "nrk",
  date: "15.02.2025",
  source: "NRK",
  image: "/hudd-nrk.webp",
  imageAlt: "Hudd app on a phone showing a map of Norway",
  title: "Den norske appen Hudd vil ta over for Facebook i Noreg",
  text: "Over 45 000 nordmenn har sidan november lasta ned Hudd, eit nytt norsk sosialt medium. Håpet til utviklarane er å ta over brukarane til Facebook.",
  href: "https://www.nrk.no/vestland/den-norske-appen-hudd-vil-ta-over-for-facebook-i-noreg-1.17253677",
};

const sideArticles = [
  {
    id: "dinbedrift",
    date: "25.02.2025",
    source: "DinBedrift",
    image: "/eigil-dinbedrift.jpg",
    imageAlt: "Article about Hudd on DinBedrift",
    title: "Ekte Digitalt Fellesskap - Også For SMB?",
    text: "Med sin kombinasjon av visjon, fokus og praktisk nytte har Hudd truffet en nerve i et Norge som lengter etter noe ekte.",
    href: "https://dinbedrift.no/ekte-digitalt-fellesskap-ogsa-for-smb/",
  },
  {
    id: "tv2",
    date: "05.04.2025",
    source: "TV2",
    image: "/tv2-article.webp",
    imageAlt: "Article about Hudd on TV2",
    title: "Tok av etter inntoget av Trump og Musk",
    text: "Digitaliseringsminister Karianne Tung registrerer seg som bruker nummer 100.000 på den norske plattformen Hudd.",
    href: "https://www.tv2.no/nyheter/innenriks/tok-av-etter-inntoget-av-trump-og-musk/17604386",
  },
  {
    id: "aftenposten",
    date: "23.11.2024",
    source: "Aftenposten",
    image: "/hudd-aftenposten.webp",
    imageAlt: "Article about Hudd on Aftenposten",
    title: "Norsk app vil utfordre de store plattformene",
    text: "Den norske appen Hudd vokser raskt og vil utfordre etablerte sosiale medier med et lokalt og ekte fokus.",
    href: "#",
  },
];

type ArticleCardProps = {
  article: typeof featuredArticle;
  featured?: boolean;
};

function ArticleCard(props: ArticleCardProps) {
  const { article, featured = false } = props;
  return (
    <motion.div
      variants={fadeItem}
      className={`group glass-border bg-brand-surface rounded-2xl overflow-hidden hover:bg-brand-surface-hover transition-all duration-300 ${featured ? "lg:row-span-2" : ""}`}
    >
      <Link
        href={article.href}
        target="_blank"
        rel="noreferrer"
        className="block h-full"
      >
        <div
          className={`relative overflow-hidden ${featured ? "h-56 sm:h-72" : "h-40"}`}
        >
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={
              featured
                ? "(max-width: 1024px) 100vw, 60vw"
                : "(max-width: 1024px) 100vw, 40vw"
            }
          />
          <div className="absolute inset-0 bg-linear-to-t from-brand-bg/60 to-transparent" />

          {/* Source badge */}
          <div className="absolute top-4 left-4">
            <span className="px-2.5 py-1 text-xs font-bold bg-brand-btn text-brand-bg rounded-lg">
              {article.source}
            </span>
          </div>
        </div>

        <div className={`p-5 ${featured ? "p-6" : ""}`}>
          <p className="text-xs text-brand-subtle mb-2">{article.date}</p>
          <h3
            className={`font-semibold text-brand-text leading-snug mb-2 ${featured ? "text-lg" : "text-sm"}`}
          >
            {article.title}
          </h3>
          <p className="text-sm text-brand-muted leading-relaxed line-clamp-2">
            {article.text}
          </p>

          <div className="mt-4 flex items-center gap-1.5 text-xs text-brand-accent font-medium">
            <span>Les mer</span>
            <svg
              className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function HuddInMedia() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-12">
          <div className="flex items-center justify-between gap-4">
            <SectionHeader label="News" title="Hudd i media." />
            <Link
              href="#"
              className="hidden sm:flex items-center gap-1.5 text-sm text-brand-accent hover:text-brand-accent/80 transition-colors font-medium shrink-0"
            >
              Se alle artikler
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </FadeIn>

        {/* Bento grid */}
        <StaggerChildren
          staggerDelay={0.06}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/* Featured – spans 2 rows */}
          <ArticleCard article={featuredArticle} featured />

          {/* Side articles */}
          {sideArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
