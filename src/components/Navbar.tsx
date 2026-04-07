import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Estate", id: "services" },
  { label: "Interiors", id: "process" },
  { label: "Projects", id: "projects" },
  { label: "Pricing", id: "pricing" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <a href="#" className="font-display text-xl lg:text-2xl font-bold text-primary-foreground tracking-tight">
          Porko <span className="text-glow-blue">Construction</span> & Estate
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-primary-foreground/70 hover:text-primary-foreground text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+1234567890" className="flex items-center gap-2 text-primary-foreground/80 text-sm">
            <Phone className="w-4 h-4" />
            +1 (234) 567-890
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className="bg-glow-blue text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold glow-btn"
          >
            Get Free Quote
          </button>
        </div>

        <button className="lg:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-navy border-t border-primary-foreground/10 px-4 pb-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="block w-full text-left text-primary-foreground/70 hover:text-primary-foreground py-3 text-sm font-medium"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="mt-4 w-full bg-glow-blue text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold glow-btn"
          >
            Get Free Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
