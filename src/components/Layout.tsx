import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-[72px]">{children}</div>
    <Footer />
  </div>
);

export default Layout;
