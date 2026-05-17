import Link from "next/link";
import CopyEmailButton from "../ui/CopyEmailButton";

const skills = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "Claude API",
  "Git",
];

const learningNow = ["LLM Agents", "Tool Use", "RAG", "SQLAlchemy"];

const interests = [
  { label: "Painting", slug: "painting" },
  { label: "Outdoor Sports", slug: "outdoor-sports" },
  { label: "Nature", slug: "nature" },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-12">
      {/* Header */}
      <section className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="w-24 h-24 shrink-0 rounded-full bg-teal-500 flex items-center justify-center text-3xl font-bold text-slate-900 select-none">
          KL
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">About Me</h1>
          <p className="text-teal-400 font-medium text-lg">
            AI Engineering Student &amp; Career Transitioner
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="flex flex-col gap-4 text-slate-300 text-lg leading-relaxed">
        <p>
          My name is Khanh Le. I hold a Bachelor&apos;s degree in Banking and Finance,
          and I spent the following 12 years as a certified Air Traffic Controller —
          a role where split-second decisions, complex system awareness, and zero
          tolerance for error are simply the baseline.
        </p>
        <p>
          I&apos;m now channeling that same disciplined mindset into computer engineering,
          with a particular focus on artificial intelligence. I&apos;m currently studying
          fullstack development at California Science and Technology University, learning
          how to build intelligent applications end-to-end: from React frontends to
          FastAPI backends to LLM-powered features using the Anthropic Claude API.
        </p>
        
        <p>
          I&apos;m open to internships, entry-level roles, and research collaborations
          in AI engineering and fullstack development. GitHub, LinkedIn, and email
          are linked below.
        </p>
      </section>

      {/* Contact placeholder */}
      <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Contact &amp; Profiles</h2>
        <div className="flex flex-wrap gap-3">
          <CopyEmailButton />
          <a
            href="https://github.com/monkeybuzinis"
            aria-label="GitHub profile"
            className="px-4 py-2 border border-slate-600 text-slate-300 hover:border-teal-400 hover:text-teal-400 font-medium rounded-lg text-sm transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/khanh-le369/"
            aria-label="LinkedIn profile"
            className="px-4 py-2 border border-slate-600 text-slate-300 hover:border-teal-400 hover:text-teal-400 font-medium rounded-lg text-sm transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">Skills &amp; Technologies</h2>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="px-3 py-1 bg-teal-900 text-teal-300 border border-teal-700 rounded-full text-sm font-medium"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Currently Learning */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">Currently Learning</h2>
        <ul className="flex flex-wrap gap-2">
          {learningNow.map((item) => (
            <li
              key={item}
              className="px-3 py-1 bg-slate-700 text-slate-300 border border-slate-600 rounded-full text-sm font-medium"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Interests */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">Outside of Code</h2>
        <ul className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <li key={interest.slug}>
              <Link
                href={`/interests?tab=${interest.slug}`}
                className="block px-3 py-1 bg-slate-800 text-slate-400 border border-slate-700 rounded-full text-sm font-medium hover:border-teal-500 hover:text-teal-400 transition-colors"
              >
                {interest.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
