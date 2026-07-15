import { useRef, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { PROJECTS } from "@/lib/projectData";
import GridBackground from "@/components/lyt24/GridBackground";
import SectionReveal from "@/components/lyt24/SectionReveal";

/* ── Word-by-word blur + slide reveal ───────────────────────── */
function WordReveal({ text, className = "", wordDelay = 15, tag: Tag = "p" }) {
  const ref = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text ? text.split(" ") : [];

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            display: "inline-block",
            marginRight: "0.28em",
            transform: triggered ? "translateY(0)" : "translateY(20px)",
            filter: triggered ? "blur(0px)" : "blur(4px)",
            opacity: triggered ? 1 : 0,
            transitionProperty: "transform, filter, opacity",
            transitionDuration: "800ms, 700ms, 500ms",
            transitionTimingFunction:
              "cubic-bezier(0.16,1,0.3,1), cubic-bezier(0.16,1,0.3,1), ease-out",
            transitionDelay: `${i * wordDelay}ms, ${i * wordDelay + 50}ms, ${i * wordDelay}ms`,
          }}
        >
          {word}
        </span>
      ))}
    </Tag>
  );
}

function getScope(project) {
  const scope = ["Strategy", "UI / UX Design"];
  if (
    project.category === "Web" ||
    project.category === "Government" ||
    project.category === "Enterprise"
  ) {
    scope.push("Web Development");
  }
  if (project.category === "Mobile") {
    scope.push("Mobile App Development", "Deployment");
  }
  if (project.category === "E-Commerce") {
    scope.push("Platform Development", "Payment Integration");
  }
  if (project.title.includes("Data") || project.title.includes("Monitoring")) {
    scope.push("Data Engineering");
  }
  return scope;
}

export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);
  const reduceMotion = useReducedMotion();
  const [showFullText, setShowFullText] = useState(false);

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

  const scopeList = getScope(project);
  const displayUrl = project.url ? project.url.replace(/^https?:\/\//, "") : "";

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 pb-14 pt-28 md:pb-24 md:pt-40">
        <GridBackground />
        <div className="absolute left-1/4 top-0 h-64 w-96 rounded-full bg-cobalt/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionReveal>
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 text-sm font-medium text-steel transition-colors hover:text-aqua"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              Back to Portfolio
            </Link>

            <h1 className="mt-8 max-w-4xl font-heading text-4xl font-bold tracking-normal text-white md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-xl leading-relaxed text-steel md:text-2xl">
              {project.short_description}
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Project Content */}
      <section className="relative py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
            
            {/* Left: Description */}
            <div className="lg:col-span-8 xl:col-span-9">
              <div className="space-y-8 text-lg leading-relaxed text-steel md:text-xl md:leading-loose">
                {project.challenge && (
                  <WordReveal text={project.challenge} wordDelay={15} />
                )}
                {showFullText && project.solution && (
                  <WordReveal text={project.solution} wordDelay={15} />
                )}
                {showFullText && project.results && (
                  <WordReveal text={project.results} wordDelay={15} />
                )}
                
                {(project.solution || project.results) && (
                  <div className="pt-4">
                    <button
                      onClick={() => setShowFullText(!showFullText)}
                      className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/40"
                    >
                      {showFullText ? "Read Less" : "Read More"}
                      <ArrowRight
                        className={`h-4 w-4 transition-transform duration-300 ${
                          showFullText ? "-rotate-90" : "rotate-90"
                        }`}
                      />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Scope & Link */}
            <div className="lg:col-span-4 xl:col-span-3">
              <SectionReveal delay={0.2}>
                <div className="sticky top-32 flex flex-col gap-8">
                  
                  {/* Scope */}
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white mb-6">
                      Scope
                    </h3>
                    <ul className="space-y-4">
                      {scopeList.map((item, idx) => (
                        <li key={idx} className="text-base text-steel">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Link */}
                  {project.url && (
                    <div className="pt-4">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-base font-medium text-white transition-colors hover:text-aqua"
                      >
                        {displayUrl}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  )}
                </div>
              </SectionReveal>
            </div>
            
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="relative border-t border-white/5 py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <img
                src={
                  project.image_url ||
                  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
                }
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-white/5 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h3 className="font-heading text-2xl font-bold tracking-normal text-white">
              Have a similar project in mind?
            </h3>
            <p className="mt-3 text-steel">
              Let's discuss how we can help you achieve your goals.
            </p>
            <Link
              to="/contact"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cobalt px-6 py-4 text-base font-semibold text-white transition-all hover:bg-cobalt/90 hover:shadow-xl hover:shadow-cobalt/30 sm:w-auto sm:px-8"
            >
              Start a Project
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
