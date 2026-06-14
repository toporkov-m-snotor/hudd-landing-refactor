"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn, StaggerChildren, fadeItem } from "@/components/ui/fade-in";

const faqItems = [
  {
    id: 1,
    question: "Hva er Hudd?",
    answer:
      "Hudd er et norsk sosialt medium designet for å bygge genuine relasjoner mellom mennesker som bor i samme nabolag. Alle brukere er verifisert gjennom Vipps og må bruke sine ekte navn, slik at du vet at du kun interagerer med ekte mennesker. Plattformen er fri for manipulative algoritmer og påtrengende bannerannonser. Innholdet vises i kronologisk rekkefølge etter publiseringstidspunkt.",
  },
  {
    id: 2,
    question: "Hvordan skiller Hudd seg fra andre sosiale medier?",
    answer:
      "Mens andre sosiale medieplattformer er kjent for å gjøre verden mindre, vil Hudd gjøre nabolaget ditt større. Hudd har et lokalt fokus hvor du plasseres i nabolaget ditt og får din egen fane med innhold fra andre brukere i ditt nærområde. I stedet for algoritmer får du selv bestemme hvilket innhold du vil interagere med. Hudd skiller seg også fra andre sosiale medier med å kun ha verifiserte brukere, 15-årsaldersgrense og ingen plagsomme bannerannonser.",
  },
  {
    id: 3,
    question: "Hvordan oppretter jeg en bruker på Hudd?",
    answer:
      "Søk opp Hudd i App Store eller Google Play på smarttelefonen din. Last ned appen, åpne den og trykk på «Fortsett med Vipps» eller «Fortsett med BankID» for å registrere deg. På nett (PC/Mac) er det foreløpig kun mulig å logge inn med Vipps. For å opprette en bedriftsprofil, må du først ha en personlig profil på Hudd.",
  },
  {
    id: 4,
    question: "Er Hudd gratis?",
    answer:
      "Ja. Det koster ingenting å registrere seg med en personlig profil på Hudd, eller å bruke appen. Om du lager en profil for din bedrift er den første måneden gratis. Etter dette vil det koste 399,- per måned. For enkeltpersonforetak er månedsprisen på 149,-. For ideelle og ikke-kommersielle lag og foreninger er Hudd Bedrift gratis.",
  },
  {
    id: 5,
    question: "Er Hudd tilgjengelig utenfor Norge?",
    answer:
      "Ja! Hudd er også tilgjengelig i Danmark, og vi lanserer i Sverige veldig snart. På sikt planlegger vi også å gjøre Hudd tilgjengelig i flere europeiske land.",
  },
  {
    id: 6,
    question: "Kan jeg registrere meg på Hudd uten Vipps?",
    answer:
      "Ja, du kan nå også registrere deg og logge inn med BankID. Vi bruker Vipps og BankID fordi dette er blant de sikreste innloggingsmetodene. De sørger for trygg verifisering av brukere uten at du trenger å lage eget passord. Hudd henter kun navn, fødselsdato, e-postadresse og mobilnummer – aldri kontonummer eller andre bankopplysninger.",
  },
  {
    id: 7,
    question: "Kan jeg bruke Hudd på PC?",
    answer:
      "Ja! Hudd er nå tilgjengelig både på smarttelefon og nettleser. Du kan dermed bruke Hudd på PC og Mac via web. Merk at noen funksjoner ennå ikke er fullt implementert i nettversjonen, men dette kommer fortløpende i tiden fremover.",
  },
  {
    id: 8,
    question: "Hvordan endrer jeg mine personlige opplysninger?",
    answer:
      "De eneste opplysningene du kan redigere selv inne i Hudd-appen er opplysninger om deg, e-postadresse, mobilnummer, sivilstatus, yrke, barn og kjæledyr. For å endre ditt fulle navn og adresse i Hudd må du først endre disse opplysningene i Folkeregisteret.",
  },
  {
    id: 9,
    question:
      "Hvordan bestemmer jeg hvem som ser mine personlige opplysninger?",
    answer:
      "I Hudd kan du selv bestemme hvilken informasjon som skal være synlig for andre enn deg selv. Gå til din profil og trykk på de tre prikkene øverst i høyre hjørne for å finne «Mine personverninnstillinger». Her kan du velge mellom «Alle brukere», «Bare venner» eller «Bare meg».",
  },
  {
    id: 10,
    question: "Er Hudd en sporingsapp?",
    answer:
      "Nei. Hudd følger ikke bevegelsene til telefonen din. «Synlighet i kart» refererer til bostedsadressen din. Du kan selv bestemme hvem som ser bostedsadressen din i kartet via personverninnstillingene.",
  },
];

type FAQItemProps = {
  item: (typeof faqItems)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
};

function FAQItem(props: FAQItemProps) {
  const { item, isOpen, onToggle, index } = props;
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
          <svg
            className="w-3.5 h-3.5 text-brand-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
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
            <p className="pb-6 pl-11 text-brand-muted text-sm leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);
  const [page, setPage] = useState(0);

  const ITEMS_PER_PAGE = 5;
  const pages = [];
  for (let i = 0; i < faqItems.length; i += ITEMS_PER_PAGE) {
    pages.push(faqItems.slice(i, i + ITEMS_PER_PAGE));
  }
  const currentPage = pages[page] ?? [];
  const totalPages = pages.length;

  const handleToggle = (id: number) => {
    setOpenId((cur) => (cur === id ? null : id));
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    setOpenId(null);
  };

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="mb-12 text-center">
            <SectionHeader
              label="FAQ"
              title="Alt du trenger å vite."
              centered
            />
          </FadeIn>

          {/* FAQ list */}
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

          {/* Pagination */}
          {totalPages > 1 && (
            <FadeIn className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => handlePageChange(Math.max(0, page - 1))}
                disabled={page === 0}
                aria-label="Forrige FAQ-side"
                className="flex items-center gap-2 px-4 py-2 rounded-xl glass-border bg-brand-surface text-brand-muted hover:text-brand-text hover:bg-brand-surface-hover transition-all disabled:opacity-30 disabled:cursor-not-allowed text-sm font-medium"
              >
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
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                Forrige
              </button>

              <span className="text-sm text-brand-muted">
                {page + 1} / {totalPages}
              </span>

              <button
                onClick={() =>
                  handlePageChange(Math.min(totalPages - 1, page + 1))
                }
                disabled={page === totalPages - 1}
                aria-label="Neste FAQ-side"
                className="flex items-center gap-2 px-4 py-2 rounded-xl glass-border bg-brand-surface text-brand-muted hover:text-brand-text hover:bg-brand-surface-hover transition-all disabled:opacity-30 disabled:cursor-not-allowed text-sm font-medium"
              >
                Neste
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
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}
