import SectionReveal from "./SectionReveal";
import Icon from "./Icon";
import { whyChooseUs } from "@/lib/lyt24Data";

export default function WhyChooseUs() {
  return (
    <section className="bg-clinical py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal>
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-cobalt">
              Why Choose Us
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Engineered for <span className="gradient-text">Excellence</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
              We don't just write code. We build digital infrastructure that
              powers Africa's most ambitious organizations.
            </p>
          </div>
        </SectionReveal>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <SectionReveal key={item.title} delay={(i % 3) * 0.1}>
              <div className="group h-full rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-cobalt/30 hover:shadow-xl hover:shadow-cobalt/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cobalt/10 to-phosphor/10 text-cobalt transition-transform duration-300 group-hover:scale-110">
                  <Icon name={item.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
