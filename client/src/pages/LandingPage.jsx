import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DashboardPreview from "../components/DashboardPreview";
import Features from "../components/Features";
import ImageSection from "../components/ImageSection";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f9f9ff]">
      <Navbar />
      <Hero />
      <DashboardPreview />
      <Features />
      <ImageSection />
      <Footer />
    </div>
  );
}

export default LandingPage;