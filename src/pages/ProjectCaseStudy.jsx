import { useParams, Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { PROJECTS } from "@/lib/projectData";
import GridBackground from "@/components/lyt24/GridBackground";
import SectionReveal from "@/components/lyt24/SectionReveal";

export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);
  const reduceMotion = useReducedMotion();

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-obsidian px-6">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-white">
            Project Not Found
          </h1>
          <p className="mt-4 text-steel">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/portfolio"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-cobalt px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-cobalt/90"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 pt-32 pb-16 md:pt-40 md:pb-24">
        <GridBackground />
        <div className="absolute left-1/4 top-0 h-64 w-96 rounded-full bg-cobalt/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal>
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 text-sm font-medium text-steel transition-colors hover:text-aqua"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              Back to Portfolio
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-aqua/30 bg-aqua/10 px-3 py-1 font-mono text-xs text-aqua">
                {project.category}
              </span>
              {project.industry && (
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-steel">
                  {project.industry}
                </span>
              )}
            </div>

            <h1 className="mt-4 max-w-4xl font-heading text-4xl font-bold tracking-tight text-white md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-steel">
              {project.short_description}
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Project Image */}
      <section className="relative border-b border-white/5 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal>
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <img
                src={
                  project.image_url ||
                  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
                }
                alt={project.title}
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent" />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="relative border-b border-white/5 py-24 md:py-32">
        <GridBackground />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <SectionReveal>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-red-400">
                  The Challenge
                </h3>
                <p className="mt-4 leading-relaxed text-steel">
                  {project.challenge}
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <div className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-aqua/5 to-transparent p-8">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-aqua">
                  Our Solution
                </h3>
                <p className="mt-4 leading-relaxed text-steel">
                  {project.solution}
                </p>
              </div>
            </SectionReveal>
          </div>

          {/* Tech Stack */}
          {project.tech_stack && project.tech_stack.length > 0 && (
            <div className="mt-12">
              <SectionReveal>
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-steel">
                  Technology Stack
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech_stack.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={
                        reduceMotion
                          ? { opacity: 0 }
                          : { opacity: 0, scale: 0.9 }
                      }
                      whileInView={
                        reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }
                      }
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 font-mono text-sm text-white/80"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </SectionReveal>
            </div>
          )}

          {/* Results */}
          {project.results && (
            <div className="mt-12">
              <SectionReveal>
                <div className="rounded-2xl border border-aqua/20 bg-gradient-to-br from-cobalt/5 via-aqua/5 to-transparent p-8 md:p-12">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-aqua" />
                    <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-aqua">
                      Results & Impact
                    </h3>
                  </div>
                  <p className="mt-4 text-lg leading-relaxed text-white">
                    {project.results}
                  </p>
                </div>
              </SectionReveal>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 text-center">
            <SectionReveal>
              <h3 className="font-heading text-2xl font-bold text-white">
                Have a similar project in mind?
              </h3>
              <p className="mt-3 text-steel">
                Let's discuss how we can help you achieve your goals.
              </p>
              <Link
                to="/contact"
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-cobalt px-8 py-4 text-base font-semibold text-white transition-all hover:bg-cobalt/90 hover:shadow-xl hover:shadow-cobalt/30"
              >
                Start a Project
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </SectionReveal>
          </div>
        </div>
      </section>
    </>
  );
}
