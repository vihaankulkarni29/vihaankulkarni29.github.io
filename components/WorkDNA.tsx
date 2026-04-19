"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  "Structural Biocomputation",
  "Genomic Pipeline Automation (MutationScan)",
  "HPC Memory Optimization",
  "Predictive Modeling (HMMs & NNs)",
  "Quantitative Market Analysis",
  "Parallel OSINT Extraction",
  "B2B Pipeline Architecture",
  "Systems Integration",
  "Automated Web Harvesting",
  "Interactive UI/UX Engineering",
];

interface NodeData {
  id: number;
  y: number;
}

export default function WorkDNA() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Constants for the helix
  const nodesCount = 10;
  const height = 600;
  const width = 200;
  const amplitude = 60;

  // Pre-calculate node positions along the sine wave
  const nodes = useMemo(() => {
    return Array.from({ length: nodesCount }).map((_, i) => {
      const y = (height / (nodesCount + 1)) * (i + 1);
      return { y, id: i };
    });
  }, [nodesCount, height]);

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
      {/* Label and Info */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <div className="space-y-2">
          <p className="font-mono text-emerald-500 font-bold tracking-widest text-sm uppercase">
            {">"} INIT: VIHAAN_WORK_DNA.sh
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-100 uppercase tracking-tight leading-tight">
            Problem solving isn&apos;t just what I do. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              It&apos;s in my DNA.
            </span>
          </h2>
        </div>
        <p className="text-zinc-500 font-mono text-sm max-w-md mx-auto md:mx-0">
          The following sequence represents the core architectural building blocks of my engineering philosophy.
          Hover over the nodes to decode the strand.
        </p>
      </div>

      {/* DNA Helix Component */}
      <div className="relative w-full max-w-[300px] h-[600px] flex items-center justify-center">
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          className="overflow-visible"
        >
          {/* Animated DNA Strands and Nodes */}
          <DNAStrand 
            nodes={nodes} 
            amplitude={amplitude} 
            offset={0} 
            color="#10b981" 
            hoveredIdx={hoveredIdx}
            setHoveredIdx={setHoveredIdx}
            width={width}
          />
          <DNAStrand 
            nodes={nodes} 
            amplitude={amplitude} 
            offset={Math.PI} 
            color="#06b6d4" 
            hoveredIdx={hoveredIdx}
            setHoveredIdx={setHoveredIdx}
            width={width}
          />
        </svg>

        {/* Floating Tooltips */}
        <AnimatePresence>
          {hoveredIdx !== null && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              className="absolute left-[80%] z-50 pointer-events-none"
              style={{ top: nodes[hoveredIdx].y - 20 }}
            >
              <div className="bg-zinc-900 border border-emerald-500/30 p-4 rounded-lg shadow-2xl shadow-emerald-500/10 min-w-[240px] backdrop-blur-xl">
                <p className="text-[10px] text-emerald-500 font-mono font-black uppercase tracking-tighter mb-1">
                  STRAND_DECODED [HEX_{hoveredIdx.toString(16).toUpperCase()}]
                </p>
                <p className="text-zinc-100 font-bold text-sm tracking-tight leading-snug">
                  {skills[hoveredIdx]}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

interface DNAStrandProps {
  nodes: NodeData[];
  amplitude: number;
  offset: number;
  color: string;
  hoveredIdx: number | null;
  setHoveredIdx: (idx: number | null) => void;
  width: number;
}

function DNAStrand({ nodes, amplitude, offset, color, hoveredIdx, setHoveredIdx, width }: DNAStrandProps) {
  return (
    <g>
      {nodes.map((node, idx) => (
        <RenderNode 
          key={node.id} 
          node={node} 
          idx={idx}
          amplitude={amplitude} 
          offset={offset} 
          color={color}
          width={width}
          setHoveredIdx={setHoveredIdx}
          isHovered={hoveredIdx === idx}
        />
      ))}
    </g>
  );
}

interface RenderNodeProps {
  node: NodeData;
  idx: number;
  amplitude: number;
  offset: number;
  color: string;
  width: number;
  setHoveredIdx: (idx: number | null) => void;
  isHovered: boolean;
}

function RenderNode({ node, idx, amplitude, offset, color, width, setHoveredIdx, isHovered }: RenderNodeProps) {
  return (
    <motion.circle
      cx={width / 2}
      cy={node.y}
      r={isHovered ? 8 : 4}
      fill={color}
      className="cursor-pointer"
      onMouseEnter={() => setHoveredIdx(idx)}
      onMouseLeave={() => setHoveredIdx(null)}
      animate={{
        x: isHovered ? (offset === 0 ? amplitude : -amplitude) : [amplitude, -amplitude, amplitude],
        opacity: [0.8, 1, 0.8],
        scale: isHovered ? 1.5 : 1,
      }}
      transition={{
        x: {
          duration: isHovered ? 0 : 3,
          repeat: isHovered ? Infinity : Infinity, // Changed repeat to handle the cycle better
          ease: "easeInOut",
          delay: idx * 0.2 + (offset === 0 ? 0 : 1.5),
        },
        opacity: {
          duration: 2,
          repeat: Infinity,
        }
      }}
      style={{
        filter: isHovered ? `drop-shadow(0 0 12px ${color})` : `drop-shadow(0 0 4px ${color})`,
      }}
    />
  );
}
