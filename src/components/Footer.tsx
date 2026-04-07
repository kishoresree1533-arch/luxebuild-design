import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-16">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        <div>
          <h3 className="font-display text-lg font-bold text-primary-foreground mb-4">
            Porko <span className="text-glow-blue">Construction</span> & Estate
          </h3>
          <p className="text-primary-foreground/40 text-sm leading-relaxed">
            Premium construction services delivering luxury homes and commercial projects with unmatched quality.
          </p>
        </div>

        <div>
          <h4 className="text-primary-foreground font-semibold text-sm mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "Estate", "Interiors", "Projects", "Pricing"].map((link) => (
              <li key={link}>
                <button
                  onClick={() => {
                    if (link === "Home") window.scrollTo({ top: 0, behavior: "smooth" });
                    else document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-primary-foreground/40 hover:text-primary-foreground text-sm transition-colors"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-primary-foreground font-semibold text-sm mb-4">Services</h4>
          <ul className="space-y-2 text-primary-foreground/40 text-sm">
            <li>Residential Construction</li>
            <li>Commercial Projects</li>
            <li>Interior Design</li>
            <li>Renovation & Remodeling</li>
            <li>Estate Development</li>
          </ul>
        </div>

        <div>
          <h4 className="text-primary-foreground font-semibold text-sm mb-4">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-primary-foreground/40 text-sm">
              <Phone className="w-4 h-4 text-glow-blue flex-shrink-0" />
              +1 (234) 567-890
            </li>
            <li className="flex items-center gap-3 text-primary-foreground/40 text-sm">
              <Mail className="w-4 h-4 text-glow-blue flex-shrink-0" />
              info@porkoconstruction.com
            </li>
            <li className="flex items-start gap-3 text-primary-foreground/40 text-sm">
              <MapPin className="w-4 h-4 text-glow-blue flex-shrink-0 mt-0.5" />
              123 Construction Ave, Suite 100
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 text-center">
        <p className="text-primary-foreground/30 text-xs">
          © {new Date().getFullYear()} Porko Construction & Estate. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
