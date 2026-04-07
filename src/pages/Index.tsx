import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import TrustStats from "@/components/TrustStats";
import AboutPreview from "@/components/AboutPreview";
import Testimonials from "@/components/Testimonials";
import ProjectsGallery from "@/components/ProjectsGallery";
import CostCalculator from "@/components/CostCalculator";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import LiveTracking from "@/components/LiveTracking";
import ServicesHighlight from "@/components/ServicesHighlight";
import FinalCTA from "@/components/FinalCTA";

const Index = () => (
  <Layout>
    <HeroSection />
    <TrustStats />
    <AboutPreview />
    <Testimonials />
    <ProjectsGallery />
    <CostCalculator />
    <WhyChooseUs />
    <Process />
    <LiveTracking />
    <ServicesHighlight />
    <FinalCTA />
  </Layout>
);

export default Index;
