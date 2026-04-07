import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Building } from "lucide-react";

const AboutPreview = () => (
  <section className="bg-background py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left – image placeholder */}
        <div className="relative">
          <div className="bg-surface-light rounded-2xl aspect-[4/3] overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-navy/10 to-navy/5 flex items-center justify-center">
              <Building className="w-24 h-24 text-navy/20" />
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-navy text-primary-foreground rounded-2xl p-6 card-shadow">
            <p className="font-display text-3xl font-bold">15+</p>
            <p className="text-primary-foreground/70 text-sm">Years of Excellence</p>
          </div>
        </div>

        {/* Right – content */}
        <div>
          <p className="text-glow-blue font-semibold text-sm tracking-widest uppercase mb-3">About Us</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Building Dreams Into Reality Since 2009
          </h2>
          <p className="text-body leading-relaxed mb-6">
            Porko Construction & Estate is one of India's most trusted construction companies, having delivered 500+ premium
            residential and commercial projects across the country.
          </p>
          <p className="text-body leading-relaxed mb-8">
            We combine world-class materials, innovative engineering, and transparent processes to create homes that
            stand the test of time.
          </p>

          <div className="flex gap-8 mb-8">
            {[
              { icon: Award, label: "Award Winning" },
              { icon: Users, label: "500+ Happy Clients" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-surface-light rounded-xl flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-navy" />
                </div>
                <span className="text-foreground font-medium text-sm">{item.label}</span>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-navy font-semibold text-sm hover:gap-3 transition-all"
          >
            Learn More About Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default AboutPreview;
