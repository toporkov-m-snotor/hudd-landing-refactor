"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { href: "/", label: "Hjem" },
  { href: "/hudd-vs-others", label: "Hudd vs de andre" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
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

            {/* Auth buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="https://hudd.no"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-sm font-medium text-brand-muted hover:text-brand-text transition-colors"
              >
                Logg inn
              </Link>
              <Link
                href="https://hudd.no"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-sm font-semibold bg-brand-btn text-brand-bg rounded-xl hover:bg-brand-btn-hover transition-colors"
              >
                Opprett bruker
              </Link>
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
            className="flex flex-col items-center gap-4 mt-6"
            initial={false}
            animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : 10 }}
            transition={{ duration: 0.25, delay: 0.2 }}
          >
            <Link
              href="https://hudd.no"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
              className="px-8 py-3 text-base font-semibold bg-brand-btn text-brand-bg rounded-xl"
            >
              Opprett bruker
            </Link>
          </motion.div>
        </nav>
      </motion.div>
    </>
  );
}
