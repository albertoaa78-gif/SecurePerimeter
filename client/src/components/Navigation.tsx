import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/services", label: "Experiencia" },
    { href: "/technology", label: "Tecnología" },
    { href: "/contact", label: "Contacto" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-700 ease-[0.16, 1, 0.3, 1]",
        scrolled
          ? "bg-black/90 backdrop-blur-xl py-4 border-b border-white/5"
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-10 flex justify-between items-center">
        <Link href="/" className="group flex items-center gap-4 cursor-pointer">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 border border-primary/40 rotate-45 group-hover:rotate-90 transition-transform duration-700" />
            <Shield className="w-4 h-4 text-primary" />
          </div>
          <span className="font-display text-lg font-light tracking-[0.3em] uppercase text-white">
            Analytica <span className="font-bold text-primary">S.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-16">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[10px] tracking-[0.4em] uppercase transition-all duration-300 hover:text-primary relative group",
                location === link.href ? "text-primary" : "text-white/60"
              )}
            >
              {link.label}
              <span className={cn(
                "absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-1",
                location === link.href ? "w-1" : "w-0"
              )} />
            </Link>
          ))}
          <Link href="/contact">
            <button className="px-8 py-2.5 border border-white/10 text-white text-[9px] tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all duration-500 font-bold">
              Contacto Directo
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-current mb-1.5" />
          <div className="w-6 h-0.5 bg-current mb-1.5" />
          <div className="w-6 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-display text-center text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
