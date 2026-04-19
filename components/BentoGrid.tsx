"use client";

import { motion } from "framer-motion";
import { Dna, Target, Cpu } from "lucide-react";

const cardData = [
  {
    name: "Growth-Sniper (B2B Engine)",
    title: "Parallel-OSINT Lead Generation",
    desc: "Bypassing standard API limits to extract and verify C-level intelligence with zero bounce rates using custom architectural bypasses.",
    icon: <Target className="w-8 h-8" />,
    className: "md:col-span-2",
  },
  {
    name: "Bio-Automator (MutationScan)",
    title: "High-Throughput Genomics",
    desc: "Automated pipelines reducing manual point-mutation analysis from 3 weeks to 10 minutes.",
    icon: <Dna className="w-8 h-8" />,
    className: "md:col-span-1",
  },
  {
    name: "HPC-Optimizer",
    title: "Memory-Safe Biophysics",
    desc: "Refactoring legacy Umbrella Sampling pipelines using chunk-based processing for massive membrane simulations.",
    icon: <Cpu className="w-8 h-8" />,
    className: "md:col-span-1",
  },
   {
    name: "Edge-Systems",
    title: "Real-time Node Monitoring",
    desc: "Distributed health monitoring for decentralized high-performance computing clusters.",
    icon: <div className="w-8 h-8 flex items-center justify-center font-bold text-lg text-emerald-500">Σ</div>,
    className: "md:col-span-2",
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

import { SpotlightCard } from "./SpotlightCard";

function BentoCard({ card }: { card: typeof cardData[0] }) {
  return (
    <motion.div variants={itemVariants} className={card.className}>
      <SpotlightCard className="h-full p-8 flex flex-col justify-between group">
        <div className="space-y-4">
          <div className="p-3 w-fit rounded-lg bg-zinc-900 border border-white/5 text-zinc-500 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-all">
            {card.icon}
          </div>
          <div className="space-y-2">
            <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em] font-bold group-hover:text-emerald-500/70 transition-colors">
              {card.name}
            </p>
            <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-white">
              {card.title}
            </h3>
            <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              {card.desc}
            </p>
          </div>
        </div>
        
        <div className="pt-8">
          <div className="h-px w-full bg-zinc-800/50 group-hover:bg-emerald-500/30 transition-all" />
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

export default function BentoGrid() {
  return (
    <div className="w-full max-w-7xl px-6 bg-black">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {cardData.map((card, idx) => (
          <BentoCard key={idx} card={card} />
        ))}
      </motion.div>
    </div>
  );
}
