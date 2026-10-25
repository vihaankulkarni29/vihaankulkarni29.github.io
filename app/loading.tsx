/**
 * Next.js renders this while a route is being hydrated, so visitors never
 * see a blank flash during navigation. Kept minimal and dependency-free.
 */
export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-center px-6 py-24">
      <div className="space-y-6">
        <p className="font-mono text-emerald-500 text-xs tracking-[0.4em] uppercase">
          &gt; INITIALIZING ENVIRONMENT...
        </p>
        <div className="flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
          <span className="w-2 h-2 bg-emerald-500/70 rounded-full animate-ping" style={{ animationDelay: "0.2s" }} />
          <span className="w-2 h-2 bg-emerald-500/50 rounded-full animate-ping" style={{ animationDelay: "0.4s" }} />
        </div>
        <p className="text-zinc-500 text-sm font-mono tracking-widest uppercase">
          Compiling Architecture
        </p>
      </div>
    </div>
  );
}