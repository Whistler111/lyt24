import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { TEAM_MEMBERS } from "@/lib/lyt24Data";
import SectionReveal from "../SectionReveal";
import TeamCard from "../TeamCard";
import GridBackground from "../GridBackground";

export default function TeamPreview() {
  const leaders = TEAM_MEMBERS.filter((m) => m.department === "Leadership");

  return (
    <section
      id="team"
      className="relative border-b border-white/5 py-24 md:py-32"
    >
      <GridBackground />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="section-label">Our Team</span>
              <h2 className="mt-4 max-w-2xl font-heading text-4xl font-bold tracking-tight text-white md:text-5xl">
                Leadership That Drives Innovation
              </h2>
            </div>
            <Link
              to="/team"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-aqua transition-colors hover:text-white"
            >
              Meet the Full Team
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </SectionReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
