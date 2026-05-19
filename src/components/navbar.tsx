'use client'

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "about", label: "About" },
    { id: "projects", label: "Case Studies" },
    { id: "services", label: "AI Lab" },
    { id: "booking", label: "Booking" },
  ];

  return (
    <>
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled ? "py-4 bg-background/80 backdrop-blur-xl border-b border-border" : "py-8 bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2 group">
              <div className="w-9 h-9 bg-foreground text-background flex items-center justify-center rounded-xl font-black text-xs transition-transform group-hover:rotate-6">F</div>
              <span className="tracking-tighter uppercase font-black text-sm">Fahad</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={`#${link.id}`}
                  className={cn(
                    "text-[11px] font-bold tracking-[0.2em] transition-all duration-300 uppercase relative py-1",
                    activeSection === link.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div layoutId="nav-active" className="absolute -bottom-1 left-0 right-0 h-px bg-primary" />
                  )}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4 md:space-x-8">
              <ThemeToggle />
              <Link
                href="#booking"
                className="hidden sm:inline-flex bg-foreground text-background px-8 py-3 rounded-full text-[11px] font-bold tracking-widest uppercase hover:opacity-90 transition-all duration-300 shadow-lg active:scale-95"
              >
                Consult
              </Link>
              <button 
                className="md:hidden text-foreground p-2 hover:bg-secondary rounded-full transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <AnimatePresence mode="wait">
                    {isMobileMenuOpen ? (
                        <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                            <X size={20} strokeWidth={2.5} />
                        </motion.div>
                    ) : (
                        <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                            <Menu size={20} strokeWidth={2.5} />
                        </motion.div>
                    )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-background md:hidden pt-32 px-8"
          >
            <div className="flex flex-col space-y-8">
              {navLinks.map((link, idx) => (
                <motion.div
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                >
                    <Link
                      href={`#${link.id}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "text-4xl font-bold tracking-tighter uppercase",
                        activeSection === link.id ? "text-primary" : "text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-8"
              >
                <Link
                    href="#booking"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full inline-flex items-center justify-center bg-foreground text-background py-5 rounded-2xl font-black tracking-widest uppercase shadow-2xl"
                >
                    Initiate Consultation
                </Link>
              </motion.div>
            </div>
            
            <div className="absolute bottom-12 left-8 right-8">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em] mb-4">Quick Connect</p>
                <div className="flex gap-6">
                    <a href="https://wa.me/8801838580258" className="text-sm font-bold text-foreground">WhatsApp</a>
                    <a href="mailto:fahad@popupgenix.com" className="text-sm font-bold text-foreground">Email</a>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
