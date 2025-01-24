import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Careers from "./Pages/Careers";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import WebDevelopment from "./Pages/WebDevelopment";
import MobileAppDevelopment from "./Pages/MobileAppDevelopment";
import PythonDevelopment from "./Pages/pythonDevelopment";
import BlockchainDevelopment from "./Pages/BlockChainDevelopment";
import AIDevelopment from "./Pages/AIDevelopment";
// import DataAnalytics from "./Pages/DataAnalytics";
// import CyberSecurity from "./Pages/CyberSecurity";
// import EcommerceSolutions from "./Pages/EcommerceSolutions";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
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
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route
              path="/mobile-app-development"
              element={<MobileAppDevelopment />}
            />
            <Route path="/python-development" element={<PythonDevelopment />} />
            <Route
              path="/blockchain-development"
              element={<BlockchainDevelopment />}
            />
            <Route path="/ai-development" element={<AIDevelopment />} />
            {/* <Route path="/data-analytics" element={<DataAnalytics />} /> */}
            {/* <Route path="/cyber-security" element={<CyberSecurity />} /> */}
            {/* <Route
              path="/ecommerce-solutions"
              element={<EcommerceSolutions />}
            /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
