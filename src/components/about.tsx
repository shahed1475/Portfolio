"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function AnimatedNumber({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayValue(end);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{displayValue}+</span>;
}

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {/* Main Thesis */}
                <div className="md:col-span-2 bento-card p-8 md:p-12 flex flex-col justify-center bg-card border border-border rounded-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">The Thesis</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        I don't just build software; I architect intelligent systems that act as a force multiplier for human intent. As the founder of <span className="text-foreground font-semibold">PopupGenix</span>, my mission is to bridge the gap between experimental AI research and production-grade SaaS solutions.
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        The future isn't just "AI-powered"—it's autonomous. I specialize in building the infrastructure that makes that autonomy safe, scalable, and profitable.
                    </p>
                </div>
                
                {/* Profile Image / Brand */}
                <div className="bento-card relative overflow-hidden group min-h-[400px] rounded-3xl border border-border">
                    <Image 
                        src="https://i.ibb.co/93YsdTZX/Whats-App-Image-2024-11-11-at-16-35-22-cec99114.jpg" 
                        alt="Fahad" 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                        <span className="text-white font-bold text-xl tracking-tight">Fahad</span>
                        <span className="text-gray-400 text-sm font-medium uppercase tracking-widest">Founder @ PopupGenix</span>
                    </div>
                </div>

                {/* Stats / Achievement */}
                <div className="bento-card p-8 md:p-10 flex flex-col justify-between bg-card border border-border rounded-3xl">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-black text-foreground"
                    >
                        <AnimatedNumber value={4} />
                    </motion.div>
                    <div className="text-[11px] text-muted-foreground uppercase tracking-[0.2em] font-bold">AI SaaS Products Launched</div>
                </div>

                {/* Expertise Tags */}
                <div className="bento-card p-8 md:p-10 md:col-span-2 bg-card border border-border rounded-3xl">
                    <h3 className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-8">Core Competencies</h3>
                    <div className="flex flex-wrap gap-2.5">
                        {["Agentic AI", "RAG Architectures", "LLM Fine-tuning", "SaaS Scalability", "API Design", "Vector Databases", "Cyber Security"].map((tag) => (
                          <span key={tag} className="px-5 py-2.5 rounded-full bg-secondary border border-border text-xs font-bold text-foreground transition-colors hover:bg-muted/10 cursor-default">
                            {tag}
                          </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
