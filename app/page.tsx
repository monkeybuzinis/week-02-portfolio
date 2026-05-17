import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-col gap-6 py-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl font-bold tracking-tight text-white">
          Khanh Le
        </h1>
        <p className="text-xl font-medium text-teal-400">From Sky to AI</p>
      </div>

      <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
        I&apos;m a graduate student in Computer Engineering at California Science
        and Technology University (CSTU), specializing in Artificial
        Intelligence. Before switching to tech, I spent 12 years as a certified
        Air Traffic Controller — a career that sharpened my instincts for
        high-stakes decisions, complex systems, and zero-tolerance reliability.
        I now bring that same discipline to building intelligent fullstack
        applications, from React frontends to FastAPI backends to LLM-powered
        features using the Claude API.
      </p>

      <div className="flex flex-wrap gap-3 mt-2">
        <Link
          href="/projects"
          className="rounded-md bg-teal-500 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-teal-400 transition-colors"
        >
          View My Work
        </Link>
        <Link
          href="/about"
          className="rounded-md border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 hover:border-teal-500 hover:text-teal-400 transition-colors"
        >
          About Me
        </Link>
      </div>
    </section>
  );
}