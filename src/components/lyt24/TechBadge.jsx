import { motion, useReducedMotion } from "framer-motion";

export default function TechBadge({ name, index = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 transition-all duration-300 hover:border-aqua/30 hover:bg-white/[0.06]"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-aqua transition-all duration-300 group-hover:scale-150" />
      <span className="font-mono text-sm text-white/80 transition-colors group-hover:text-white">
        {name}
      </span>
    </motion.div>
  );
}
