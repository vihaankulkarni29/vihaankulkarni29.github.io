import { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

import { KineticHeader } from "./KineticHeader";

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <KineticHeader>
      <div className="w-full max-w-7xl mx-auto px-6 mb-12 space-y-1">
        <h2 className="text-3xl md:text-4xl font-black text-zinc-100 uppercase tracking-tighter">
          {title}
        </h2>
        <p className="text-zinc-500 font-mono text-xs md:text-sm uppercase tracking-[0.2em] font-medium">
          {subtitle}
        </p>
      </div>
    </KineticHeader>
  );
}

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <section 
      id={id}
      className={`w-full py-24 md:py-32 bg-zinc-950 flex flex-col items-center ${className}`}
    >
      {children}
    </section>
  );
}
