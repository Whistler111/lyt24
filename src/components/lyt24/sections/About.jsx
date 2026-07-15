import { useState, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Eye, ArrowRight } from "lucide-react";
import { ABOUT_TIMELINE, MISSION, VISION } from "@/lib/lyt24Data";
import SectionReveal from "../SectionReveal";
import GridBackground from "../GridBackground";

const ABOUT_IMAGES = [
  "/g1.jpeg",
  "/g2.jpeg",
  "/g3.jpeg",
  "/g4.jpeg",
  "/g5.jpeg",
  "/g6.jpeg",
  "/g7.jpeg",
  "/g8.jpeg",
  "/g9.jpeg",
  "/g12.jpeg",
  "/g13.jpeg",
  "/garr.jpg"
];

export default function About() {
  const reduceMotion = useReducedMotion();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % ABOUT_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reduceMotion]);

  return (
    <section
      id="about"
      className="relative border-b border-white/5 py-20 md:py-32"
    >
      <GridBackground />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionReveal>
          <span className="section-label">About LYT24</span>
          <h2 className="mt-4 max-w-3xl font-heading text-4xl font-bold tracking-normal text-white md:text-5xl">
            Driving Digital Transformation Across Africa
          </h2>
        </SectionReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionReveal>
            <p className="text-base leading-relaxed text-steel md:text-lg">
              LYT24 Technologies is a forward-thinking digital solutions
              provider dedicated to transforming industries through robust,
              scalable, and user-centric technology. Founded in Abuja, we've
              grown into a trusted partner for organizations seeking
              enterprise-grade software solutions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-steel md:text-lg">
              We combine global expertise with local understanding to deliver
              solutions tailored to the African market — building systems that
              are not just technically excellent, but contextually relevant and
              built to last.
            </p>
            <div className="mt-8 flex flex-row items-center justify-center gap-8 sm:justify-start">
              <div className="text-center sm:text-left">
                <div className="font-mono text-3xl sm:text-4xl font-bold text-aqua">
                  50+
                </div>
                <div className="mt-1 text-xs sm:text-sm text-steel">
                  Projects Delivered
                </div>
              </div>
              <div className="border-l border-white/10 pl-8 text-center sm:text-left">
                <div className="font-mono text-3xl sm:text-4xl font-bold text-aqua">2+</div>
                <div className="mt-1 text-xs sm:text-sm text-steel">
                  Years of Excellence
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 aspect-[4/3] w-full">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={ABOUT_IMAGES[currentImageIndex]}
                  alt="LYT24 Team and Culture"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </SectionReveal>
        </div>

        <div className="mt-24">
          <SectionReveal>
            <h3 className="font-heading text-2xl font-bold text-white">
              Our Journey
            </h3>
          </SectionReveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
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

        <div className="mt-24 flex flex-col gap-12 max-w-5xl mx-auto">
          {/* Mission Card */}
          <SectionReveal>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-6 sm:p-10 md:p-16 transition-all hover:bg-white/[0.04]">
              <div className="grid gap-12 md:grid-cols-2 items-center">
                {/* Left: Text Content */}
                <div className="order-2 md:order-1 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight">
                      Our <span className="text-aqua">Mission</span>
                    </h3>
                    <div className="mt-6 h-1 w-16 rounded-full bg-aqua" />
                  </div>
                  
                  <p className="text-lg font-light leading-relaxed text-steel/90 max-w-md">
                    {MISSION}
                  </p>
                  
                  <Link to="/portfolio" className="mt-10 flex items-center gap-2 text-sm font-semibold text-aqua hover:text-aqua/80 transition-colors w-fit group">
                    Learn more about our journey 
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Right: Image */}
                <div className="order-1 md:order-2 flex justify-center md:justify-end relative z-10">
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md"
                  >
                    <img src="/mission.png" alt="Our Mission Illustration" className="h-auto w-full object-contain drop-shadow-2xl" />
                  </motion.div>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Vision Card */}
          <SectionReveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-6 sm:p-10 md:p-16 transition-all hover:bg-white/[0.04]">
              <div className="grid gap-12 md:grid-cols-2 items-center">
                {/* Left: Image */}
                <div className="order-1 flex justify-center md:justify-start relative z-10">
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md"
                  >
                    <img src="/vision.png" alt="Our Vision Illustration" className="h-auto w-full object-contain drop-shadow-2xl" />
                  </motion.div>
                </div>
                
                {/* Right: Text Content */}
                <div className="order-2 flex flex-col justify-center md:pl-8">
                  <div className="mb-6">
                    <h3 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight">
                      Our <span className="text-cobalt">Vision</span>
                    </h3>
                    <div className="mt-6 h-1 w-16 rounded-full bg-cobalt" />
                  </div>
                  
                  <p className="text-lg font-light leading-relaxed text-steel/90 max-w-md">
                    {VISION}
                  </p>
                  
                  <Link to="/portfolio" className="mt-10 flex items-center gap-2 text-sm font-semibold text-cobalt hover:text-cobalt/80 transition-colors w-fit group">
                    Learn more about our journey 
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>

      </div>
    </section>
  );
}
