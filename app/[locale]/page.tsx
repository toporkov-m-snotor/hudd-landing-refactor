import { type Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { AppPromo } from "@/components/sections/app-promo";
import { Statistics } from "@/components/sections/statistics";
import { AccountTypes } from "@/components/sections/account-types";
import { AboutApp } from "@/components/sections/about-app";
import { SimpleDashboard } from "@/components/sections/simple-dashboard";
import { HuddInMedia } from "@/components/sections/hudd-in-media";
import { FAQ } from "@/components/sections/faq";
import { EditorialMedia } from "@/components/sections/editorial-media";
import { Reviews } from "@/components/sections/reviews";
import { WordsMarquee } from "@/components/sections/words-marquee";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });
  return { title: t("title"), description: t("description") };
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AppPromo />
        <Statistics />
        <AccountTypes />
        <AboutApp />
        <SimpleDashboard />
        <HuddInMedia />
        <FAQ />
        <EditorialMedia />
        <Reviews />
        <WordsMarquee />
      </main>
      <Footer />
    </>
  );
}
