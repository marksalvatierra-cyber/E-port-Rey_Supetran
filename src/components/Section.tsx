import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 animate-slide-up">
      <div className="mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground">{title}</h2>
        {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
      </div>
      <div className="bg-card rounded-xl shadow-card border border-border p-5 sm:p-7 text-sm sm:text-[15px] leading-relaxed text-foreground/90">
        {children}
      </div>
    </section>
  );
}
