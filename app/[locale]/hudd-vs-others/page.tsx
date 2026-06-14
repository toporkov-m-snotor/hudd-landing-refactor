import Link from "next/link";
import { type Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/ui/fade-in";
import { getTranslations } from "next-intl/server";
import { SectionHeader } from "@/components/ui/section-header";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "metadata.huddVsOthers",
  });
  return { title: t("title"), description: t("description") };
}

type CheckProps = { value: boolean | string };

function Check({ value }: CheckProps) {
  if (typeof value === "string") {
    return (
      <span className="text-xs text-brand-muted leading-snug">{value}</span>
    );
  }
  return value ? (
    <svg
      className="w-5 h-5 text-brand-accent mx-auto"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ) : (
    <svg
      className="w-5 h-5 text-brand-subtle mx-auto"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export default async function HuddVsTheOthers({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "huddVsOthers" });

  const platforms = [
    { name: "Hudd", isHudd: true },
    { name: "Facebook", isHudd: false },
    { name: "Instagram", isHudd: false },
    { name: "X / Twitter", isHudd: false },
    { name: "Snapchat", isHudd: false },
  ];

  const features = [
    {
      label: t("purposeLabel"),
      values: [
        t("huddPurpose"),
        t("facebookPurpose"),
        t("instagramPurpose"),
        t("twitterPurpose"),
        t("snapchatPurpose"),
      ],
    },
    { label: t("localFocus"), values: [true, false, false, false, false] },
    { label: t("realPeople"), values: [true, false, false, false, false] },
    { label: t("verifiedUsers"), values: [true, false, false, false, false] },
    { label: t("privacyRespect"), values: [true, false, false, false, false] },
    { label: t("noAlgorithms"), values: [true, false, false, false, false] },
    { label: t("noBannerAds"), values: [true, false, false, false, false] },
  ];

  return (
    <>
      <Header />
      <main className="pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16 text-center">
            <SectionHeader
              label={t("sectionLabel")}
              title={t("title")}
              description={t("description")}
              centered
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-160">
                <thead>
                  <tr>
                    <th className="text-left pb-4 pr-4 text-brand-subtle text-sm font-medium">
                      {t("tableHeader")}
                    </th>
                    {platforms.map((p) => (
                      <th
                        key={p.name}
                        className={`pb-4 px-4 text-center text-sm font-semibold ${
                          p.isHudd ? "text-brand-accent" : "text-brand-muted"
                        }`}
                      >
                        {p.name}
                        {p.isHudd && (
                          <span className="ml-1.5 text-xs px-2 py-0.5 bg-brand-accent-dim rounded-full">
                            ✓
                          </span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border">
                  {features.map((row, i) => (
                    <tr
                      key={row.label}
                      className={`${i % 2 === 0 ? "bg-brand-surface/30" : ""} hover:bg-brand-surface transition-colors`}
                    >
                      <td className="py-4 pr-4 text-sm text-brand-muted font-medium rounded-l-lg pl-2">
                        {row.label}
                      </td>
                      {row.values.map((val, j) => (
                        <td
                          key={j}
                          className={`py-4 px-4 text-center rounded-${j === row.values.length - 1 ? "r" : ""}-lg ${
                            j === 0 ? "bg-brand-accent-dim/30 rounded-lg" : ""
                          }`}
                        >
                          <Check value={val} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-16 text-center">
            <p className="text-brand-muted mb-6 text-lg">{t("ctaText")}</p>
            <Link
              href="https://hudd.no"
              target="_blank"
              rel="noreferrer"
              className="inline-flex px-8 py-4 bg-brand-btn text-brand-bg font-semibold rounded-2xl hover:bg-brand-btn-hover transition-all duration-200 hover:scale-[1.02]"
            >
              {t("ctaButton")}
            </Link>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}
