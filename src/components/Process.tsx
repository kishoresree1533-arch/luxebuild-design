import { MessageSquare, PenTool, HardHat, Key } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Consultation", desc: "Discuss your vision, budget, and timeline." },
  { icon: PenTool, title: "Design & Plan", desc: "Custom plans and 3D visualizations." },
  { icon: HardHat, title: "Construction", desc: "Build with daily updates and inspections." },
  { icon: Key, title: "Handover", desc: "Final walkthrough and keys on schedule." },
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
          A streamlined process designed for transparency and your peace of mind.
        </p>
      </div>

      {/* Horizontal steps */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-border z-0" />

          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center px-4 group">
              {/* Icon circle */}
              <div className="w-20 h-20 bg-card border-2 border-navy rounded-full flex items-center justify-center mb-6 z-10 group-hover:bg-navy transition-colors duration-300">
                <step.icon className="w-8 h-8 text-navy group-hover:text-primary-foreground transition-colors duration-300" />
              </div>

              {/* Step number */}
              <span className="text-glow-blue font-bold text-xs tracking-widest mb-2">STEP 0{i + 1}</span>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-body text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Process;
