import "./globals.css";
import { type Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hudd – Et hyggeligere og tryggere Norden",
  description:
    "Oppdag nærmiljøet ditt, bli bedre kjent med naboene og få en smidigere hverdag. Kun ekte brukere, ingen algoritmer.",
  openGraph: {
    title: "Hudd – Et hyggeligere og tryggere Norden",
    description:
      "Oppdag nærmiljøet ditt, bli bedre kjent med naboene og få en smidigere hverdag.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className={`${poppins.variable}`}>
      <body className="min-h-dvh bg-brand-bg text-brand-text font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
