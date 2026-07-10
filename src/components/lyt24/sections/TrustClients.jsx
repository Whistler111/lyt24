import {
  Landmark,
  CreditCard,
  HeartPulse,
  GraduationCap,
  Truck,
  ShoppingBag,
} from "lucide-react";
import { INDUSTRIES } from "@/lib/lyt24Data";
import SectionReveal from "../SectionReveal";
import PartnerCarousel from "../PartnerCarousel";
import GridBackground from "../GridBackground";

const ICONS = {
  Landmark,
  CreditCard,
  HeartPulse,
  GraduationCap,
  Truck,
  ShoppingBag,
};

export default function TrustClients() {
  return (
    <section className="relative border-b border-white/5 py-20 md:py-24">
      <GridBackground />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="text-center">
          <span className="section-label">Trusted By Industry Leaders</span>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-steel">
            Government agencies, financial institutions, and enterprises across
            Nigeria rely on LYT24 for mission-critical technology solutions.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mt-12">
          <PartnerCarousel />
        </SectionReveal>

        <SectionReveal delay={0.2} className="mt-16">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {INDUSTRIES.map((industry, i) => {
              const Icon = ICONS[industry.icon] || Landmark;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-5 text-center transition-colors hover:border-aqua/20"
                >
                  <Icon className="h-6 w-6 text-aqua" />
                  <span className="text-xs text-steel">{industry.name}</span>
                </div>
              );
            })}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
