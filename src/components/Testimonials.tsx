import { Star, User } from "lucide-react";

const reviews = [
  {
    name: "David & Sarah Mitchell",
    role: "Homeowners, Palm Villa",
    text: "Porko Construction delivered our dream home on time and within budget. The attention to detail was extraordinary — every corner reflects the quality we were promised.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Property Developer",
    text: "Working with Porko on our commercial project was seamless. Their project management, transparency, and craftsmanship are unmatched in the industry.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Homeowner, Heritage Townhomes",
    text: "From the first consultation to the final handover, we felt supported every step of the way. The daily updates gave us complete peace of mind.",
    rating: 5,
  },
];

const Testimonials = () => (
  <section id="testimonials" className="bg-background py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <p className="text-glow-blue font-semibold text-sm tracking-widest uppercase mb-3">Testimonials</p>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Trusted by 500+ Families
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {reviews.map((r, i) => (
          <div key={i} className="bg-card rounded-2xl p-8 border border-border hover-lift">
            <div className="flex gap-1 mb-5">
              {[...Array(r.rating)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-glow-blue text-glow-blue" />
              ))}
            </div>
            <p className="text-body text-sm leading-relaxed mb-8">"{r.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-surface-light rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-navy" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{r.name}</p>
                <p className="text-body text-xs">{r.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
