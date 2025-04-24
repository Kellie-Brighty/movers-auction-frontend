import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/home/HeroSection";
import HowItWorks from "./components/home/HowItWorks";
import ServiceCards from "./components/home/ServiceCards";
import CTASection from "./components/home/CTASection";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <ScrollToTop />
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <HowItWorks />
                <ServiceCards />
                <CTASection />
              </>
            }
          />
          {/* Add more routes as needed */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
