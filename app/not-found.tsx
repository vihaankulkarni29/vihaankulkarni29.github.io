import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/**
 * Custom 404. Next.js App Router renders this automatically for any route
 * that doesn't match a file in app/ — no catch-all needed.
 *
 * Kept dependency-light (no canvas, no motion) so the error page itself is
 * never a render blocker.
 */
export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-center px-6 py-24 relative overflow-hidden">
      {/* Atmosphere */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #18181b 1px, transparent 1px), linear-gradient(to bottom, #18181b 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-emerald-500/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 space-y-8 max-w-2xl">
        <p className="font-mono text-emerald-500 text-xs md:text-sm tracking-[0.4em] uppercase">
          &gt; ERROR 404 &middot; ROUTE NOT FOUND
        </p>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-50 leading-[0.9]">
          Lost<span className="text-emerald-500">.</span>
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
          That page doesn&apos;t exist — or it never did. The architecture you were
          looking for is still being built. Head back to the blueprint.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-50 text-zinc-950 font-bold rounded-full hover:bg-white transition-all text-sm uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="#work"
            className="inline-flex items-center gap-2 px-8 py-4 border border-zinc-800 text-zinc-400 rounded-full hover:text-zinc-200 hover:border-emerald-500/40 transition-all text-sm uppercase tracking-widest"
          >
            View Architecture Logs
          </Link>
        </div>
      </div>
    </main>
  );
}