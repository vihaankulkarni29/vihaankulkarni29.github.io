"use client";

import { SectionTitle, SectionWrapper } from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import StatsMarquee from "@/components/StatsMarquee";
import BentoGrid from "@/components/BentoGrid";
import ArchitectureBypass from "@/components/ArchitectureBypass";
import WorkDNA from "@/components/WorkDNA";
import StrategyTerminal from "@/components/StrategyTerminal";
import { Code, Briefcase, Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-950 flex flex-col items-center overflow-hidden">
      {/* Global Atmosphere (Subtle) */}
      <div 
        className="fixed inset-0 z-0 opacity-[0.15] pointer-events-none" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #18181b 1px, transparent 1px),
            linear-gradient(to bottom, #18181b 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} 
      />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Stats Marquee */}
      <StatsMarquee />

      {/* 3. Proof of Work */}
      <SectionWrapper>
        <SectionTitle 
          title="Proof of Work" 
          subtitle="Complex architectures deployed in the wild." 
        />
        <BentoGrid />
      </SectionWrapper>

      {/* 4. The Velocity Bypass */}
      <SectionWrapper>
        <SectionTitle 
          title="The Velocity Bypass" 
          subtitle="Why standard market approaches fail." 
        />
        <ArchitectureBypass />
      </SectionWrapper>

      {/* 5. System DNA */}
      <SectionWrapper>
        <SectionTitle 
          title="System DNA" 
          subtitle="Capabilities driving the architecture." 
        />
        <WorkDNA />
      </SectionWrapper>

      {/* 6. Initialize Sequence */}
      <SectionWrapper>
        <SectionTitle 
          title="Initialize Sequence" 
          subtitle="Drop your operational bottleneck below for a custom architecture." 
        />
        <StrategyTerminal />
      </SectionWrapper>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-7xl px-6 py-16 border-t border-zinc-900 mt-auto flex flex-col md:flex-row items-center justify-between gap-8 text-zinc-600 text-sm font-mono">
        <div className="flex items-center gap-3">
          <span className="uppercase tracking-widest text-[10px] bg-zinc-900 px-2 py-1 rounded">VHN_ENGINEERING</span>
          <span className="text-zinc-400 font-bold">Vihaan Kulkarni</span>
          <span className="text-zinc-800">|</span>
          <div className="flex items-center gap-1.5">
            Mumbai <Globe className="w-3.5 h-3.5 text-emerald-600" /> Global
          </div>
        </div>
        
        <div className="flex items-center gap-10">
          <a href="https://github.com/vihaankulkarni29" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-200 transition-colors">
            <Code className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/vihaankulkarni" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-200 transition-colors">
            <Briefcase className="w-5 h-5" />
          </a>
        </div>
      </footer>

      {/* Global Background Glow (Very Subtle) */}
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-emerald-500/[0.02] blur-[150px] rounded-full pointer-events-none -z-1" />
    </main>
  );
}
