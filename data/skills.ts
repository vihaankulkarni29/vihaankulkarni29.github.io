import type { SkillNode } from "@/types";

/**
 * DNA helix nodes in WorkDNA. Order matters: node index maps to the
 * tooltip position along the strand, and the helix geometry is derived
 * from this array's length.
 */
export const skills: SkillNode[] = [
  { id: "structural-bio", label: "Structural Biocomputation" },
  { id: "genomic-automation", label: "Genomic Pipeline Automation (MutationScan)" },
  { id: "hpc-memory", label: "HPC Memory Optimization" },
  { id: "predictive-modeling", label: "Predictive Modeling (HMMs & NNs)" },
  { id: "quant-market", label: "Quantitative Market Analysis" },
  { id: "osint", label: "Parallel OSINT Extraction" },
  { id: "b2b-pipeline", label: "B2B Pipeline Architecture" },
  { id: "systems-integration", label: "Systems Integration" },
  { id: "web-harvesting", label: "Automated Web Harvesting" },
  { id: "ui-ux", label: "Interactive UI/UX Engineering" },
];