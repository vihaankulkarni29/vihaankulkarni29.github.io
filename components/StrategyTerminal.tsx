"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, ChevronRight } from "lucide-react";

export default function StrategyTerminal() {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<"idle" | "analyzing" | "captured">("idle");
  const [loadingStep, setLoadingStep] = useState(0);

  const steps = [
    "> Initializing System Analysis...",
    "> Identifying Inefficiencies...",
    "> Compiling Automated Architecture...",
    "> SUCCESS. Playbook Ready."
  ];

  const handleGenerate = () => {
    if (!input.trim()) return;
    setStatus("analyzing");
    setLoadingStep(0);
  };

  useEffect(() => {
    if (status === "analyzing") {
      if (loadingStep < steps.length - 1) {
        const timer = setTimeout(() => {
          setLoadingStep((prev) => prev + 1);
        }, 1200);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setStatus("captured");
        }, 1500);
        return () => clearTimeout(timer);
      }
    }
  }, [status, loadingStep, steps.length]);

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-20 relative z-10">
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden shadow-2xl shadow-emerald-500/5">
        {/* Terminal Header */}
        <div className="bg-zinc-900/50 px-4 py-2 border-b border-zinc-800 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          </div>
          <span className="text-zinc-500 text-[10px] uppercase tracking-widest font-mono ml-2">
            strategy-compiler-v1.0
          </span>
        </div>

        {/* Terminal Content */}
        <div className="p-8 font-mono text-sm md:text-base min-h-[400px] flex flex-col bg-zinc-950/50 backdrop-blur-3xl">
          <AnimatePresence mode="wait">
            {status === "idle" && (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6 flex-1 flex flex-col"
              >
                <div className="flex items-center gap-2 text-emerald-400">
                  <ChevronRight size={18} className="animate-pulse" />
                  <span className="text-emerald-500/80 uppercase tracking-tight">System Input Required:</span>
                </div>
                <textarea
                  className="w-full bg-transparent border-none focus:ring-0 text-zinc-100 placeholder:text-zinc-800 resize-none flex-1 min-h-[200px] leading-relaxed"
                  placeholder="Describe your operational bottleneck or data goal (e.g., I need to find the direct emails of 200 European SaaS founders...)"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  autoFocus
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGenerate}
                  className="self-end px-8 py-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-md hover:bg-emerald-500/20 transition-all flex items-center gap-3 group font-bold uppercase tracking-widest text-xs"
                >
                  Generate Architecture
                  <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </motion.div>
            )}

            {status === "analyzing" && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4 flex-1 pt-4"
              >
                {steps.slice(0, loadingStep + 1).map((step, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={i === steps.length - 1 ? "text-cyan-400 font-bold shadow-cyan-500/50" : "text-emerald-500/90"}
                  >
                    {step}
                  </motion.p>
                ))}
                {loadingStep < steps.length - 1 && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2 h-5 bg-emerald-500 ml-1 translate-y-1"
                  />
                )}
              </motion.div>
            )}

            {status === "captured" && (
              <motion.div
                key="captured"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex-1 flex flex-col items-center justify-center text-center space-y-8"
              >
                <div className="p-5 bg-emerald-500/10 rounded-full text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                  <CheckCircle2 size={56} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl text-zinc-100 font-black uppercase tracking-[0.2em]">
                    Architecture Compiled
                  </h3>
                  <p className="text-zinc-500 max-w-md mx-auto leading-relaxed">
                    Strategy and implementation playbook has been generated. Enter your work email to receive the direct access link.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row w-full max-w-md gap-3 pt-4">
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="flex-1 bg-zinc-900/50 border border-zinc-800 rounded-md px-5 py-4 focus:outline-none focus:border-emerald-500/50 text-zinc-100 transition-all font-mono placeholder:text-zinc-700"
                  />
                  <button className="px-8 py-4 bg-zinc-50 text-zinc-950 font-black rounded-md hover:bg-white transition-all uppercase tracking-widest text-xs">
                    Access
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Background Decorative Glow */}
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-500/5 blur-[100px] pointer-events-none" />
    </section>
  );
}
