import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { VIDEO_URL } from "@/lib/lyt24Data";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-midnight">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-midnight/85 to-midnight" />
      <div className="absolute inset-0 grid-bg-light opacity-30" />
      <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-cobalt/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-amethyst/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-phosphor/20 bg-phosphor/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-phosphor">
            Enterprise Software Solutions · Abuja, Nigeria
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-4xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-7xl"
        >
          Building Africa's Next Generation of{" "}
          <span className="gradient-text">Digital Solutions</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60 lg:text-xl"
        >
          We engineer enterprise-grade software, drive digital transformation,
          and pioneer technology innovation across the continent — combining
          global expertise with deep local understanding.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            to="/contact"
            className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cobalt to-cobalt-dark px-8 py-4 text-base font-semibold text-white shadow-xl shadow-cobalt/30 transition-all duration-300 hover:scale-105 hover:shadow-cobalt/50"
          >
            Start a Project{" "}
            <ArrowRight className="h-5 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/portfolio"
            className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
          >
            View Portfolio
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20"
        >
          <ChevronDown className="h-5 w-5 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
