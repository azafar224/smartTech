
import React, { useEffect } from "react"; // Added `useEffect` import
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom"; // Added `useLocation` import
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Careers from "./Pages/Careers";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the route changes
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <ScrollToTop />
        <main className="flex-grow relative z-10 bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
