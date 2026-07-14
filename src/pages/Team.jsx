import { TEAM_MEMBERS } from "@/lib/lyt24Data";
import PageHero from "@/components/lyt24/PageHero";
import TeamCard from "@/components/lyt24/TeamCard";
import SectionReveal from "@/components/lyt24/SectionReveal";
import GridBackground from "@/components/lyt24/GridBackground";

const DEPARTMENTS = [
  "Leadership",
  "Engineering",
  "Product",
  "Legal",
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

      <section className="relative border-b border-white/5 py-20 md:py-32">
        <GridBackground />

        <div className="relative mx-auto max-w-7xl space-y-16 px-5 sm:px-6 md:space-y-20 lg:px-8">
          {DEPARTMENTS.map((dept) => {
            const members = TEAM_MEMBERS.filter((m) => m.department === dept);
            return (
              <div key={dept}>
                <SectionReveal>
                  <div className="flex flex-wrap items-center gap-4">
                    <h2 className="font-heading text-2xl font-bold uppercase tracking-normal text-white">
                      {dept}
                    </h2>
                    <div className="h-px min-w-16 flex-1 bg-white/10" />
                    <span className="font-mono text-xs text-steel">
                      {members.length}
                    </span>
                  </div>
                </SectionReveal>
                {members.length > 0 ? (
                  <div className="mt-8 grid justify-center gap-6 [grid-template-columns:repeat(auto-fit,minmax(210px,260px))] md:mt-10">
                    {members.map((member, i) => (
                      <TeamCard key={member.name} member={member} index={i} />
                    ))}
                  </div>
                ) : (
                  <div className="mt-10 rounded-2xl border border-dashed border-white/15 bg-white/[0.03] px-6 py-10 text-center text-sm text-steel">
                    Profiles will appear here shortly.
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
