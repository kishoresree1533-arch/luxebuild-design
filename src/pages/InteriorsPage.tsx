import Layout from "@/components/Layout";
import { Check, ArrowRight, PaintBucket, Sofa, UtensilsCrossed, DoorOpen } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { icon: Sofa, title: "Living Room", desc: "Modern living spaces designed for comfort and elegance" },
  { icon: UtensilsCrossed, title: "Modular Kitchen", desc: "Functional kitchens with premium finish and storage" },
  { icon: DoorOpen, title: "Bedroom", desc: "Relaxing bedrooms with custom wardrobes and lighting" },
  { icon: PaintBucket, title: "Full Home", desc: "Complete home interiors from floors to ceilings" },
];

const packages = [
  {
    name: "Essential",
    price: "₹4.5 Lakh",
    desc: "For a 2BHK apartment",
    features: ["Modular Kitchen", "Wardrobes (2)", "TV Unit", "Basic Lighting", "Standard Materials"],
  },
  {
    name: "Premium",
    price: "₹8.5 Lakh",
    desc: "For a 3BHK apartment",
    popular: true,
    features: ["Modular Kitchen", "Wardrobes (3)", "TV Unit + Crockery", "Designer Lighting", "Premium Materials", "False Ceiling", "Wallpaper Accents"],
  },
  {
    name: "Luxury",
    price: "₹15 Lakh",
    desc: "Complete luxury package",
    features: ["Italian Modular Kitchen", "Walk-in Wardrobes", "Complete Furnishing", "Smart Lighting", "Imported Materials", "Designer Ceilings", "Automation Ready"],
  },
];

const InteriorsPage = () => (
  <Layout>
    <section className="bg-navy py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <p className="text-glow-blue font-semibold text-sm tracking-widest uppercase mb-3">Interior Design</p>
        <h1 className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
          Luxury Interiors, Crafted for You
        </h1>
        <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg">
          Transform your space with world-class interior design and modular solutions.
        </p>
      </div>
    </section>

    {/* Categories */}
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((c, i) => (
            <div key={i} className="bg-card rounded-2xl p-8 border border-border hover-lift group cursor-pointer text-center">
              <div className="w-14 h-14 bg-surface-light rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-navy transition-colors duration-300">
                <c.icon className="w-7 h-7 text-navy group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{c.title}</h3>
              <p className="text-body text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Gallery placeholder */}
    <section className="bg-surface-light py-20">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <p className="text-glow-blue font-semibold text-sm tracking-widest uppercase mb-3">Gallery</p>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">Before & After Transformations</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3] bg-border/50 flex items-center justify-center">
              <PaintBucket className="w-12 h-12 text-navy/15" />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Packages */}
    <section className="bg-background py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-glow-blue font-semibold text-sm tracking-widest uppercase mb-3">Packages</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">Interior Design Packages</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-center">
          {packages.map((plan, i) => (
            <div key={i} className={`rounded-2xl p-8 relative transition-all duration-300 ${
              plan.popular ? "bg-navy text-primary-foreground scale-[1.05] shadow-2xl z-10" : "bg-card border border-border hover-lift"
            }`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-glow-blue text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full">Most Popular</span>
                </div>
              )}
              <h3 className={`font-display text-xl font-bold mb-1 ${plan.popular ? "" : "text-foreground"}`}>{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.popular ? "text-primary-foreground/60" : "text-body"}`}>{plan.desc}</p>
              <p className={`font-display text-3xl font-bold mb-8 ${plan.popular ? "" : "text-foreground"}`}>{plan.price}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? "text-glow-blue" : "text-navy"}`} />
                    <span className={plan.popular ? "text-primary-foreground/80" : "text-body"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className={`block w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                plan.popular ? "bg-glow-blue text-primary-foreground glow-btn" : "bg-navy text-primary-foreground hover:bg-navy-light"
              }`}>Get Quote</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default InteriorsPage;
