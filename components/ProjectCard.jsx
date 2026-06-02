"use client";
import { useState } from "react";
import Link from "next/link";
import { desmosUrl } from "@/data/projects";

const discoveryStyle = {
  "Intentional": "text-zinc-400 border-line",
  "Independent rediscovery": "text-accent2 border-accent2/40",
  "Accidental": "text-accent border-accent/40",
};

export default function ProjectCard({ p, index }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className="rise group flex flex-col rounded-2xl border border-line bg-panel/60 p-6 backdrop-blur transition-colors duration-300 hover:border-accent/50"
      style={{ animationDelay: `${Math.min(index * 45, 500)}ms` }}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] uppercase tracking-wider text-accent">{p.category}</span>
        <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${discoveryStyle[p.discovery]}`}>
          {p.discovery}
        </span>
      </div>

      <h3 className="mt-3 font-display text-xl font-bold leading-tight">
        <Link href={`/work/${p.id}`} className="transition hover:text-accent">{p.title}</Link>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{p.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.methods.map((m) => (
          <span key={m} className="rounded-md bg-ink px-2 py-1 font-mono text-[10px] text-zinc-500">{m}</span>
        ))}
      </div>

      {/* Embed-on-click: the iframe only mounts after the user opts in */}
      <div className="embed-frame mt-5" style={{ height: open ? 380 : 0 }}>
        {open && (
          <iframe
            src={desmosUrl(p)}
            title={p.title}
            className="h-[360px] w-full rounded-lg border border-line"
            loading="lazy"
          />
        )}
      </div>

      <div className="mt-5 flex items-center gap-4">
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg bg-accent px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-ink transition hover:brightness-110"
        >
          {open ? "Collapse ▲" : "Run graph ▶"}
        </button>
        <Link
          href={`/work/${p.id}`}
          className="font-mono text-xs uppercase tracking-wider text-zinc-500 transition hover:text-accent"
        >
          Full writeup →
        </Link>
      </div>
    </article>
  );
}

