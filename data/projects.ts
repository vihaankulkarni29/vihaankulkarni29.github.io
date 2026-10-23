import type { Project } from "@/types";

/**
 * Proof-of-work cards.
 *
 * `featured` drives visual emphasis (border + glow), not grid span. Cards
 * are laid out on an equal-width grid, so adding a project never leaves a
 * gap in the row.
 *
 * Cards are text-only for now. `Project` has no image field; when
 * screenshots are ready, add one back to the type and render it with
 * next/image using explicit width/height.
 */
export const projects: Project[] = [
  {
    id: "mutationscan",
    title: "MutationScan: Automated AMR Profiling",
    role: "Lead Architect",
    techStack: ["Python", "PyTorch", "Scikit-learn", "Biopython"],
    description:
      "An end-to-end computational pipeline integrating genomic alignment, antimicrobial resistance profiling, and machine learning-based mutation predictors for bacterial stress-adaptation analysis.",
    githubLink: "https://github.com/vihaankulkarni29/MutationScan",
    featured: true,
  },
  {
    id: "structural-suite",
    title: "Structural Bioinformatics Automation Suite",
    role: "Developer",
    techStack: ["Python", "PyMOL", "MDAnalysis", "EMBOSS"],
    description:
      "A modular toolkit encompassing PyMol-Automator, SubScan, and WildTypeAligner. Designed to eliminate manual bottlenecks in amino acid sequence alignment and biophysical structure visualization.",
    githubLink: "https://github.com/vihaankulkarni29",
    featured: true,
  },
  {
    id: "rescue-sync",
    title: "RescuE-Sync Spatial API",
    role: "Full-Stack Developer",
    techStack: ["FastAPI", "PostGIS", "PostgreSQL", "Python"],
    description:
      "A spatial-query backend and location-based bot handling real-time routing for NGOs and emergency veterinary clinics using advanced geographic information systems (GIS).",
    githubLink: "https://github.com/vihaankulkarni29/RescuE-Sync",
    featured: false,
  },
  {
    id: "autosim-cvcf",
    title: "AutoSIM CVCF Streaming Refactor (TIFR)",
    role: "Scientific Software Engineer",
    techStack: ["Python", "NumPy", "BioPython"],
    description:
      "A streaming variant-calling accelerator for the mTORC1 complex. Replaced a 16.7 GB RAM coordinate buffer with an O(1)-memory accumulator, cutting peak memory by 237x and enabling whole-chromosome analysis on a single node.",
    // TODO(vihaan): link to the dedicated repo once published.
    githubLink: "https://github.com/vihaankulkarni29",
    featured: true,
  },
  {
    id: "rfrncs-crm",
    title: "RFRNCS Agency CRM",
    role: "Full-Stack Developer",
    techStack: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    description:
      "A full-stack B2B agency CRM built in Next.js with Supabase, featuring automated lead ingestion, deal tracking, and real-time financial reporting.",
    // TODO(vihaan): link to the dedicated repo once published.
    githubLink: "https://github.com/vihaankulkarni29",
    featured: false,
  },
  {
    id: "healthbot",
    title: "HealthBot",
    role: "AI Engineer",
    techStack: ["FastAPI", "Streamlit", "Hugging Face"],
    description:
      "A public-health chatbot serving medication and symptom guidance via a FastAPI backend and Streamlit UI, deployed on Hugging Face.",
    // TODO(vihaan): link to the dedicated repo once published.
    githubLink: "https://github.com/vihaankulkarni29",
    featured: false,
  },
];