import SectionReveal from "./SectionReveal";
import ServiceCard from "./ServiceCard";
import { services } from "@/lib/lyt24Data";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-midnight py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal>
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-phosphor">
              Capability Matrix
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Services Built for <span className="gradient-text">Scale</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/50">
              Comprehensive technology solutions to help businesses thrive in
              the digital economy.
            </p>
          </div>
        </SectionReveal>
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
