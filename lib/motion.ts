import { useState, useEffect } from "react";

/**
 * Respects the OS-level "reduce motion" preference. Components that loop
 * indefinitely (marquee, particle cloud, DNA helix) gate their motion on
 * this so vestibular-disordered visitors are not forced to track it
 * (WCAG 2.2.2 Pause, Stop, Hide / 2.3.3 Motion).
 */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return reduced;
}