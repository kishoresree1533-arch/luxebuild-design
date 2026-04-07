import Layout from "@/components/Layout";
import { Award, Users, Building, Target, Eye, Heart, Linkedin } from "lucide-react";

const team = [
  { name: "Rajesh Kumar", role: "Founder & CEO", initials: "RK" },
  { name: "Priya Sharma", role: "Head of Design", initials: "PS" },
  { name: "Arjun Patel", role: "Chief Engineer", initials: "AP" },
  { name: "Meera Singh", role: "VP of Operations", initials: "MS" },
];

const values = [
  { icon: Target, title: "Our Mission", desc: "To make premium home construction accessible, transparent, and stress-free for every Indian family." },
  { icon: Eye, title: "Our Vision", desc: "To be India's most trusted construction brand, setting new standards in quality, transparency, and customer experience." },
  { icon: Heart, title: "Our Values", desc: "Integrity, craftsmanship, innovation, and an unwavering commitment to customer satisfaction drive everything we do." },
];

const AboutPage = () => (
  <Layout>
    <section className="bg-navy py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <p className="text-glow-blue font-semibold text-sm tracking-widest uppercase mb-3">About Us</p>
        <h1 className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
          Our Story
        </h1>
        <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg">
          15+ years of building dreams, trust, and homes that stand the test of time.
        </p>
      </div>
    </section>

    {/* Story */}
    <section className="bg-background py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-surface-light rounded-2xl aspect-[4/3] flex items-center justify-center">
              <Building className="w-24 h-24 text-navy/15" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-navy text-primary-foreground rounded-2xl p-6 card-shadow">
              <p className="font-display text-3xl font-bold">500+</p>
              <p className="text-primary-foreground/70 text-sm">Happy Families</p>
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Building Excellence Since 2009
            </h2>
            <p className="text-body leading-relaxed mb-4">
              Founded in 2009, Porko Construction & Estate began with a simple belief: every family deserves a
              premium home built with honesty, quality, and care.
            </p>
            <p className="text-body leading-relaxed mb-4">
              Over the past 15 years, we've grown from a small team of passionate builders to one of India's
              most trusted construction companies, delivering 500+ projects across major cities.
            </p>
            <p className="text-body leading-relaxed">
              Today, we offer end-to-end solutions — from construction and interiors to real estate — all backed
              by our hallmark transparency, premium materials, and industry-leading warranties.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Mission / Vision / Values */}
    <section className="bg-surface-light py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <div key={i} className="bg-card rounded-2xl p-8 border border-border hover-lift text-center">
              <div className="w-14 h-14 bg-navy/5 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <v.icon className="w-7 h-7 text-navy" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{v.title}</h3>
              <p className="text-body text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-navy py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { val: "500+", label: "Projects Delivered" },
            { val: "15+", label: "Years Experience" },
            { val: "2.5M+", label: "Sq.ft Constructed" },
            { val: "98%", label: "Client Satisfaction" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-4xl font-bold text-primary-foreground mb-2">{s.val}</p>
              <p className="text-primary-foreground/50 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="bg-background py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-glow-blue font-semibold text-sm tracking-widest uppercase mb-3">Leadership</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">Meet Our Team</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {team.map((t, i) => (
            <div key={i} className="text-center group">
              <div className="w-28 h-28 bg-surface-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-navy transition-colors duration-300">
                <span className="font-display text-2xl font-bold text-navy group-hover:text-primary-foreground transition-colors duration-300">
                  {t.initials}
                </span>
              </div>
              <h3 className="font-semibold text-foreground">{t.name}</h3>
              <p className="text-body text-sm">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
