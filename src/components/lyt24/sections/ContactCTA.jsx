import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Mail } from "lucide-react";
import { COMPANY } from "@/lib/lyt24Data";
import SectionReveal from "../SectionReveal";
import GridBackground from "../GridBackground";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 py-24 md:py-32">
      <GridBackground />
      <div className="absolute left-1/2 top-1/2 h-64 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cobalt/10 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <SectionReveal>
          <span className="section-label">Let's Build Together</span>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-white md:text-6xl">
            Ready to Build Something{" "}
            <span className="gradient-text">Extraordinary?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-steel">
            Whether you're a government agency, enterprise, or startup, we have
            the expertise to bring your vision to life. Let's discuss your
            project today.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cobalt px-8 py-4 text-base font-semibold text-white transition-all hover:bg-cobalt/90 hover:shadow-xl hover:shadow-cobalt/30"
            >
              Start a Project
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
            >
              <Mail className="h-5 w-5" />
              Email Us
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
