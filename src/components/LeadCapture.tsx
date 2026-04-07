import { useState } from "react";
import { Send } from "lucide-react";

const LeadCapture = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-navy-gradient py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-fade-in">
            <p className="text-glow-blue font-semibold text-sm tracking-widest uppercase mb-4">
              Start Your Project
            </p>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Build Your Dream
              <br />
              <span className="text-glow-blue">With Confidence</span>
            </h1>
            <p className="text-primary-foreground/60 text-lg leading-relaxed max-w-lg mb-8">
              Premium construction services trusted by 500+ families. From concept to keys —
              on time, on budget, no surprises.
            </p>
            <div className="flex items-center gap-8 text-primary-foreground/50 text-sm">
              <span>✓ Free consultation</span>
              <span>✓ Response within 24hrs</span>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 lg:p-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-glow-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-7 h-7 text-glow-blue" />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">Request Received!</h3>
                <p className="text-primary-foreground/60">Our team will call you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-1">Get a Free Estimate</h3>
                <p className="text-primary-foreground/50 text-sm mb-6">No commitment · Response within 24 hours</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name *"
                      required
                      className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/30 text-sm focus:outline-none focus:border-glow-blue transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Phone *"
                      required
                      className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/30 text-sm focus:outline-none focus:border-glow-blue transition-colors"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address *"
                    required
                    className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/30 text-sm focus:outline-none focus:border-glow-blue transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Project Location"
                    className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/30 text-sm focus:outline-none focus:border-glow-blue transition-colors"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Plot Area (sq.ft)"
                      className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/30 text-sm focus:outline-none focus:border-glow-blue transition-colors"
                    />
                    <select className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground/30 text-sm focus:outline-none focus:border-glow-blue transition-colors">
                      <option value="">Budget Range</option>
                      <option value="50-100k">$50K - $100K</option>
                      <option value="100-250k">$100K - $250K</option>
                      <option value="250-500k">$250K - $500K</option>
                      <option value="500k+">$500K+</option>
                    </select>
                  </div>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={3}
                    className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/30 text-sm focus:outline-none focus:border-glow-blue transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-glow-blue text-primary-foreground py-4 rounded-lg font-semibold text-sm glow-btn flex items-center justify-center gap-2"
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
