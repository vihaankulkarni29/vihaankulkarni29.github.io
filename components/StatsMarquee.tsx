"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/stats";
import { usePrefersReducedMotion } from "@/lib/motion";

export default function StatsMarquee() {
  // Pause the ticker for users who request reduced motion (WCAG 2.2.2).
  const reduced = usePrefersReducedMotion();

  return (
    <div className="w-full border-y border-zinc-900 bg-zinc-950 flex items-center h-12 overflow-hidden">
      <motion.div
        animate={{ x: reduced ? "0%" : ["0%", "-50%"] }}
        transition={{ duration: reduced ? 0 : 30, repeat: reduced ? 0 : Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-16 px-8"
      >
        {[...stats, ...stats].map((stat, i) => (
          <span
            key={i}
            className="text-zinc-700 text-[9px] font-mono font-bold uppercase tracking-[0.4em] flex items-center gap-2"
          >
            <div className="w-1 h-1 bg-emerald-500/20 rounded-full" />
            {stat.label}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
