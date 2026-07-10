import SectionReveal from "./SectionReveal";
import GridBackground from "./GridBackground";

export default function PageHero({ label, title, subtitle }) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 pt-32 pb-16 md:pt-40 md:pb-24">
      <GridBackground />
      <div className="absolute left-1/4 top-0 h-64 w-96 rounded-full bg-cobalt/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal>
          {label && <span className="section-label">{label}</span>}
          <h1 className="mt-4 max-w-4xl font-heading text-4xl font-bold tracking-tight text-white md:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-lg text-steel">{subtitle}</p>
          )}
        </SectionReveal>
      </div>
    </section>
  );
}
