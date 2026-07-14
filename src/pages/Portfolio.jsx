import { useState } from "react";
import { PROJECTS } from "@/lib/projectData";
import PageHero from "@/components/lyt24/PageHero";
import ProjectCard from "@/components/lyt24/ProjectCard";
import SectionReveal from "@/components/lyt24/SectionReveal";
import GridBackground from "@/components/lyt24/GridBackground";

const CATEGORIES = [
  "All",
  "Web",
  "Mobile",
  "Enterprise",
  "Government",
  "Healthcare",
  "E-Commerce",
];

export default function Portfolio() {
  const [projects] = useState(PROJECTS);
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        label="Our Work"
        title="Portfolio"
        subtitle="Explore our collection of successful projects and see how we've helped businesses and institutions transform through technology."
      />

      <section className="relative border-b border-white/5 py-20 md:py-32">
        <GridBackground />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`min-h-10 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    filter === cat
                      ? "bg-cobalt text-white"
                      : "border border-white/10 text-steel hover:text-white hover:border-white/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </SectionReveal>

          {filtered.length === 0 ? (
            <div className="mt-16 text-center text-steel">
              No projects found in this category.
            </div>
          ) : (
            <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project, i) => (
                <ProjectCard
                  key={project.slug || i}
                  project={project}
                  index={i}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
