import { type Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/ui/fade-in";
import { getTranslations } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.termsOfUse" });
  return { title: t("title"), description: t("description") };
}

export default async function TermsOfUse({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "termsOfUse" });

  const sections = [
    { title: t("section1Title"), content: t("section1Content") },
    { title: t("section2Title"), content: t("section2Content") },
    { title: t("section3Title"), content: t("section3Content") },
    { title: t("section4Title"), content: t("section4Content") },
    { title: t("section5Title"), content: t("section5Content") },
    { title: t("section6Title"), content: t("section6Content") },
    { title: t("section7Title"), content: t("section7Content") },
    { title: t("section8Title"), content: t("section8Content") },
  ];

  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl font-bold text-brand-text mb-2">
              {t("title")}
            </h1>
            <p className="text-sm text-brand-muted mb-10">
              {t("effectiveDateLabel")}{" "}
              <span className="text-brand-text">{t("effectiveDateValue")}</span>
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <p className="text-brand-muted mb-10 leading-relaxed">
              {t("intro")}
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
              {t("disclaimer")}
            </p>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}
