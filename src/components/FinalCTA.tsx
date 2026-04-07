import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCTA = () => (
  <section className="bg-navy-gradient py-24 lg:py-32">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <h2 className="font-display text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
        Ready to Build Your
        <br />
        <span className="text-glow-blue">Dream Home?</span>
      </h2>
      <p className="text-primary-foreground/60 max-w-xl mx-auto mb-10 text-lg">
        Get a free, no-obligation estimate today. Our team will craft a custom plan tailored to your vision and budget.
      </p>
      <Link
        to="/contact"
        className="bg-glow-blue text-primary-foreground px-10 py-4 rounded-xl font-semibold text-base glow-btn inline-flex items-center gap-3"
      >
        Get Your Free Estimate
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  </section>
);

export default FinalCTA;
