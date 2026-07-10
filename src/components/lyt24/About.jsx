import SectionReveal from "./SectionReveal";
import { companyTimeline, mission, vision, coreValues } from "@/lib/lyt24Data";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-clinical py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <SectionReveal>
            <span className="text-sm font-medium uppercase tracking-wider text-cobalt">
              About LYT24
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Driving Digital Transformation in Africa
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              LYT24 Technologies is a forward-thinking digital solutions
              provider dedicated to transforming industries through robust,
              scalable, and user-centric technology.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              We combine global expertise with local understanding to deliver
              solutions tailored to the African market — building software that
              powers government agencies, financial institutions, healthcare
              providers, and enterprises across the continent.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cobalt/10 to-phosphor/10 blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="LYT24 team collaboration"
                loading="lazy"
                className="relative aspect-[4/3] w-full rounded-2xl border border-slate-200 object-cover shadow-2xl"
              />
            </div>
          </SectionReveal>
        </div>

        <div className="mt-24 grid gap-6 lg:grid-cols-2">
          <SectionReveal>
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-8">
              <h3 className="font-display text-xl font-semibold text-slate-900">
                Our Mission
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {mission}
              </p>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-8">
              <h3 className="font-display text-xl font-semibold text-slate-900">
                Our Vision
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {vision}
              </p>
            </div>
          </SectionReveal>
        </div>

        <div className="mt-24">
          <SectionReveal>
            <h3 className="text-center font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              Our Journey
            </h3>
          </SectionReveal>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {companyTimeline.map((item, i) => (
              <SectionReveal key={item.year} delay={i * 0.1}>
                <div className="relative border-l-2 border-cobalt/20 pl-6">
                  <div className="absolute -left-[7px] top-0 h-3 w-3 rounded-full bg-cobalt ring-4 ring-cobalt/10" />
                  <span className="font-display text-2xl font-bold gradient-text">
                    {item.year}
                  </span>
                  <h4 className="mt-2 font-semibold text-slate-900">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-500">
                    {item.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <SectionReveal>
            <h3 className="text-center font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              Our Core Values
            </h3>
          </SectionReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, i) => (
              <SectionReveal key={value.title} delay={i * 0.1}>
                <div className="h-full rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-cobalt/30 hover:shadow-lg">
                  <h4 className="font-display text-lg font-semibold text-slate-900">
                    {value.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    {value.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
