import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Estate", path: "/estate" },
  { label: "Interiors", path: "/interiors" },
  { label: "Construction", path: "/construction" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <Link to="/" className="font-display text-xl lg:text-2xl font-bold text-primary-foreground tracking-tight">
          Porko <span className="text-glow-blue">Construction</span> & Estate
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                location.pathname === link.path
                  ? "text-primary-foreground"
                  : "text-primary-foreground/60 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+1234567890" className="flex items-center gap-2 text-primary-foreground/70 text-sm">
            <Phone className="w-4 h-4" />
            +1 (234) 567-890
          </a>
          <Link
            to="/contact"
            className="bg-glow-blue text-primary-foreground px-6 py-2.5 rounded-xl text-sm font-semibold glow-btn"
          >
            Get Free Quote
          </Link>
        </div>

        <button className="lg:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-navy border-t border-primary-foreground/10 px-4 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className="block w-full text-left text-primary-foreground/70 hover:text-primary-foreground py-3 text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 block w-full text-center bg-glow-blue text-primary-foreground px-6 py-3 rounded-xl text-sm font-semibold glow-btn"
          >
            Get Free Quote
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
