import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { testimonials } from "@/lib/lyt24Data";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActive((p) => (p + 1) % testimonials.length),
      6000,
    );
    return () => clearInterval(timer);
  }, []);

  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () =>
    setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="border-y border-white/5 bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <SectionReveal>
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-phosphor">
              Testimonials
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-normal text-white sm:text-4xl lg:text-5xl">
              Trusted by <span className="gradient-text">Leaders</span>
            </h2>
          </div>
        </SectionReveal>
        <div className="relative mt-16">
          <Quote className="absolute -top-8 left-0 h-16 w-16 text-white/5" />
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div className="mb-6 flex justify-center gap-1">
                {Array.from({ length: testimonials[active].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-phosphor text-phosphor"
                    />
                  ),
                )}
              </div>
              <blockquote className="font-quote text-center text-xl leading-relaxed text-white/80 lg:text-2xl">
                &ldquo;{testimonials[active].quote}&rdquo;
              </blockquote>
              <div className="mt-8 text-center">
                <div className="font-display text-lg font-semibold text-white">
                  {testimonials[active].author}
                </div>
                <div className="mt-1 text-sm text-phosphor">
                  {testimonials[active].company}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-phosphor/30 hover:text-phosphor"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${i === active ? "w-8 bg-phosphor" : "w-2 bg-white/20"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-phosphor/30 hover:text-phosphor"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
