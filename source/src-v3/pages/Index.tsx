import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import TrustBar from "@/components/TrustBar";
import { MidCTA, FinalCTA } from "@/components/CTASection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SpecialistSection from "@/components/SpecialistSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PainPointsSection />
      <TrustBar />
      <MidCTA />
      <AboutSection />
      <ServicesSection />
      <SpecialistSection />
      <FinalCTA />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
