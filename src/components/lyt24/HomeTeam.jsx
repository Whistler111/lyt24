import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { teamMembers } from "@/lib/lyt24Data";

const gradients = [
  "from-cobalt to-phosphor",
  "from-amethyst to-cobalt",
  "from-phosphor to-amethyst",
];

function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function HomeTeam() {
  const leaders = teamMembers.filter((m) => m.leadership);
  return (
    <section className="bg-clinical py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal>
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-cobalt">
              Leadership
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              The Minds Behind <span className="gradient-text">LYT24</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
              Visionary leaders driving innovation and excellence across every
              project we deliver.
            </p>
          </div>
        </SectionReveal>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {leaders.map((member, i) => (
            <SectionReveal key={member.name} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 text-center transition-all duration-300 hover:border-cobalt/30 hover:shadow-xl hover:shadow-cobalt/5">
                <div
                  className={`mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br ${gradients[i % gradients.length]} text-3xl font-bold text-white shadow-xl`}
                >
                  {getInitials(member.name)}
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-slate-900">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-cobalt">
                  {member.role}
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  {member.department}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
        <SectionReveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              to="/team"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 transition-all hover:border-cobalt/30 hover:shadow-lg"
            >
              Meet the full team{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
