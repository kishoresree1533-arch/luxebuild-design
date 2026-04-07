import { Check } from "lucide-react";

const plans = [
  {
    name: "Essential",
    price: "$89",
    unit: "/sq.ft",
    desc: "Quality construction with essential features",
    popular: false,
    features: [
      "Standard structural design",
      "Quality-checked materials",
      "Basic interior finishes",
      "10-year structural warranty",
      "Project timeline: 8-10 months",
      "Weekly progress reports",
    ],
  },
  {
    name: "Premium",
    price: "$129",
    unit: "/sq.ft",
    desc: "Elevated finishes and premium materials",
    popular: true,
    features: [
      "Custom architectural design",
      "Premium-grade materials",
      "Designer interior finishes",
      "15-year structural warranty",
      "Project timeline: 10-12 months",
      "Daily photo & video updates",
      "Dedicated project manager",
      "Smart home pre-wiring",
    ],
  },
  {
    name: "Luxury",
    price: "$189",
    unit: "/sq.ft",
    desc: "Bespoke luxury with every detail perfected",
    popular: false,
    features: [
      "Bespoke architectural design",
      "Imported luxury materials",
      "Full interior design included",
      "20-year comprehensive warranty",
      "White-glove project management",
      "Real-time project dashboard",
      "Smart home integration",
      "Landscaping included",
    ],
  },
];

const Pricing = () => (
  <section id="pricing" className="bg-background py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <p className="text-glow-blue font-semibold text-sm tracking-widest uppercase mb-3">Pricing</p>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Transparent Construction Packages
        </h2>
        <p className="text-body max-w-2xl mx-auto">
          Fixed-price packages with no hidden costs. Choose the plan that matches your vision.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`rounded-2xl p-8 relative hover-lift ${
              plan.popular
                ? "bg-navy-gradient text-primary-foreground ring-2 ring-glow-blue"
                : "bg-card card-shadow border border-border"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-glow-blue text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <h3 className={`font-display text-xl font-bold mb-1 ${plan.popular ? "" : "text-foreground"}`}>
              {plan.name}
            </h3>
            <p className={`text-sm mb-6 ${plan.popular ? "text-primary-foreground/60" : "text-body"}`}>
              {plan.desc}
            </p>
            <div className="mb-8">
              <span className={`font-display text-4xl font-bold ${plan.popular ? "" : "text-foreground"}`}>
                {plan.price}
              </span>
              <span className={`text-sm ${plan.popular ? "text-primary-foreground/60" : "text-body"}`}>
                {plan.unit}
              </span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-start gap-3 text-sm">
                  <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? "text-glow-blue" : "text-glow-blue"}`} />
                  <span className={plan.popular ? "text-primary-foreground/80" : "text-body"}>{f}</span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                plan.popular
                  ? "bg-glow-blue text-primary-foreground glow-btn"
                  : "bg-navy text-primary-foreground hover:bg-navy-light"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
