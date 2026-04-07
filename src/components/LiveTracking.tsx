import { Smartphone, Camera, BarChart3, Bell } from "lucide-react";

const features = [
  { icon: Camera, title: "Daily Photo Updates", desc: "See your home being built every single day" },
  { icon: BarChart3, title: "Progress Dashboard", desc: "Track milestones and completion percentage" },
  { icon: Bell, title: "Instant Notifications", desc: "Get alerts on every important update" },
];

const LiveTracking = () => (
  <section className="bg-surface-light py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-glow-blue font-semibold text-sm tracking-widest uppercase mb-3">Live Tracking</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Track Your Home Construction in Real-Time
          </h2>
          <p className="text-body leading-relaxed mb-8">
            Our proprietary app gives you 24/7 access to your construction progress with daily photo updates,
            milestone tracking, and direct communication with your project manager.
          </p>

          <div className="space-y-6">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <f.icon className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{f.title}</h3>
                  <p className="text-body text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phone mockup */}
        <div className="flex justify-center">
          <div className="bg-card rounded-[2rem] p-4 card-shadow border border-border w-72">
            <div className="bg-surface-light rounded-2xl aspect-[9/16] flex items-center justify-center">
              <Smartphone className="w-16 h-16 text-navy/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LiveTracking;
