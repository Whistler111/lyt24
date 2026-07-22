import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import GridBackground from "@/components/lyt24/GridBackground";
import SectionReveal from "@/components/lyt24/SectionReveal";
import { ABOUT_TIMELINE, CORE_VALUES, MISSION, VISION, contactInfo } from "@/lib/lyt24Data";

const capabilities = [
  "Custom software development",
  "Website and web application development",
  "Mobile app development",
  "Cloud solutions and DevOps",
  "Digital transformation consulting",
  "Enterprise systems integration",
];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5 pb-20 pt-32 md:pb-28 md:pt-40">
        <GridBackground />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionReveal>
            <span className="section-label">About LYT24 Technologies</span>
            <h1 className="mt-5 max-w-5xl font-heading text-3xl font-bold leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
              LYT24 Technologies is a leading software company based in Abuja,
              Nigeria.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-steel sm:text-lg">
              We design, build, and support enterprise software, cloud systems,
              mobile applications, regulatory platforms, and digital
              transformation solutions for organizations across Nigeria and
              Africa.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["50+", "Projects delivered"],
                ["Abuja", "Headquarters"],
                ["Africa", "Primary market"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-6"
                >
                  <div className="font-mono text-3xl font-bold text-aqua">
                    {value}
                  </div>
                  <p className="mt-2 text-sm text-steel">{label}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="relative border-b border-white/5 py-20 md:py-28">
        <GridBackground />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionReveal>
            <span className="section-label">Who We Are</span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
              A local technology partner with enterprise delivery standards.
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="space-y-5 text-base leading-8 text-steel">
              <p>
                LYT24 Technologies helps public-sector teams, growing
                businesses, and enterprise organizations turn complex
                operational needs into secure, scalable digital products.
              </p>
              <p>
                Our work spans government platforms, energy and transportation
                systems, financial technology, innovation portals, websites,
                mobile applications, cloud architecture, and long-term product
                support.
              </p>
              <p>
                From discovery and strategy to design, engineering, deployment,
                and maintenance, we focus on practical systems that improve
                workflows, strengthen visibility, and create measurable value.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="relative border-b border-white/5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionReveal>
            <span className="section-label">What We Do</span>
            <h2 className="mt-4 max-w-3xl font-heading text-3xl font-bold text-white sm:text-4xl">
              Software services clients can understand and search engines can
              classify.
            </h2>
          </SectionReveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <SectionReveal key={capability} delay={index * 0.04}>
                <div className="flex h-full gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-aqua" />
                  <p className="text-sm font-medium leading-6 text-white/85">
                    {capability}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/5 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          {[
            ["Mission", MISSION],
            ["Vision", VISION],
          ].map(([title, body]) => (
            <SectionReveal key={title}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <h2 className="font-heading text-2xl font-bold text-white">
                  Our {title}
                </h2>
                <p className="mt-4 text-base leading-8 text-steel">{body}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="relative border-b border-white/5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionReveal>
            <span className="section-label">Values</span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
              How we work
            </h2>
          </SectionReveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((value, index) => (
              <SectionReveal key={value.title} delay={index * 0.05}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-steel">
                    {value.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <SectionReveal>
            <span className="section-label">Company Journey</span>
            <div className="mt-8 space-y-5">
              {ABOUT_TIMELINE.map((item) => (
                <div
                  key={item.year}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="font-mono text-sm font-bold text-aqua">
                    {item.year}
                  </div>
                  <h3 className="mt-2 font-heading text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-steel">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div className="sticky top-28 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="font-heading text-2xl font-bold text-white">
                Start a software project with LYT24.
              </h2>
              <p className="mt-4 text-sm leading-7 text-steel">
                Visit our Abuja office, send a project brief, or book a
                discovery conversation with the team.
              </p>
              <div className="mt-6 space-y-3 text-sm text-steel">
                <p>{contactInfo.address}</p>
                <p>{contactInfo.email}</p>
                <p>{contactInfo.phone}</p>
              </div>
              <Link
                to="/contact"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cobalt px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-cobalt/90 sm:w-auto"
              >
                Contact LYT24
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
