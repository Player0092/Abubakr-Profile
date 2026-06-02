"use client";
import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Gallery() {
  const categories = useMemo(() => {
    const counts = projects.reduce((acc, p) => ((acc[p.category] = (acc[p.category] || 0) + 1), acc), {});
    return ["All", ...Object.keys(counts).sort((a, b) => counts[b] - counts[a])];
  }, []);

  const [active, setActive] = useState("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="mx-auto max-w-6xl px-6 pb-28">
      {/* Filter bar */}
      <div className="sticky top-0 z-10 -mx-6 mb-10 flex flex-wrap gap-2 bg-ink/80 px-6 py-4 backdrop-blur">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition ${
              active === c
                ? "border-accent bg-accent text-ink"
                : "border-line text-zinc-400 hover:border-accent/50 hover:text-zinc-200"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <ProjectCard key={p.id} p={p} index={i} />
        ))}
      </div>
    </section>
  );
}

