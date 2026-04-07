import { Calculator, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CostCalculator = () => (
  <section className="bg-surface-light py-20">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="bg-navy rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <div className="flex-1">
          <div className="w-14 h-14 bg-glow-blue/20 rounded-2xl flex items-center justify-center mb-6">
            <Calculator className="w-7 h-7 text-glow-blue" />
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Calculate Your Construction Cost
          </h2>
          <p className="text-primary-foreground/60 text-lg leading-relaxed max-w-lg">
            Get an instant estimate for your dream home. Our transparent pricing starts at ₹1,899/sq.ft with no hidden costs.
          </p>
        </div>
        <div className="flex-shrink-0">
          <Link
            to="/construction"
            className="bg-glow-blue text-primary-foreground px-10 py-4 rounded-xl font-semibold text-base glow-btn inline-flex items-center gap-3"
          >
            View Packages & Pricing
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CostCalculator;
