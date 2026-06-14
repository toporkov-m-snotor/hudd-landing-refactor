"use client";

import { routing } from "@/i18n/routing";
import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

const localeNames: Record<string, string> = {
  no: "Norsk",
  nn: "Nynorsk",
  da: "Dansk",
  sv: "Svenska",
  en: "English",
};

const localeFlags: Record<string, string> = {
  no: "🇳🇴",
  nn: "🇳🇴",
  da: "🇩🇰",
  sv: "🇸🇪",
  en: "🇬🇧",
};

function LocaleSwitcher() {
  const t = useTranslations("header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const switchLocale = (next: string) => {
    router.replace(pathname, { locale: next });
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={t("switchLanguage")}
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-brand-surface border border-brand-border text-brand-muted hover:text-brand-text hover:border-brand-border-strong transition-all"
      >
        <span>{localeFlags[locale]}</span>
        <span className="uppercase">{locale}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1.5 z-50">
          <div className="glass-border min-w-35 bg-brand-surface rounded-xl overflow-hidden shadow-xl">
          {routing.locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium transition-colors text-left ${
                loc === locale
                  ? "text-brand-accent bg-brand-accent-dim"
                  : "text-brand-muted hover:text-brand-text hover:bg-brand-surface-hover"
              }`}
            >
              <span>{localeFlags[loc]}</span>
              <span>{localeNames[loc]}</span>
              {loc === locale && (
                <svg
                  className="w-3 h-3 ml-auto text-brand-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </button>
          ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const t = useTranslations("header");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(9,13,17,0)", "rgba(9,13,17,0.92)"],
  );
  const headerBorder = useTransform(
    scrollY,
    [0, 80],
    ["rgba(172,184,193,0)", "rgba(172,184,193,0.08)"],
  );

  const navLinks = [
    { href: "/" as const, label: t("home") },
    { href: "/hudd-vs-others" as const, label: t("huddVsOthers") },
    { href: "/#faq" as const, label: t("faq") },
  ];

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl"
        style={{
          backgroundColor: headerBg,
          borderBottom: `1px solid`,
          borderColor: headerBorder,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 select-none">
              <div className="relative">
                <svg
                  width="72"
                  height="20"
                  viewBox="0 0 110 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <text
                    x="0"
                    y="28"
                    fontSize="32"
                    fontWeight="800"
                    fontFamily="Poppins, sans-serif"
                    fill="white"
                  >
                    HUDD
                  </text>
                </svg>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-brand-muted hover:text-brand-text transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop right: locale switcher + auth buttons */}
            <div className="hidden md:flex items-center gap-3">
              <LocaleSwitcher />
              <a
                href="https://hudd.no"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-sm font-medium text-brand-muted border border-brand-border rounded-xl hover:text-brand-text hover:border-brand-border-strong transition-all"
              >
                {t("login")}
              </a>
              <a
                href="https://hudd.no"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-sm font-semibold bg-brand-btn text-brand-bg rounded-xl hover:bg-brand-btn-hover transition-colors"
              >
                {t("signup")}
              </a>
            </div>

            {/* Mobile burger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }}
                className="block w-5 h-0.5 bg-brand-text origin-center transition-transform"
              />
              <motion.span
                animate={{ opacity: mobileOpen ? 0 : 1 }}
                className="block w-5 h-0.5 bg-brand-text"
              />
              <motion.span
                animate={{
                  rotate: mobileOpen ? -45 : 0,
                  y: mobileOpen ? -6 : 0,
                }}
                className="block w-5 h-0.5 bg-brand-text origin-center"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <motion.div
        className="fixed inset-0 z-40 md:hidden bg-brand-bg/95 backdrop-blur-xl pt-20"
        initial={false}
        animate={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "all" : "none",
        }}
        transition={{ duration: 0.2 }}
      >
        <nav className="flex flex-col items-center gap-6 pt-12">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={false}
              animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : 10 }}
              transition={{ duration: 0.25, delay: i * 0.06 }}
            >
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-semibold text-brand-text hover:text-brand-accent transition-colors"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}

          <motion.div
            className="flex flex-col items-center gap-4 mt-2"
            initial={false}
            animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : 10 }}
            transition={{ duration: 0.25, delay: 0.2 }}
          >
            <LocaleSwitcher />
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-4 mt-4"
            initial={false}
            animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : 10 }}
            transition={{ duration: 0.25, delay: 0.25 }}
          >
            <a
              href="https://hudd.no"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
              className="px-8 py-3 text-base font-semibold bg-brand-btn text-brand-bg rounded-xl"
            >
              {t("signup")}
            </a>
          </motion.div>
        </nav>
      </motion.div>
    </>
  );
}
