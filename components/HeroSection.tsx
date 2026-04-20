"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";
import { useState, useEffect } from "react";
import Hero3D from "./Hero3D";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] w-full flex flex-col items-center justify-center p-6 text-center overflow-hidden">
      <Hero3D />
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

        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-emerald-400 font-mono text-sm md:text-xl md:whitespace-nowrap h-8">
          <TerminalTyping />
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

function TerminalTyping() {
  const sequence = [
    "> INITIALIZING ENVIRONMENT...",
    "> LOADING GENOMIC MODELS...",
    "> BYPASSING API LIMITS...",
    "> SYSTEM READY.",
  ];
  
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = sequence[index];
      
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText === fullText) {
          if (index === sequence.length - 1) return;
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % sequence.length);
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
