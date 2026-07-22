import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import Icon from "./Icon";
import { footerLinks, socialLinks, contactInfo } from "@/lib/lyt24Data";

export default function Footer() {
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

  return (
    <footer className="relative bg-[#060B15] border-t border-white/5 overflow-hidden">
      
      {/* Main Footer Links */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12 z-10">
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3">
               <img src="/LOGO.png" alt="LYT24" className="h-8 w-auto brightness-0 invert opacity-90" decoding="async" />
               <span className="font-heading text-3xl font-bold text-white tracking-tight">LYT<span className="text-aqua">24</span></span>
            </Link>
            <p className="mt-6 max-w-sm text-base font-light leading-relaxed text-white/50">
              Building Africa's next generation of digital solutions. Enterprise software development headquartered in Abuja, Nigeria.
            </p>
            
            {/* Contact Details */}
            <div className="mt-8 flex flex-col gap-5 text-sm">
              <a href={contactInfo.phoneHref} className="flex items-center gap-4 group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 transition-colors group-hover:border-aqua/30 group-hover:bg-aqua/10">
                  <Phone className="h-4 w-4 text-aqua" />
                </div>
                <span className="font-medium text-white/60 group-hover:text-aqua transition-colors">{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-4 group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 transition-colors group-hover:border-aqua/30 group-hover:bg-aqua/10">
                  <Mail className="h-4 w-4 text-aqua" />
                </div>
                <span className="font-medium text-white/60 group-hover:text-aqua transition-colors">{contactInfo.email}</span>
              </a>
              <a href={contactInfo.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 transition-colors group-hover:border-aqua/30 group-hover:bg-aqua/10">
                  <MapPin className="h-4 w-4 text-aqua" />
                </div>
                <span className="max-w-[250px] leading-relaxed text-white/60 group-hover:text-aqua transition-colors pt-2">{contactInfo.address}</span>
              </a>
            </div>
          </div>

          {/* Dynamic Links */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:pl-12">
            {Object.entries(footerLinks).map(([key, links]) => (
              <div key={key}>
                <h4 className="text-sm font-bold uppercase tracking-widest text-white">
                  {key}
                </h4>
                <ul className="mt-8 flex flex-col gap-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        onClick={(e) => handleHashClick(e, link.to)}
                        className="text-sm font-light text-white/50 transition-all hover:text-aqua hover:translate-x-1 inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-steel/60">
            © {new Date().getFullYear()} LYT24 Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-steel transition-all hover:border-aqua/50 hover:bg-aqua/10 hover:text-aqua hover:-translate-y-1"
                aria-label={social.label}
              >
                <Icon name={social.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Massive Background Text */}
      <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 whitespace-nowrap opacity-[0.03] pointer-events-none select-none overflow-hidden w-full text-center">
        <span className="font-heading text-[18vw] font-black tracking-tighter text-white">
          LYT24 TECH
        </span>
      </div>
    </footer>
  );
}
