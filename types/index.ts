/**
 * Shared domain types for the site.
 *
 * These describe the *shape* of content only. The values live in `data/`,
 * and the components in `components/` consume both. Keeping them separate
 * means content can be edited without touching a component, and a component
 * can be refactored without touching content.
 */

export interface Project {
  id: string;
  title: string;
  role: string;
  techStack: string[];
  description: string;
  githubLink: string;
  /** Featured cards get visual emphasis. Does not affect grid span. */
  featured: boolean;
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
  location: string;
  availability: string;
  links: {
    github: string;
    linkedin: string;
  };
}