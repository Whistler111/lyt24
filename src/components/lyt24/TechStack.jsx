import SectionReveal from "./SectionReveal";
import Icon from "./Icon";
import { techStack } from "@/lib/lyt24Data";

export default function TechStack() {
  return (
    <section className="border-y border-white/5 bg-midnight py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal>
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-phosphor">
              Technology Stack
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Built with <span className="gradient-text">Best-in-Class</span>{" "}
              Tools
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/50">
              We leverage the world's most powerful technologies to deliver
              solutions that are fast, secure, and scalable.
            </p>
          </div>
        </SectionReveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {techStack.map((group, i) => (
            <SectionReveal key={group.category} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cobalt/20 bg-cobalt/10 text-cobalt-light">
                    <Icon name={group.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {group.category}
                  </h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/60 transition-all hover:border-phosphor/30 hover:text-phosphor"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
