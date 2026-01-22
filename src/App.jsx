import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

// Pages
import QuoteText from "./pages/quotetext";
import About from "./pages/about";
import Company from "./pages/company";
import Team from "./pages/team";
import Mission from "./pages/mission";
import Pricing from "./pages/pricing";
import Product from "./pages/product";
import Careers from "./pages/careers";
import Community from "./pages/community";
import PrivacyPolicy from "./pages/privacy"; // <-- NEW

function App() {
  const location = useLocation();

  // Check if we are on the quote page
  const isQuotePage = location.pathname === "/quote";

  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <Testimonial />
              <CTA />
            </>
          }
        />

        {/* ABOUT DROPDOWN PAGES */}
        <Route path="/about" element={<About />} />
        <Route path="/company" element={<Company />} />
        <Route path="/team" element={<Team />} />
        <Route path="/mission" element={<Mission />} />

        {/* OTHER PAGES */}
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/community" element={<Community />} />

        {/* PRIVACY POLICY */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* <-- NEW */}

        {/* GET STARTED / QUOTE PAGE */}
        <Route path="/quote" element={<QuoteText />} />
      </Routes>

      {/* Footer hidden on Quote page */}
      {!isQuotePage && <Footer />}
    </div>
  );
}

export default App;