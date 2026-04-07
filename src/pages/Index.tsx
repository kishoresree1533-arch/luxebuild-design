import Navbar from "@/components/Navbar";
import LeadCapture from "@/components/LeadCapture";
import TrustStats from "@/components/TrustStats";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import ProjectsGallery from "@/components/ProjectsGallery";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-[72px]">
      <LeadCapture />
      <TrustStats />
      <WhyChooseUs />
      <Pricing />
      <Process />
      <ProjectsGallery />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  </div>
);

export default Index;
