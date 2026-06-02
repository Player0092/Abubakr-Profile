import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";

export default function Page() {
  return (
    <main>
      <Hero />
      <Gallery />
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-lg font-bold">
            Your Name <span className="text-zinc-600">/ mathematical explorer</span>
          </p>
          {/* TODO: replace with your real links */}
          <div className="flex gap-5 font-mono text-xs uppercase tracking-wider text-zinc-500">
            <a className="transition hover:text-accent" href="mailto:you@example.com">Email</a>
            <a className="transition hover:text-accent" href="https://github.com/yourhandle">GitHub</a>
            <a className="transition hover:text-accent" href="https://linkedin.com/in/yourhandle">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

