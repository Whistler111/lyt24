import SectionReveal from "./SectionReveal";
import Icon from "./Icon";
import { clientLogos, sectors } from "@/lib/lyt24Data";

const sectorIcons = {
  Finance: "Landmark",
  Healthcare: "HeartPulse",
  Government: "Building2",
  Education: "GraduationCap",
  Transportation: "Truck",
  Retail: "ShoppingBag",
  "Real Estate": "Building2",
  Agriculture: "Sprout",
};

export default function TrustClients() {
  return (
    <section className="border-b border-white/5 bg-navy py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal>
          <p className="text-center text-sm font-medium uppercase tracking-wider text-white/40">
            Trusted by leading organizations across Africa
          </p>
        </SectionReveal>
        <div className="relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-navy to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-navy to-transparent" />
          <div className="flex w-max animate-marquee gap-16">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <span
                key={i}
                className="shrink-0 font-display text-2xl font-bold text-white/20 transition-colors hover:text-white/40"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
        <SectionReveal delay={0.2}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60"
              >
                <Icon
                  name={sectorIcons[sector] || "Circle"}
                  className="h-4 w-4 text-phosphor"
                />
                {sector}
              </span>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
