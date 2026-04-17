import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/iconic-investors-logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#licensee-services" },
  { label: "Specialist", href: "#specialist-services" },
  { label: "Contact", href: "#contact" },
];

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/Js4zFsRjwKf4X1Zk0Wnw";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="#home">
          <img src={logo} alt="Iconic Partners" className="h-14 md:h-16" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground text-sm font-bold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Talk to Us →
          </a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-card px-6 py-4 space-y-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-base font-semibold text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-primary text-primary-foreground text-center font-bold px-5 py-2.5 rounded-lg"
          >
            Talk to Us →
          </a>
        </div>
      )}
    </nav>
  );
}
