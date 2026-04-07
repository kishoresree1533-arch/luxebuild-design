import { Shield, Clock, BadgeDollarSign, Hammer, HeadphonesIcon, Eye } from "lucide-react";

const features = [
  { icon: Shield, title: "15+ Years Warranty", desc: "Industry-leading structural warranty on every project." },
  { icon: Clock, title: "On-Time Delivery", desc: "Dedicated engineers ensure your project stays on schedule." },
  { icon: BadgeDollarSign, title: "No Hidden Costs", desc: "Transparent pricing with fixed-cost packages." },
  { icon: Hammer, title: "Premium Materials", desc: "Only top-grade, certified materials in every build." },
  { icon: HeadphonesIcon, title: "Dedicated Support", desc: "Personal project manager available 7 days a week." },
  { icon: Eye, title: "Full Transparency", desc: "Real-time tracking with daily photo & video updates." },
];

const WhyChooseUs = () => (
  <section id="services" className="bg-background py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <p className="text-glow-blue font-semibold text-sm tracking-widest uppercase mb-3">Why Choose Us</p>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Building Excellence, Delivering Trust
        </h2>
        <p className="text-body max-w-2xl mx-auto">
          We combine decades of expertise with modern construction practices to deliver homes that exceed expectations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-card rounded-2xl p-8 border border-border hover-lift group cursor-pointer"
          >
            <div className="w-14 h-14 bg-surface-light rounded-2xl flex items-center justify-center mb-6 group-hover:bg-navy transition-colors duration-300">
              <f.icon className="w-7 h-7 text-navy group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{f.title}</h3>
            <p className="text-body text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
