"use client";

import { motion } from "framer-motion";

const stats = [
  "99.9% Pipeline Uptime",
  "1.2M+ Data Points Processed",
  "100% Accuracy Threshold",
  "Zero-Cost Infrastructure Stack",
  "High-Throughput Parallelization",
  "Biomedical Data Integrity",
  "OSINT Intelligence Verified"
];

export default function StatsMarquee() {
  return (
    <div className="w-full border-y border-zinc-900 bg-zinc-950 flex items-center h-12 overflow-hidden">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex whitespace-nowrap gap-16 px-8"
      >
        {[...stats, ...stats].map((stat, i) => (
          <span 
            key={i} 
            className="text-zinc-700 text-[9px] font-mono font-bold uppercase tracking-[0.4em] flex items-center gap-2"
          >
            <div className="w-1 h-1 bg-emerald-500/20 rounded-full" />
            {stat}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
