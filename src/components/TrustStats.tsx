import { Building2, CheckCircle2, Users, Award } from "lucide-react";

const stats = [
  { icon: Building2, value: "500+", label: "Projects Completed" },
  { icon: CheckCircle2, value: "350+", label: "Quality Checks" },
  { icon: Users, value: "2,50,000", label: "Sq.ft Delivered" },
  { icon: Award, value: "15+", label: "Years Warranty" },
];

const TrustStats = () => (
  <section className="bg-surface-light py-20">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="text-center animate-fade-in"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="w-14 h-14 bg-navy/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <stat.icon className="w-7 h-7 text-navy" />
            </div>
            <p className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-1">
              {stat.value}
            </p>
            <p className="text-body text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustStats;
