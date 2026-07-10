import { motion, useReducedMotion } from "framer-motion";
import { Target, Eye, Gem } from "lucide-react";
import { ABOUT_TIMELINE, CORE_VALUES, MISSION, VISION } from "@/lib/lyt24Data";
import SectionReveal from "../SectionReveal";
import GridBackground from "../GridBackground";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80";

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative border-b border-white/5 py-24 md:py-32"
    >
      <GridBackground />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal>
          <span className="section-label">About LYT24</span>
          <h2 className="mt-4 max-w-3xl font-heading text-4xl font-bold tracking-tight text-white md:text-5xl">
            Driving Digital Transformation Across Africa
          </h2>
        </SectionReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionReveal>
            <p className="text-lg leading-relaxed text-steel">
              LYT24 Technologies is a forward-thinking digital solutions
              provider dedicated to transforming industries through robust,
              scalable, and user-centric technology. Founded in Abuja, we've
              grown into a trusted partner for organizations seeking
              enterprise-grade software solutions.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-steel">
              We combine global expertise with local understanding to deliver
              solutions tailored to the African market — building systems that
              are not just technically excellent, but contextually relevant and
              built to last.
            </p>
            <div className="mt-8 flex gap-8">
              <div>
                <div className="font-mono text-3xl font-bold text-aqua">
                  150+
                </div>
                <div className="mt-1 text-sm text-steel">
                  Projects Delivered
                </div>
              </div>
              <div className="border-l border-white/10 pl-8">
                <div className="font-mono text-3xl font-bold text-aqua">8+</div>
                <div className="mt-1 text-sm text-steel">
                  Years of Excellence
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <img
                src={ABOUT_IMAGE}
                alt="Technology and innovation"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
            </div>
          </SectionReveal>
        </div>

        <div className="mt-24">
          <SectionReveal>
            <h3 className="font-heading text-2xl font-bold text-white">
              Our Journey
            </h3>
          </SectionReveal>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {ABOUT_TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
                whileInView={
                  reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-xl border border-white/10 bg-white/[0.02] p-6"
              >
                <div className="font-mono text-sm font-bold text-aqua">
                  {item.year}
                </div>
                <h4 className="mt-2 font-heading text-base font-semibold text-white">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-steel">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24 grid gap-6 lg:grid-cols-2">
          <SectionReveal>
            <div className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-cobalt/10 to-transparent p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cobalt/30 bg-cobalt/10">
                <Target className="h-5 w-5 text-cobalt" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold text-white">
                Our Mission
              </h3>
              <p className="mt-3 leading-relaxed text-steel">{MISSION}</p>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-aqua/10 to-transparent p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-aqua/30 bg-aqua/10">
                <Eye className="h-5 w-5 text-aqua" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold text-white">
                Our Vision
              </h3>
              <p className="mt-3 leading-relaxed text-steel">{VISION}</p>
            </div>
          </SectionReveal>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CORE_VALUES.map((value, i) => (
            <motion.div
              key={value.title}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-6"
            >
              <Gem className="h-5 w-5 text-aqua" />
              <h4 className="mt-4 font-heading text-base font-semibold text-white">
                {value.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-steel">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
