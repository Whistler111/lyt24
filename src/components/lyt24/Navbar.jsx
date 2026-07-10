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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed left-0 right-0 top-0 z-50 px-4"
      >
        <div
          className={`mx-auto transition-all duration-500 ${
            scrolled
              ? "mt-3 max-w-[1000px] rounded-2xl glass-strong shadow-2xl shadow-cobalt/5"
              : "max-w-7xl bg-transparent"
          }`}
        >
          <nav className="flex items-center justify-between px-6 py-4">
            <Link
              to="/"
              className="font-display text-xl font-bold tracking-tight text-white"
            >
              LYT<span className="gradient-text">24</span>
            </Link>
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={(e) => handleNavClick(e, link.to)}
                  className="text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-cobalt to-cobalt-dark px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cobalt/30 transition-all duration-300 hover:scale-105 hover:shadow-cobalt/50"
              >
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <button
              className="p-2 text-white md:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-midnight/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-xl font-bold text-white">
                LYT<span className="gradient-text">24</span>
              </span>
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
