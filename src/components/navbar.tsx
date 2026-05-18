'use client'

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "py-3 bg-background/80 backdrop-blur-md border-b border-border" : "py-6 bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
            <div className="w-8 h-8 bg-foreground text-background flex items-center justify-center rounded-md font-black text-xs">F</div>
            <span className="tracking-tighter uppercase font-black text-sm">Fahad</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-10">
            {["about", "projects", "services", "booking"].map((id) => (
              <Link
                key={id}
                href={`#${id}`}
                className={cn(
                  "text-[13px] font-medium tracking-wide transition-all duration-300 uppercase",
                  activeSection === id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {id === "projects" ? "Case Studies" : id === "services" ? "AI Lab" : id.replace("-", " ")}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            <ThemeToggle />
            <Link
              href="#booking"
              className="bg-foreground text-background px-6 py-2.5 rounded-full text-[13px] font-bold tracking-wide uppercase hover:opacity-90 transition-all duration-300 shadow-sm"
            >
              Consult
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
