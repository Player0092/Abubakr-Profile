import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject, getAdjacent, desmosUrl } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }) {
  const p = getProject(params.id);
  if (!p) return { title: "Not found" };
  return { title: `${p.title} — Mathematical Explorations`, description: p.description };
}

const discoveryStyle = {
  "Intentional": "text-zinc-400 border-line",
  "Independent rediscovery": "text-accent2 border-accent2/40",
  "Accidental": "text-accent border-accent/40",
};

export default function WorkPage({ params }) {
  const p = getProject(params.id);
  if (!p) notFound();
  const { prev, next } = getAdjacent(p.id);
  const paragraphs = p.writeup.split("\n\n");

  return (
    <main className="mx-auto max-w-3xl px-6 pb-28 pt-12">
      <Link href="/" className="rise font-mono text-xs uppercase tracking-wider text-zinc-500 transition hover:text-accent">
        ← All work
      </Link>

      <div className="rise mt-8 flex flex-wrap items-center gap-3" style={{ animationDelay: "60ms" }}>
        <span className="font-mono text-xs uppercase tracking-wider text-accent">{p.category}</span>
        <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${discoveryStyle[p.discovery]}`}>
          {p.discovery}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">
          {p.type === "geometry" ? "Desmos Geometry" : "Desmos Calculator"}
        </span>
      </div>

      <h1 className="rise mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-tight md:text-5xl" style={{ animationDelay: "120ms" }}>
        {p.title}
      </h1>

      <div className="rise mt-5 flex flex-wrap gap-1.5" style={{ animationDelay: "180ms" }}>
        {p.methods.map((m) => (
          <span key={m} className="rounded-md bg-panel px-2 py-1 font-mono text-[10px] text-zinc-400">{m}</span>
        ))}
      </div>

      {/* Live graph, loaded directly on the dedicated page */}
      <div className="rise mt-8 overflow-hidden rounded-xl border border-line" style={{ animationDelay: "240ms" }}>
        <iframe
          src={desmosUrl(p)}
          title={p.title}
          className="h-[460px] w-full"
          loading="lazy"
        />
      </div>
      <a
        href={desmosUrl(p)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block font-mono text-xs uppercase tracking-wider text-zinc-500 transition hover:text-accent"
      >
        Open full graph in Desmos ↗
      </a>

      <article className="rise mt-10 space-y-5 text-lg leading-relaxed text-zinc-300" style={{ animationDelay: "300ms" }}>
        {paragraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </article>

      {/* Prev / next */}
      <nav className="mt-16 grid grid-cols-2 gap-4 border-t border-line pt-8">
        {prev ? (
          <Link href={`/work/${prev.id}`} className="group rounded-xl border border-line p-5 transition hover:border-accent/50">
            <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">← Previous</div>
            <div className="mt-1 font-display font-bold leading-tight transition group-hover:text-accent">{prev.title}</div>
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`/work/${next.id}`} className="group rounded-xl border border-line p-5 text-right transition hover:border-accent/50">
            <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">Next →</div>
            <div className="mt-1 font-display font-bold leading-tight transition group-hover:text-accent">{next.title}</div>
          </Link>
        ) : <span />}
      </nav>
    </main>
  );
}

