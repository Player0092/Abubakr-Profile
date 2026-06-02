import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata = {
  title: "About — Mathematical Explorations",
  description: "Who I am and how I approach mathematics.",
};

export default function AboutPage() {
  const categories = [...new Set(projects.map((p) => p.category))];

  // TODO: replace everything in this `bio` array with your own words.
  const bio = [
    "I'm a student who learns mathematics by building it. Most of what's on this site began as a question I couldn't answer by reading — so I opened Desmos and tried to construct the thing until it made sense.",
    "My interests cluster around approximation, interpolation, regression, and the surprising places they overlap: how to fit a curve without it oscillating wildly, how a kernel can smooth or sharpen depending on a single parameter, how a known result can hide inside an unfamiliar construction. I'm especially drawn to the moments where an experiment drifts somewhere I didn't intend — a metaball field collapsing into a Voronoi diagram, an iterated function quietly revealing a fixed-point theorem — because those accidents are usually where the real understanding is.",
    "I try to treat \"I think I discovered something\" with healthy skepticism. Often the honest version is \"I rediscovered something,\" and I've come to see that as the point: re-deriving a classical result from your own angle is how you actually earn the intuition for it, rather than just memorizing the statement.",
    "Outside the math, I care about [your other interests, communities, and work — edit this]. If you want to talk about any of these projects, extend one, or point out where I've gotten something wrong, I'd genuinely like to hear it.",
  ];

  return (
    <main className="mx-auto max-w-3xl px-6 pb-28 pt-16">
      <p className="rise font-mono text-xs uppercase tracking-[0.3em] text-accent">About</p>

      {/* TODO: replace with your name */}
      <h1 className="rise mt-5 font-display text-5xl font-extrabold leading-[0.95] tracking-tight md:text-6xl" style={{ animationDelay: "80ms" }}>
        Your Name
      </h1>

      <div className="rise mt-8 space-y-6 text-lg leading-relaxed text-zinc-300" style={{ animationDelay: "160ms" }}>
        {bio.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className="rise mt-12 rounded-2xl border border-line bg-panel/60 p-7" style={{ animationDelay: "240ms" }}>
        <h2 className="font-mono text-xs uppercase tracking-wider text-zinc-500">Recurring threads</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((c) => (
            <span key={c} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-zinc-300">{c}</span>
          ))}
        </div>
        <p className="mt-5 text-zinc-400">
          {projects.length} explorations and counting. Browse them all on the{" "}
          <Link href="/" className="text-accent hover:underline">work</Link> page.
        </p>
      </div>

      {/* TODO: replace with your real links */}
      <div className="rise mt-10 flex gap-5 font-mono text-xs uppercase tracking-wider text-zinc-500" style={{ animationDelay: "320ms" }}>
        <a className="transition hover:text-accent" href="mailto:you@example.com">Email</a>
        <a className="transition hover:text-accent" href="https://github.com/yourhandle">GitHub</a>
        <a className="transition hover:text-accent" href="https://linkedin.com/in/yourhandle">LinkedIn</a>
      </div>
    </main>
  );
}

