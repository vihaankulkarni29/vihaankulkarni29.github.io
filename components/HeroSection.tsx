"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Hero3D from "./Hero3D";
import Magnetic from "./Magnetic";

export default function HeroSection() {
  return (
    <section className="relative min-h-[95vh] w-full flex flex-col items-center justify-center p-6 text-center overflow-hidden bg-zinc-950">
      <Hero3D />
      
      {/* 1. Terminal Status (Top Center) */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20 h-6 flex items-center justify-center text-[10px] md:text-xs text-emerald-500 font-mono tracking-[0.3em] uppercase opacity-60">
        <TerminalTyping />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center space-y-8"
      >
        <div className="space-y-6">
          <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black tracking-tighter leading-[0.85] text-zinc-50 uppercase font-sans text-center">
            Architecting<br />Systems.
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl font-light tracking-wide max-w-3xl mx-auto text-center leading-relaxed">
            From predictive biocomputation models to high-throughput commercial architectures. Engineered for <span className="text-zinc-100 italic">maximum velocity</span>, absolute precision, and optimal capital efficiency.
          </p>
        </div>

        <div className="flex flex-col items-center pt-16">
          <p className="text-zinc-500 text-[10px] md:text-xs font-mono tracking-[0.4em] uppercase mb-6 opacity-80">
            The architecture is ready. All you have to do is set up a call.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <Magnetic strength={0.3}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-14 py-6 bg-zinc-50 text-zinc-950 font-bold rounded-full hover:bg-white transition-all shadow-[0_0_50px_rgba(255,255,255,0.15)] text-xs md:text-sm uppercase tracking-widest"
              >
                Schedule Architecture Review
              </motion.button>
            </Magnetic>
            
            <Magnetic strength={0.3}>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="px-14 py-6 border border-zinc-800 text-zinc-400 rounded-full hover:text-zinc-200 transition-all font-semibold text-xs md:text-sm uppercase tracking-widest backdrop-blur-sm"
              >
                View Architecture Logs
              </motion.button>
            </Magnetic>
          </div>
        </div>
      </motion.div>

      {/* Decorative Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-[800px] bg-emerald-900/[0.04] blur-[160px] rounded-full pointer-events-none -z-1" />
    </section>
  );
}

const TERMINAL_SEQUENCE = [
  "> INITIALIZING ENVIRONMENT...",
  "> LOADING GENOMIC MODELS...",
  "> BYPASSING API LIMITS...",
  "> SYSTEM READY.",
];

function TerminalTyping() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = TERMINAL_SEQUENCE[index];
      
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText === fullText) {
          if (index === TERMINAL_SEQUENCE.length - 1) return;
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % TERMINAL_SEQUENCE.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 30 : 70);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index]);

  return (
    <div className="flex items-center gap-2">
      <span className="min-w-[2ch]">{displayText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="w-2 h-5 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
      />
    </div>
  );
}
