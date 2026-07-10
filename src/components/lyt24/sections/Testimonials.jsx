import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/lyt24Data";
import SectionReveal from "../SectionReveal";
import GridBackground from "../GridBackground";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  const testimonial = TESTIMONIALS[active];

  return (
    <section className="relative border-b border-white/5 py-24 md:py-32">
      <div className="absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-grape/5 blur-[120px]" />
      <GridBackground />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <SectionReveal className="text-center">
          <span className="section-label">Client Stories</span>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-white md:text-5xl">
            Trusted by Leaders
          </h2>
        </SectionReveal>

        <div className="mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12"
            >
              <Quote className="h-10 w-10 text-aqua/30" />
              <div className="mt-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-aqua text-aqua" />
                ))}
              </div>
              <p className="mt-6 text-lg leading-relaxed text-white md:text-xl">
                "{testimonial.quote}"
              </p>
              <div className="mt-8">
                <div className="font-heading font-semibold text-white">
                  {testimonial.author}
                </div>
                <div className="text-sm text-steel">{testimonial.role}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-8 bg-aqua"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
