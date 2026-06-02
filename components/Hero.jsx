// Server component. Computes headline stats from the project data.
import { projects } from "@/data/projects";

export default function Hero() {
  const total = projects.length;
  const categories = new Set(projects.map((p) => p.category)).size;
  const accidental = projects.filter((p) => p.discovery === "Accidental").length;
  const rediscovered = projects.filter((p) => p.discovery === "Independent rediscovery").length;

  const stats = [
    ["explorations", total],
    ["categories", categories],
    ["independent rediscoveries", rediscovered],
    ["happy accidents", accidental],
  ];

  return (
    <header className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Decorative animated curve */}
      <svg
        className="pointer-events-none absolute right-0 top-10 hidden h-64 w-1/2 opacity-50 md:block"
        viewBox="0 0 400 200" fill="none" aria-hidden="true"
      >
        <path
          className="curve-path"
          d="M0,160 C60,160 60,40 120,40 C180,40 180,160 240,120 C300,80 300,150 400,90"
          stroke="#c8ff2e" strokeWidth="2"
        />
        {[0, 120, 240, 400].map((x, i) => (
          <circle key={i} cx={x} cy={[160, 40, 120, 90][i]} r="4" fill="#5cf2ff" />
        ))}
      </svg>

      <p className="rise font-mono text-xs uppercase tracking-[0.3em] text-accent" style={{ animationDelay: "0ms" }}>
        Mathematical Explorations
      </p>

      <h1
        className="rise mt-5 font-display text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl"
        style={{ animationDelay: "80ms" }}
      >
        {/* TODO: replace with your name */}
        Your Name.
        <span className="block text-line">building math to understand it.</span>
      </h1>

      <p
        className="rise mt-7 max-w-xl text-lg leading-relaxed text-zinc-300"
        style={{ animationDelay: "160ms" }}
      >
        Interactive explorations in interpolation, regression, and approximation. Some chase a
        known result from an odd angle, some are deliberate experiments, and a few were genuine
        accidents that turned into something. <span className="text-accent">Click any card to run the graph live.</span>
      </p>

      <div className="rise mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4" style={{ animationDelay: "240ms" }}>
        {stats.map(([label, value]) => (
          <div key={label} className="bg-ink px-5 py-6">
            <div className="font-display text-4xl font-bold text-accent">{value}</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-zinc-500">{label}</div>
          </div>
        ))}
      </div>
    </header>
  );
}

