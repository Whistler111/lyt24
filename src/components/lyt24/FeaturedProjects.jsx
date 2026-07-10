import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionReveal from "./SectionReveal";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/lyt24Data";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 6);
  return (
    <section className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="text-sm font-medium uppercase tracking-wider text-phosphor">
                Impact Gallery
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Featured <span className="gradient-text">Projects</span>
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="group flex items-center gap-2 text-sm font-semibold text-cobalt-light transition-colors hover:text-phosphor"
            >
              View all projects{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </SectionReveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
