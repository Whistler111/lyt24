import {
  Landmark,
  CreditCard,
  HeartPulse,
  GraduationCap,
  Truck,
  ShoppingBag,
  Building2,
  Sprout,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
  Building2,
  Sprout,
};

export default function TrustClients() {
  return (
    <section className="relative pt-20 pb-0 md:pt-24 md:pb-0 bg-obsidian">
      <GridBackground />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
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

        <div className="mt-16 border-t border-white/10 py-12 md:py-16 overflow-hidden flex flex-col">
          <div className="mx-auto mb-10 md:mb-12 w-full max-w-7xl px-5 sm:px-6 lg:px-8">
            <h2 className="font-heading text-[1.35rem] leading-tight sm:text-3xl font-medium text-white md:text-4xl lg:text-5xl whitespace-nowrap">
              Industries we've <del className="text-white/40 decoration-red-500/70">disrupted</del> served.
            </h2>
          </div>
          
          {/* Sliding Pills */}
          <div className="relative flex w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_60px,_black_calc(100%-60px),transparent_100%)]">
            <motion.div
              className="flex shrink-0 items-center gap-6"
              animate={{ x: [0, -2200] }}
              transition={{
                duration: 40,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {/* Duplicate the array twice for seamless looping */}
              {[...Array(2)].map((_, idx) => (
                <div key={idx} className="flex items-center gap-6 pr-6">
                  {[
                    "Food & Beverage",
                    "Nonprofit & Education",
                    "Professional Services",
                    "Real Estate & Development",
                    "Retail & Consumer Goods",
                    "Finance & FinTech",
                    "Government & Public Sector",
                    "Healthcare & Life Sciences",
                    "Transportation & Logistics",
                  ].map((sector, i) => (
                    <Link
                      key={`${idx}-${i}`}
                      to="/portfolio"
                      className="whitespace-nowrap rounded-[2rem] border border-white/20 bg-transparent px-8 py-3.5 text-base font-medium text-steel transition-all hover:border-aqua/50 hover:bg-aqua/10 hover:text-aqua md:px-10 md:py-4 md:text-lg"
                    >
                      {sector}
                    </Link>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
