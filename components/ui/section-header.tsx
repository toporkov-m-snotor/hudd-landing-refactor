import { FadeIn } from "@/components/ui/fade-in";

type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeader(props: SectionHeaderProps) {
  const { label, title, description, centered = false, className } = props;
  return (
    <div
      className={`flex flex-col gap-4 ${centered ? "items-center text-center" : ""} ${className ?? ""}`}
    >
      {label && (
        <FadeIn>
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-brand-accent bg-brand-accent-dim rounded-full border border-brand-accent/20">
            {label}
          </span>
        </FadeIn>
      )}
      <FadeIn delay={0.05}>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-brand-text max-w-3xl">
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.1}>
          <p className="text-brand-muted text-lg leading-relaxed max-w-2xl">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
