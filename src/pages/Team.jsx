import { TEAM_MEMBERS } from "@/lib/lyt24Data";
import PageHero from "@/components/lyt24/PageHero";
import TeamCard from "@/components/lyt24/TeamCard";
import SectionReveal from "@/components/lyt24/SectionReveal";
import GridBackground from "@/components/lyt24/GridBackground";

const DEPARTMENTS = [
  "Leadership",
  "Engineering",
  "Product",
  "Operations",
  "Marketing",
];

export default function Team() {
  return (
    <>
      <PageHero
        label="Our People"
        title="Meet the Team"
        subtitle="Meet all the talented professionals who make LYT24 Technologies successful. Our team brings together expertise across engineering, product, operations, and marketing."
      />

      <section className="relative border-b border-white/5 py-24 md:py-32">
        <GridBackground />

        <div className="relative mx-auto max-w-7xl space-y-20 px-6 lg:px-8">
          {DEPARTMENTS.map((dept) => {
            const members = TEAM_MEMBERS.filter((m) => m.department === dept);
            if (members.length === 0) return null;
            return (
              <div key={dept}>
                <SectionReveal>
                  <div className="flex items-center gap-4">
                    <h2 className="font-heading text-2xl font-bold text-white">
                      {dept}
                    </h2>
                    <div className="h-px flex-1 bg-white/10" />
                    <span className="font-mono text-xs text-steel">
                      {members.length} members
                    </span>
                  </div>
                </SectionReveal>
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {members.map((member, i) => (
                    <TeamCard key={member.name} member={member} index={i} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
