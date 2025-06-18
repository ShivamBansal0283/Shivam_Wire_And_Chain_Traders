
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ProductRange } from "@/components/ProductRange";
import { IndustriesServed } from "@/components/IndustriesServed";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { InquiryForm } from "@/components/InquiryForm";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProductRange />
      <IndustriesServed />
      <WhyChooseUs />
      <InquiryForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
