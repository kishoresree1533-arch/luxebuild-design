import { Star } from "lucide-react";

const reviews = [
  {
    name: "David & Sarah Mitchell",
    role: "Homeowners, Palm Villa",
    text: "EliteBuild delivered our dream home on time and within budget. The attention to detail was extraordinary — every corner of our home reflects the quality we were promised.",
  },
  {
    name: "Michael Chen",
    role: "Property Developer",
    text: "Working with EliteBuild on our commercial project was seamless. Their project management, transparency, and craftsmanship are unmatched in the industry.",
  },
  {
    name: "Priya Sharma",
    role: "Homeowner, Heritage Townhomes",
    text: "From the first consultation to the final handover, we felt supported every step of the way. The daily updates gave us complete peace of mind throughout the build.",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="bg-surface-light py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <p className="text-glow-blue font-semibold text-sm tracking-widest uppercase mb-3">Testimonials</p>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Trusted by 500+ Families
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reviews.map((r, i) => (
          <div key={i} className="bg-card rounded-xl p-8 card-shadow hover-lift">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-glow-blue text-glow-blue" />
              ))}
            </div>
            <p className="text-body text-sm leading-relaxed mb-6">"{r.text}"</p>
            <div>
              <p className="font-semibold text-foreground text-sm">{r.name}</p>
              <p className="text-body text-xs">{r.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
