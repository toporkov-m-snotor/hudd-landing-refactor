"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn, StaggerChildren, fadeItem } from "@/components/ui/fade-in";

type FAQItem = { id: number; question: string; answer: string };

type FAQItemProps = {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
};

function FAQItem({ item, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <motion.div
      variants={fadeItem}
      className={`border-b transition-colors ${isOpen ? "border-brand-border-strong" : "border-brand-border"}`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <span className="shrink-0 w-7 h-7 rounded-full bg-brand-surface flex items-center justify-center text-xs font-semibold text-brand-muted">
            {index + 1}
          </span>
          <span className="font-medium text-brand-text">{item.question}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 w-6 h-6 rounded-full bg-brand-surface flex items-center justify-center"
        >
          <svg className="w-3.5 h-3.5 text-brand-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pl-11 text-brand-muted text-sm leading-relaxed">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const t = useTranslations("faq");
  const rawItems = t.raw("items") as { question: string; answer: string }[];
  const faqItems: FAQItem[] = rawItems.map((item, i) => ({ ...item, id: i + 1 }));

  const [openId, setOpenId] = useState<number | null>(1);
  const [page, setPage] = useState(0);

  const ITEMS_PER_PAGE = 5;
  const pages: FAQItem[][] = [];
  for (let i = 0; i < faqItems.length; i += ITEMS_PER_PAGE) {
    pages.push(faqItems.slice(i, i + ITEMS_PER_PAGE));
  }
  const currentPage = pages[page] ?? [];
  const totalPages = pages.length;

  const handleToggle = (id: number) => setOpenId((cur) => (cur === id ? null : id));
  const handlePageChange = (newPage: number) => { setPage(newPage); setOpenId(null); };

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="mb-12 text-center">
            <SectionHeader label={t("sectionLabel")} title={t("title")} centered />
          </FadeIn>

          <AnimatePresence mode="wait">
            <StaggerChildren key={page} className="mb-8" staggerDelay={0.05}>
              {currentPage.map((item, i) => (
                <FAQItem
                  key={item.id}
                  item={item}
                  index={page * ITEMS_PER_PAGE + i}
                  isOpen={openId === item.id}
                  onToggle={() => handleToggle(item.id)}
                />
              ))}
            </StaggerChildren>
          </AnimatePresence>

          {totalPages > 1 && (
            <FadeIn className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => handlePageChange(Math.max(0, page - 1))}
                disabled={page === 0}
                aria-label={t("prevAriaLabel")}
                className="flex items-center gap-2 px-4 py-2 rounded-xl glass-border bg-brand-surface text-brand-muted hover:text-brand-text hover:bg-brand-surface-hover transition-all disabled:opacity-30 disabled:cursor-not-allowed text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                {t("prevPage")}
              </button>

              <span className="text-sm text-brand-muted">{page + 1} / {totalPages}</span>

              <button
                onClick={() => handlePageChange(Math.min(totalPages - 1, page + 1))}
                disabled={page === totalPages - 1}
                aria-label={t("nextAriaLabel")}
                className="flex items-center gap-2 px-4 py-2 rounded-xl glass-border bg-brand-surface text-brand-muted hover:text-brand-text hover:bg-brand-surface-hover transition-all disabled:opacity-30 disabled:cursor-not-allowed text-sm font-medium"
              >
                {t("nextPage")}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}
