import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, CheckCircle, Send, ChevronDown, Plus, Minus } from "lucide-react";
import { contactInfo } from "@/lib/lyt24Data";
import SectionReveal from "@/components/lyt24/SectionReveal";
import GridBackground from "@/components/lyt24/GridBackground";

/* ── Word-by-word blur + slide reveal ─────────────────────── */
function WordReveal({ text, className = "", wordDelay = 60 }) {
  const ref = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <h1 ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            display: "inline-block",
            marginRight: "0.28em",
            transform: triggered ? "translateY(0)" : "translateY(30px)",
            filter: triggered ? "blur(0px)" : "blur(6px)",
            opacity: triggered ? 1 : 0,
            transitionProperty: "transform, filter, opacity",
            transitionDuration: "900ms, 800ms, 600ms",
            transitionTimingFunction:
              "cubic-bezier(0.16,1,0.3,1), cubic-bezier(0.16,1,0.3,1), ease-out",
            transitionDelay: `${i * wordDelay}ms, ${i * wordDelay + 80}ms, ${i * wordDelay}ms`,
          }}
        >
          {word}
        </span>
      ))}
    </h1>
  );
}

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  project_type: z.string(),
  message: z.string().min(10, "Please tell us a bit more about your project"),
});

const PROJECT_TYPES = [
  "Custom Software",
  "Web Development",
  "Mobile App",
  "E-Commerce",
  "Cloud Solutions",
  "Digital Transformation",
  "Other",
];

const CONTACT_DETAILS = [
  {
    label: "FOR GENERAL INQUIRIES",
    items: [
      { icon: Mail, text: contactInfo.email, href: `mailto:${contactInfo.email}` },
      { icon: Phone, text: contactInfo.phone, href: contactInfo.phoneHref },
    ],
  },
  {
    label: "OUR OFFICE",
    items: [
      { icon: MapPin, text: contactInfo.address, href: contactInfo.mapLink },
    ],
  },
  // {
  //   label: "WORKING HOURS",
  //   items: [
  //     { icon: null, text: "Mon – Fri: 9:00 AM – 6:00 PM WAT", href: null },
  //     { icon: null, text: "Sat: 10:00 AM – 2:00 PM WAT", href: null },
  //   ],
  // },
];

const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary based on scope and complexity. A simple web app might take 4–8 weeks, while enterprise solutions typically run 3–6 months. We'll give you a detailed estimate after the initial discovery call.",
  },
  {
    q: "Do you work with startups or only enterprises?",
    a: "We work with both. From early-stage startups needing an MVP to large enterprises seeking digital transformation, we tailor our approach and engagement model to fit your stage and budget.",
  },
  {
    q: "What technologies do you specialise in?",
    a: "Our stack includes React, Next.js, Node.js, Python, Flutter, and cloud platforms like AWS and Azure. We pick the right tool for the job rather than forcing a one-size-fits-all approach.",
  },
  {
    q: "How do you handle project communication?",
    a: "We assign a dedicated project manager to every engagement. You'll get regular sprint updates, a shared project board, and direct access to the team via Slack or your preferred channel.",
  },
  {
    q: "Can you maintain and scale the product after launch?",
    a: "Absolutely. We offer retainer-based maintenance packages covering bug fixes, performance monitoring, feature additions, and infrastructure scaling as your user base grows.",
  },
];

function FaqItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="group border-b border-white/8 last:border-0"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors"
        aria-expanded={open}
      >
        <span
          className={`font-heading text-base font-semibold leading-snug transition-colors sm:text-lg ${
            open ? "text-aqua" : "text-white group-hover:text-white/80"
          }`}
        >
          {q}
        </span>
        <span
          className={`mt-1 shrink-0 flex h-6 w-6 items-center justify-center rounded-full border transition-all duration-300 ${
            open
              ? "border-aqua/50 bg-aqua/10 text-aqua rotate-0"
              : "border-white/10 bg-white/5 text-steel"
          }`}
        >
          {open ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          open ? "max-h-64 opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-steel leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { project_type: "Custom Software" },
  });

  const onSubmit = async (data) => {
    setSubmitError("");
    try {
      const subject = encodeURIComponent(`Project inquiry from ${data.name}`);
      const body = encodeURIComponent(
        [
          `Name: ${data.name}`,
          `Email: ${data.email}`,
          `Company: ${data.company || "Not provided"}`,
          `Project type: ${data.project_type}`,
          "",
          data.message,
        ].join("\n"),
      );
      window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
      setSubmitted(true);
      reset();
    } catch {
      setSubmitError(
        "Something went wrong. Please try again or contact us directly.",
      );
    }
  };

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative border-b border-white/5 pt-32 pb-20 md:pt-40 md:pb-28">
        <GridBackground />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
            <SectionReveal className="flex-1 text-center lg:text-left">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-aqua">
                Contact Us
              </span>
              <WordReveal
                text="Have a project, idea, or question? Get in touch and let's build something extraordinary together."
                className="font-heading mt-6 text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]"
                wordDelay={90}
              />
            </SectionReveal>
            <SectionReveal delay={0.15} className="flex flex-1 justify-center lg:justify-end">
              <img
                src="/Contact us-rafiki.png"
                alt="Contact us illustration"
                className="w-full max-w-xs drop-shadow-2xl sm:max-w-sm lg:max-w-md"
                loading="lazy"
                decoding="async"
              />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── Contact section ───────────────────────────────── */}
      <section className="relative py-20 md:py-28">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5 lg:gap-12">

            {/* ── Left: Contact details ── */}
            <div className="lg:col-span-2">
              <SectionReveal>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">
                  Reach Us
                </p>
                <h2 className="font-heading mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Get in Touch<br className="hidden sm:block" /> With Us
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-steel">
                  Whether you have a project in mind or just want to explore
                  what&apos;s possible — we&apos;re here to help.
                </p>

                {/* Contact groups */}
                <div className="mt-10 space-y-8">
                  {CONTACT_DETAILS.map((group) => (
                    <div key={group.label}>
                      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-steel/60">
                        {group.label}
                      </p>
                      <div className="space-y-2">
                        {group.items.map((item, i) =>
                          item.href ? (
                            <a
                              key={i}
                              href={item.href}
                              target={item.href.startsWith("http") ? "_blank" : undefined}
                              rel="noopener noreferrer"
                              className="group/link flex items-start gap-3 text-sm text-white/80 transition-colors hover:text-aqua"
                            >
                              {item.icon && (
                                <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-aqua/60 transition-colors group-hover/link:text-aqua" />
                              )}
                              <span>{item.text}</span>
                            </a>
                          ) : (
                            <p key={i} className="flex items-start gap-3 text-sm text-white/60">
                              {item.icon && (
                                <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-steel" />
                              )}
                              <span>{item.text}</span>
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map */}
                <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.011534165433!2d7.423156275089465!3d9.062711590999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e75cba9c784c7%3A0x6d398fbbb8207876!2sLyt24tech%20-%20Lyt24%20technologies!5e0!3m2!1sen!2sus!4v1784066300403!5m2!1sen!2sus"
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Lyt24tech office location"
                  />
                </div>
              </SectionReveal>
            </div>

            {/* ── Right: Form ── */}
            <div className="lg:col-span-3">
              <SectionReveal delay={0.12}>
                {submitted ? (
                  <div className="flex min-h-[480px] flex-col items-center justify-center rounded-2xl border border-aqua/20 bg-aqua/5 p-10 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-aqua/20 ring-4 ring-aqua/10">
                      <CheckCircle className="h-8 w-8 text-aqua" />
                    </div>
                    <h3 className="mt-6 font-heading text-2xl font-bold text-white">
                      Message Sent!
                    </h3>
                    <p className="mt-3 max-w-sm text-steel">
                      Thank you for reaching out. Our team will get back to you
                      within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-aqua/40 hover:text-aqua"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="relative rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-sm sm:p-7 md:p-10"
                  >
                    {/* Subtle glow */}
                    <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-aqua/5 via-transparent to-cobalt/5" />

                    <h3 className="font-heading text-xl font-bold text-white">
                      Send us a message
                    </h3>
                    <p className="mt-1 text-sm text-steel">
                      Fill in the form and we&apos;ll get back to you within 24 hours.
                    </p>

                    <div className="mt-7 grid gap-5 sm:grid-cols-2">
                      {/* Name */}
                      <div className="group/field">
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-steel/70">
                          Name <span className="text-aqua">*</span>
                        </label>
                        <input
                          {...register("name")}
                          placeholder="Your full name"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-steel/40 transition-all focus:border-aqua/60 focus:bg-white/8 focus:outline-none focus:ring-2 focus:ring-aqua/15"
                        />
                        {errors.name && (
                          <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-steel/70">
                          Email <span className="text-aqua">*</span>
                        </label>
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="you@company.com"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-steel/40 transition-all focus:border-aqua/60 focus:bg-white/8 focus:outline-none focus:ring-2 focus:ring-aqua/15"
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                      {/* Company */}
                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-steel/70">
                          Company
                        </label>
                        <input
                          {...register("company")}
                          placeholder="Your company (optional)"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-steel/40 transition-all focus:border-aqua/60 focus:bg-white/8 focus:outline-none focus:ring-2 focus:ring-aqua/15"
                        />
                      </div>

                      {/* Project Type */}
                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-steel/70">
                          Project Type
                        </label>
                        <div className="relative">
                          <select
                            {...register("project_type")}
                            className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-all focus:border-aqua/60 focus:outline-none focus:ring-2 focus:ring-aqua/15"
                          >
                            {PROJECT_TYPES.map((type) => (
                              <option key={type} value={type} className="bg-[#0d1117]">
                                {type}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-steel" />
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="mt-5">
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-steel/70">
                        Message <span className="text-aqua">*</span>
                      </label>
                      <textarea
                        {...register("message")}
                        rows={5}
                        placeholder="Tell us about your project, goals, and timeline..."
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-steel/40 transition-all focus:border-aqua/60 focus:bg-white/8 focus:outline-none focus:ring-2 focus:ring-aqua/15"
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>
                      )}
                    </div>

                    {submitError && (
                      <p className="mt-4 rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3 text-sm text-red-400">
                        {submitError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-cobalt px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-cobalt/25 transition-all hover:bg-cobalt/90 hover:shadow-cobalt/40 hover:shadow-xl disabled:opacity-50 sm:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ section ───────────────────────────────────── */}
      <section className="relative border-t border-white/5 py-20 md:py-28">
        <GridBackground />
        <div className="relative mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <SectionReveal className="mb-12 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-aqua">
              FAQ
            </span>
            <h2 className="font-heading mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              Questions we get asked a lot
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-steel">
              Can&apos;t find what you&apos;re looking for? Drop us a line and
              we&apos;ll be happy to help.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] px-5 sm:px-6 md:px-10">
              {FAQS.map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
