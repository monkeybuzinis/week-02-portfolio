"use client";

import { useState } from "react";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";
import ProjectCard from "../../components/ProjectCard";

function getAllTags(projectList: Project[]): string[] {
  const tagSet = new Set<string>();
  projectList.forEach((p) => p.tech.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState<string>("All");

  const allTags = getAllTags(projects);

  const visibleProjects =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(activeTag));

  return (
    <div className="flex flex-col gap-10">
      <section>
        <h1 className="text-4xl font-bold text-white mb-2">Projects</h1>
        <p className="text-slate-400">
          Things I&apos;ve built or am actively planning. Filter by technology below.
        </p>
      </section>

      {/* Tag filter */}
      <section aria-label="Filter projects by technology">
        <div className="flex flex-wrap gap-2">
          {["All", ...allTags].map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={
                activeTag === tag
                  ? "px-3 py-1 rounded-full text-sm font-medium bg-teal-500 text-slate-900"
                  : "px-3 py-1 rounded-full text-sm font-medium bg-slate-800 text-slate-300 border border-slate-700 hover:border-teal-500 hover:text-teal-400 transition-colors"
              }
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Project grid */}
      <section aria-label="Project list">
        {visibleProjects.length === 0 ? (
          <p className="text-slate-500">No projects match that filter.</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2">
            {visibleProjects.map((project) => (
              <li key={project.id}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tech}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                />
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
