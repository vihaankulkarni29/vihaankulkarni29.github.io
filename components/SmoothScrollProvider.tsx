"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, type ReactNode } from "react";

/**
 * Lenis rewrites document scrolling for the whole page, so it cannot be
 * dropped from the server render: layout.tsx is a Server Component and
 * next/dynamic rejects ssr:false there. This client wrapper is that boundary.
 *
 * Lenis is split out and gated on mount so it never sits on the critical
 * path, and it is skipped entirely for visitors who ask for reduced motion.
 * Until Lenis arrives the children render bare, which is native scrolling,
 * so nothing blocks and no scroll position is trapped mid-handoff.
 */
const SmoothScroll = dynamic(() => import("./SmoothScroll"), { ssr: false });

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => setEnabled(!query.matches);

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  if (!enabled) {
    return <>{children}</>;
  }

  return <SmoothScroll>{children}</SmoothScroll>;
}