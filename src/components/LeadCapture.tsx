import { useState } from "react";
import { Send, Building2, ShieldCheck, Clock, ArrowRight } from "lucide-react";

const LeadCapture = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Content */}
          <div className="animate-fade-in">
            <p className="text-glow-blue font-semibold text-sm tracking-widest uppercase mb-5">
              Premium Construction Services
            </p>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-[1.15] mb-6">
              Build Your Dream
              <br />
              Home <span className="text-navy">With Confidence</span>
            </h1>
            <p className="text-body text-lg leading-relaxed max-w-lg mb-10">
              Porko Construction & Estate delivers luxury homes trusted by 500+ families — on time, on budget, with zero surprises.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={() => scrollTo("contact")}
                className="bg-navy text-primary-foreground px-8 py-4 rounded-xl text-sm font-semibold glow-btn inline-flex items-center gap-2"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo("projects")}
                className="border-2 border-navy text-navy px-8 py-4 rounded-xl text-sm font-semibold hover:bg-navy hover:text-primary-foreground transition-all duration-300"
              >
                View Projects
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-surface-light rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">500+</p>
                  <p className="text-body text-xs">Projects Completed</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-surface-light rounded-lg flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">15 Years</p>
                  <p className="text-body text-xs">Warranty Included</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-surface-light rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">On-Time</p>
                  <p className="text-body text-xs">Guaranteed Delivery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
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
                  <input
                    type="text"
                    placeholder="Full Name *"
                    required
                    className="w-full bg-surface-light border border-border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    className="w-full bg-surface-light border border-border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full bg-surface-light border border-border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
                  />
                  <textarea
                    placeholder="Your Requirement..."
                    rows={3}
                    className="w-full bg-surface-light border border-border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-navy text-primary-foreground py-4 rounded-xl font-semibold text-sm hover:bg-navy-light transition-colors duration-300 flex items-center justify-center gap-2"
                  >
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

export default LeadCapture;
