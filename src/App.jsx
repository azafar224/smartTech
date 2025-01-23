import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Careers from "./Pages/Careers";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <main className="flex-grow relative z-10 bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Portfolio" element={<Portfolio />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
