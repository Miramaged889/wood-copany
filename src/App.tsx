import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import TradeWoods from "./components/TradeWoods";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import Partners from "./components/Partners";
import DesignManufacturing from "./components/DesignManufacturing";
import Dashboard from "./admin/Dashboard";

// Main Website Component
const MainWebsite: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F2EC]">
      <Header />
      <Hero />
      <About />
      <Services />
      <TradeWoods />
      <DesignManufacturing />
      <Projects />
      <Partners />
      <Contact />
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
};

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    // Check if the current path is /admin
    if (window.location.pathname === "/admin") {
      setShowAdmin(true);
    }
  }, []);

  if (showAdmin) {
    return <Dashboard />;
  }

  return <MainWebsite />;
}

export default App;
