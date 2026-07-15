import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/#services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
];

const leftLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/#services" },
];

const rightLinks = [
  { label: "Portfolio", to: "/portfolio" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
];

const bannerMessages = [
  "New website, same brand.",
  "2 years going strong!",
  "New website, same boring people.",
  "Look mom, a new news banner!",
  "1,051,200 minutes in business!",
  "Still writing code and drinking coffee.",
  "New brand, new website, same us.",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menuIsCompact = scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleNavClick = (e, to) => {
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
    setMobileOpen(false);
  };

  return (
    <>
      {/* Announcement Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-obsidian text-white py-2 flex overflow-hidden border-b border-white/5 shadow-md">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap w-max"
        >
          {[...Array(2)].map((_, groupIdx) => (
            <div key={groupIdx} className="flex gap-16 px-8">
              {bannerMessages.map((msg, i) => (
                <span key={i} className="font-quote text-xs font-medium tracking-wide text-white/90">
                  {msg}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed left-0 right-0 top-8 z-50 px-4"
      >
        <div
          className={`mx-auto transition-all duration-500 ${
            scrolled
              ? "mr-0 mt-3 w-fit rounded-full glass-strong shadow-2xl shadow-cobalt/10"
              : "w-fit mt-6 rounded-full border border-white/10 bg-[#0a1525]/60 backdrop-blur-xl shadow-xl shadow-black/20"
          }`}
        >
          <nav
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? "px-3 py-3" : "px-8 py-2.5"
            }`}
          >
            {/* Scrolled compact layout (scrolled = true) */}
            {scrolled ? (
              <button
                className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition-colors hover:bg-white/10 flex"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            ) : (
              <>
                {/* Desktop Split Nav Layout (scrolled = false) */}
                <div className="hidden items-center gap-8 md:flex w-full py-0.5">
                  {/* Left Links */}
                  <div className="flex flex-1 items-center gap-6 justify-end">
                    {leftLinks.map((link) => {
                      const isActive =
                        location.pathname === link.to ||
                        (location.pathname === "/" && link.to === "/");
                      return (
                        <Link
                          key={link.label}
                          to={link.to}
                          onClick={(e) => handleNavClick(e, link.to)}
                          className={`relative text-xs font-semibold tracking-wider uppercase transition-colors duration-300 ${
                            isActive ? "text-white" : "text-white/60 hover:text-white"
                          }`}
                        >
                          {link.label}
                          {isActive && (
                            <motion.span
                              layoutId="activeNavUnderline"
                              className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-aqua rounded-full"
                              transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                          )}
                        </Link>
                      );
                    })}
                  </div>

                  {/* Center Logo */}
                  <div className="flex items-center justify-center px-2">
                    <Link
                      to="/"
                      className="hover:opacity-90 transition-opacity flex items-center justify-center"
                    >
                      <img
                        src="/LOGO.png"
                        alt="LYT24"
                        className="h-7 w-auto object-contain"
                      />
                    </Link>
                  </div>

                  {/* Right Links */}
                  <div className="flex flex-1 items-center gap-6 justify-start">
                    {rightLinks.map((link) => {
                      const isActive = location.pathname === link.to;
                      return (
                        <Link
                          key={link.label}
                          to={link.to}
                          onClick={(e) => handleNavClick(e, link.to)}
                          className={`relative text-xs font-semibold tracking-wider uppercase transition-colors duration-300 ${
                            isActive ? "text-white" : "text-white/60 hover:text-white"
                          }`}
                        >
                          {link.label}
                          {isActive && (
                            <motion.span
                              layoutId="activeNavUnderline"
                              className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-aqua rounded-full"
                              transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Mobile Nav Layout (scrolled = false) */}
                <div className="flex w-full items-center justify-between md:hidden">
                  {/* Start a Project button */}
                  <Link
                    to="/contact"
                    className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cobalt to-cobalt-dark px-4 py-2 text-xs font-semibold text-white shadow-md shadow-cobalt/30 transition-all hover:scale-105"
                  >
                    Start a Project <ArrowRight className="h-3.5 w-3.5" />
                  </Link>

                  {/* Hamburger */}
                  <button
                    className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition-colors hover:bg-white/10 flex"
                    onClick={() => setMobileOpen(true)}
                    aria-label="Open menu"
                  >
                    <Menu className="h-5 w-5" />
                  </button>
                </div>
              </>
            )}
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-[60] flex flex-col bg-midnight/95 backdrop-blur-2xl ${
              menuIsCompact ? "" : "md:hidden"
            }`}
          >
            <div className="flex items-center justify-between px-6 py-5">
              <Link to="/" onClick={() => setMobileOpen(false)} className="hover:opacity-80 transition-opacity">
                <img src="/LOGO.png" alt="LYT24" className="h-8 w-auto object-contain" />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-white"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <Link
                    to={link.to}
                    onClick={(e) => handleNavClick(e, link.to)}
                    className="font-display text-3xl font-semibold text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/contact"
                className="mt-4 flex items-center gap-2 rounded-full bg-gradient-to-r from-cobalt to-cobalt-dark px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-cobalt/30"
              >
                Start a Project <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
