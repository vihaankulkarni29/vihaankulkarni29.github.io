"use client";

import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Dna, Target, Cpu, Globe, Code, Briefcase } from "lucide-react";
import StrategyTerminal from "@/components/StrategyTerminal";
import WorkDNA from "@/components/WorkDNA";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const cardData = [
  {
    name: "Bio-Automator (MutationScan)",
    title: "High-Throughput Genomics",
    desc: "Automated pipelines reducing manual point-mutation analysis from 3 weeks to 10 minutes.",
    icon: <Dna className="w-8 h-8" />,
  },
  {
    name: "Growth-Sniper (B2B Engine)",
    title: "Parallel-OSINT Lead Generation",
    desc: "Bypassing standard API limits to extract and verify C-level intelligence with zero bounce rates.",
    icon: <Target className="w-8 h-8" />,
  },
  {
    name: "HPC-Optimizer",
    title: "Memory-Safe Biophysics",
    desc: "Refactoring legacy Umbrella Sampling pipelines using chunk-based processing for massive membrane simulations.",
    icon: <Cpu className="w-8 h-8" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-950 flex flex-col items-center justify-center overflow-hidden">
      {/* Subtle Grid Pattern (Global) */}
      <div 
        className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #18181b 1px, transparent 1px),
            linear-gradient(to bottom, #18181b 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} 
      />
      
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center p-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl space-y-10"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1]">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-emerald-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Architecting Systems at the Intersection of Biology and Business.
            </span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-zinc-400 font-mono text-sm md:text-xl md:whitespace-nowrap">
            <span className="text-emerald-500 font-bold">{">"}</span>
            <p className="tracking-tight">
              Executing: <span className="text-zinc-100">High-Throughput Genomics</span> | <span className="text-zinc-100">B2B OSINT</span> | <span className="text-zinc-100">HPC Optimization</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 pt-6 items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-zinc-50 text-zinc-950 font-bold rounded-md hover:bg-white transition-all border-2 border-transparent hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] text-lg"
            >
              Initialize System Build
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border border-zinc-800 text-zinc-400 rounded-md hover:text-zinc-100 transition-all font-semibold text-lg"
            >
              View Architecture Logs
            </motion.button>
          </div>
        </motion.div>

        {/* Decorative Atmosphere (Hero Specific) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[600px] bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none -z-1" />
      </section>

      {/* Proof of Work Section (Bento Grid) */}
      <section className="relative z-10 w-full max-w-7xl px-6 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cardData.map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-2xl bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 transition-all hover:border-emerald-500/50 flex flex-col justify-between overflow-hidden h-full"
            >
              {/* Card Glow Effect */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/5 blur-[60px] rounded-full group-hover:bg-emerald-500/10 transition-all" />
              
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-lg bg-zinc-800/50 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:text-emerald-300 transition-colors">
                  {card.icon}
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-mono text-emerald-500 uppercase tracking-widest font-bold">
                    {card.name}
                  </p>
                  <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-white">
                    {card.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300">
                    {card.desc}
                  </p>
                </div>
              </div>
              
              <div className="pt-6">
                <div className="h-1 w-0 bg-emerald-500/50 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Work DNA Skill Tree Section */}
      <WorkDNA />

      {/* Strategy Terminal Section */}
      <StrategyTerminal />

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-7xl px-6 py-12 border-t border-zinc-900/50 mt-auto flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-500 text-sm font-mono">
        <div className="flex items-center gap-2">
          <span>Engineered by</span>
          <span className="text-zinc-300 font-bold tracking-tight">Vihaan Kulkarni</span>
          <span className="text-zinc-800 mx-1">|</span>
          <div className="flex items-center gap-1.5 text-zinc-400">
            Mumbai <Globe className="w-3.5 h-3.5 text-emerald-500" /> Global
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          <a href="https://github.com/vihaankulkarni29" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-all hover:scale-110" title="GitHub">
            <Code className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/vihaankulkarni" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-all hover:scale-110" title="LinkedIn">
            <Briefcase className="w-5 h-5" />
          </a>
        </div>
      </footer>

      {/* Global Background Atmosphere */}
      <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none -z-1" />
    </main>
  );
}
