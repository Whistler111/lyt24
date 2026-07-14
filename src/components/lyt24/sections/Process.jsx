import { motion, useReducedMotion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/lyt24Data";
import SectionReveal from "../SectionReveal";
import GridBackground from "../GridBackground";

export default function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative border-b border-white/5 py-20 md:py-32">
      <GridBackground />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionReveal>
          <span className="section-label">Our Process</span>
          <h2 className="mt-4 max-w-3xl font-heading text-4xl font-bold tracking-normal text-white md:text-5xl">
            A Proven Path From Idea to Impact
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-steel md:text-lg">
            Our seven-step development process ensures every project is
            delivered with precision, transparency, and excellence.
          </p>
        </SectionReveal>

        <div className="relative mt-16">
          <div className="absolute bottom-0 left-4 top-0 hidden w-px bg-gradient-to-b from-cobalt/30 via-aqua/20 to-transparent sm:block" />
          <ol className="space-y-6">
            {PROCESS_STEPS.map((step, i) => (
              <motion.li
                key={step.number}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
                whileInView={
                  reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }
                }
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative flex flex-col gap-4 sm:flex-row sm:gap-6"
              >
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-aqua/30 bg-obsidian font-mono text-sm font-bold text-aqua">
                  {step.number}
                </div>
                <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.02] p-6">
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
