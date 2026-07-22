import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadingScreen from "@/components/lyt24/LoadingScreen";
import Hero from "@/components/lyt24/sections/Hero";
import TrustClients from "@/components/lyt24/sections/TrustClients";
import About from "@/components/lyt24/sections/About";
import Services from "@/components/lyt24/sections/Services";
import FeaturedProjects from "@/components/lyt24/sections/FeaturedProjects";
import WhyChooseUs from "@/components/lyt24/sections/WhyChooseUs";
import TechStack from "@/components/lyt24/sections/TechStack";
import TeamPreview from "@/components/lyt24/sections/TeamPreview";
import Testimonials from "@/components/lyt24/sections/Testimonials";
import ContactCTA from "@/components/lyt24/sections/ContactCTA";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <LoadingScreen />
      <Hero />
      <TrustClients />
      <About />
      <Services />
      <FeaturedProjects />
      <WhyChooseUs />
      <TechStack />
      <TeamPreview />
      {/* <Process /> */}
      <Testimonials />
      <ContactCTA />
    </>
  );
}
