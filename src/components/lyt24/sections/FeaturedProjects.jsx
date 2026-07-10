import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/projectData";
import SectionReveal from "../SectionReveal";
import ProjectCard from "../ProjectCard";
import GridBackground from "../GridBackground";

export default function FeaturedProjects() {
  const projects = PROJECTS.filter((project) => project.featured)
    .sort((a, b) => a.order - b.order)
    .slice(0, 6);

  return (
    <section
      id="portfolio"
      className="relative border-b border-white/5 py-24 md:py-32"
    >
      <GridBackground />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="section-label">Featured Work</span>
              <h2 className="mt-4 max-w-2xl font-heading text-4xl font-bold tracking-tight text-white md:text-5xl">
                Projects That Drive Impact
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-aqua transition-colors hover:text-white"
            >
              View All Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </SectionReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug || i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
