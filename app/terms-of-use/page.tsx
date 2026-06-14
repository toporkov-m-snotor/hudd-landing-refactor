import { type Metadata } from "next";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Vilkår for bruk – Hudd",
  description: "Les Hudds vilkår for bruk av plattformen.",
};

const sections = [
  {
    title: "1. Bruk av vår Tjeneste",
    content:
      "Du er ansvarlig for å opprettholde konfidensialiteten og sikkerheten relatert til kontoen din. Du kan ikke bruke Tjenesten til noe ulovlig eller på annen måte ikke tillatt formål. Dersom du er yngre enn 15 år kan du ikke bruke Hudd.",
  },
  {
    title: "2. Immaterielle rettigheter",
    content:
      "Tjenesten og dens innhold er og vil forbli den eksklusive eiendommen til Hudd og dets lisensgivere. Tjenesten er beskyttet av opphavsrett og andre mekanismer i både Norge og fremmede land.",
  },
  {
    title: "3. Lenker til andre nettsteder",
    content:
      "Tjenesten vår kan inneholde lenker til tredjeparts nettsteder eller tjenester. Hudd har ingen kontroll over og påtar seg intet ansvar for innholdet til slike nettsteder.",
  },
  {
    title: "4. Oppsigelse og suspensjon",
    content:
      "Vi kan etter eget skjønn og uten nærmere varsel avslutte eller suspendere tilgangen din til Tjenesten. Du har til enhver tid adgang til å avslutte bruken av Tjenesten.",
  },
  {
    title: "5. Ansvarsbegrensning",
    content:
      "Under ingen omstendigheter skal Hudd være ansvarlige for direkte eller indirekte tap som følge av Tjenesten eller din bruk av Tjenesten.",
  },
  {
    title: "6. Endringer i disse Vilkårene",
    content:
      "Vi forbeholder oss retten til å endre eller erstatte disse Vilkårene når som helst. Ved fortsatt bruk av Tjenesten anses de nye eller endrede Vilkår som akseptert.",
  },
  {
    title: "7. Kontakt",
    content:
      "Hvis du har spørsmål om disse Vilkårene, vennligst kontakt oss på legal@hudd.no.",
  },
  {
    title: "8. Lov og verneting",
    content:
      "Denne avtalen reguleres av norsk rett og partene vedtar Oslo tingrett som sitt verneting.",
  },
];

export default function TermsOfUse() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl font-bold text-brand-text mb-2">
              Vilkår for bruk
            </h1>
            <p className="text-sm text-brand-muted mb-10">
              Ikrafttredelsesdato:{" "}
              <span className="text-brand-text">06.11.2024</span>
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <p className="text-brand-muted mb-10 leading-relaxed">
              Vennligst les disse brukervilkårene nøye før du bruker Hudd
              mobilapplikasjonen. Din tilgang til og bruk av Tjenesten er
              betinget av din aksept av og overholdelse av disse Vilkårene.
            </p>

            <div className="space-y-8">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-xl font-semibold text-brand-text mb-3">
                    {section.title}
                  </h2>
                  <p className="text-brand-muted leading-relaxed">
                    {section.content}
                  </p>
                </section>
              ))}
            </div>

            <p className="mt-10 text-sm text-brand-subtle border-t border-brand-border pt-6">
              Ved å bruke Tjenesten vår, godtar du å være bundet av disse
              Vilkårene.
            </p>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}
