import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { stats as STATS } from "@/lib/lyt24Data";
import StatCounter from "../StatCounter";
import GridBackground from "../GridBackground";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=85";
const STATIC_HEADLINE = "Building The Next Generation of";
const FLIP_PHRASES = [
  "Digital Solutions",
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
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setShouldLoadVideo(false);
      return;
    }
    // Show video on all screen sizes
    setShouldLoadVideo(true);
  }, [reduceMotion]);


  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(() => {
      setFlipIndex((prev) => (prev + 1) % FLIP_PHRASES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-obsidian">
      {/* Dynamic Background: Video on desktop, fallback image on mobile */}
      {shouldLoadVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-1000"
        >
          <source src="/iStock-1423738060.mp4" type="video/mp4" />
        </video>
      ) : (
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          loading="lazy"
        />
      )}

      {/* Subtle Bottom Gradient overlay for text legibility */}
      <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#D9693B]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[#F8A55F]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-1 items-end pb-16 sm:pb-24 lg:pb-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl lg:max-w-[62%] text-left">
            <motion.h1
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: reduceMotion ? 0 : 1.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="max-w-full font-heading text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-5xl lg:text-6xl"
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

            <motion.div
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: reduceMotion ? 0 : 2.1 }}
              className="mt-6 flex sm:mt-8"
            >
              <Link
                to="/portfolio"
                className="group inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-obsidian shadow-lg shadow-black/10 transition-all hover:bg-white/95 hover:scale-[1.02]"
              >
                View Portfolio
              </Link>
            </motion.div>
          </div>
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
