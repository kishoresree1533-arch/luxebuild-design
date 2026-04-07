import { Link } from "react-router-dom";
import { Building2, PaintBucket, Home, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Construction",
    desc: "End-to-end house construction with premium materials and transparent pricing.",
    link: "/construction",
  },
  {
    icon: PaintBucket,
    title: "Interiors",
    desc: "Luxury interior design with modular kitchens, wardrobes, and living spaces.",
    link: "/interiors",
  },
  {
    icon: Home,
    title: "Estate",
    desc: "Premium ready-to-move properties and real estate investment opportunities.",
    link: "/estate",
  },
];

const ServicesHighlight = () => (
  <section className="bg-background py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <p className="text-glow-blue font-semibold text-sm tracking-widest uppercase mb-3">Our Services</p>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Complete Construction Solutions
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <Link
            key={i}
            to={s.link}
            className="group bg-card rounded-2xl p-8 border border-border hover-lift text-left"
          >
            <div className="w-14 h-14 bg-surface-light rounded-2xl flex items-center justify-center mb-6 group-hover:bg-navy transition-colors duration-300">
              <s.icon className="w-7 h-7 text-navy group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">{s.title}</h3>
            <p className="text-body text-sm leading-relaxed mb-6">{s.desc}</p>
            <span className="inline-flex items-center gap-2 text-navy font-semibold text-sm group-hover:gap-3 transition-all">
              Learn More <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesHighlight;
