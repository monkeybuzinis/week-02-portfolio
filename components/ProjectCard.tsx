type Props = {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
}: Props) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 flex flex-col gap-4 hover:border-teal-600 transition-colors">
      <h2 className="text-xl font-semibold text-white leading-snug">{title}</h2>

      <p className="text-slate-400 text-sm leading-relaxed flex-1">
        {description}
      </p>

      <ul className="flex flex-wrap gap-1">
        {tags.map((tag) => (
          <li
            key={tag}
            className="px-2 py-0.5 bg-teal-900 text-teal-300 border border-teal-800 text-xs rounded font-medium"
          >
            {tag}
          </li>
        ))}
      </ul>

      {(githubUrl || liveUrl) && (
        <div className="flex gap-4 text-sm pt-1">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 font-medium transition-colors"
            >
              GitHub →
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 font-medium transition-colors"
            >
              Live Site →
            </a>
          )}
        </div>
      )}
    </div>
  );
}
