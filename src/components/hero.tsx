'use client'

import { SplineScene } from "@/components/ui/splite";
import Link from "next/link";
import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const technologies = [
    "OpenAI", "Anthropic", "LangChain", "Vercel", "Pinecone", "AWS", "Google Cloud", "NVIDIA"
  ];

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-24 lg:pt-0 relative overflow-hidden bg-background antialiased">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 flex-grow flex items-center py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8 lg:space-y-10 order-2 lg:order-1 relative z-20"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-secondary border border-border text-[10px] lg:text-[11px] font-bold uppercase tracking-widest text-muted-foreground mx-auto lg:mx-0">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-40"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Architecture & Implementation
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground leading-[1] md:leading-[0.95] lg:leading-[0.9]">
                Orchestrating <br />
                <span className="text-muted-foreground">Autonomous <br />Intelligence.</span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Bridging the gap between raw LLM research and production-grade SaaS. Specializing in Agentic Workflows and RAG Architectures.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-5 pt-4">
                <Link href="#booking" className="w-full sm:w-auto inline-flex items-center justify-center bg-foreground text-background px-8 lg:px-10 py-3.5 lg:py-4 rounded-full font-bold text-xs lg:text-sm tracking-wide uppercase hover:opacity-90 transition-all duration-300 shadow-xl gap-3 group">
                    <span>Initiate Strategy Call</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </Link>
                <Link href="#projects" className="w-full sm:w-auto inline-flex items-center justify-center bg-background border border-border text-foreground px-8 lg:px-10 py-3.5 lg:py-4 rounded-full font-bold text-xs lg:text-sm tracking-wide uppercase hover:bg-secondary transition-all duration-300">
                    Explore Lab
                </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="absolute lg:relative inset-0 lg:inset-auto h-full lg:h-[450px] w-full order-1 lg:order-2 z-10 lg:z-auto pointer-events-none lg:pointer-events-auto"
          >
            <div className="w-full h-full relative">
                {/* Mobile overlay for better visibility/contrast control */}
                <div className="absolute inset-0 bg-background/40 lg:hidden z-10 backdrop-blur-[1px]" />
                
                <SplineScene 
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className={cn(
                        "w-full h-full grayscale transition-all duration-1000",
                        mounted && theme === 'dark' ? "opacity-[0.22] lg:opacity-80 brightness-125 contrast-110" : "opacity-[0.15] lg:opacity-80 brightness-75 contrast-125",
                        "scale-[0.85] lg:scale-100 translate-y-12 lg:translate-y-0"
                    )}
                />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Badge Bar Marquee */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="relative z-10 py-8 lg:py-12 border-t border-border mt-auto"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-6 lg:mb-8">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em]">Trusted Technologies & Frameworks</p>
        </div>
        <Marquee baseVelocity={-1} className="opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {technologies.map((tech) => (
                <span key={tech} className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground px-4">
                    {tech}
                </span>
            ))}
        </Marquee>
      </motion.div>
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.03] z-0" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, var(--foreground) 1px, transparent 0)`, backgroundSize: '48px 48px' }} 
      />
    </section>
  );
}
