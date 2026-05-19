"use client"

import React from "react";
import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";

interface TechItem {
  name: string;
}

const technologies: TechItem[] = [
  { name: "OpenAI" },
  { name: "Anthropic" },
  { name: "LangChain" },
  { name: "Vercel" },
  { name: "Pinecone" },
  { name: "AWS" },
  { name: "TypeScript" },
  { name: "Next.js" },
  { name: "Python" },
  { name: "PostgreSQL" },
];

export function Stack() {
  return (
    <section id="stack" className="py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.4em] mb-6"
        >
          Technology Stack
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tighter"
        >
          High-performance <span className="text-muted-foreground">foundations.</span>
        </motion.h2>
      </div>

      <div className="relative py-12">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent z-10" />
        
        <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-background via-transparent to-background" />

        <div className="relative z-10 flex flex-col gap-8">
          <Marquee baseVelocity={-1.5}>
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="inline-flex items-center gap-4 px-10 py-5 rounded-2xl bg-secondary border border-border group transition-all duration-500"
              >
                <span className="text-foreground text-sm font-bold tracking-tight opacity-70 group-hover:opacity-100 transition-opacity">
                  {tech.name}
                </span>
              </div>
            ))}
          </Marquee>

          <Marquee baseVelocity={1.5}>
            {[...technologies].reverse().map((tech) => (
              <div
                key={`${tech.name}-rev`}
                className="inline-flex items-center gap-4 px-10 py-5 rounded-2xl bg-secondary border border-border group transition-all duration-500"
              >
                <span className="text-foreground text-sm font-bold tracking-tight opacity-70 group-hover:opacity-100 transition-opacity">
                  {tech.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
