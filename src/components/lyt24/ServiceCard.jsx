import { motion } from "framer-motion";
import Icon from "./Icon";

export default function ServiceCard({
  title,
  description,
  specs = [],
  icon,
  span,
  index = 0,
}) {
  const isWide = span === "wide";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:border-cobalt/30 hover:bg-white/[0.04] ${
        isWide ? "lg:col-span-2" : "lg:col-span-1"
      }`}
    >
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cobalt/5 blur-3xl transition-opacity duration-500 group-hover:bg-cobalt/10" />
      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-cobalt/20 bg-cobalt/10 text-cobalt-light transition-all duration-500 group-hover:scale-110 group-hover:border-phosphor/30 group-hover:text-phosphor">
        <Icon name={icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-6 font-display text-xl font-semibold text-white">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-white/50">
        {description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {specs.map((spec) => (
          <span
            key={spec}
            className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/40 transition-colors group-hover:text-white/60"
          >
            {spec}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
