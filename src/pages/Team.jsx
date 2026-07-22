import { createElement, useState, useRef, useEffect } from "react";
import { TEAM_MEMBERS } from "@/lib/lyt24Data";
import TeamCard from "@/components/lyt24/TeamCard";
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

  return createElement(
    Tag,
    { ref, className, "aria-label": text },
    words.map((word, i) => (
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
    )),
  );
}

const DEPARTMENTS = [
  "Leadership",
  "Engineering",
  "Product",
  "Legal",
  "Operations",
  "Marketing",
];

export default function Team() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative border-b border-white/5 pt-32 pb-20 md:pt-40 md:pb-28">
        <GridBackground />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">

            {/* Left — illustration */}
            <SectionReveal className="flex flex-1 justify-center lg:justify-start">
              <img
                src="/teamrafiki.png"
                alt="Team illustration"
                className="w-full max-w-xs drop-shadow-2xl sm:max-w-sm lg:max-w-md"
                loading="lazy"
                decoding="async"
              />
            </SectionReveal>

            {/* Right — text */}
            <div className="flex-1 text-center lg:text-left">
              <SectionReveal>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-aqua">
                  Our People
                </span>
              </SectionReveal>

              <WordReveal
                text="The minds behind every solution we build."
                tag="h1"
                className="font-heading mt-5 text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3rem]"
                wordDelay={90}
              />

              <SectionReveal delay={0.35}>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-steel lg:max-w-md">
                  We are proud to champion excellence in software development
                  on a national scale. For over a decade, our team has been led
                  by professionals with diverse and profound expertise united by
                  a common purpose — to create digital solutions that benefit
                  our clients and the communities they serve.
                </p>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-steel lg:max-w-md">
                  Our people combine unwavering dedication, thoughtful
                  innovation, and the pursuit of craft — enabling us to meet
                  the evolving needs of our partners while nurturing the growth
                  of every team member.
                </p>
              </SectionReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── Team grid ────────────────────────────────────────── */}
      <section className="relative border-b border-white/5 py-20 md:py-32">
        <GridBackground />

        <div className="relative mx-auto max-w-7xl space-y-16 px-5 sm:px-6 md:space-y-20 lg:px-8">
          {DEPARTMENTS.map((dept) => {
            const members = TEAM_MEMBERS.filter((m) => m.department === dept);
            return (
              <div key={dept}>
                <SectionReveal>
                  <div className="flex flex-wrap items-center gap-4">
                    <h2 className="font-heading text-2xl font-bold uppercase tracking-normal text-white">
                      {dept}
                    </h2>
                    <div className="h-px min-w-16 flex-1 bg-white/10" />
                    <span className="font-mono text-xs text-steel">
                      {members.length}
                    </span>
                  </div>
                </SectionReveal>
                {members.length > 0 ? (
                  <div className="mt-8 grid justify-center gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,210px),260px))] md:mt-10">
                    {members.map((member, i) => (
                      <TeamCard key={member.name} member={member} index={i} />
                    ))}
                  </div>
                ) : (
                  <div className="mt-10 rounded-2xl border border-dashed border-white/15 bg-white/[0.03] px-6 py-10 text-center text-sm text-steel">
                    Profiles will appear here shortly.
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
