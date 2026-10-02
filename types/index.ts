/**
 * Shared domain types for the site.
 *
 * These describe the *shape* of content only. The values live in `data/`,
 * and the components in `components/` consume both. Keeping them separate
 * means content can be edited without touching a component, and a component
 * can be refactored without touching content.
 */

/**
 * Key for a card glyph. Components map these to real icon components,
 * because a React component cannot be serialised into a data file.
 */
export type IconKey = "target" | "dna" | "cpu" | "sigma";

/** Grid footprint for a project card. Mapped to Tailwind classes by the component. */
export type SpanSize = "wide" | "narrow";

export interface ProjectImage {
  /** Path under /public, e.g. "/assets/images/wildtype_aligner.png" */
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  /** Short monospace label shown above the title, e.g. "Bio-Automator (MutationScan)". */
  name: string;
  title: string;
  description: string;
  icon: IconKey;
  span: SpanSize;
  image?: ProjectImage;
  /** Repository or live URL, if the project is public. */
  link?: string;
}

export interface Stat {
  id: string;
  label: string;
}

export interface SkillNode {
  id: string;
  label: string;
}

export interface BypassStep {
  id: string;
  label: string;
}

/** Icon glyph for a comparison metric. Resolved through the same map as IconKey. */
export type MetricIconKey = "zap" | "euro" | "trending";

export interface BypassMetric {
  id: string;
  label: string;
  value: string;
  icon: MetricIconKey;
}

/** The two pipelines compared in the Velocity Bypass section. */
export type BypassMode = "standard" | "vihaan";

export interface BypassComparison {
  standard: BypassStep[];
  vihaan: BypassStep[];
  metrics: Record<BypassMode, BypassMetric[]>;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  location: string;
  availability: string;
  links: {
    github: string;
    linkedin: string;
  };
}