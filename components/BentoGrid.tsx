"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

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

function BentoCard({ card }: { card: Project }) {
  return (
    <motion.div variants={itemVariants} className="h-full">
      <SpotlightCard
        className="h-full p-8 flex flex-col justify-between group"
        spotlightColor={
          card.featured ? "rgba(16, 185, 129, 0.14)" : "rgba(16, 185, 129, 0.06)"
        }
      >
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <p
              className={`text-[10px] font-mono uppercase tracking-[0.2em] font-bold transition-colors ${
                card.featured
                  ? "text-emerald-500/70"
                  : "text-zinc-600 group-hover:text-emerald-500/70"
              }`}
            >
              {card.role}
            </p>
            <a
              href={card.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${card.title} on GitHub`}
              className="shrink-0 text-zinc-700 transition-colors group-hover:text-emerald-500"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {card.image && (
            <div className="relative w-full overflow-hidden rounded-lg border border-white/5 bg-zinc-950">
              <Image
                src={card.image.src}
                alt={card.image.alt}
                width={card.image.width}
                height={card.image.height}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="w-full h-auto opacity-80 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>
          )}

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-white">
              {card.title}
            </h3>
            <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              {card.description}
            </p>
          </div>
        </div>

        <div className="pt-8 space-y-4">
          <ul className="flex flex-wrap gap-2">
            {card.techStack.map((tech) => (
              <li
                key={tech}
                className="px-2 py-1 rounded border border-white/5 bg-zinc-900/60 text-[10px] font-mono uppercase tracking-wider text-zinc-500 transition-colors group-hover:border-emerald-500/20 group-hover:text-zinc-400"
              >
                {tech}
              </li>
            ))}
          </ul>
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
        {projects.map((card) => (
          <BentoCard key={card.id} card={card} />
        ))}
      </motion.div>
    </div>
  );
}