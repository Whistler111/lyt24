import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";
import Seo from "./Seo";

export default function Layout() {
  const [loading, setLoading] = useState(
    () => !sessionStorage.getItem("lyt24-loaded"),
  );

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        sessionStorage.setItem("lyt24-loaded", "true");
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <>
      <Seo />
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
