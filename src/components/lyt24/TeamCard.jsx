import { motion } from "framer-motion";

const gradients = [
  "from-cobalt to-phosphor",
  "from-amethyst to-cobalt",
  "from-phosphor to-amethyst",
  "from-cobalt to-amethyst",
];

function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function TeamCard({ member, index = 0 }) {
  const gradient = gradients[index % gradients.length];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all duration-300 hover:border-cobalt/30 hover:shadow-xl hover:shadow-cobalt/5"
    >
      <div
        className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${gradient} text-xl font-bold text-white shadow-lg`}
      >
        {getInitials(member.name)}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">
        {member.name}
      </h3>
      <p className="mt-1 text-sm text-slate-500">{member.role}</p>
      <span className="mt-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
        {member.department}
      </span>
    </motion.div>
  );
}
