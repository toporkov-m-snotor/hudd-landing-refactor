import { type Metadata } from "next";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Retningslinjer for personvern – Hudd",
  description: "Les om hvordan Hudd behandler dine personopplysninger.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl font-bold text-brand-text mb-2">
              Personvernerklæring
            </h1>
            <p className="text-sm text-brand-muted mb-10">
              Sist endret: <span className="text-brand-text">16.03.2026</span>
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="prose prose-invert max-w-none text-brand-muted leading-relaxed space-y-8">
              <p>
                Denne personvernerklæringen beskriver hvordan Hudd («vi», «oss»
                eller «vår») samler inn, bruker og utleverer din personlige
                informasjon når du oppretter konto og bruker mobilapplikasjonen
                vår («appen» eller «Hudd»).
              </p>

              {[
                {
                  title: "1. Informasjon vi samler inn",
                  content:
                    "Når du bruker appen vår, samler vi inn følgende informasjon: Personlig informasjon (navn, fødselsdato, e-post, mobilnummer) via Vipps/BankID, enhetsinformasjon, og ved bruk av alarmfunksjon kan nøyaktig lokasjonsdata samles inn og deles med forhåndsdefinerte kontakter.",
                },
                {
                  title: "2. Bruk av din informasjon",
                  content:
                    "Vi bruker informasjonen til å levere og vedlikeholde appen, foreslå lokalt innhold basert på bosted, gi kundestøtte, og overholde gjeldende lover.",
                },
                {
                  title: "3. Deling av din informasjon",
                  content:
                    "Vi deler informasjon kun med ditt samtykke, med tjenesteleverandører som utfører tjenester på våre vegne, eller av juridiske grunner.",
                },
                {
                  title: "4. Dataoppbevaring",
                  content:
                    "Vi beholder dine data så lenge du har en aktiv konto. Du kan slette kontoen når som helst. Vi overfører ikke personopplysninger til land utenfor EU/EØS.",
                },
                {
                  title: "5. Sikkerhet",
                  content:
                    "Vi tar rimelige forholdsregler for å beskytte din personlige informasjon mot uautorisert tilgang.",
                },
                {
                  title: "6. Dine rettigheter",
                  content:
                    "Du kan oppdatere, rette eller slette din personlige informasjon i kontoinnstillingene. Du har rett til innsyn, retting, sletting, og protestere mot behandling.",
                },
                {
                  title: "7. Endringer",
                  content:
                    "Vi kan oppdatere personvernerklæringen fra tid til annen og vil varsle deg ved endringer.",
                },
                {
                  title: "8. Kontakt oss",
                  content:
                    "Hudd gis ut av Hudd AS, org.no. 933 270 157. Kontakt oss på legal@hudd.no for spørsmål om personvern. Du har rett til å klage til Datatilsynet.",
                },
              ].map((section) => (
                <section key={section.title}>
                  <h2 className="text-xl font-semibold text-brand-text mb-3">
                    {section.title}
                  </h2>
                  <p>{section.content}</p>
                </section>
              ))}
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}
