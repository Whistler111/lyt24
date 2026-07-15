import { useState, useRef, useEffect } from "react";
import { PROJECTS } from "@/lib/projectData";
import ProjectCard from "@/components/lyt24/ProjectCard";
import SectionReveal from "@/components/lyt24/SectionReveal";
import GridBackground from "@/components/lyt24/GridBackground";

/* ── Word-by-word blur + slide reveal ───────────────────────── */
function WordReveal({ text, className = "", wordDelay = 90, tag: Tag = "h1" }) {
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

  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            display: "inline-block",
            marginRight: "0.28em",
            transform: triggered ? "translateY(0)" : "translateY(30px)",
            filter: triggered ? "blur(0px)" : "blur(6px)",
            opacity: triggered ? 1 : 0,
            transitionProperty: "transform, filter, opacity",
            transitionDuration: "900ms, 800ms, 600ms",
            transitionTimingFunction:
              "cubic-bezier(0.16,1,0.3,1), cubic-bezier(0.16,1,0.3,1), ease-out",
            transitionDelay: `${i * wordDelay}ms, ${i * wordDelay + 80}ms, ${i * wordDelay}ms`,
          }}
        >
          {word}
        </span>
      ))}
    </Tag>
  );
}

const CATEGORIES = [
  "All",
  "Web",
  "Mobile",
  "Enterprise",
  "Government",
  "E-Commerce",
];

export default function Portfolio() {
  const [projects] = useState(PROJECTS);
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative border-b border-white/5 pt-32 pb-20 md:pt-40 md:pb-28">
        <GridBackground />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
            {/* Text side */}
            <div className="flex-1 text-center lg:text-left">
              <SectionReveal>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-aqua">
                  Our Work
                </span>
              </SectionReveal>

              <WordReveal
                text="Engineered to scale. Built to transform."
                tag="h1"
                className="font-heading mt-6 text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]"
                wordDelay={90}
              />

              <SectionReveal delay={0.35}>
                <p className="mt-6 text-base leading-relaxed text-steel md:text-lg">
                  Explore our portfolio of digital innovations and regulatory systems 
                  powering growth across Nigeria's energy, finance, and public sectors.
                </p>
              </SectionReveal>
            </div>

            {/* Illustration side */}
            <SectionReveal delay={0.15} className="flex flex-1 justify-center lg:justify-end">
              <img
                src="/portfoliorafiki.png"
                alt="Portfolio illustration"
                className="w-full max-w-xs drop-shadow-2xl sm:max-w-sm lg:max-w-md"
                loading="lazy"
              />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── Portfolio Grid + Filter ──────────────────────────── */}
      <section className="relative py-20 md:py-28">
        <GridBackground />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <SectionReveal>
            <div className="flex flex-wrap items-center gap-2 border-b border-white/5 pb-8">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`relative min-h-10 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    filter === cat
                      ? "bg-aqua text-obsidian shadow-lg shadow-aqua/25"
                      : "border border-white/10 text-steel hover:border-white/20 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </SectionReveal>

          {/* Grid */}
          {filtered.length === 0 ? (
            <SectionReveal>
              <div className="mt-16 text-center text-steel">
                No projects found in this category.
              </div>
            </SectionReveal>
          ) : (
            <div className="mt-12 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-12 md:gap-8 lg:grid-cols-12">
              {filtered.map((project, i) => {
                // Mobile 3-item repeating pattern:
                // 0: Full width (1 large)
                // 1, 2: Half width (2 in a row)
                const mobilePos = i % 3;
                const mobileSpan = mobilePos === 0 ? "col-span-2" : "col-span-1";
                
                // Desktop custom layout for 11 items:
                // 0, 1: Half width (2 in a row)
                // 2: Full width
                // 3, 4, 5: Third width (3 in a row)
                // 6: Full width
                // 7, 8, 9: Third width (3 in a row)
                // 10: Full width
                let desktopSpan = "md:col-span-6"; // fallback
                if (i === 0 || i === 1) desktopSpan = "md:col-span-6";
                else if (i === 2) desktopSpan = "md:col-span-12";
                else if (i === 3 || i === 4 || i === 5) desktopSpan = "md:col-span-4";
                else if (i === 6) desktopSpan = "md:col-span-12";
                else if (i === 7 || i === 8 || i === 9) desktopSpan = "md:col-span-4";
                else if (i === 10) desktopSpan = "md:col-span-12";

                const spanClass = `${mobileSpan} ${desktopSpan}`;

                // Determine aspect ratio based on span
                // Make the full width images much shorter (wider aspect ratio)
                let aspectClass = "aspect-[4/3] md:aspect-[16/10]"; 
                if (desktopSpan === "md:col-span-12") {
                  aspectClass = "aspect-[4/3] md:aspect-[3/1] max-h-[400px]"; 
                }
                if (mobileSpan === "col-span-2") {
                  aspectClass = aspectClass.replace("aspect-[4/3]", "aspect-[16/9]");
                }

                return (
                  <ProjectCard
                    key={project.slug || i}
                    project={project}
                    index={i}
                    className={spanClass}
                    aspectClass={aspectClass}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
