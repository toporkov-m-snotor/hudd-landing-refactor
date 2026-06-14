import Link from "next/link";
import { type Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "Hudd vs de andre – Sammenligning av sosiale medier",
  description:
    "Se hvordan Hudd skiller seg fra Facebook, Instagram, X og andre sosiale plattformer.",
};

const platforms = [
  { name: "Hudd", isHudd: true },
  { name: "Facebook", isHudd: false },
  { name: "Instagram", isHudd: false },
  { name: "X / Twitter", isHudd: false },
  { name: "Snapchat", isHudd: false },
];

const features = [
  {
    label: "Formål",
    values: [
      "Enklere hverdag og tettere nærmiljø",
      "Sosial deling og grupper",
      "Bilder og video",
      "Nyheter og debatt",
      "Underholdning og meldinger",
    ],
  },
  {
    label: "Lokalt fokus",
    values: [true, false, false, false, false],
  },
  {
    label: "Ekte mennesker – ingen botter",
    values: [true, false, false, false, false],
  },
  {
    label: "Verifiserte brukere",
    values: [true, false, false, false, false],
  },
  {
    label: "Respekterer personvern",
    values: [true, false, false, false, false],
  },
  {
    label: "Ingen algoritmer",
    values: [true, false, false, false, false],
  },
  {
    label: "Ingen bannerannonser",
    values: [true, false, false, false, false],
  },
];

type CheckProps = { value: boolean | string };

function Check(props: CheckProps) {
  const { value } = props;
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

export default function HuddVsTheOthers() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16 text-center">
            <SectionHeader
              label="Sammenligning"
              title="Hudd vs de andre."
              description="Se hva som gjør Hudd til et annerledes og bedre alternativ til de etablerte plattformene."
              centered
            />
          </FadeIn>

          {/* Comparison table */}
          <FadeIn delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-160">
                <thead>
                  <tr>
                    <th className="text-left pb-4 pr-4 text-brand-subtle text-sm font-medium">
                      Funksjon
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
                      className={`${
                        i % 2 === 0 ? "bg-brand-surface/30" : ""
                      } hover:bg-brand-surface transition-colors`}
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

          {/* CTA */}
          <FadeIn delay={0.2} className="mt-16 text-center">
            <p className="text-brand-muted mb-6 text-lg">
              Klar for å prøve noe ekte?
            </p>
            <Link
              href="https://hudd.no"
              target="_blank"
              rel="noreferrer"
              className="inline-flex px-8 py-4 bg-brand-btn text-brand-bg font-semibold rounded-2xl hover:bg-brand-btn-hover transition-all duration-200 hover:scale-[1.02]"
            >
              Opprett bruker gratis
            </Link>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}
