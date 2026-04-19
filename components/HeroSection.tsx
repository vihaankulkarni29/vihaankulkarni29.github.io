"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative z-10 min-h-[85vh] w-full flex flex-col items-center justify-center p-6 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl space-y-12"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05]">
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-emerald-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            Architecting Systems at the Intersection of Biology and Business.
          </span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-zinc-500 font-mono text-sm md:text-xl md:whitespace-nowrap">
          <span className="text-emerald-500 font-bold">{">"}</span>
          <p className="tracking-tight uppercase font-semibold">
            Executing: <span className="text-zinc-300">High-Throughput Genomics</span> | <span className="text-zinc-300">B2B OSINT</span> | <span className="text-zinc-300">HPC Optimization</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 pt-8 items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 bg-zinc-50 text-zinc-950 font-bold rounded-md hover:bg-white transition-all border-2 border-transparent hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] text-lg uppercase tracking-widest"
          >
            Initialize System Build
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.03)" }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 border border-zinc-800 text-zinc-500 rounded-md hover:text-zinc-300 transition-all font-semibold text-lg uppercase tracking-widest"
          >
            View Architecture Logs
          </motion.button>
        </div>
      </motion.div>

      {/* Decorative Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[600px] bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none -z-1" />
    </section>
  );
}
