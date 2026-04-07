const steps = [
  { num: "01", title: "Consultation", desc: "We discuss your vision, budget, and timeline in a free consultation." },
  { num: "02", title: "Design & Planning", desc: "Our architects create detailed plans and 3D visualizations for approval." },
  { num: "03", title: "Construction", desc: "Our team begins building with daily updates and quality inspections." },
  { num: "04", title: "Handover", desc: "Final walkthrough, quality checks, and keys handed over on schedule." },
];

const Process = () => (
  <section id="process" className="bg-background py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <p className="text-glow-blue font-semibold text-sm tracking-widest uppercase mb-3">Our Process</p>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
          From Vision to Reality in 4 Steps
        </h2>
        <p className="text-body max-w-2xl mx-auto">
          A streamlined process designed for transparency, efficiency, and your peace of mind.
        </p>
      </div>

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-navy/10 -translate-x-1/2 hidden md:block" />

        <div className="space-y-12">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex items-start gap-6 md:gap-12 animate-fade-in ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div className="bg-card rounded-xl p-6 card-shadow hover-lift inline-block w-full">
                  <span className="text-glow-blue font-bold text-sm">{step.num}</span>
                  <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-2">{step.title}</h3>
                  <p className="text-body text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>

              {/* Connector dot */}
              <div className="hidden md:flex items-center justify-center flex-shrink-0">
                <div className="w-4 h-4 bg-navy rounded-full ring-4 ring-background relative z-10" />
              </div>

              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Process;
