import SectionReveal from "./SectionReveal";
import { processSteps } from "@/lib/lyt24Data";

export default function Process() {
  return (
    <section className="bg-midnight py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionReveal>
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-phosphor">
              Our Process
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              From Concept to <span className="gradient-text">Launch</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/50">
              A proven 7-step methodology that ensures every project is
              delivered on time, on budget, and beyond expectations.
            </p>
          </div>
        </SectionReveal>
        <div className="mt-16">
          {processSteps.map((step, i) => (
            <SectionReveal key={step.number} delay={i * 0.05}>
              <div className="relative flex gap-6 pb-12 last:pb-0">
                {i < processSteps.length - 1 && (
                  <div className="absolute left-[27px] top-14 h-full w-px bg-gradient-to-b from-cobalt/30 to-transparent" />
                )}
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-cobalt/30 bg-midnight">
                  <span className="font-display text-lg font-bold gradient-text">
                    {step.number}
                  </span>
                </div>
                <div className="pt-1">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {step.description}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
