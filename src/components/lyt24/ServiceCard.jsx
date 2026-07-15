import { motion } from "framer-motion";
import Icon from "./Icon";

export default function ServiceCard({
  title,
  description,
  specs = [],
  icon,
  span,
  bgImage,
  index = 0,
}) {
  const isWide = span === "wide";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6, scale: 1.01 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a1525]/45 p-6 transition-all duration-300 hover:border-cobalt/40 hover:shadow-lg hover:shadow-cobalt/5 md:p-8 ${
        isWide ? "lg:col-span-2" : "lg:col-span-1"
      }`}
    >
      {/* Background Image with Zoom on Hover */}
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-15"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}

      {/* Radial Spotlight Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]" />

      {/* Glow Blur Backdrop */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cobalt/5 blur-3xl transition-opacity duration-500 group-hover:bg-cobalt/10" />

      <div className="relative z-10">
        <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-cobalt/20 bg-cobalt/10 text-cobalt-light transition-all duration-300 group-hover:scale-115 group-hover:border-aqua/40 group-hover:text-aqua group-hover:bg-cobalt/20">
          <Icon name={icon} className="h-6 w-6" />
        </div>
        <h3 className="mt-6 font-display text-xl font-semibold tracking-normal text-white group-hover:text-aqua transition-colors duration-300">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-steel">
          {description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {specs.map((spec) => (
            <span
              key={spec}
              className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/40 transition-all group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white/70"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
