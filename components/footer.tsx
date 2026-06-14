"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  const footerLinks = [
    { label: t("privacyPolicy"), href: "/privacy-policy" as const },
    { label: t("termsOfUse"), href: "/terms-of-use" as const },
    { label: t("help"), href: "mailto:support@hudd.no" as const },
  ];

  return (
    <footer className="border-t border-brand-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-brand-text tracking-tight">
              HUDD
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              link.href.startsWith("mailto:") ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-brand-subtle hover:text-brand-muted transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-brand-subtle hover:text-brand-muted transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-brand-subtle">
            © {year} Hudd. {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
