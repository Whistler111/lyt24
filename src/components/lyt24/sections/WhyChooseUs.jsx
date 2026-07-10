import { motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Layers,
  Lock,
  MapPin,
  Headphones,
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/lyt24Data";
import SectionReveal from "../SectionReveal";
import GridBackground from "../GridBackground";

const ICONS = { ShieldCheck, Zap, Layers, Lock, MapPin, Headphones };

export default function WhyChooseUs() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative border-b border-white/5 py-24 md:py-32">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cobalt/5 blur-[150px]" />
      <GridBackground />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal>
          <span className="section-label">Why Choose Us</span>
          <h2 className="mt-4 max-w-3xl font-heading text-4xl font-bold tracking-tight text-white md:text-5xl">
            Built for Enterprise. Designed for Africa.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-steel">
            We bring the rigor of global engineering standards with the nuance
            of local market expertise to every project we undertake.
          </p>
        </SectionReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = ICONS[item.icon] || ShieldCheck;
            return (
              <motion.div
                key={item.title}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
                whileInView={
                  reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:border-white/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-cobalt/20 to-aqua/10 text-aqua transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-heading text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
