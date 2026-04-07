import Layout from "@/components/Layout";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const plans = [
  {
    name: "Essential",
    price: "₹1,899",
    unit: "/sq.ft",
    desc: "Quality construction with essential features",
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
    price: "₹2,499",
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
    price: "₹3,499",
    unit: "/sq.ft",
    desc: "Bespoke luxury with every detail perfected",
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

const faqs = [
  { q: "What is included in the per sq.ft price?", a: "Our price includes structure, MEP (mechanical, electrical, plumbing), basic interiors, flooring, painting, and all labour charges. Foundation to finishing, everything is covered." },
  { q: "What materials do you use?", a: "We use only ISI-certified, premium-grade materials from trusted brands like UltraTech, JSW Steel, Asian Paints, and Kohler fittings for our premium and luxury packages." },
  { q: "How long does construction take?", a: "Typical timelines range from 8-14 months depending on the package and project size. We guarantee on-time delivery with penalty clauses." },
  { q: "Do you provide a warranty?", a: "Yes, we provide 10-20 years of structural warranty depending on your package, along with 1-2 years of maintenance support." },
  { q: "Can I customize my floor plan?", a: "Absolutely. All our packages include custom architectural design. Our design team works with you to create your perfect layout." },
];

const ConstructionPage = () => (
  <Layout>
    <section className="bg-navy py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <p className="text-glow-blue font-semibold text-sm tracking-widest uppercase mb-3">Construction</p>
        <h1 className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
          House Construction Packages
        </h1>
        <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg">
          Transparent, fixed-price construction packages with zero hidden costs.
        </p>
      </div>
    </section>

    {/* Pricing */}
    <section className="bg-surface-light py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-center">
          {plans.map((plan, i) => (
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
              <div className="mb-8">
                <span className={`font-display text-4xl font-bold ${plan.popular ? "" : "text-foreground"}`}>{plan.price}</span>
                <span className={`text-sm ${plan.popular ? "text-primary-foreground/60" : "text-body"}`}>{plan.unit}</span>
              </div>
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
              }`}>Get Started</Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="bg-background py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-glow-blue font-semibold text-sm tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6">
              <AccordionTrigger className="text-foreground font-semibold text-sm hover:no-underline">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-body text-sm">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </Layout>
);

export default ConstructionPage;
