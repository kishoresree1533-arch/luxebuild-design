import { Building2, CheckCircle2, Users, Award } from "lucide-react";

const stats = [
  { icon: Building2, value: "500+", label: "Projects Completed" },
  { icon: CheckCircle2, value: "350+", label: "Quality Checks Per Project" },
  { icon: Users, value: "2,50,000", label: "Sq.ft Delivered" },
  { icon: Award, value: "15+", label: "Years Warranty" },
];

const TrustStats = () => (
  <section className="bg-foreground py-20">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="text-center animate-fade-in"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <stat.icon className="w-8 h-8 text-glow-blue mx-auto mb-4" />
            <p className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground stat-glow mb-2">
              {stat.value}
            </p>
            <p className="text-primary-foreground/50 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustStats;
