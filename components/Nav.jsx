import Link from "next/link";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-line/70 bg-ink/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* TODO: replace with your name */}
        <Link href="/" className="font-display text-base font-bold tracking-tight hover:text-accent">
          Your&nbsp;Name<span className="text-accent">.</span>
        </Link>
        <div className="flex gap-6 font-mono text-xs uppercase tracking-wider text-zinc-400">
          <Link href="/" className="transition hover:text-accent">Work</Link>
          <Link href="/about" className="transition hover:text-accent">About</Link>
        </div>
      </div>
    </nav>
  );
}

