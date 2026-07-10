import { SERVICES } from "@/lib/lyt24Data";
import SectionReveal from "../SectionReveal";
import ServiceCard from "../ServiceCard";
import GridBackground from "../GridBackground";

export default function Services() {
  return (
    <section
      id="services"
      className="relative border-b border-white/5 py-24 md:py-32"
    >
      <GridBackground />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal>
          <span className="section-label">What We Do</span>
          <h2 className="mt-4 max-w-3xl font-heading text-4xl font-bold tracking-tight text-white md:text-5xl">
            Comprehensive Technology Solutions
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-steel">
            From custom software to cloud infrastructure, we offer end-to-end
            services to help your business thrive in the digital economy.
          </p>
        </SectionReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
