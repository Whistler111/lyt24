import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index = 0 }) {
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
    >
      <Link
        to={`/portfolio/${project.slug}`}
        className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-navy"
      >
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="rounded-full border border-phosphor/30 bg-phosphor/10 px-3 py-1 text-xs font-medium text-phosphor">
              {project.category}
            </span>
            <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
              {project.industry}
            </span>
          </div>
          <h3 className="font-display text-lg font-semibold tracking-normal text-white transition-colors group-hover:text-phosphor sm:text-xl">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-white/50">
            {project.description}
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-cobalt-light opacity-0 transition-opacity group-hover:opacity-100">
            View case study <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
