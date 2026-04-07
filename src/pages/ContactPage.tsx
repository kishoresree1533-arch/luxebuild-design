import Layout from "@/components/Layout";
import { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <section className="bg-navy py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-glow-blue font-semibold text-sm tracking-widest uppercase mb-3">Contact</p>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">Get In Touch</h1>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg">
            Have a project in mind? Let's discuss how we can bring your vision to life.
          </p>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Form */}
            <div className="bg-card rounded-2xl p-8 lg:p-10 card-shadow border border-border">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-glow-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-glow-blue" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-body">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-1">Send Us a Message</h3>
                  <p className="text-body text-sm mb-8">Fill in the form and we'll respond promptly.</p>
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <input type="text" placeholder="Full Name *" required className="w-full bg-surface-light border border-border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all" />
                      <input type="tel" placeholder="Phone *" required className="w-full bg-surface-light border border-border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all" />
                    </div>
                    <input type="email" placeholder="Email Address" className="w-full bg-surface-light border border-border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all" />
                    <input type="text" placeholder="City / Location" className="w-full bg-surface-light border border-border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all" />
                    <select className="w-full bg-surface-light border border-border rounded-xl px-5 py-3.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all">
                      <option value="">Select Service</option>
                      <option>House Construction</option>
                      <option>Interior Design</option>
                      <option>Real Estate</option>
                      <option>Renovation</option>
                      <option>Other</option>
                    </select>
                    <textarea placeholder="Tell us about your project..." rows={4} className="w-full bg-surface-light border border-border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all resize-none" />
                    <button type="submit" className="w-full bg-navy text-primary-foreground py-4 rounded-xl font-semibold text-sm hover:bg-navy-light transition-colors duration-300 flex items-center justify-center gap-2">
                      Send Message <Send className="w-4 h-4" />
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {[
                    { icon: Phone, title: "Phone", value: "+1 (234) 567-890", sub: "Mon–Sat, 9AM–7PM" },
                    { icon: Mail, title: "Email", value: "info@porkoconstruction.com", sub: "We reply within 24 hours" },
                    { icon: MapPin, title: "Office", value: "123 Construction Ave, Suite 100", sub: "Bangalore, India" },
                    { icon: Clock, title: "Working Hours", value: "Mon – Sat: 9:00 AM – 7:00 PM", sub: "Sunday: By Appointment" },
                  ].map((c, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-surface-light rounded-xl flex items-center justify-center flex-shrink-0">
                        <c.icon className="w-5 h-5 text-navy" />
                      </div>
                      <div>
                        <p className="text-foreground font-semibold text-sm">{c.title}</p>
                        <p className="text-foreground text-sm">{c.value}</p>
                        <p className="text-body text-xs">{c.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-surface-light rounded-2xl aspect-[4/3] flex items-center justify-center">
                <MapPin className="w-12 h-12 text-navy/20" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
