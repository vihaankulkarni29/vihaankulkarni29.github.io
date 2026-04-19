"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, Euro } from "lucide-react";

const standardSteps = [
  "Data Broker Subscriptions",
  "Manual SDR Searching",
  "Human Verification",
  "Spreadsheet Formatting",
  "Outreach"
];

const vihaanSteps = [
  "Parallel OSINT Extraction",
  "Automated SMTP Engine",
  "Next.js CRM Injection"
];

const metrics = {
  standard: [
    { label: "Time to Delivery", value: "3 Weeks", icon: <Zap size={18} /> },
    { label: "Infrastructure Cost", value: "€10,000/yr", icon: <Euro size={18} /> },
    { label: "Lead Accuracy", value: "70%", icon: <TrendingUp size={18} /> },
  ],
  vihaan: [
    { label: "Time to Delivery", value: "24 Hours", icon: <Zap size={18} /> },
    { label: "Infrastructure Cost", value: "€0 (Custom Stack)", icon: <Euro size={18} /> },
    { label: "Lead Accuracy", value: "100% (Zero-Bounce)", icon: <TrendingUp size={18} /> },
  ]
};

export default function ArchitectureBypass() {
  const [mode, setMode] = useState<"standard" | "vihaan">("vihaan");

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24 relative z-10">
      <div className="flex flex-col items-center space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-zinc-100 uppercase tracking-tight">
            Velocity Bypass <span className="text-emerald-500">ROI</span>
          </h2>
          <p className="text-zinc-500 font-mono text-sm max-w-2xl mx-auto uppercase tracking-wide">
             Comparing generic agency workflows against high-throughput automated architectures.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="relative p-1 bg-zinc-900 border border-zinc-800 rounded-full flex items-center">
          <button
            onClick={() => setMode("standard")}
            className={`relative px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors z-10 ${mode === "standard" ? "text-zinc-950" : "text-zinc-500 hover:text-zinc-300"}`}
          >
            Standard Market Agency
            {mode === "standard" && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-zinc-50 rounded-full -z-1"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
          <button
            onClick={() => setMode("vihaan")}
            className={`relative px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors z-10 ${mode === "vihaan" ? "text-zinc-950" : "text-zinc-500 hover:text-zinc-300"}`}
          >
            Vihaan Architecture
            {mode === "vihaan" && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-emerald-500 rounded-full -z-1"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        </div>

        {/* Pipeline Display */}
        <div className="w-full min-h-[160px] flex items-center justify-center py-10">
          <AnimatePresence mode="wait">
            {mode === "standard" ? (
              <motion.div
                key="standard-flow"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="flex flex-wrap items-center justify-center gap-4"
              >
                {standardSteps.map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="px-5 py-3 border border-dotted border-zinc-700 rounded-lg text-zinc-500 text-xs font-mono uppercase tracking-tight">
                      {step}
                    </div>
                    {i < standardSteps.length - 1 && <ArrowRight size={14} className="text-zinc-800" />}
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="vihaan-flow"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="flex flex-wrap items-center justify-center gap-6"
              >
                {vihaanSteps.map((step, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="px-6 py-4 bg-emerald-500/10 border border-emerald-500/50 rounded-xl text-emerald-400 text-sm font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                    >
                      {step}
                    </motion.div>
                    {i < vihaanSteps.length - 1 && <ArrowRight size={16} className="text-emerald-500/50 animate-pulse" />}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {metrics[mode].map((stat, i) => (
            <motion.div
              key={`${mode}-${stat.label}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`p-6 rounded-2xl border transition-all ${mode === "vihaan" ? "bg-zinc-900 border-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.02)]" : "bg-zinc-900/50 border-zinc-800"}`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${mode === "vihaan" ? "bg-emerald-500/10 text-emerald-400" : "bg-zinc-800 text-zinc-500"}`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-mono">
                    {stat.label}
                  </p>
                  <p className={`text-xl font-black tracking-tight ${mode === "vihaan" ? "text-emerald-400" : "text-zinc-300"}`}>
                    {stat.value}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Atmosphere */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-xl max-h-64 rounded-full blur-[140px] pointer-events-none transition-colors duration-1000 ${mode === "vihaan" ? "bg-emerald-500/5" : "bg-zinc-500/5"}`} />
    </section>
  );
}
