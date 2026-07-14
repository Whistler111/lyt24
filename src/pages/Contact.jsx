import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  CheckCircle,
  Send,
} from "lucide-react";
import { COMPANY } from "@/lib/lyt24Data";
import PageHero from "@/components/lyt24/PageHero";
import SectionReveal from "@/components/lyt24/SectionReveal";
import GridBackground from "@/components/lyt24/GridBackground";

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
      window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
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
      <PageHero
        label="Get in Touch"
        title="Contact Us"
        subtitle="Ready to start your next project? Reach out to our team and let's build something extraordinary together."
      />

      <section className="relative border-b border-white/5 py-20 md:py-32">
        <GridBackground />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <SectionReveal>
                <h2 className="font-heading text-2xl font-bold tracking-normal text-white">
                  Let's Talk
                </h2>
                <p className="mt-3 text-steel">
                  Whether you have a project in mind or just want to learn more
                  about our services, we're here to help. Reach out through any
                  of these channels.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href={`https://wa.me/${COMPANY.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-aqua/30"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-aqua/10 text-aqua">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-white">
                        WhatsApp
                      </div>
                      <div className="break-words text-sm text-steel">
                        {COMPANY.phone}
                      </div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-aqua/30"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cobalt/10 text-cobalt">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-white">
                        Email
                      </div>
                      <div className="break-all text-sm text-steel">
                        {COMPANY.email}
                      </div>
                    </div>
                  </a>

                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-aqua/30"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-grape/10 text-grape">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-white">
                        Phone
                      </div>
                      <div className="break-words text-sm text-steel">
                        {COMPANY.phone}
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/5 text-steel">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-white">
                        Office
                      </div>
                      <div className="break-words text-sm text-steel">
                        {COMPANY.address}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 overflow-hidden rounded-xl border border-white/10">
                  <iframe
                    src="https://maps.google.com/maps?q=Jabi+Abuja+Nigeria&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="240"
                    style={{
                      border: 0,
                      filter: "invert(0.9) hue-rotate(180deg) contrast(0.9)",
                    }}
                    loading="lazy"
                    title="Office location map"
                  />
                </div>
              </SectionReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <SectionReveal delay={0.1}>
                {submitted ? (
                  <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-aqua/30 bg-aqua/5 p-8 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-aqua/20">
                      <CheckCircle className="h-8 w-8 text-aqua" />
                    </div>
                    <h3 className="mt-6 font-heading text-2xl font-bold tracking-normal text-white">
                      Message Sent!
                    </h3>
                    <p className="mt-2 max-w-sm text-steel">
                      Thank you for reaching out. Our team will get back to you
                      within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-steel">
                          Name *
                        </label>
                        <input
                          {...register("name")}
                          placeholder="Your full name"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-steel/50 focus:border-aqua focus:outline-none focus:ring-2 focus:ring-aqua/20"
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs text-red-400">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-steel">
                          Email *
                        </label>
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="you@company.com"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-steel/50 focus:border-aqua focus:outline-none focus:ring-2 focus:ring-aqua/20"
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-400">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-steel">
                          Company
                        </label>
                        <input
                          {...register("company")}
                          placeholder="Your company (optional)"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-steel/50 focus:border-aqua focus:outline-none focus:ring-2 focus:ring-aqua/20"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-steel">
                          Project Type
                        </label>
                        <select
                          {...register("project_type")}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-aqua focus:outline-none focus:ring-2 focus:ring-aqua/20"
                        >
                          {PROJECT_TYPES.map((type) => (
                            <option
                              key={type}
                              value={type}
                              className="bg-obsidian"
                            >
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mt-5">
                      <label className="mb-2 block text-sm font-medium text-steel">
                        Message *
                      </label>
                      <textarea
                        {...register("message")}
                        rows={5}
                        placeholder="Tell us about your project, goals, and timeline..."
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-steel/50 focus:border-aqua focus:outline-none focus:ring-2 focus:ring-aqua/20"
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-400">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {submitError && (
                      <p className="mt-4 rounded-lg border border-red-400/20 bg-red-400/5 px-4 py-3 text-sm text-red-400">
                        {submitError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cobalt px-8 py-4 text-base font-semibold text-white transition-all hover:bg-cobalt/90 hover:shadow-xl hover:shadow-cobalt/30 disabled:opacity-50 sm:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Sending...
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
    </>
  );
}
