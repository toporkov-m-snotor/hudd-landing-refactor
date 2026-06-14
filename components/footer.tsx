import Link from "next/link";

const footerLinks = [
  { label: "Retningslinjer for personvern", href: "/privacy-policy" },
  { label: "Vilkår for bruk", href: "/terms-of-use" },
  { label: "Hjelp", href: "mailto:support@hudd.no" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-brand-text tracking-tight">HUDD</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-brand-subtle hover:text-brand-muted transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-brand-subtle">
            © {year} Hudd. Alle rettigheter reservert.
          </p>
        </div>
      </div>
    </footer>
  );
}
