import type { Project } from "@/types";

/**
 * Proof-of-work cards.
 *
 * `featured` drives visual emphasis (border + glow), not grid span. Cards
 * are laid out on an equal-width grid, so adding a project never leaves a
 * gap in the row.
 *
 * `image` is optional and only set where a screenshot genuinely belongs to
 * that project. Cards without one render text-only, so the row stays even.
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
    image: {
      src: "/assets/images/wildtype_aligner.png",
      alt: "WildTypeAligner sequence alignment output within the Structural Bioinformatics Automation Suite",
      width: 1235,
      height: 761,
    },
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
];