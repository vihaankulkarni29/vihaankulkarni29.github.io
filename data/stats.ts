import type { Stat } from "@/types";

/** Ticker items rendered by StatsMarquee. Rendered twice for a seamless loop. */
export const stats: Stat[] = [
  { id: "uptime", label: "99.9% Pipeline Uptime" },
  { id: "data-points", label: "1.2M+ Data Points Processed" },
  { id: "accuracy", label: "100% Accuracy Threshold" },
  { id: "infra-cost", label: "Zero-Cost Infrastructure Stack" },
  { id: "parallelization", label: "High-Throughput Parallelization" },
  { id: "data-integrity", label: "Biomedical Data Integrity" },
  { id: "osint", label: "OSINT Intelligence Verified" },
];