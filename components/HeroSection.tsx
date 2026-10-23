"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Magnetic from "./Magnetic";
import { site } from "@/data/site";

/**
 * three.js / @react-three/fiber / @react-three/drei together are ~1 MB of
 * chunk. Loading them on the critical path blocks the headline from
 * painting, so the canvas is split out and only requested after mount.
 *
 * ssr: false keeps WebGL out of the server render entirely; the mounted
 * gate keeps it out of the initial client chunk too, so it cannot delay
 * hydration. The placeholder preserves the hero's layout box either way.
 */
const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

function HeroCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true" />;
  }

  return <Hero3D />;
}

export default function HeroSection() {
  // Until site.contact.schedulingUrl is filled in the primary CTA has nowhere
  // to go, so it renders visibly disabled instead of a button that swallows
  // the click. Falls back to mailto: if only an address is configured.
  const { schedulingUrl, email } = site.contact;
  const primaryCta = schedulingUrl
    ? { href: schedulingUrl, external: true, disabled: false }
    : email
      ? {
          href: `mailto:${email}?subject=Architecture%20Review`,
          external: false,
          disabled: false,
        }
      : { href: "#", external: false, disabled: true };

  return (
    <section className="relative min-h-[95vh] w-full flex flex-col items-center justify-center p-6 text-center overflow-hidden bg-zinc-950">
<HeroCanvas />
      
      {/* 1. Terminal Status (Top Center) */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20 h-6 flex items-center justify-center text-[10px] md:text-xs text-emerald-500 font-mono tracking-[0.3em] uppercase opacity-60">
        <TerminalTyping />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center space-y-8"
      >
        <div className="space-y-6 w-full text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Bridging Computational Biology & Software Engineering</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-zinc-50 font-sans text-center px-4 leading-tight">
            Building algorithms that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">decode biology</span> <br className="hidden md:block" />
            and systems that <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">scale.</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl font-light tracking-wide max-w-3xl mx-auto text-center leading-relaxed">
            From predictive biocomputation models to high-throughput commercial architectures. Engineered for <span className="text-zinc-100 italic">maximum velocity</span>, absolute precision, and optimal capital efficiency.
          </p>
        </div>

        <div className="flex flex-col items-center pt-16">
          <p className="text-zinc-500 text-[10px] md:text-xs font-mono tracking-[0.4em] uppercase mb-6 opacity-80">
            {site.availability}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <Magnetic strength={0.3}>
              <motion.a
                href={primaryCta.href}
                target={primaryCta.external ? "_blank" : undefined}
                rel={primaryCta.external ? "noopener noreferrer" : undefined}
                aria-disabled={primaryCta.disabled || undefined}
                onClick={primaryCta.disabled ? (e) => e.preventDefault() : undefined}
                whileHover={primaryCta.disabled ? undefined : { scale: 1.05 }}
                whileTap={primaryCta.disabled ? undefined : { scale: 0.95 }}
                className={`px-14 py-6 bg-zinc-50 text-zinc-950 font-bold rounded-full transition-all text-xs md:text-sm uppercase tracking-widest ${
                  primaryCta.disabled
                    ? "opacity-40 cursor-not-allowed shadow-none"
                    : "hover:bg-white shadow-[0_0_50px_rgba(255,255,255,0.15)]"
                }`}
              >
                Schedule Architecture Review
              </motion.a>
            </Magnetic>

            <Magnetic strength={0.3}>
              <motion.a
                href={`#${site.contact.logsAnchor}`}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="px-14 py-6 border border-zinc-800 text-zinc-400 rounded-full hover:text-zinc-200 transition-all font-semibold text-xs md:text-sm uppercase tracking-widest backdrop-blur-sm"
              >
                View Architecture Logs
              </motion.a>
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
