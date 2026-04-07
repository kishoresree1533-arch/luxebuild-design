import { useState } from "react";
import { Send, Building2, ShieldCheck, Clock, ArrowRight, Ruler } from "lucide-react";

const HeroSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div className="animate-fade-in">
            <p className="text-glow-blue font-semibold text-sm tracking-widest uppercase mb-4">
              India's Trusted Construction Partner
            </p>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-foreground leading-[1.12] mb-6">
              Best House Construction
              <br />
              <span className="text-navy">Company</span>
            </h1>
            <p className="text-body text-lg leading-relaxed max-w-lg mb-4">
              Build your dream home with India's most trusted construction company.
              Premium quality, transparent pricing, and on-time delivery guaranteed.
            </p>

            {/* Price highlight */}
            <div className="inline-flex items-center gap-3 bg-surface-light rounded-2xl px-6 py-3 mb-8">
              <Ruler className="w-5 h-5 text-navy" />
              <span className="text-foreground font-bold text-lg">Starting at ₹1,899/sq.ft</span>
              <span className="text-body text-sm">all inclusive</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="/contact"
                className="bg-navy text-primary-foreground px-8 py-4 rounded-xl text-sm font-semibold glow-btn inline-flex items-center gap-2"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/projects"
                className="border-2 border-navy text-navy px-8 py-4 rounded-xl text-sm font-semibold hover:bg-navy hover:text-primary-foreground transition-all duration-300"
              >
                View Projects
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-8">
              {[
                { icon: Building2, val: "500+", label: "Projects Completed" },
                { icon: ShieldCheck, val: "15 Years", label: "Warranty Included" },
                { icon: Clock, val: "On-Time", label: "Guaranteed Delivery" },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-surface-light rounded-xl flex items-center justify-center">
                    <b.icon className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{b.val}</p>
                    <p className="text-body text-xs">{b.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Form */}
          <div
            className="bg-card rounded-2xl p-8 lg:p-10 card-shadow border border-border animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-glow-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-7 h-7 text-glow-blue" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">Request Received!</h3>
                <p className="text-body">Our team will call you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl font-bold text-foreground mb-1">Get a Free Estimate</h3>
                <p className="text-body text-sm mb-8">No commitment · Response within 24 hours</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="text" placeholder="Full Name *" required className="w-full bg-surface-light border border-border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all" />
                  <input type="tel" placeholder="Phone Number *" required className="w-full bg-surface-light border border-border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all" />
                  <input type="text" placeholder="City / Location" className="w-full bg-surface-light border border-border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all" />
                  <select className="w-full bg-surface-light border border-border rounded-xl px-5 py-3.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all">
                    <option value="">Select Requirement</option>
                    <option>House Construction</option>
                    <option>Interior Design</option>
                    <option>Renovation</option>
                    <option>Commercial Project</option>
                    <option>Estate / Property</option>
                  </select>
                  <button type="submit" className="w-full bg-navy text-primary-foreground py-4 rounded-xl font-semibold text-sm hover:bg-navy-light transition-colors duration-300 flex items-center justify-center gap-2">
                    Request Free Estimate
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
