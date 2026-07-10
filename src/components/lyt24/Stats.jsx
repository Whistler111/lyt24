import SectionReveal from "./SectionReveal";
import { stats } from "@/lib/lyt24Data";

export default function Stats() {
  return (
    <section className="relative border-y border-white/5 bg-midnight py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0">
          {stats.map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 0.1}>
              <div
                className={`text-center lg:px-8 ${i > 0 ? "lg:border-l lg:border-white/10" : ""}`}
              >
                <div className="font-display text-4xl font-bold lg:text-5xl">
                  <span className="gradient-text">
                    {stat.value}
                    {stat.suffix}
                  </span>
                </div>
                <p className="mt-2 text-sm text-white/50">{stat.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
