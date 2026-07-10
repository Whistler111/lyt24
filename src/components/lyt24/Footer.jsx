import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import Icon from "./Icon";
import { footerLinks, socialLinks, contactInfo } from "@/lib/lyt24Data";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleHashClick = (e, to) => {
    if (to.includes("#")) {
      e.preventDefault();
      const hash = to.substring(to.indexOf("#"));
      if (location.pathname === "/") {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(
          () =>
            document
              .querySelector(hash)
              ?.scrollIntoView({ behavior: "smooth" }),
          400,
        );
      }
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-midnight">
      <div className="absolute inset-0 grid-bg-light opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="font-display text-2xl font-bold text-white">
              LYT<span className="gradient-text">24</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              Building Africa's next generation of digital solutions. Enterprise
              software development headquartered in Abuja, Nigeria.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/60">
              <a
                href={contactInfo.phoneHref}
                className="flex items-center gap-2 transition-colors hover:text-phosphor"
              >
                <Phone className="h-4 w-4" /> {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 transition-colors hover:text-phosphor"
              >
                <Mail className="h-4 w-4" /> {contactInfo.email}
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />{" "}
                {contactInfo.address}
              </p>
            </div>
          </div>
          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
                {key}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      onClick={(e) => handleHashClick(e, link.to)}
                      className="text-sm text-white/50 transition-colors hover:text-phosphor"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-6 border-t border-white/5 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <form onSubmit={handleSubscribe} className="flex max-w-md gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Subscribe to our newsletter"
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 transition-colors focus:border-cobalt/50 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-lg bg-cobalt px-4 py-2.5 text-white transition-colors hover:bg-cobalt-light"
              aria-label="Subscribe"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
          {subscribed && (
            <p className="text-xs text-phosphor">Thank you for subscribing!</p>
          )}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 transition-colors hover:text-phosphor"
                aria-label={social.label}
              >
                <Icon name={social.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-white/5 pt-6">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} LYT24 Technologies. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
