import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { stats as STATS } from "@/lib/lyt24Data";
import StatCounter from "../StatCounter";
import GridBackground from "../GridBackground";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=85";
const STATIC_HEADLINE = "Building Africa's Next Generation of";
const FLIP_PHRASES = [
  "Digital Solutions",
  "AI Solutions",
  "Enterprise Platforms",
  "Government Systems",
  "Healthcare Technology",
  "FinTech Innovation",
  "Mobile Applications",
  "Cloud Infrastructure",
  "Data Intelligence",
  "Secure Digital Platforms",
  "Smart Automation",
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [flipIndex, setFlipIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(() => {
      setFlipIndex((prev) => (prev + 1) % FLIP_PHRASES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-obsidian">
      <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-[#0a1525] to-obsidian" />

      {/* <img
        src={HERO_IMAGE}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      /> */}

      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-obsidian/70 to-obsidian" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/95 via-obsidian/40 to-obsidian/60" />

      <GridBackground />

      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#D9693B]/20 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[#F8A55F]/10 blur-[120px]" />

      <div className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto w-full max-w-7xl px-5 pb-12 pt-28 sm:px-6 lg:px-8">
          <motion.h1
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="max-w-full font-heading text-4xl font-bold leading-[1.08] tracking-normal text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {STATIC_HEADLINE}{" "}
            <span
              className="relative inline-flex max-w-full overflow-hidden align-bottom"
              style={{ minHeight: "1.1em" }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={flipIndex}
                  initial={reduceMotion ? false : { y: "1.1em", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={
                    reduceMotion ? { opacity: 0 } : { y: "-1.1em", opacity: 0 }
                  }
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flame-text leading-none"
                >
                  {FLIP_PHRASES[flipIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-steel md:mt-8 md:text-xl"
          >
            We engineer enterprise-grade software, digital platforms, and
            technology innovation that transform industries across Africa —
            combining global expertise with deep local understanding.
          </motion.p>

          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row"
          >
            <Link
              to="/contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-cobalt px-6 py-4 text-base font-semibold text-white transition-all hover:bg-cobalt/90 hover:shadow-xl hover:shadow-cobalt/30 sm:w-auto sm:px-8"
            >
              Start a Project
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/portfolio"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10 sm:w-auto sm:px-8"
            >
              <Play className="h-4 w-4" />
              View Portfolio
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="relative z-10 border-t border-white/10 bg-obsidian/60 backdrop-blur-xl"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-y divide-white/10 md:grid-cols-4 md:divide-y-0">
            {STATS.map((stat) => (
              <div key={stat.label} className="px-4 py-6 md:py-8">
                <StatCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
