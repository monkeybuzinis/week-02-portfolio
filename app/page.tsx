import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-col gap-6 py-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl font-bold tracking-tight text-gray-700">
          Khanh Le
        </h1>
        <p className="text-xl font-medium text-blue-600">
          From Sky to AI
        </p>
      </div>

      <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
        Welcome to my page! From the sky to AI, my journey blends precision
        with innovation. I am a final-year graduate student in Computer
        Engineering at California Science and Technology University (CSTU),
        specializing in Artificial Intelligence. Prior to diving into AI, I
        spent 12 years working as an Air Traffic Controller — a background that
        instilled in me a deep passion for complex system architecture,
        high-stakes problem solving, and critical data analysis.
      </p>

      <div className="flex gap-3 mt-2">
        <Link
          href="/projects"
          className="rounded-md bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-700 transition-colors"
        >
          View My Work
        </Link>
        <Link
          href="/about"
          className="rounded-md border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
        >
          About Me
        </Link>
      </div>
    </section>
  );
}