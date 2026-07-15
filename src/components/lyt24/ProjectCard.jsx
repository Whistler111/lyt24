import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index = 0, className = "", aspectClass = "aspect-[4/3] sm:aspect-[16/10]" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        to={`/portfolio/${project.slug}`}
        className="group block w-full"
      >
        <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-navy ${aspectClass}`}>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        
        <div className="mt-4 flex flex-col gap-1">
          <h3 className="font-display text-lg font-semibold tracking-normal text-aqua transition-colors group-hover:text-phosphor sm:text-xl">
            {project.title}
          </h3>
          <p className="text-sm text-steel">
            {project.short_description || project.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
